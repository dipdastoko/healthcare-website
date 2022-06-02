import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Home/Header/Header';


const ServiceDetails = () => {
    const { Id } = useParams();

    const { services } = useAuth();

    const service = services.find(service => service.id === parseInt(Id));

    const { name, img, description } = service || {};
    return (
        <div>
            <Header></Header>
            <h1>{name}</h1>
            <img src={img} alt="" />
            <p className='mx-5 mt-4'>{description}</p>
        </div>
    );
};

export default ServiceDetails;