import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";





const Login = () => {

    const { logIn, signInWithGoogle } = useContext(AuthContext);
    const [show, setShow] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })

        console.log(email, password);
        if (password.length > 6) {
            setError('Password must be 6 characters')
            return
        }

    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div >


            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url('https://media.getmyuni.com/assets/images/articles/articles-3a190903ae20bbae6e622c29967ac061.webp')" }}>
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center mt-3 text-blue-00 font-bold"> Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" />



                                <p onClick={() => { setShow(!show) }}> <small>
                                    {
                                        show ? <span>Hide Password</span> : <span>Show Password</span>
                                    }
                                </small> </p>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className='text-center'>{error}</p>
                        <br />
                        <p className='text-center'>If You are a New User ? <Link to={'/register'} className='btn-link'>Register</Link> </p>
                        <hr />
                        <div className='m-3 px-3 py-1 text-center border border-base-300 rounded '>
                            <button onClick={handleGoogleLogin} className='flex gap-2 '><img className='h-9 w-9' src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" alt="" />
                                <h4 className='text-2xl'>With Google </h4>
                            </button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );

};

export default Login;