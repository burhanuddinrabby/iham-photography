import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Login/Loading/Loading';
import './ServiceInfo.css'
const ServiceInfo = ({ data }) => {
    const { id } = useParams();
    const [loading] = useAuthState(auth);
    loading && <Loading></Loading>;
    const service = data.find(service => service.id == id);

    return (
        <div className='text-center mt-5'>
            <h1 className='my-3'>Please <span className='text-primary'>buy here</span> your plan</h1>
            {service && <>

                <h1 className='my-3'>You're hiring me for <span className='text-primary'>{service.name}</span></h1>
                <div className='img-text-container mx-auto'>
                    <div className='img-container'><img src={service.image} alt="" /></div>
                    <div className='text-container'>
                        <h3>You have to pay ${service.price} per hour</h3>
                        <button className='btn btn-primary'>Proceed Checkout</button>
                    </div>

                </div>
            </>}
        </div>
    );
};

export default ServiceInfo;