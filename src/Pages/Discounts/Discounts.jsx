import discount1 from "../../assets/images/discout1.png";
import discount2 from "../../assets/images/discout2.png";
import discount3 from "../../assets/images/discout3.png";

const Discounts = () => {
  return (
    <div className="container mx-auto space-y-4">
      <h1 className="text-violet-400 text-4xl font-extrabold text-center mt-16 mb-16">
        Discounts for Today for you
      </h1>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={discount1} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">20% of with Concert and Music</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Claim</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={discount2} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">45% of with Fashion Show</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Claim</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={discount3} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">30% of with Cosplay Events</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Claim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
