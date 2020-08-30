import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import Account from './Account'

function User({ match: { params: { user, page } } }) {
    function renderCount() {
        if (page === 'profile') {
            return <Profile />
        } else if (page === 'account') {
            return <Account />
        }
    }
    return (
        <div className='ui grid wrapper'>
            <div className='three wide column'>
                <div role="list" class="ui divided relaxed list">
                    <div role="listitem" class="item">
                        <i aria-hidden="true" class="github large icon middle aligned"></i>
                        <div class="content">
                            <Link className="header" to='profile'>Profile </Link>
                            <p class="description">View/Update your profile</p>
                        </div>
                    </div>
                    <div role="listitem" class="item">
                        <i aria-hidden="true" class="github large icon middle aligned"></i>
                        <div class="content">
                            <Link className="header" to='account'>Account </Link>
                            <p class="description">Update account details</p>
                        </div>
                    </div>
                    <div role="listitem" class="item">
                        <i aria-hidden="true" class="github large icon middle aligned"></i>
                        <div class="content">
                            <Link className="header" to='group'>Group </Link>
                            <p class="description">Group you belongs to</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='thirteen wide column'>
                {renderCount()}
            </div>
        </div>
    )
}

export default User
