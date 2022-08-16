import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState("");
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const userInfo = {
        name, email
    }

    if (email) {
        fetch(`https://lifecare-health.herokuapp.com/user`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
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