import { useEffect, useState } from "react";

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://gentle-taiga-09287.herokuapp.com/order', {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])
    return [orders, setOrders]
}
export default useOrder;