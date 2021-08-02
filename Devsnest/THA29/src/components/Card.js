import React from 'react';
import { useSelector } from 'react-redux';

const Card = () => {
  const locData = useSelector(state => state.locData);

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-4 col-12 col-md-4 portrait">
          <div className="card ">
            {locData.location ? (
              <div>
                <img src={locData.current.condition.icon} alt="" />
                <div className="temp">{locData.current.temp_c}°</div>
                <div className="desc">{locData.current.condition.text}</div>
                <div className="loc">{locData.location.name}</div>
                <div className="container">
                  <div className="row w-h-p">
                    <div className="col">
                      <div className="title">Wind now</div>
                      <div className="data">
                        {locData.current.wind_kph}
                        <span className="unit">KM</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {locData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">Precipitation</div>
                      <div className="data">
                        {locData.current.precip_mm}
                        <span className="unit">mm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>Location not Found</h2>
              // ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
