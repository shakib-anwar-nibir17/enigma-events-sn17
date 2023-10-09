import { Link } from "react-router-dom";
import knowUsPic from "../../../assets/images/about-us-1.jpg";

const KnowUs = () => {
  return (
    <div className="flex mt-16">
      <div className="w-1/2">
        <img className="w-full" src={knowUsPic} alt="" />
      </div>
      <div className="w-1/2 px-4">
        <p className="text-semibold text-justify text-2xl">
          <span className="text-5xl text-violet-400">AT ENIGMA EVENTS,</span> we
          are not just event managers; we are curators of unforgettable
          experiences. With a passion for entertainment that knows no bounds, we
          have made it our mission to transform ordinary moments into
          extraordinary memories. Our expertise lies in the world of
          entertainment events, where we take every opportunity to mesmerize,
          captivate, and inspire. From electrifying concerts and dazzling
          theater performances to side-splitting comedy shows and exhilarating
          sports events, we craft experiences that leave you speechless{" "}
          <Link to="/about" className="text-violet-400">
            Read more ....
          </Link>
        </p>
      </div>
    </div>
  );
};

export default KnowUs;
