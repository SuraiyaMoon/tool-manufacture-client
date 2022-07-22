import { useEffect } from "react";
import { useState } from "react";

const usePartDetail = id => {
    const [part, setPart] = useState({})
    useEffect(() => {
        fetch(`https://gentle-taiga-09287.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [id])

    return [part, setPart];
}
export default usePartDetail;