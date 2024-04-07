import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../provider/UserProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {

    const { signInUser, googleSignIn, githubSignIn } = useContext(UserContext)

    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()

    function handleLogIn(e) {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // sign in on firebase:
        signInUser(email, password)
            .then(result => {
                console.log(result);
                navigate("/")
            }).catch(error => console.error(error.message))
    }

    function handleGooleSignIn() {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate("/")
            }).catch(error => console.error(error.message))
    }
    function handleGithubSignIn() {
        githubSignIn()
            .then(result => {
                console.log(result);
                navigate("/")
            }).catch(error => console.error(error.message))
    }

    return (
        <div>
            <h3 className="text-3xl text-center my-10 font-bold">Please login</h3>
            <div className='flex justify-center my-10'>
                <div className="w-96 p-8 rounded-md *:w-full space-y-6">

                    <form
                        className='*:w-full space-y-6'
                        onSubmit={handleLogIn}
                    >
                        <input type="text" required name="email" placeholder='Email' />
                        <input type="text" required name="password" placeholder='Password' />
                        <br />
                        <input type="submit" value="Log in" className='my-btn' />
                        <p>Don't have an account! Please <Link to="/sign-up" className='text-[#7480ff]'><b>Sign up</b></Link></p>
                    </form>
                    <p className='text-center'>------------- or -------------</p>
                    <div className='flex text-3xl justify-center gap-6 '>
                        <button onClick={handleGooleSignIn} className='btn-btn' >
                            <FaGoogle />
                        </button>
                        <button onClick={handleGithubSignIn} className='btn-btn' >
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;