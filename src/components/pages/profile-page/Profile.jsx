import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../../../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext } from "react";
import { UserContext } from "../../../provider/UserProvider";
import { Audio } from "react-loader-spinner";

const Profile = () => {
    const { user, isLoading } = useContext(UserContext)
    const navigate = useNavigate()

    function handleLogOut() {
        signOut(auth)
            .then(() => console.log('Sign-out successful.'))
            .catch((error) => console.error(error))
        // navigate("/")
    }

    return (
        <div className='p-4'>
            <h3>Profile</h3>
            {
                isLoading ?
                    <div className="absolute top-1/2 left-1/2">
                        <Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="#7480ff"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </div>
                    :
                    // 
                    <div className="">
                        <div className="flex flex-col justify-center max-w-md p-6 shadow-md rounded-xl sm:px-12 myBg-b mx-auto my-20">
                            {
                                user?.photoURL ?
                                    <img src={`${user.photoURL}`} alt="" className="w-32 myBg-b h-32 mx-auto rounded-full " />
                                    :
                                    <img className="w-32 myBg-b h-32 mx-auto rounded-full" src="profile-avatur.jpeg" alt="avatur" />
                            }
                            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                                <div className="my-2 space-y-1">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>
                                    <p className="px-5 ">Email: {user?.email}</p>
                                </div>
                                {/* buttons */}
                                <div className="flex justify-center pt-2 space-x-4 align-center">
                                    <button className='btn' onClick={handleLogOut}>Log out</button>
                                    <Link to="/login">
                                        <button className='btn'>Login to another account</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div >
    );
};

export default Profile;