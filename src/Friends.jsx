import { use } from "react";
import Friend from "./Friend";

export default function Friends({friends}){
    const friendsData = use(friends);
    console.log(friendsData);
    return(
        <div className="myCard">
            <h1> All Friend are here .. :{friendsData.length} </h1>
            {
                friendsData.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}