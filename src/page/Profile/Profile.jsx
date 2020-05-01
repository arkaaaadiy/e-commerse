import React from 'react'
// import PropTypes from 'prop-types'
import Avatar from '../../components/Avatar/Avatar'
import Heading from '../../components/Heading/Heading';
import './Profile.sass'
import avatar from '../../assets/avatar.png';
import ProfileLink from '../../components/ProfileLink/ProfileLink';

const Profile = props => {
    return (
        <div>
            <div className="container">
            <Heading noback title search>My profile</Heading>
            <div className="profile__info">
                <Avatar photo={avatar} />
                <div className="profile__nameWithEmail">
                    <h3 className="profile__name">Matilda Brown</h3>
                    <p className="profile__email">matildabrown@mail.com</p>
                </div>
            </div>
            </div>
            <div className="profile__links">
                <ProfileLink>
                    <p className="profile__text subheads">My orders</p>
                    <p className="profile__subtext helperText">Already have 12 orders</p>
                </ProfileLink>   
                <div className="profile__line"></div>             
                <ProfileLink>
                    <p className="profile__text subheads">Shipping addresses</p>
                    <p className="profile__subtext helperText">3 ddresses</p>
                </ProfileLink>
                <div className="profile__line"></div> 
                <ProfileLink>
                    <p className="profile__text subheads">Payment methods</p>
                    <p className="profile__subtext helperText">Visa  **34</p>
                </ProfileLink>
                <div className="profile__line"></div> 
                <ProfileLink>
                    <p className="profile__text subheads">Promocodes</p>
                    <p className="profile__subtext helperText">You have special promocodes</p>
                </ProfileLink>
                <div className="profile__line"></div> 
                <ProfileLink>
                    <p className="profile__text subheads">My reviews</p>
                    <p className="profile__subtext helperText">Reviews for 4 items</p>
                </ProfileLink>
                <div className="profile__line"></div> 
                <ProfileLink>
                    <p className="profile__text subheads">Settings</p>
                    <p className="profile__subtext helperText">Notifications, password</p>
                </ProfileLink>    
            </div>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile
