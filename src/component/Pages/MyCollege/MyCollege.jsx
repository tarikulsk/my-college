import { useLoaderData } from "react-router-dom";
import AppliedCLG from "./appliedCLG";


const MyCollege = () => {

    const colleges = useLoaderData()
    // console.log(colleges.id);


    return (
        <div>
            {
                colleges.map(college => <AppliedCLG
                    key={college._id}
                    college={college}
                ></AppliedCLG>)
            }

        </div>
    );
};

export default MyCollege;