import { useEffect } from "react";
import { useState } from "react";

const usePartDetail = id => {
    const [part, setPart] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])

    return [part];
}
export default usePartDetail;