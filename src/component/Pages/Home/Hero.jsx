import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
    return (
        <div>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
            >

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/pPYDz1h/Untitled-design-7.png)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/C7Fs2W6/Untitled-design-9.png)' }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-start text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </Carousel>

        </div>
    );
};

export default Hero;  