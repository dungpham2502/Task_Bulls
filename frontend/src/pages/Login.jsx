import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();

    await login(email, password);

  };

  return (
    <div className="mt-20 flex items-center justify-center bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg flex">
        <div className="w-full">
          <h2 className="text-center text-2xl font-semibold text-gray-800">Sign In</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-md font-bold mb-2">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full px-3 py-2 border rounded-lg outline-none" />
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
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-4 text-gray-700 text-sm text-center">
            Don't have an account? <a href="/signup" className="text-blue-600">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};