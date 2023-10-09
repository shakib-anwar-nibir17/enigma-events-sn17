import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, price, image } = service;

  return (
    <div data-aos="zoom-in-up">
      <div className="card border border-violet-400 p-4">
        <figure>
          <img
            className="w-[400px] md:w-[500px] h-[300px]"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-violet-700">{name}</h2>
          <p className="font-bold">
            price starts @ <span className="text-violet-700 text-2xl">$</span>
            <span className="text-violet-700 text-2xl">{price}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/service/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
