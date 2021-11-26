import {useParams} from "react-router-dom";
import {Card} from "@mui/material";

const friends = [
    {name: 'malika', age:32, city: "Aktau",img: 'https://sun9-80.userapi.com/impg/pTizFj02xYR0rVAUPzd4wNQjlwshTTTISpStbQ/rka9eis-Yh8.jpg?size=960x1280&quality=96&sign=f4a05ff24493fdf6ea348eb7894f371b&type=album'},
    {name: 'ainur', age:13, city: "Astana", img: 'https://sun9-40.userapi.com/impg/KZe4KjuEb-ohQw6gTuPFFbc6RPg_aIBh3Mv3_g/DknOvE0Sc34.jpg?size=1620x2160&quality=95&sign=a39ab1dfbc5aefb5cb6a211749190762&type=album'},
    {name: 'zere', age:3, city: "Semey", img: 'https://sun2.tele2-kz-almaty.userapi.com/s/v1/if1/56mUMI_uFH0wf5agbwr23nnEv0NBHq8sxdkbeDfreepCWkx6AoWCivUwUio_-MUyjnNewrie.jpg?size=200x200&quality=96&crop=97,73,681,681&ava=1'}
]

export const FriendDetail = () => {
    const {friendName} = useParams()
    const friend = friends.find(item => item.name === friendName)

    return (
        <Card sx={{width: 400}}>
            <header>{friend.name}</header>
            <div>
                <img src={friend.img} width={150} height={150}/>
                <h1>Age: {friend.age}</h1>
                <h2>City: {friend.city}</h2>
            </div>
        </Card>
    )
}
