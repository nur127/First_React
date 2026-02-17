export default function Friend({friend}){
    return(
        <div  className="myCard">
            <h1>Friend Name : {friend.name}</h1>
            <p>Email : {friend.email}</p>
        </div>
    )
}