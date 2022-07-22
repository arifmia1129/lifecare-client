import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState("");
    const email = user?.user?.email;

    if (email) {
        fetch(`http://localhost:5000/users?email=${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setToken(data.token);
                localStorage.setItem("token", data.token);
            })
    }
    return token;
}

export default useToken;