import { signOut } from "firebase/auth";
import { useState } from "react"
import auth from "../firebase.init";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const email = user?.user?.email;

    if (email) {
        fetch(`http://localhost:5000/admin/${email}`, {
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem("token");
                    return signOut(auth);
                }
                return res.json()
            })
            .then(data => {
                setAdmin(data)
            })
    }
    return admin;
}

export default useAdmin;