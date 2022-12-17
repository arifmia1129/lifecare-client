import { signOut } from "firebase/auth";
import { useState } from "react"
import auth from "../firebase.init";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const email = user?.email;
    if (email) {
        fetch(`https://lifecare-ootb.onrender.com/admin/${email}`, {
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
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
                setAdmin(data);
                setAdminLoading(false);
            })
    }
    return { admin, adminLoading };
}

export default useAdmin;