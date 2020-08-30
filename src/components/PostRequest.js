import React, { useState, useEffect } from 'react'

const newPost = (users) => {
    const totalUsers = users.length,
      incUsers = totalUsers + 1
    return {
        id: incUsers,
        title: `Post `+incUsers
    }
}

export default function Home() {
    const [users, setUsers] = useState({})

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (!storedUsers) {
            fetch('https://my-json-server.typicode.com/typicode/demo/posts')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('users', JSON.stringify(data))
                setUsers(data)
            })
        } else {
            setUsers(JSON.parse(storedUsers))
        }
    }, [])

    function addUser(e) {
        e.preventDefault()
        fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => {
            const updatedUsers = [...users, newPost(users)]
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            setUsers(updatedUsers)
        })
    }

    return (
        <div>
            <h1> Home </h1>
            <button onClick={addUser}>Add a user</button>
            {
                users &&
                <pre>
                    {
                        JSON.stringify(users, null, 3)
                    }
                </pre>
            }
        </div>
    )
}