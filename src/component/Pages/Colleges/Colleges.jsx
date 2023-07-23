import { useLoaderData } from "react-router-dom";
import College from "./College";

const Colleges = () => {
    const colleges = useLoaderData();
    console.log(colleges);
    return (
        <div className="pt-20">
            <div className="text-5xl text-center font-bold">
                Our College
            </div>
            <div className="grid md:grid-cols-3 p-20 gap-20" >
                {
                    colleges.map(college => <College
                        key={college.id}
                        college={college}
                    ></College>)
                }
            </div>


        </div>
    );
};

export default Colleges;