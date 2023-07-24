import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CollegeDetails = () => {

    const { collegedetailsId } = useParams()
    const collegedetails = useLoaderData();
    const [collegedata, setCollegedata] = useState({});

    useEffect(() => {
        setCollegedata(collegedetails.find(college => college.id == collegedetailsId))

    }, [collegedetailsId, collegedetails])

    const { id, admissionProcess, collegeImage, collegeName, admissionDates, researchHistory, eventDetails, sports, } = collegedata;


    return (
        <div>


            <div className="card lg:card-side p-10  bg-base-100 shadow w-9/12 m-auto my-20">
                <figure><img className="w-9/12" src={collegeImage} alt="Album" /></figure>
                <div className="card-body w-full  ">
                    <h2 className="card-title text-5xl">{collegeName}</h2>
                    <p> <span className="font-bold">Admission Date:</span> {admissionDates}</p>
                    <p> <span className="font-bold">Admission Process:</span> {admissionProcess}</p>
                    <p><span className="font-bold">Research History:</span> {researchHistory}</p>
                    <p><span className="font-bold">Sports:</span> {sports}</p>

                    {/* <p><span className="font-bold">Events:</span> {events}</p> */}
                    <p><span className="font-bold">Events Details:</span> {eventDetails}</p>
                    {/* <p><span className="font-bold">EventDetails:</span> {eventDetails.events[0]}</p>
                     */}


                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> <Link to={`/apply/${id}`}>Apply</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;