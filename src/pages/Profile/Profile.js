import {Navigate} from "react-router-dom";

export const Profile = ({isLogin,user}) =>{

    if(isLogin)
        return (
            <div>
                <img src='https://i.pinimg.com/originals/9d/4d/31/9d4d314ec7722d05541111a180e4e54b.png' width={150} height={150}/>
                <h2>Your username: {user.username}</h2>
                <h3>Dariga Abdikarimova</h3>
            </div>
        )


    return <Navigate to='/login'/>

}
