const Login = () => {
    return (
        <div class="container mt-4 p-5">
            <div class="row d-flex justify-content-center m-6">
                <div className="col-4">
                    <div className="subhead">Please</div>
                    <h2 className="title-section">Login</h2>
                    <div className="divider"></div>

                    <form action="#">
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