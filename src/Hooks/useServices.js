import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakedata.JSON')
            .then(res => res.json())
            .then(data => { setServices(data); console.log(data) })
    }, [])
    return services;
}
export default useServices;