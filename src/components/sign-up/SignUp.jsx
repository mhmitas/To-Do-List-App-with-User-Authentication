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
            <div className='flex justify-center my-10'>
                <form
                    className='w-96 p-8 bg-[#292929] rounded-md *:w-full space-y-6'
                    onSubmit={handleSignUp}
                >
                    <input type="text" name="name" placeholder='Name' />
                    <input type="text" required name="email" placeholder='Email' />
                    <input type="text" required name="password" placeholder='Password' />
                    <br />
                    <input type="submit" value="Sign up" className='my-btn' />
                    <p>Already have an account! Please <Link to="/login" className='text-[#7480ff]'><b>Log in</b></Link></p>

                </form>
            </div>
        </div>
    );
};

export default SignUp;