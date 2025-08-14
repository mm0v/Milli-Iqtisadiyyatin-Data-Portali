import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AppUseMemo = () => {

    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [email, setEmail] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(fd => setData(fd))
    }, [])

    const userRows = () => {
        console.log('user');
        return  data.map((item) => (
            <li key={item.id} onClick={() => { setEmail(item.email) }}>{item.name}</li>
        ))
        
    }

const userRowsMemo=useMemo(()=>userRows(),[email])

    return (
        <div>
            {email}
            {userRowsMemo}
            {count}<button onClick={() => { 
                console.log('counter')
                setCount(count + 1) }}>+</button>
        </div>
    )
}

export default AppUseMemo