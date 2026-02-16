import './App.css'
import Player from './player';
import Count from './count';
import Counter from './count';
import Bowler from './Bowler';

function App() {
  const players = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Salah"];
 const description =[{salary : 12000,car_number : 2},{salary : 15000,car_number : 3},{salary : 10000,car_number : 1},{salary : 20000,car_number : 4},{salary : 18000,car_number : 5}]

  return (
    <>
      
      <h1>Vite + React</h1>
      <Student name="John Doe" description="A diligent student" />
      { 
      players.map((player, index) => <Player key={index} player={player} description={description[index]} />)
      }
      <Counter></Counter>
      <Bowler></Bowler>
   
    </>
  )
}

function Student({name, description}) {

  return (
 <div>
     <h1>Student Name : {name}</h1>  
      <p>Description : {description}</p>
 </div>
  )
}

export default App
