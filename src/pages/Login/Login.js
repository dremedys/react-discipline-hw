import {useState} from "react";
import Button from '@mui/material/Button';
import {Box,  OutlinedInput} from "@mui/material";
import {useNavigate} from 'react-router-dom';

export const Login = (props) => {
    const {setLoggedIn, correctUser} = props
    const navigate = useNavigate();
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [hasError, setHasError] = useState(false)


    const handleClick = () => {
        if(username === correctUser.username && password === correctUser.password) {
            setLoggedIn()
            navigate('/')
        }
        else{
            setHasError(true)
        }
    }

    return (
        <Box width={500} mt={10} marginLeft={'auto'} marginRight={'auto'} >
            <OutlinedInput
                onChange={(e) => {setUserName(e.target.value)}}
                value={username}
                placeholder='Username'
                fullWidth
            />
            <Box height={50}/>
            <OutlinedInput
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                placeholder='Password'
                type='password'
                fullWidth
            />
            <h3>username: dremedys, password: qwerty</h3>
            <Box height={50}/>

            <Button
                onClick={handleClick}
                variant='contained'
            >
                Login
            </Button>

            {hasError && <h1>Wrong username or password</h1>}
        </Box>
    )
}
