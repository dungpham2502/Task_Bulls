import jobImage from "../assets/images/Job2.jpg";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const JobDetail = () => {
    const location = useLocation();
    const { job } = location.state;
    const [creator, setCreator] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://task-bulls-backend.vercel.app/api/user/${job.creator_id}`);
            const json = await response.json();

            if (response.ok) {
                setCreator(json);
            }
        }
        fetchUser();
    }, []);

    
    return (
    <div className="flex flex-col items-center justify-center">
        {/* Job Information */}
        <div className="max-w-5xl w-full mt-10 p-6 bg-green-300 rounded-lg shadow-lg flex">
            <div className="w-2/3">     
                <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                <p className="text-gray-600 mb-2">${job.comp}</p>
                <p className="text-gray-600 mb-2">{job.location}</p>
                <p className="text-gray-700">{job.description}</p>
            </div>
            <div className="w-1/3 pl-5">
            <img src={jobImage} alt="Job Image" className="w-full h-auto rounded-lg" />
            </div>
        </div>

        {/* Creator Information */}
        <div className="max-w-5xl w-full mt-10 p-6 bg-green-200 rounded-lg shadow-lg flex">
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">{creator.full_name}</h2>
                <p className="text-gray-600 mb-2">Email: {creator.email}</p>
                <p className="text-gray-600 mb-2">USF_ID: {creator.usf_id}</p>
                <p className="text-gray-700">Phone Number: {creator.phone_num}</p>
            </div>
        </div>     
    </div>

    );
}