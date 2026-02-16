export default function Player({player,description}){
    return(
        <div>
            <h1>Player Name : {player} </h1>
            <p>Salary : {description.salary}</p>
            <p>Car Number : {description.car_number}</p>
        </div>
    )
}