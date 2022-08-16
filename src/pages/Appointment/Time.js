import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { toast } from "react-toastify";


const Time = ({ setDateTime, setDateTimeStatus }) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const timeSlot10 = [
        "10.00",
        "10.10",
        "10.20",
        "10.30",
        "10.40",
        "10.50",
        "10.59"
    ]
    const onSubmit = () => {
        if (date && time) {
            const dateTime = {
                date,
                time
            }
            setDateTime(dateTime);
            setDateTimeStatus(true);
        }
        else {
            toast.error("Please Select Data & Time both!")
        }
    };
    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2  border-b'>
                <div>
                    <p>Please select date</p>
                    <DayPicker className='w-72'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
                <div>
                    <p>Please select time slot</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 md:px-10'>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-primary">Time</span>
                            </label>
                            <select onChange={e => setTime(e.target.value)} required defaultValue="" className="select select-bordered w-64">
                                <option disabled value="">Time</option>
                                {
                                    timeSlot10.map((time, index) => <option
                                        key={index}
                                        value={time}>{time}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={onSubmit} className='btn btn-primary px-5 my-5'>Next</button>
        </div>
    );
};

export default Time;