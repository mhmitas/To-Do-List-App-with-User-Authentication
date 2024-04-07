import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../provider/UserProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const Login = () => {

    const { signInUser, googleSignIn, githubSignIn, setIsLoading } = useContext(UserContext)

    const [loginError, setLoginError] = useState(null)

    const location = useLocation()

    const navigate = useNavigate()

    function handleLogIn(e) {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // sign in on firebase:
        signInUser(email, password)
            .then(result => {
                console.log(result);
                navigate(location.state ? location.state : '/')
            }).catch(error => {
                console.error(error.message)
                setLoginError(error.message)
                setIsLoading(false)
            })
    }

    function handleGooleSignIn() {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate(location.state ? location.state : '/')
            }).catch(error => {
                console.error(error.message)
                setIsLoading(false)
            })
    }
    function handleGithubSignIn() {
        githubSignIn()
            .then(result => {
                console.log(result);
                navigate(location.state ? location.state : '/')
            }).catch(error => {
                console.error(error.message)
                setIsLoading(false)
            })
    }

    return (
        <div className='my-10'>
            <h3 className="text-3xl text-center font-bold">Please Login</h3>
            <div className='flex justify-center max-w-md p-10 mx-auto'>
                <div className='rounded-md bg-base-200 p-8  space-y-6 '>
                    {loginError && <ErrorMessage text2={loginError}></ErrorMessage>}
                    <form className='*:w-full space-y-6 ' onSubmit={handleLogIn} >
                        <input
                            type="text"
                            className='input input-primary'
                            required name="email"
                            placeholder='Email' />
                        <input
                            type="text"
                            className='input input-primary'
                            required name="password"
                            placeholder='Password' />
                        <br />
                        <input
                            type="submit"
                            className='btn btn-primary input-primary'
                            value="Log in" />
                    </form>
                    <p>Don't have an account! Please <Link to="/sign-up" className='text-[#7480ff]'><b>Sign up</b></Link></p>
                    <p className='text-center'>------------- or -------------</p>
                    <div className='flex text-3xl justify-center gap-6 '>
                        <button onClick={handleGooleSignIn} className='btn btn-ghost text-2xl' >
                            <FaGoogle />
                        </button>
                        <button onClick={handleGithubSignIn} className='btn btn-ghost text-2xl' >
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;