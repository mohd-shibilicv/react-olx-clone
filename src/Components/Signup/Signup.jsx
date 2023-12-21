import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firebase);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-[500px]">
        <img className="mx-auto mb-6" src={Logo} alt="Logo" width="100" height="100" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fname" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="fname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              name="phone"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
            />
          </div>

          <button className="w-full h-10 bg-blue-800 text-white font-bold hover:bg-white hover:text-blue-800 hover:border-2 hover:border-blue-800">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="#" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
}
