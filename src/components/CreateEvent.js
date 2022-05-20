import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import * as authService from "../api/data"

const CreateEvent = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const createEventHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let members = formData.get('members');
        let town = formData.get('town');
        let address = formData.get('address');
        let description = formData.get('description');
        let date = formData.get('date');
        let startTime = formData.get('start-time');
        let endTime = formData.get('end-time');

        const event = {
            name,
            members,
            town,
            address,
            description,
            date,
            startTime,
            endTime,
            creator: user
        }

        authService.create(event, user.accessToken)
            .then((result) => {
                console.log('then', result);
                navigate('/')
            })
            .catch(err => {
                navigate('/login')
                
            })
    }

    return (
        <div className="container mt-8 p-5">
            <Helmet>
                <title>Create Event</title>
            </Helmet>
            <div className="row d-flex justify-content-center m-6">
                <div className="col-6">
                    <div className="subhead">Create your</div>
                    <h2 className="title-section">Event</h2>
                    <div className="divider"></div>

                    <form onSubmit={createEventHandler} method="POST">
                        <div className="py-2">
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="py-2">
                            <input type="number" className="form-control" name="members" placeholder="Members" />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="town" placeholder="Town" />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="address" placeholder="Address" />
                        </div>
                        <div className="py-2">
                            <textarea rows="6" className="form-control" name="description" placeholder="Description"></textarea>
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="date" placeholder="Date" />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="start-time" placeholder="Start" />
                        </div>
                        <div className="py-2">
                            <input type="text" className="form-control" name="end-time" placeholder="End" />
                        </div>

                        <button type="submit" className="btn btn-primary rounded-pill mt-4">Create</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default CreateEvent;