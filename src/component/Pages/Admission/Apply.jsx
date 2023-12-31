import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { useLoaderData, useParams } from "react-router-dom";


const Apply = () => {


    const { applyId } = useParams()
    const collegedetails = useLoaderData();
    const [collegedata, setCollegedata] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setCollegedata(data.find(college => college.id == applyId)))
    }, [applyId, collegedetails])

    // console.log(collegedata);
    const { admissionProcess, collegeImage, collegeName } = collegedata;


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const candidateName = form.candidateName.value;
        const DOB = form.DOB.value;
        const photo = form.photo.value;
        const subject = form.subject.value;
        const candidateEmail = form.candidateEmail.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;



        // const apply = { collegeName, photo, candidateName, DOB, subject, candidateEmail, phoneNumber, address }
        const apply = { collegeName, candidateName, DOB, photo, subject, candidateEmail, phoneNumber, address }
        console.log(apply);

        fetch('http://localhost:5000/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apply)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Hurry ! apply  Successfully!')
                    form.reset();
                }
            })

    }




    return (
        <div className="mb-20">
            <div className=" grid md:grid-cols-3  gap-10 p-10  bg-base-100 shadow w-9/12 m-auto my-20">
                <figure className="col-start-1 col-end-3"><img src={collegeImage} alt="Album" /></figure>
                <div>
                    <h1 className="text-5xl font-bold pb-10">{collegeName}</h1>
                    <h1 className=" font-bold">{admissionProcess}</h1>
                </div>

            </div>

            {/*  ‘Candidate Name, Subject, Candidate Email, Candidate Phone number, address, date of birth, and image field. And submit butt */}

            <div className="w-9/12  m-auto">


                <form onSubmit={handleSubmit} >
                    {/* <input type="text" name="name" id="" /> */}

                    {/* <input type="text" name='candidateName' required placeholder="Tarun Kumar" className="input input-bordered" /> */}

                    <h1 name="collegeName" className="text-5xl text-center font-bold pb-10">{collegeName}</h1>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="url" name='photo' required placeholder="Enter Your Photo's url" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <input type="text" name='candidateName' required placeholder="Tarun Kumar" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <input type="date" name='DOB' required placeholder="02/02/1998" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name='subject' required placeholder="Political Science" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <input type="email" name='candidateEmail' required placeholder="tarunkumar@mail.com " className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Phone number</span>
                        </label>
                        <input type="tel" name='phoneNumber' required placeholder="9876543210" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name='address' required placeholder="Berhampore, India" className="input input-bordered" />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>


                </form>
            </div>

        </div>
    );
};

export default Apply;