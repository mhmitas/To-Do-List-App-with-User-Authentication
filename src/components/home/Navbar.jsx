import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Navbar = () => {
    const { user, logOut } = useContext(UserContext)
    // console.log(user);
    const navigate = useNavigate()

    function handleLogOut() {
        signOut(auth)
            .then(() => console.log('Sign-out successful.'))
            .catch((error) => console.error(error))
        navigate("/")

    }

    const routes = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'Tasks', path: '/tasks', id: 2 },
    ]
    return (
        <div className="flex justify-between p-4 font-semibold shadow-xl max-h-[64px] max-w-[1440px] mx-auto">
            <div className="text-xl font-black">T O D O</div>
            <div className='my-navbar flex flex-wrap gap-4'>
                {
                    routes.map(
                        route => <div key={route.id}><NavLink to={route.path}>{route.name}</NavLink></div>
                    )
                }
            </div>
            <div>
                {
                    user ?
                        <div className="my-navbar flex gap-4 text-[#7480ff]">
                            {
                                user.photoURL ?
                                    <img className="w-8 rounded-full border-2 border-[#ff05fb] btn-btn" src={`${user.photoURL}`} alt="" />
                                    :
                                    <p> {user.email}</p>
                            }
                            <button onClick={handleLogOut}>Log out</button>
                        </div>
                        :
                        <div className="my-navbar flex gap-4 text-[#7480ff]">
                            <NavLink to="/login">Login</NavLink>
                            {/* <NavLink to="/sign-up">Sign up</NavLink> */}
                        </div>
                }
            </div>
        </div >
    )

};
export default Navbar;