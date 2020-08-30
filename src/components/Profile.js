import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Profile(props) {
    const [user, setUser] = useState({}),
     { id, firstName, lastName, email } = user || {},
     { user: owner } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3002/user/${owner}/profile`)
        .then(res => res.json())
        .then(result => setUser(result))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3002/user/${owner}/profile`, {
    method: 'POST',
    body: JSON.stringify({"id":"kandhas","firstName":"Sivaa","lastName":"Shankar","email":"siva.kandha@rbs.co.uk"}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(result => setUser(result))
    }

    return (
        <div className="ui raised segment form-container">
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="first-name" placeholder="First Name" value={firstName} />
                </div>
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="last-name" placeholder="User name" value={lastName} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={email} />
                </div>
                <button className="ui primary button" type="submit">Update</button>
            </form>
        </div>
    )
}

export default Profile
