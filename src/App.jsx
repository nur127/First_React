import './App.css'
import Player from './player';
import Count from './count';
import Counter from './count';
import Bowler from './Bowler';
import User from './user';
import { Suspense } from 'react';
import Friends from './Friends';


  const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
  .then (res => res.json());


    // const user = async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // return response.json();

  // }

  const friendsResponse = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  }

function App() {
  // const userPromise = user();


  const players = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Salah"];
  const description = [{ salary: 12000, car_number: 2 }, { salary: 15000, car_number: 3 }, { salary: 10000, car_number: 1 }, { salary: 20000, car_number: 4 }, { salary: 18000, car_number: 5 }]

 const friendPromise = friendsResponse();


  return (
    <>

      <h1>Vite + React</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Friends friends={friendPromise}></Friends>
      </Suspense>

      <br />
      <br />
      <br />
      <br />

      <Suspense fallback={<div>Loading...</div>}>
        <User user = {fetchUser}></User>
      </Suspense>
      
      <Student name="John Doe" description="A diligent student" />
      {
        players.map((player, index) => <Player key={index} player={player} description={description[index]} />)
      }
      <Counter></Counter>
      <Bowler></Bowler>

    </>
  )
}

function Student({ name, description }) {

  return (
    <div>
      <h1>Student Name : {name}</h1>
      <p>Description : {description}</p>
    </div>
  )
}

export default App
