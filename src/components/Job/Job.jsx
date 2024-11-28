import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="bg-base-100 shadow-xl card card-compact">
            <figure>
                <img src={logo} alt="logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="border-[#7E90FE] mr-4 px-5 py-2 border rounded font-extrabold text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="border-[#7E90FE] mr-4 px-5 py-2 border rounded font-extrabold text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex mt-4">
                    <h2 className="flex mr-4"><MdOutlineAddLocationAlt className="mr-2 text-2xl"></MdOutlineAddLocationAlt>{location}</h2>
                    <h2 className="flex"><PiCurrencyCircleDollarBold className="mr-2 text-2xl"></PiCurrencyCircleDollarBold>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;