import { Link } from "react-router-dom";

const College = ({ college }) => {
    // console.log(college.collegeName
    // );
    // college
    const { id, collegeImage, collegeName, admissionDates, researchHistory, sports, events } = college;
    // console.log(collegeName);
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <p> <span className="font-bold">Admission Date:</span> {admissionDates}</p>
                    <p><span className="font-bold">Research History:</span>{researchHistory}</p>
                    <p><span className="font-bold">Sports:</span> {sports}</p>
                    <p><span className="font-bold">Events:</span> {events[0]}, {events[1]}, {events[2]}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-blue-700 text-white"><Link to={`/collegedetails/${id}`}
                        >View Details</Link></button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default College;