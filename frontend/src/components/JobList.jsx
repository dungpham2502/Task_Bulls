import { useEffect, useState } from "react";
import JobImage from "../assets/images/Job1.png";
import { useJobContext } from "../hooks/useJobContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export const JobList = () => {
    const { jobs, dispatch } = useJobContext();
    const { user } = useUserContext();


    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch("https://task-bulls-backend.vercel.app/api/jobs/");
            const json = await response.json();
            
            if (response.ok) {
                dispatch({type: 'SET_JOBS', payload: json});
            }

        }

        fetchJobs();
    }, [])

    return (
        <div>
            <div>
                <h2 className="max-w-md text-4xl font-bold text-left mt-20 text-left">
                            Explore These Latest Jobs!
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 ">
            {jobs && jobs.map((job) => (
                <div key={job._id} className="bg-white p-4 rounded shadow">
                    <img src={JobImage} alt={job.title} className="w-full h-40 object-cover rounded" />
                    <h3 className="text-xl font-semibold mt-2">{job.title}</h3>
                    <p className="text-gray-600 mt-2">Estimated Pay: ${job.comp}</p>
                    <p className="text-gray-600 mt-2">{job.location}</p>
                    <div className="flex justify-start mt-3">
                    {user ? (
                        <Link to="/detail" state={{job}}
                            className="p-1 px-3 text-white bg-bullGreen rounded-full baseline hover:bg-lightBullGreen"> Learn more
                        </Link>
                    ) : (
                        <Link to="/login" state={{job}}
                            className="p-1 px-3 text-white bg-bullGreen rounded-full baseline hover:bg-lightBullGreen"> Learn more
                        </Link>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
