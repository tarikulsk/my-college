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
                <div>
                    <img className="w-full " src="https://i.ibb.co/pPYDz1h/Untitled-design-7.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="w-full " src="https://i.ibb.co/C7Fs2W6/Untitled-design-9.png" />
                    <p className="legend">Legend 2</p>
                </div>

            </Carousel>

        </div>
    );
};

export default Hero;