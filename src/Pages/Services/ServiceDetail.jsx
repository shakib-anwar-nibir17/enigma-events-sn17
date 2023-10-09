import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [service, setService] = useState();
  const { id } = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const serviceDetails = services.find((service) => service.id === id);
    setService(serviceDetails);
  }, [id, services]);

  if (!service) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>;
      </div>
    );
  }

  const { name, price, short_description, image } = service;

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-1/2 h-full rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{short_description}</p>
            <p className="bg-violet-400 p-4 text-white font-bold text-2xl w-1/2">
              Ticket Price:{" "}
              <span className="text-white font-bold">{price} USD</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
