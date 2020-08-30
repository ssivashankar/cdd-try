import React, { useState } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import useFetchHook from '../hooks/useFetchHook'

const url = 'http://localhost:3002/user'

function Users() {
    const { data: users } = useFetchHook(url)
    const [table, setTable] = useState({column: null, data: users, direction: null})
  const handleSort = (clickedColumn) => () => {
    const { column, data, direction } = table

    if (column !== clickedColumn) {
      setTable({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    setTable({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

    return (
        <div>
            <table className="ui selectable sortable celled table">
                <thead>
                    <tr><th>Id</th>
                    <th onClick={handleSort('firstName')} className="sorted descending">First Name</th>
                    <th className="sorted descending">Last Name</th>
                    <th className="sorted descending">Email</th>
                </tr></thead>
                <tbody>
                    {
                        users &&
                        users.map(({
                            id,
                            firstName,
                            lastName,
                            email
                        }) => (
                            <tr key={id}>
                                <td className='collapsing' data-label="Id">{id}</td>
                                <td data-label="First Name">
                                    <Link to={`/user/${id}/profile`}>{firstName}</Link>
                                </td>
                                <td data-label="Last Name">{lastName}</td>
                                <td data-label="Email">{email}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    )
}

export default Users
