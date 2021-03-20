import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Avatar } from '@material-ui/core'

import {
    selectSignedIn,
    selectUserData,
    setSearchInput,
    setSignedIn,
    setUserData
} from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const [InputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn)
    const dispatch = useDispatch();
    const logout = (response) => {
        console.log(response);
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    }

    const user = useSelector(selectUserData);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(InputValue);
        dispatch(setSearchInput(InputValue))
    }
    return (
        <div>
            <nav class="navbar navbar-light bg-light ">
                <a class="navbar-brand">Mehul Kalathiya's Blog</a>
                {
                    isSignedIn ?
                        <div class="d-flex align-items-center ">
                            <form class="form-inline ml-auto ">
                                <input class="form-control mr-sm-2" type="search" onChange={(e) => setInputValue(e.target.value)} placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>Search</button>
                            </form>
                            <div class="ml-3 mr-1 d-flex align-items-center ">
                                <a class="pr-2">{user?.name}</a>
                                <Avatar src={user?.imageUrl}></Avatar>
                                <button class='btn btn-success px-4 mx-2 '
                                    onClick={logout}
                                >Logout
                        </button>
                            </div>
                        </div>

                        :
                        <div>
                            <a class='ml-auto'>User Not Available</a>
                        </div>
                }

            </nav>
        </div >
    )
}

export default Navbar
