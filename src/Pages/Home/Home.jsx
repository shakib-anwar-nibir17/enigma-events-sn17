import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import Header from "../Shared/Header/Header";
import KnowUs from "./KnowUs/KnowUs";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Footer from "../Footer/Footer";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <div className="container mx-auto">
        <Header></Header>
        <KnowUs></KnowUs>
        <Services services={services}></Services>
        <div className="mt-16">
          <h2 className="text-violet-400 text-4xl font-extrabold text-center mb-16">
            Moments We have Covered
          </h2>
          <PhotoGallery></PhotoGallery>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
