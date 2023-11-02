import { useContext } from "react";
import { JobContext } from "../context/JobContext";

export const useJobContext = () => {
    const jobContext = useContext(JobContext);

    return jobContext;
}