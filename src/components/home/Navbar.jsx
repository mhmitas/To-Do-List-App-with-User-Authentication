import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../provider/UserProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Audio } from "react-loader-spinner";

const Navbar = () => {
    const { user, logOut, isLoading } = useContext(UserContext)

    const navigate = useNavigate()

    const routes = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'Tasks', path: '/tasks', id: 2 },
    ]
    return (
        <div className="flex justify-between p-4 font-semibold shadow-xl max-h-[64px] max-w-[1440px] mx-auto">
            <Link to="/" className="text-xl font-black btn-btn">T O D O</Link >
            <div className='my-navbar flex flex-wrap gap-4'>
                {
                    routes.map(
                        route => <div key={route.id}><NavLink to={route.path}>{route.name}</NavLink></div>
                    )
                }
            </div>
            {isLoading ?
                <div>
                    <Audio width='2rem' height="2rem" color="#7480ff" ariaLabel="audio-loading" wrapperStyle={{}} wrapperClass="wrapper-class"
                    ></Audio>
                </div>
                :
                <div>
                    {
                        user ?
                            <Link to='/profile'>
                                <div
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Profile"
                                    className="my-navbar flex gap-4 text-[#7480ff]">
                                    {
                                        user.photoURL ?
                                            <img className="w-10 rounded-full border-2 border-[#ff05fb] btn-btn" src={`${user.photoURL}`} alt="" />
                                            :
                                            <p> {user.email}</p>
                                    }
                                    {/* <button onClick={handleLogOut}>Log out</button> */}
                                    <Tooltip id="my-tooltip" />
                                </div>
                            </Link>
                            :
                            <div className="my-navbar flex gap-4 text-[#7480ff]">
                                <NavLink to="/login">Login</NavLink>
                                {/* <NavLink to="/sign-up">Sign up</NavLink> */}
                            </div>
                    }
                </div>
            }
        </div >
    )

};
export default Navbar;