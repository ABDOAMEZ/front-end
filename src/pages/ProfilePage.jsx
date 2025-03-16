import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/ProfilePage.css";

import { useDeletProfileMutation, useLogoutMutation, useUpdateProfileMutation, useGetUserMutation } from "../services/api/userApi";
import { useNavigate, useParams , Link} from "react-router-dom";

const ProfilePage = () => {
    const [profileImage, setProfileImage] = useState("profile image 2.jpg");


    const navigat = useNavigate();

    const [username, setUsername] = useState('');
    const [adress, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const [deletProfile, {isDelLoading}] = useDeletProfileMutation();
    const [logout,{islogoutLoading} ] = useLogoutMutation();
    const [update, {isUpdateLoding}] = useUpdateProfileMutation();

    const [getTargetUser, {isFetchLoding}] = useGetUserMutation();


    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    };


    const handelDelet = async () => {
        
        const response = await deletProfile();
        if(response.data.message === 'User deleted successfully'){
            localStorage.removeItem('USER_ACCESS_TOKEN');
            localStorage.removeItem('USER_ID');
            alert("Account Deleted successfully");
            navigat('/');
            return;
        }
        alert("Account didn't delete");
    }


    const handelLogout = async () => {
        const response = await logout();
        if(response.data.message === 'logged out'){
            localStorage.removeItem('USER_ACCESS_TOKEN');
            localStorage.removeItem('USER_ID');
            alert("logged out");
            navigat('/');
            return;
        }
        alert("did not logout");
    }

    const handelUpdate = async () => {

        let updateData = JSON.stringify({
            "name": username,
            "residential_address": adress,
            "email": email
        })

        const response = await update(updateData);

        if(response.data.message === 'Profile updated successfully'){
            alert("Profile updated successfully");
            return;
        }
        alert("Profile not updated successfully");
    }

    const fetchTargetUserData = async () => {
        let targetId = JSON.stringify({
            id : localStorage.getItem('USER_ID')
        })

        const response = await getTargetUser({"id": Number(localStorage.getItem('USER_ID'))});
        // console.log('fetchTargetUserData:  ',response);
        if(response.data){
            setUsername(response.data.user.name);
            setAdress(response.data.user.residential_address);
            setEmail(response.data.user.email);
            setRole(response.data.user.role);
        }
    }
    

    useEffect(() => {
        fetchTargetUserData();
    },[]);

    return (
        <>

            <div className="profile-container">
                <h4 className="profile-heading">User Page</h4>
                <div className="profile-card">
                    <div className="profile-row">
                        <div className="profile-sidebar">
                            <div className="account-settings-links">
                                <Link className="account-settings-link active" href="#account-general">
                                    General
                                </Link>
                                <Link className="account-settings-link" href="#account-change-password">
                                    Change password
                                </Link>
                                {
                                    role === "admin" && (
                                        <Link className="account-settings-link" href="#dashboard">
                                            Admin Dashboard 
                                        </Link>
                                    ) 
                                }

                                {
                                    role === "seller" && (
                                        <Link className="account-settings-link" href="#dashboard">
                                            Seller Dashboard 
                                        </Link>
                                    ) 
                                }

                                <Link className="account-settings-link">
                                    Orders
                                </Link>

                                <Link className="account-settings-link">
                                    Messages
                                </Link>
                            </div>
                        </div>
                        <div className="profile-content">
                            <div className="profile-tab-content">
                                <div className="profile-tab active" id="account-general">
                                    <div className="profile-media">
                                        <img
                                            src={profileImage}
                                            alt="Profile"
                                            className="profile-image"
                                        />
                                        <div className="profile-media-body">
                                            <label className="btn-outline-primary">
                                                Upload new photo
                                                <input
                                                    type="file"
                                                    className="account-settings-fileinput"
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                            &nbsp;
                                            <button type="button" className="btn-default md-btn-flat">
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                    <div className="actions-btn">
                                        <button onClick={handelLogout} className="logout-btn">{islogoutLoading? "loading...": "Logout"}</button>
                                        {
                                            role !== 'admin' && <button onClick={handelDelet} className="delete-btn">{isDelLoading? "Loading..." :" Delete Account"}</button>
                                        }
                                    </div>
                                    <hr className="hr-divider" />
                                    <div className="profile-form-body">
                                        <div className="profile-form-group">
                                            <label className="profile-form-label">Username</label>
                                            <input
                                                type="text"
                                                className="profile-form-control"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="profile-form-group">
                                            <label className="profile-form-label">Residential Address</label>
                                            <input
                                                type="text"
                                                className="profile-form-control"
                                                value={adress}
                                                onChange={(e) => setAdress(e.target.value)}
                                            />
                                        </div>
                                        <div className="profile-form-group">
                                            <label className="profile-form-label">E-mail</label>
                                            <input
                                                type="text"
                                                className="profile-form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-tab" id="account-change-password">
                                    <div className="profile-form-body pb-2">
                                        <div className="profile-form-group">
                                            <label className="profile-form-label">Current password</label>
                                            <input type="password" className="profile-form-control" />
                                        </div>
                                        <div className="profile-form-group">
                                            <label className="profile-form-label">New password</label>
                                            <input type="password" className="profile-form-control" />
                                        </div>
                                        <div className="profile-form-group">
                                            <label className="profile-form-label">Repeat new password</label>
                                            <input type="password" className="profile-form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-actions">
                    <button onClick={handelUpdate}  type="button" className="Save-changes">
                        {isUpdateLoding?"loading ..." : "Save changes"}
                    </button>
                    &nbsp;
                    <button type="button" className="btn-default cancel-btn">
                        Cancel
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
