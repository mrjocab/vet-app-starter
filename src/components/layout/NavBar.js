import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SingedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const NavBar = (props) => {
    const {auth, profile} = props
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return (
        <nav className="nav wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Vet App</Link>
                {links}
                <Link to='/findvet'>Find Vet</Link>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar)