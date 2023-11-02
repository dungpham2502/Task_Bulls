import { Link } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";

const Navbar = () => {
    const { user } = useUserContext();
    const { logout } = useLogout();

    const [buttonState, setButtonState] = useState(false);
    //False means Hamburger && True means X
    const changeButtonState = () => {
        setButtonState(!buttonState);
    }
    

    const handleLogout = () => {
        logout();
    }

    const handleSignin = () => {
        navigate('/')
    }

    return (
        // Navbar
        <nav className="relative">
            <div className="flex items-center justify-between">
                <div className="pt-2 ">
                    <Link to="/">
                        <h1 className="text-3xl">Task Bulls</h1>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-xl hover:text-darkGrayishBlue">Home</Link>
                    <Link to="/service" className="text-xl hover:text-darkGrayishBlue">Services</Link>
                    <Link to="/about" className="text-xl hover:text-darkGrayishBlue">About Us</Link>
                </div>
                <div>
                    {user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-xl text-darkBullGreen">Hello, {user.full_name}</span>
                            <button
                                onClick={handleLogout}
                                className="p-3 px-6 pt-2 text-white bg-bullGreen rounded-full baseline hover:bg-lightBullGreen"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link to='/login' className="hidden md:block p-3 px-6 pt-2 text-white bg-bullGreen rounded-full baseline hover:bg-lightBullGreen">Sign In</Link>
                    )}
                </div>
                <button id="menu-btn" onClick={changeButtonState}  className={`hamburger md:hidden focus:outline-none ${buttonState ? 'open' : 'block'}`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div className="md:hidden">
                <div id="menu" className={`absolute ${buttonState ? 'flex' : 'hidden'} flex-col items-center self-end py-8 mt-10 space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <a href="/">Home</a>
                    <a href="/service">Services</a>
                    <a href="/login">Sign In</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;