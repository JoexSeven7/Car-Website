import React, { useContext, useState } from 'react';
import './banner.css';
import { AppContext } from '../App';
import SlideBtn from '../components/SlideBtn';
import CircleBar from '../components/CircleBar';
import { Link } from 'react-router-dom';

function Banner() {
  const { data: cars, setData: setCars } = useContext(AppContext);

  const [video, setVideo] = useState(false);

  const toggleVideo = () => {
    setVideo(!video);
  };

  const handleSlideChange = (ind) => {
    if (ind >= 4) {
      ind = -1;
    }

    setCars(
      cars.map((car, index) => ({
        ...car,
        active: index === ind + 1
      }))
    );
  };
  return (
    <div className="banner">
      {cars &&
        cars.length > 0 &&
        cars.slice(0, 5).map((car, index) => (
          <div
            key={car._id}
            className={`slide ${car.active ? 'active' : undefined}`}>
            <div className="container-fluid">
              <div className="row banner-top">
                <div className="col-lg-4 p-0 banner-top-left">
                  <div className="banner-title">
                    <h1>Get Your Dream {car.make}</h1>
                    <span className="slide-number">0{car._id}</span>
                  </div>
                  <SlideBtn index={index} slideChange={handleSlideChange}/>
                </div>
                <div className="col-lg-8 p-0 banner-top-right">
                  <div className="banner-img">
                    <img
                      src={car.bannerImg}
                      alt=""
                      className={`img-fluid ${video ? undefined : 'active'}`}
                    />
                    <video
                      className={`banner-video  ${
                        video ? 'active' : undefined
                      }`}
                      src={car.video}
                      autoPlay
                      loop
                      muted></video>

                    <div className="car-brief">
                      <div className="car-intro">
                        <CircleBar
                          name="Power"
                          number={car.power}
                          color="#f82249"
                        />

                        <CircleBar
                          name="Engine"
                          number={car.engine}
                          color="#1865ff"
                        />

                        <CircleBar
                          name="New"
                          number={car.new}
                          color="#5ff880"
                        />
                      </div>

                      <div className="car-nav">
                        <li>
                          <Link to={`/vehicles/${car._id}`}>
                            Details <i className="bi bi-arrow-right-short"></i>
                          </Link>
                        </li>
                        <li>
                          <Link onClick={toggleVideo}>
                            {video ? 'image' : 'video'}{' '}
                            <i className="bi bi-arrow-right-short"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/vehicles">
                            More Vehicles{' '}
                            <i className="bi bi-arrow-right-short"></i>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row banner-bottom">
                <div className="col-lg-4 p-0">
                  <div className="banner-img">
                    <img src={car.leftImg} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-5 p-0">
                  <div className="car-description">
                    <h2>{car.title}</h2>
                    <div className="car-features">
                      <p>{car.description}</p>
                      <Link
                        to={`/vehicles/${car._id}`}
                        className="detail-link text-center">
                        Explore <i className="bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 p-0">
                  <img src={car.rightImg} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Banner;
