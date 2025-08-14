import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const userdata = {
    email: "admin@gmail.com",
    password: "admin123"
};

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate=useNavigate()

    const formSubmit = (e) => {
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            Swal.fire({
                title: "Please fill input",
                icon: "warning"
            });
        } else {
            if (emailRef.current.value === userdata.email && passRef.current.value === userdata.password) {
                Swal.fire({
                    title: "Login was Successful",
                    icon: "success"
                }).then(() => {
                    navigate('/dashboard');
                });
            } else {
                Swal.fire({
                    title: "Oops...",
                    text: "Incorrect email or password.",
                    icon: "error"
                })
                
            }
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>Login</h1>
            <div className="col-4">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
