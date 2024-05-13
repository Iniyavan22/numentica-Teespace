'use client'

import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from "next/navigation";
import { Client,Account } from "appwrite";

const Login = () => {

    const defaultState = {
        type: "password",
        icon: VisibilityOffIcon
    }

    const [passwordState, setPasswordState] = useState<any>(defaultState);
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')  
        .setProject('6617679f5c0eb645569f');               

    const account = new Account(client);
    const handleClick = async (e:any) => {
        try {
            if (localStorage.getItem("cookieFallback")){
                await account.deleteSessions();
            }
            const response = await account.createEmailPasswordSession(email, password);
            localStorage.setItem("userID",response.userId);
            router.push('/home'); 
        } catch (error) {
            console.error('Login failed:', error);       
        }
    };

    function changeState() {
        passwordState.type === "text" ?
            setPasswordState({ type: "password", icon: VisibilityOffIcon }) :
            setPasswordState({ type: "text", icon: VisibilityIcon });

    }

    return (
        <div className="flex items-center justify-center flex-col ">
            <div className="flex justify-center items-center flex-col mt-24 mx-48 w-96 text-center bg-login_bg border border-solid border-black rounded-xl">
                <p className="font-bold text-3xl my-8">Login</p>
                <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="180" height="48" fill="url(#pattern0)"></rect>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_10313_2691" transform="scale(0.00555556 0.0208333)"></use>
                        </pattern>
                        <image id="image0_10313_2691" width="180" height="48" xlinkHref="data:image/png;base64,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"></image>
                    </defs>
                </svg>
                <form className="flex flex-col items-center justify-center py-6">
                    <div className="flex flex-col items-start">
                        <label className="my-3 text-gray-500">UserName</label>
                        <input type="text" className="py-3 pl-2  rounded-md border border-solid border-black" placeholder="Username..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-start ">
                        <label className="my-3  text-gray-500">Password</label>
                        <input type={passwordState.type} className="py-3 pl-2 rounded-md border border-solid border-black" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                        <passwordState.icon className="relative left-40 bottom-9" onClick={() => changeState()} />
                    </div>
                    <button className="bg-green-600 py-3 w-56 rounded-xl text-white" type="button" onClick={(e) => handleClick(e)}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;