import {NavLink} from "react-router-dom";
import './Nav.css'
export const Nav = (props) => {
    const {isLogin, handleLogout} = props
    return <nav className='nav'>
            <NavLink  className='navlink' to='' title='Home'>Home</NavLink>
            <NavLink className='navlink' to='/profile'>Profile</NavLink>
            <NavLink className='navlink' to='/friends'title='Friends'>Friends</NavLink>
            {
                isLogin ?
                    <h1
                        onClick={handleLogout}
                        className='navlink'
                    >
                        Log out
                    </h1>:
                    <NavLink
                        className='navlink'
                        to='/login'>
                        Login
                    </NavLink>
            }
    </nav>
}
