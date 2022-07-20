import { useEffect, useState } from "react"

const useTools = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setParts(data))



    }, [])
    return [parts, setParts];
}
export default useTools;