

import { Helmet } from "react-helmet-async";
import { useParams, useNavigate} from "react-router-dom";
import useEventState from "../../hooks/useEventState";
import * as eventService from "../../api/data";

const EditEvent = () => {
    const navigate = useNavigate()
    const { eventId } = useParams();
    const [event, setEvent] = useEventState(eventId)


    const editEventHandler = (e) => {
        e.preventDefault();

        // taking all fields
        let eventData = Object.fromEntries(new FormData(e.currentTarget));
    
        eventService.editEvent(eventId, eventData);
        navigate(`/details-event/${event._id}`)
    }

    
    return (
        <div className="container mt-8 p-5">
            <Helmet>
                <title>Edit Event</title>
            </Helmet>
            <div className="row d-flex justify-content-center m-6">
                <div className="col-6">
                    <div className="subhead">Edit your</div>
                    <h2 className="title-section">Event</h2>
                    <div className="divider"></div>

                    <form onSubmit={editEventHandler} method="POST">
                        <div className="py-2">
                            <input type="text" className="form-control" name="name" placeholder="Name" defaultValue={event.name} />
                        </div>
                        <div className="py-2">
                            <input type="number" className="form-control" name="members" placeholder="Members a side" defaultValue={event.members} />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="imageUrl" placeholder="Image Url" defaultValue={event.imageUrl} />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="address" placeholder="Address" defaultValue={event.address} />
                        </div>
                        <div className="py-2">
                            <textarea rows="6" className="form-control" name="description" placeholder="Description" defaultValue={event.description}></textarea>
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="date" placeholder="Date" defaultValue={event.date} />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="startTime" placeholder="Start" defaultValue={event.startTime} />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="endTime" placeholder="End" defaultValue={event.endTime} />
                        </div>

                        <button type="submit" className="btn btn-primary rounded-pill mt-4">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default EditEvent;