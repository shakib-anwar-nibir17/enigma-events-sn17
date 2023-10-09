import aboutUsPic from "../../assets/images/about-us-2.jpg";
const About = () => {
  return (
    <div className="space-y-5 container mx-auto mb-28">
      <div>
        <img className="w-full" src={aboutUsPic} alt="" />
      </div>
      <div>
        <p className="leading-8 text-justify text-semibold text-2xl px-4">
          At Enigma Events, we are not just event managers; we are curators of
          unforgettable experiences. With a passion for entertainment that knows
          no bounds, we have made it our mission to transform ordinary moments
          into extraordinary memories. Our expertise lies in the world of
          entertainment events, where we take every opportunity to mesmerize,
          captivate, and inspire. From electrifying concerts and dazzling
          theater performances to side-splitting comedy shows and exhilarating
          sports events, we craft experiences that leave you speechless. What
          sets us apart is our unwavering commitment to excellence. Every event
          we manage is a masterpiece, meticulously designed to dazzle your
          senses and ignite your imagination. We do not just create events; we
          create memories that last a lifetime. Join us on a journey where the
          ordinary becomes extraordinary, where every event is a tapestry of
          enchantment, and where you are at the center of it all. Enigma Events
          is not just an event management company; it is your passport to a
          world of unparalleled entertainment. Experience the enigma, and let us
          unveil the magic of entertainment for you. Join us today and be part
          of something truly extraordinary. Welcome to Enigma Events, where
          every event is an adventure, and every moment is a masterpiece.
        </p>
      </div>
    </div>
  );
};

export default About;
