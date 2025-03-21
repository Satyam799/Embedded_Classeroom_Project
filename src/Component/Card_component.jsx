import './Card_component.css';


function Card_component({ heading, description, subDescription , img }) {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <svg stroke="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
              <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
              <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.84375 0.03125C20.191406 0.0703125..." />
              </g>
            </svg>
            <strong className='heading'>{heading}</strong>
           
          </div>
        </div>

        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <small className="badge">LEARN | BUILD | INNOVATE</small>
            <div className="description">
            <img src={img}/>

              <div className="title">
                <p className="title">
                  <div className='div'>
                  <p className='bechalor'>{description}</p>
                  <ul className='colledge2'>{subDescription?.map((el)=>{
                    return <li>{el}</li>
                  })}</ul>
                  </div>
                </p>
                <svg fillRule="nonzero" height="15px" width="15px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <g style={{ mixBlendMode: "normal" }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" stroke="none" fillRule="nonzero" fill="#20c997">
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="card-footer">
                10 Mins &nbsp; | &nbsp; Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_component;
