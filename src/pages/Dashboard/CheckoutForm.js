import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [tnxId, setTnxId] = useState("");
    const [loading, setLoading] = useState(false);
    const { _id, branch, consultant, date, department, patient, phone, time, email } = appointment;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://lifecare-ootb.onrender.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: 10 }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            return;
        }
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: 'Arif',
                    },
                },
            },
        );

        const paymentInfo = {
            _id,
            branch,
            consultant,
            date,
            time,
            phone,
            department,
            patient,
            email,
            tnxId: paymentIntent?.id
        }

        if (intentError) {
            setSuccessMessage("");
            setTnxId("");
            setErrorMessage(intentError.message);
            return;
        }
        else {
            setLoading(true);
            fetch(`https://lifecare-ootb.onrender.com/appointment/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ status: "pending", tnxId: paymentIntent?.id })
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem("token");
                        return signOut(auth);
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.acknowledged && (data.modifiedCount || data.upsertedCount)) {
                        fetch("https://lifecare-ootb.onrender.com/payment", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem("token")}`
                            },
                            body: JSON.stringify(paymentInfo)
                        })
                            .then(res => {
                                if (res.status === 401 || res.status === 403) {
                                    localStorage.removeItem("token");
                                    return signOut(auth);
                                }
                                return res.json();
                            })
                            .then(data => {
                                if (data.acknowledged && data.insertedId) {
                                    setErrorMessage("");
                                    setSuccessMessage("Congrats! Your payment is done.");
                                    setTnxId(paymentIntent?.id);
                                }
                            })
                    }
                    setLoading(false);
                })
        }

    };
    if (loading) {
        return <p className='h-screen flex justify-center items-center'>Loading...</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className='border p-2 rounded'
            />
            <button type="submit" className='btn btn-xs btn-secondary my-2' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                successMessage && <p><small className='text-green-500'>{successMessage}</small></p>
            }
            {
                tnxId && <p><small className='text-green-500'>{tnxId}</small></p>
            }
            {
                tnxId && <Link className="btn btn-outline btn-primary btn-xs mt-3" to="/dashboard">Go to dashboard</Link>
            }
            {
                errorMessage && <p><small className='text-red-500'>{errorMessage}</small></p>
            }
        </form>
    );
};




export default CheckoutForm;