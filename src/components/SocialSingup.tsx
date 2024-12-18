"use client"

// import {FormEvent} from "react";
// import { signIn } from "@/auth";
import googleImage from "@/assets/googleImage.png";
// import githubImage from "@/assets/githubImage.png";
import Image from "next/image";

// const SocialSingup = () => {

//   const signInGoogle = async (e: FormEvent) => {
//     e.preventDefault();
//     await signIn("Google", { redirectTo: "/" });
//   }

//   const signInGithub = async (e: FormEvent) => {
//     e.preventDefault();
//     await signIn("github", { redirectTo: "/" });
//   }

//   return (
//     <div className="flex items-center gap-3 mt-2">
//     <button
//     onClick={(signInGoogle)}
//       className="flex items-center gap-1 border border-blue-500 font-semibold bg-blue-50 px-2 py-1.5 rounded-md hover:bg-blue-100 duration-300 ease-in-out"
//     >
//       <Image src={googleImage} alt="googleImage" className="w-8" />
//       <p>Signin with Google</p>
//     </button>
//     <div
//       className="flex items-center gap-1 border border-slate-500 font-semibold bg-slate-50 px-2 py-1.5 rounded-md hover:bg-slate-200 duration-300 ease-in-out"
//     >
//       <Image src={githubImage} alt="githubImage" className="w-8" />
//       <button type="submit" onClick={signInGithub}>Signin with Github</button>
//     </div>
//   </div>
//   )
// }

// export default SocialSingup

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  // const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //       {/* Signed in as {session.user.email} <br /> */}
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  return (
    <>
      <button
        onClick={() => { signIn(), console.log('login clickede ') }}
        className="flex items-center gap-1 border border-blue-500 font-semibold bg-blue-50 px-2 py-1.5 rounded-md hover:bg-blue-100 duration-300 ease-in-out"
      >
        <Image src={googleImage} alt="googleImage" className="w-8" />
        <p>Signin with Google</p>
      </button>
    </>
  )
}