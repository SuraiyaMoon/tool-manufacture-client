import { useEffect, useState } from "react"

const useTools = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://gentle-taiga-09287.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setParts(data))



    }, [])
    return [parts, setParts];
}
export default useTools;