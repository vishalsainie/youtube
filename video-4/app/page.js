// .................................2-way binding...............................................

// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState("")
//   return (
//     <>
//       <h1 className='mb-5 text-2xl'>Enter Your Name : </h1>
//       <form>
//         <input className='border-2 border-zinc-800 px-4 py-2 text-xl' type='text'
//         value={username}
//         onChange={(elem)=>{
//           setusername(elem.target.value)
//         }}
//         ></input>
//       </form>
//     </>
//   )
// }

// export default page

// .................................API Call and Dynamic Routing...............................................

// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const page = () => {
//   const [users, setusers] = useState([]);

// getusers will give an object as the output so in order to see the users we will use the map function to get see the data.............so whenever there is multiple things in the object and we have to see those then we will use the map function

// const getusers = async () => {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   setusers(data);
// };

// this useEffect fn calls the getUsers function when the component mounts without clicking on get data button again and again

//   useEffect(() => {
//     getusers();
//   }, []);

//   return (
//     <>
//       <button
//         onClick={getusers}
//         className="bg-red-400 text-white px-4 py-2 font-bold rounded"
//       >
//         Get Data
//       </button>

//       <div className="p-8 bg-slate-100 mt-5">
//         <ul>
//           {/* now to display the users use the map function */}
//           {users.map((elem) => {
//             return (
//               <li>
//                 {elem.username} ---&gt; <a href={`/${elem.id}`}>Explore</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default page;

// .................................context API part 1...............................................

// "use client"
// import React, { useState } from 'react'

// import Nav from './Components/Nav'
// import Header from './Components/Header'

// const page = () => {
//   const [num, setnum] = useState(10)
//   return (
//     <div>
//       <Header num={num}/>
//     </div>
//   )
// }

// export default page

// .................................context API part 1...............................................

// "use client"
// import React, { useContext } from 'react'
// import myContext from './Helper/Context'
// import Header from './Components/Header'

// const page = () => {
//   const user = useContext(myContext)

//   return (
//     <>
//       <div>{user}</div>
//       <Header/>
//     </>
//   )
// }

// export default page

// .............................React Toastify..............................................
"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const notify = () =>{
    // toast("Login Successful ho gaya hai ji!")

    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div>
      <button onClick={notify} className="p-10 m-10 bg-zinc-400 text-2xl text-white rounded border-4 border-gray-800">Login</button>
      <ToastContainer />
    </div>
  );
};

export default page;
