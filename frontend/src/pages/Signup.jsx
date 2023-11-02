import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import taskBull from "../assets/images/TaskBull.png"

export const Signup = () => {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [usfStudentId, setUsfStudentId] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [password, setPassword] = useState('');

    const { signup, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, fullName, usfStudentId, phoneNumber, password);
    };

    return (
        <div className="mt-20 flex items-center justify-center bg-gray-100">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg flex">
            <div className="w-full">
            <h2 className="text-center text-2xl font-semibold text-gray-800">Sign Up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full px-3 py-2 border rounded-lg outline-none" />
                </div>

                <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-md font-bold mb-2">Full Name</label>
                <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullName} className="w-full px-3 py-2 border rounded-lg outline-none" />
                </div>

                <div className="mb-4">
                <label htmlFor="usfStudentId" className="block text-gray-700 text-md font-bold mb-2">USF Student ID</label>
                <input type="text" onChange={(e) => setUsfStudentId(e.target.value)} value={usfStudentId} className="w-full px-3 py-2 border rounded-lg outline-none" />
                </div>

                <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-md font-bold mb-2">Phone Number</label>
                <input type="tel" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className="w-full px-3 py-2 border rounded-lg outline-none" />
                </div>

                <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-md font-bold mb-2">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="w-full px-3 py-2 border rounded-lg outline-none" />
                </div>
                
                {error && (
                    <div className="mb-4 text-red-500">
                        {error}
                    </div>
                )}

                <div className="mt-6 flex justify-center">
                <button type="submit" className="w-40 bg-bullGreen text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lightBullGreen transition duration-300">
                    Sign Up
                </button>
                </div>
            </form>
            <p className="mt-4 text-gray-700 text-sm text-center">
                Already have an account? <a href="/login" className="text-blue-600">Log in</a>
            </p>
            </div>
        </div>
        </div>
    );
};