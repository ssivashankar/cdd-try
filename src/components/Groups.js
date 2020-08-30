import React from 'react'
import { Link } from 'react-router-dom'
import useFetchHook from '../hooks/useFetchHook'

const url = 'http://localhost:3002/group'

function Users() {
    const { data: groups } = useFetchHook(url)

    return (
        <div>
            <table className="ui selectable sortable celled table">
                <thead>
                    <tr><th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                </tr></thead>
                <tbody>
                    {
                        groups &&
                        groups.map(({
                            id,
                            name,
                            type
                        }) => (
                            <tr key={id}>
                                <td data-label="Id">{id}</td>
                                <td data-label="First Name">
                                    <Link to={`/group/${id}`}>{name}</Link>
                                </td>
                                <td data-label="Last Name">{type}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    )
}

export default Users
