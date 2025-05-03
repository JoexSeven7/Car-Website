import React, { useState, useEffect } from 'react';
import './vehicleDetails.css';
import { useParams } from 'react-router-dom';
import IconBox from '../components/IconBox';

function VehicleDetails() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const index = parseInt(id) - 1;

  const fetchData = () => {
    fetch('http://localhost:3000/api/vehiclesData.json')
      .then((res) => res.json())
      .then((data) => setCar(data[index]))
      .catch((e) => console.log(e.massage));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="vehicle-details" className="page vehicle-details">
      <img src={car.pageBgImg} alt="" className="img-fluid page-img" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 p-0 details-left">
            <img
              src={car.bannerImg}
              alt=""
              className="img-fluid details-img-left"
            />

            <div className="price">
              {car.price &&
                car.price.toLocaleString('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                })}
              <span>Drive Away</span>
            </div>
            <a href="" className="contact-seller">
              <i className="bi bi-telephone-fill"></i> Contact Dealer
            </a>
          </div>
          <div className="col-lg-4 p-0 details-middle">
            <div className="content">
              <h2>Vehicle Details</h2>
              <div className="details-box">
                <i className="bi bi-emoji-smile"></i>
                <span>Luxury Performance</span>
                <p>
                  <strong>Engine:</strong> 8-cylinder 4.5L petrol, delivering
                  raw power and speed.
                </p>
              </div>

              <div className="details-box">
                <i className="bi bi-journal-richtext"></i>
                <span>Top Convertible</span>
                <p>
                  <strong>Power:</strong> Lightweight, open-air performance for
                  a thrilling drive.
                </p>
              </div>

              <div className="details-box">
                <i className="bi bi-clock"></i>
                <span>Italian Elegance</span>
                <p>
                  <strong>Design:</strong> Stunning design with superior
                  aerodynamics and luxury.
                </p>
              </div>

              <div className="details-box">
                <i className="bi bi-award"></i>
                <span>Hybrid Super car</span>
                <p>
                  <strong>Efficiency:</strong> Sustainable hybrid tech without
                  sacrificing speed.
                </p>
              </div>
            </div>
            <img
              src={car.leftImg}
              alt=""
              className="img-fluid  details-img-middle"
            />
          </div>
          <div className="col-lg-4 p-0 details-right">
            <img
              src={car.rightImg}
              alt=""
              className="img-fluid details-img-right"
            />

            <div className="d-flex gap-2">
              <IconBox
                icon="bx bx-tachometer"
                title='Engine'
                description="Best in Motion"
              />
              <IconBox icon="bx bx-world" title="Tools" />
            </div>
            <div className="details-description">
              <h4>Description</h4>
              <p>{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
