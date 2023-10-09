const Header = () => {
  return (
    <div
      className="bg-cover h-[70vh] flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/VJQHbkR/tijs-van-leur-Wi-Tisob-9dw-unsplash.jpg')",
      }}
    >
      <h2 className="text-7xl text-white px-4">
        Enigma Events: Unveiling Unforgettable Experiences
      </h2>
      <button className="bg-violet-600 p-4 w-1/6 mt-4 text-white font-bold">
        Join Us
      </button>
    </div>
  );
};

export default Header;
