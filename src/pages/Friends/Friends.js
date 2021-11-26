import {Navigate, NavLink, Outlet, Route, Routes} from "react-router-dom"
import './Friends.css'
export const Friends = ({isLogin}) => {

    if(isLogin)
        return (
            <div className='friends'>
                    <nav className='friends-tab'>
                        <NavLink className='friends-link' to='/friends/malika'>Malika</NavLink>
                        <NavLink className='friends-link' to='/friends/ainur'>Ainur</NavLink>
                        <NavLink className='friends-link' to='/friends/zere'>Zere</NavLink>
                    </nav>
                <Outlet/>
            </div>
        )

    return <Navigate to='/login'/>

}
