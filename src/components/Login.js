import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

import * as authService from '../services/auth';



const Login = () => {
    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate()

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate('/')
            })
            .catch(err => {
                //TODO notification
                console.log(err);
            })


    }

    return (
        <div className="container mt-4 p-5">
            <div className="row d-flex justify-content-center m-6">
                <div className="col-4">
                    <div className="subhead">Please</div>
                    <h2 className="title-section">Login</h2>
                    <div className="divider"></div>

                    <form onSubmit={onLoginHandler} method="POST">
                        <div className="py-2">
                            <input type="text" className="form-control" name="email" placeholder="Email" />
                        </div>
                        <div className="py-2">
                            <input type="password" className="form-control" name="password" placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-primary rounded-pill mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Login;