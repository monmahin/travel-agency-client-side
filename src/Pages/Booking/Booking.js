import React, {  useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([]);
    const [singleService,setSingleService]=useState({})
    useEffect(() => {
        const url = 'https://radiant-stream-41140.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
        .then(data=>setService(data))
    },[])
    
    useEffect(() => {
        const info = service.find(serve => serve._id === serviceId)
        setSingleService(info)
    }, [service])
    
    return (
        <div className="mt-5">
            <div className="card mb-3 mx-auto container" >
            <h1 className="card-title">{singleService?.title}</h1>
  <div className="row g-0 align-items-center">
    <div className="col-md-6 h-100">
      <img src={singleService?.image} className="img-fluid" alt=""/>
    </div>
    <div className="col-md-6 ">
      <div className="card-body text-start h-100">
        
        <p className="card-text">{singleService?.serviceInfo}</p>
                <h2>Price :{singleService?.price} </h2>
           <br />                 
  
<HashLink to='/home#sevices'><button className="btn btn-primary">Go to Service</button></HashLink>                            
        
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Booking;