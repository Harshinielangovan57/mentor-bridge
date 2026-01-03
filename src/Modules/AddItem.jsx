import React, { useState } from 'react'

export const AddItem = () => {

    const[itemName, setItemName] = useState('')
    const[list , setList] = useState([])
    const[error, setError] = useState('')


    const handleAdd = () => {
        if(itemName.length === 0){
            setError("Field cannot be empty")
            return
        }
        setList([...list, itemName])
        setItemName('')
        setError("")
    }

  return (
    <div>
        <form>
            <label htmlFor="">Item Name :</label>
            <input type='text' value={itemName} onChange={(e) => setItemName(e.target.value)}/>
        </form>
        <button onClick={handleAdd}>ADD</button>
        {error && <p>{error}</p>}
        <ul>
            {list.map((val,index) => (
                <li key ={index}>
                    {val}
                </li>
            ))}
        </ul>
    </div>
  )
}
