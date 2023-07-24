import { useLoaderData } from "react-router-dom";
import CollegesList from "./CollegesList";


const Admission = () => {
    const colleges = useLoaderData();
    return (
        <div>
            {
                colleges.map(college => <CollegesList
                    key={college.id}
                    college={college}
                ></CollegesList>)
            }

        </div>
    );
};

export default Admission;