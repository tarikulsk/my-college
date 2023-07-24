import { useLoaderData } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero";
import Research from "./Research/Research";
import TopColleges from "./TopColleges/TopColleges";

const Home = () => {
    const colleges = useLoaderData()
    console.log(colleges);


    return (
        <div>
            <Hero></Hero>
            <br />

            <div>
                <h1 className="text-5xl font-bold text-center p-10">Top Colleges</h1>
                <div className="grid md:grid-cols-3 p-20">

                    {
                        colleges.map(college => <TopColleges
                            key={college.id}
                            college={college}></TopColleges>)
                    }
                </div>
            </div>

            <br />
            <Gallery></Gallery>
            <br />
            <Research></Research>

        </div>
    );
};

export default Home;