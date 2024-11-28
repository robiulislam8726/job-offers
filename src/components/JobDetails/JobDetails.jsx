import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    const handleApplyJob =() =>{
        saveJobApplication(idInt);
        toast ('You have applied successfully');
    }
    return (
        <div className="p-4">

            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="border md:col-span-3 p-4">
                    <h2 className="text-4xl mb-3">Details coming here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>Company Name : {job.company_name}</p>
                    <p>remote_or_onsite: {job.remote_or_onsite}</p>
                    <p>Salary :  {job.salary}</p>
                    <p> Job Description: {job.job_description}</p>
                </div>
                <div className="border p-4">
                    <h2 className="text-2xl mb-3">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;