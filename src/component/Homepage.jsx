import React from 'react'
import GoogleLogin from 'react-google-login'
import './Homepage.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
    selectSignedIn,
    selectUserData,
    setSignedIn,
    setUserData
} from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Homepage = () => {

    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    }
    const responseFa = (response) => {
        console.log(response);
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    }


    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div class="container  p-5 main_container">
            {
                !isSignedIn ?
                    <div class='row justify-content-center'>
                        <div class="d-flex flex-column justify-content-between sub_container">
                            <h1 class="p-2 mx-auto">Hello Welcome</h1>
                            <p class='p-2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, magni voluptates. Ut sequi quo quas error laudantium ipsum. Illum, accusamus.</p>
                            <div class="p-2 mx-auto ">
                                <GoogleLogin
                                    clientId="352336518081-37ukn5464r1r2dua180pcrkunggp755a.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button class='btn btn-primary px-4 ' onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in With Google</button>
                                    )}
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseFa}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                        </div>
                    </div> : ""
            }
        </div>
    )
}

export default Homepage
