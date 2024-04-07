import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../provider/UserProvider';


const SignUp = () => {

    const { createUser } = useContext(UserContext)

    function handleSignUp(e) {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        // create user on firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h3 className="text-3xl text-center my-10 font-bold">Please Sign up</h3>
            <div className="max-w-md mx-auto p-10 *:w-full space-y-6">
                <form
                    className='*:w-full space-y-6  rounded-md bg-base-200 p-8'
                    onSubmit={handleSignUp}
                >
                    <input type="text" className='input input-primary' name="name" placeholder='Name' />
                    <input type="text" className='input input-primary' required name="email" placeholder='Email' />
                    <input type="text" className='input input-primary' required name="password" placeholder='Password' />
                    <br />
                    <input type="submit" className=' btn btn-primary' value="Sign up" />
                    <p>Already have an account! Please <Link to="/login" className='text-[#7480ff]'><b>Log in</b></Link></p>

                </form>
            </div>
        </div>
    );
};

export default SignUp;