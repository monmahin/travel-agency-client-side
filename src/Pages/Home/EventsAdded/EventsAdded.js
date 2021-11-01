import React, { useEffect, useState } from 'react';

const EventsAdded = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://radiant-stream-41140.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
      // delete 
      const handleDelete = (id) =>{
        const confirm = window.confirm("are you sure ?");
    
        if (confirm === true) {
            const url = `https://radiant-stream-41140.herokuapp.com/events/${id}`
            fetch(url, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("deleted successfully")
                    const remaining = events.filter(service => service._id !== id);
                    setEvents(remaining);
                }
                
            })
        }
        
        }

    return (
        <div className="bg-light border border-top-1" style={{height:"100vh"}}>
            <div className="container">
            <section style={{marginTop:""}} className="row row-cols-1 row-cols-md-2 g-4 mt-md-5 mt-sm-3">
            {
                events.map(singleEvent => 
                    <div className="col d-flex justify-content-center align-items-center" >
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={singleEvent.img} style={{height:"100px"}} className="img-fluid rounded-start h-100" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{singleEvent.place}</h5>
                                    <p className="card-text">{singleEvent.description}.</p>
                                    <div className="d-flex justify-content-between">
                                            <p className="card-text"><small className="fw-bold">{singleEvent.date}</small></p>
                                            
                                    <button onClick={()=>handleDelete(singleEvent._id)} type="button" className="btn btn-info">Cancel</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
            </section>
            </div>
        </div>
    );
};

export default EventsAdded;
//onClick={()=>handleDelete(singleEvent._id)}