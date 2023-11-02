import { useState } from "react";
import taskBull from "../assets/images/TaskBull.png"
import { useJobContext } from "../hooks/useJobContext";
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

export const Service = () => {
    const { dispatch } = useJobContext();
    const { user } = useUserContext();

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescrition] = useState('');
    const [comp, setComp] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in!');
            return
        }

        const job = { title, description, comp, location };

        const response = await fetch('https://task-bulls-backend.vercel.app/api/jobs/', {
            method: 'POST',
            body: JSON.stringify(job),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = response.json();

        if (response.ok) {
            setTitle('');
            setDescrition('');
            setComp('');
            setLocation('');
            dispatch({ type: 'CREATE_JOB', payload: json });
            navigate('/');
        }
    }

    return (
        <div className="mt-20 flex items-center justify-center bg-gray-100">
            <div className="w-full p-6 bg-white rounded-lg shadow-lg flex">
                <div className="w-1/3 pr-5">
                    <img src={taskBull} alt="" className="w-full h-auto rounded-lg"/>
                </div>
                <div className="w-2/3">
                    <h2 className="text-center text-2xl font-semibold text-gray-800">Create a Service</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-md font-bold mb-2">Title</label>
                            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="w-full px-3 py-2 border rounded-lg outline-none"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 text-md font-bold mb-2">Description</label>
                            <input type="text" onChange={(e)=>setDescrition(e.target.value)} value={description} className="w-full px-3 py-2 border rounded-lg outline-none"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="comp" className="block text-gray-700 text-md font-bold mb-2">Estimated Compensation (US $)</label>
                            <input type="number" onChange={(e)=>setComp(e.target.value)} value={comp} className="w-full px-3 py-2 border rounded-lg outline-none"/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 text-md font-bold mb-2">Location</label>
                            <input type="text" onChange={(e)=>setLocation(e.target.value)} value={location} className="w-full px-3 py-2 border rounded-lg outline-none"/>
                        </div>

                        {error && (
                            <div className="mb-4 text-red-500">
                                {error}
                            </div>
                        )}

                        <div className="mt-6 flex justify-center">
                            <button type="submit" className="w-40 bg-bullGreen text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lightBullGreen transition duration-300">
                                Create Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}