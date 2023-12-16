import React from 'react'
import { useState, useEffect } from 'react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Account from '@/components/profile/Account';
import Password from '@/components/profile/Password';
const Profile = ({user}) => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [tabs, setTabs] = useState(0);
  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      signOut({ redirect: false });
      push("/auth/Login");
    }
  };
  useEffect(() => {
    if (!session) {
      push("/auth/Login");
    }
  }, [session, push]);
  return (

<div className="flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-4 mb-10 mt-2">
      <div className="lg:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0 mt-6">
          <b className="text-2xl mt-1">{user.fullName}</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1 ">Account</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user} />}
      </div>
  )
};
export async function getServerSideProps({ req, params }) {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  return {
    props: {
      user: user ? user.data : null,
    },
  };
}
/* 
email: test@gmail.com
password: Test123$
*/
export default Profile;