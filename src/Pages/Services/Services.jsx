import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
  return (
    <div>
      <h1 className="text-violet-400 text-4xl font-extrabold text-center mt-16 mb-16">
        Our Services
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};

export default Services;
