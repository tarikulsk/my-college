import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CollegeDetails = () => {

    const { collegedetailsId } = useParams()
    const collegedetails = useLoaderData();
    const [collegedata, setCollegedata] = useState({});

    useEffect(() => {
        setCollegedata(collegedetails.find(college => college.id == collegedetailsId))

    }, [collegedetailsId, collegedetails])

    // useEffect(() => {
    //     fetch('http://localhost:5000/colleges')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, []);
    // console.log(collegedata.collegeName);

    const { id, collegeImage, collegeName, admissionDates, researchHistory, sports, events } = collegedata;


    return (
        <div>
            {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={collegeImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <p> <span className="font-bold">Admission Date:</span> {admissionDates}</p>
                    <p>{researchHistory}</p>
                    <p>{sports}</p>
                    <p>{events}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/collegedetails/${id}`}
                        >View Details</Link></button>
                    </div>

                </div>
            </div> */}

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;