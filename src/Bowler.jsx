import { useState } from "react"

export default function Bowler(){

    const [bowls,setBowls] = useState(0);
    const [overs,setOvers] = useState(0);

    const handleBowl = ()=>{
        let newBowls = bowls + 1;   
        setBowls(newBowls);

        if(newBowls === 6){
            setBowls(0);
            setOvers(overs + 1);
        }
    }

    return(
        <div>
            <h1>Bowler Name : </h1>
            <p>Bowls : {bowls}</p>
           <button onClick={handleBowl}>Bowl</button>
            <p>Overs : {overs}</p>
        </div>
    )
}