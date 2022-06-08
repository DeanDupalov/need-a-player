import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';

import useEventState from '../../hooks/useEventState';
import { AuthContext } from '../../contexts/AuthContext';
import * as api from '../../api/data';

const DetailsEvent = () => {
    const navigate = useNavigate()

    const { eventId } = useParams();
    const [event, setEvent] = useEventState(eventId);
    const { user } = useContext(AuthContext)
    // TODO: available slots to join event


    const deleteHandler = async (e) => {
        e.preventDefault();

        await api.deleteEventById(eventId);

        navigate('/');

    } 

    
    const creatorBtns = (
        <>
            <Link to="#" className="btn btn-outline-secondary ml-2">Edit</Link>
            <Link to="#" className="btn btn-outline-danger ml-2" onClick={deleteHandler}>Delete</Link>
        </>
    )

    const guestBtn = (
        <Link to="#" className="btn btn-primary">Join Event</Link>
    )

    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 py-3 wow fadeInLeft">
                        <h2 className="title-section">Name: <span className="marked">{event.name}</span> </h2>
                        <h4 className="title-section">Location: <span className="marked">{event.address}</span> </h4>
                        <div className="title-section">Date: <span className="marked">{event.date}</span> </div>
                        <div className="title-section">Start time: <span className="marked">{event.startTime}</span> </div>
                        <div className="title-section">End time: <span className="marked">{event.endTime}</span> </div>
                        <div className="divider"></div>
                        <div className="title-section">Available slots: <span className="marked">TODO</span> </div>
                        <p className="mb-5">Description: {event.description}</p>
                        
                        
                        {user._id && (user._id == event.creator
                            ? creatorBtns
                            :guestBtn
                        )}

                    </div>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place text-center">
                        <img src={event.imageUrl} alt="Football Team Photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsEvent;