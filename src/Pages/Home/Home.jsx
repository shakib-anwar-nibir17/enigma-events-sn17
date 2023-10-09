import Header from "../Shared/Header/Header";
import KnowUs from "./KnowUs/KnowUs";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <KnowUs></KnowUs>
      <div className="mt-16">
        <h2 className="text-violet-400 text-4xl font-extrabold text-center mb-16">
          Moments We have Covered
        </h2>
        <PhotoGallery></PhotoGallery>
      </div>
    </div>
  );
};

export default Home;
