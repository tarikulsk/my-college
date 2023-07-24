import { Link } from "react-router-dom";


const AppliedCLG = ({ college }) => {

    const { collegeName, candidateName, DOB, photo, subject, candidateEmail, phoneNumber, address } = college;

    return (
        <div>
            <div className='border border-orange-300 rounded-md '>
                <div className='border grid md:grid-cols-5  border-orange-300 p-6 '>
                    <div className='col-span-1 p-14'>
                        <img src={photo} alt="" />
                    </div>

                    <div className=' col-span-3'>
                        <div className='text-left'>
                            <h1 className='text-2xl font-bold mt-2 '> {collegeName} </h1>
                            <h3 className='mt-1 '>{candidateName} </h3>
                            <div className=' flex gap-5 mt-1 '>
                                <h1>{DOB}</h1>

                            </div>
                            <div className='  flex gap-5  mt-1 '>

                                <h3> </h3>
                            </div>
                        </div>
                    </div>


                    <div className=' p-12 col-span-1'>
                        {/* <button className="btn bg-purple-500 border-none text-white"> <Link to={`/jobdetails/${id}`}

                        >View Details</Link>  </button> */}
                    </div>



                </div>


            </div >

        </div >
    );
};

export default AppliedCLG;