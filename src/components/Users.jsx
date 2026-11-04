import React from 'react'
import { useState , useEffect , useMemo } from 'react';

const Users = () => {

    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const [users , setUsers] = useState([]);
    const [search , setSearch] = useState("");
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);


    const fetchUsers = async () =>{

        try{
            const res = await fetch(apiUrl);
            
            if(res.ok){
                const data = await res.json();
        
                setUsers(data);
            }else{
                setError(`HTTP Error: ${res.status}`)
            }

        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false);
        }
        
    }

    const fileredUsers = useMemo(() =>{

        return users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );

    }, [users , search])


    useEffect(() => {
        fetchUsers();
    },[])


  return (
    <div className='border bg-white p-5 w-[500px] flex flex-col justify-center items-center'>

        <input value={search} type="text" className='border w-full px-4 py-4' onChange={(e) => setSearch(e.target.value)} placeholder='Search here...' />

        {
            loading ? <h1>Loading....</h1>
            : 
            
            error ? <p className='text-xl font-semibold text-red-800 mt-2'>Oops!!! Error Occured 💔</p> : fileredUsers.length > 0 ?
            <ul>
               {
                 fileredUsers.map((usr) =>(
                
                    <li key={usr.id} className='mt-2 list-none'>{usr.name}</li>
                
                ))
               }
            </ul> : <p className='mt-2 text-xl font-semibold text-gray-500'>No data found😫</p>
        }
        

    </div>
  )
}

export default Users