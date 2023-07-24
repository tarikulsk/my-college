import { Link } from "react-router-dom";


const CollegesList = ({ college }) => {
    const { id, collegeImage, collegeName, admissionDates } = college;


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <p> <span className="font-bold">Admission Date:</span> {admissionDates}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-blue-700 text-white"><Link to={`/collegedetails/${id}`}
                        >View Details</Link></button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default CollegesList;