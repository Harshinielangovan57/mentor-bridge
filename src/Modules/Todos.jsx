import React, { useEffect, useState } from 'react'

export const Todos = () => {
     const[todos, setTodos] = useState([])
     const[loading, setLoading] = useState(true)

     useEffect(() => {
        const fetchTodos = async() => {
            try{
                const response = await fetch ("https://jsonplaceholder.typicode.com/todos")
                if(!response.ok){
                    throw new Error("Failed to fetch data")
                }
                const data = await response.json()
                setTodos(data)
                setLoading(false)
            }
            catch(error){
                console.error(error)
                setLoading(false)
            }
        }
        fetchTodos()
     },[])

     if(loading){
        return <div> loading....</div>
     }


  return (
    <div>
        Todo name :
        <ul>
            {todos.map(todo => (
                <li key ={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}
