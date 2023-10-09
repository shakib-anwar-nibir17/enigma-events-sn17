import Header from "../Shared/Header/Header";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="mt-6">
        <PhotoGallery></PhotoGallery>
      </div>
    </div>
  );
};

export default Home;
