import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../contexts/AuthContext";

import * as authService from '../api/data';

const Register = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repass');

        if (password !== repass){
            return alert('Passwords do not match!')
        }

        authService.register(email, password)
            .then((authData) => {
                login(authData); 
            
                navigate('/')
            })
            .catch(err => {
                //TODO notification
                console.log('react' , err.message);
            })


    }

    return (
        <div className="container mt-9 p-5">
            <Helmet>
                <title>Register Page</title>
            </Helmet>
            <div className="row d-flex justify-content-center m-6">
                <div className="col-4">
                    <div className="subhead">Please</div>
                    <h2 className="title-section">Register</h2>
                    <div className="divider"></div>

                    <form onSubmit={onRegisterHandler} method="POST">
                        <div className="py-2">
                            <input type="text" className="form-control" name="email" placeholder="Email" />
                        </div>
                        <div className="py-2">
                            <input type="password" className="form-control" name="password" placeholder="Password" />
                        </div>
                        <div className="py-2">
                            <input type="password" className="form-control" name="repass" placeholder="Repeat Password" />
                        </div>

                        <button type="submit" className="btn btn-primary rounded-pill mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Register;