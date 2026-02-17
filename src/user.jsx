// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data));

import { use } from "react"

// const user = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }

export default function User({user}){
    const data = use(user);
    console.log(data);
    // console.log(data.address.street);
    return(
        <div>
           <h1>User Length : {data.length}</h1>
        </div>
    )
}