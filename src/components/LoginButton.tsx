"use client";

import { CiLogin } from "react-icons/ci";
import { signIn } from "next-auth/react"

const LoginButton = () => {
    return (
        <button
            onClick={() => { signIn(), console.log('login clickede ') }}
            className="text-sm text-black rounded-md px-2 py-1 border border-darkOrange font-semibold hover:text-darkOrange duration-300 flex items-center justify-center gap-2"
        >
            <CiLogin className="font-extrabold text-xl" />
            <span>Sign Up</span>
        </button>
    )
}

export default LoginButton