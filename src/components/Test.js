import React, { useRef, useState } from 'react'

function Test() {
    const [state, setState] = useState({
        error: false,
        users: {},
        name: ''
    })
    const { error, users, name } = state
    const handleSubmit = (e) => {
        e.preventDefault()
        const d = e.target.value
        if (d) {
            fetch('https://jsonplaceholder.typicode.com/users/' + d)
                .then(res => res.json())
                .then(data => setState({
                    error: false,
                    users: data
                }))
        } else {
            setState({
                error: true
            })
        }
    }

    function handleChange(e) {
        if (e.target.value) {
            setState({
                error: true
            })
        } else {
            setState({
                error: false
            })
        }
    }

    return (
        <div className="form-wrap">
            <div className="form-ui">
                {
                    Object.keys(users || {}).length > 0
                        ? <pre>
                            {
                                JSON.stringify(users, null, 2)
                            }
                        </pre>
                        : <form class="ui form" onSubmit={handleSubmit}>
                            <div class="field">
                                <label>Bin Search</label>
                                <input onChange={handleChange} placeholder="search only numbers" />
                                {/*{
                            error &&
                            <span class="error">Please input a value</span>
                        }*/}
                            </div>
                            <div class="field">
                                <label>Name</label>
                                <input placeholder="text" defaultValue={name} />
                            </div>
                            <button disabled={!error} type="submit" class="ui primary button">Search</button>
                        </form>
                }
            </div>
        </div>
    )
}

export default Test
