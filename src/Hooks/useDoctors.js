import { useEffect, useState } from "react"

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/fakedoctors.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return doctors;
}
export default useDoctors;