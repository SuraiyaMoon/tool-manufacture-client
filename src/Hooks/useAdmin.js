import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://gentle-taiga-09287.herokuapp.com/admin/${email}`, {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })

        }

    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;