import cardPicture from "../assets/images/RESUME_PHOTO.jpg" ;
import {about} from "../data.js"

const Home = () => {
    return (
      <div className="d-flex about-parent text-warning bg-dark">
          <div className="about-child">
            <div>
              <img src={cardPicture} alt="" width="300px" height="550px" />
            </div>
          </div>
          <div className="about-child card container-fluid bg-dark">
            <div className="card-header">
              <h1>Hello Everyone, I am Mukeshkumar....!</h1>
            </div>
            <div className="card-body text-justify-center">
              <ul className="px-5">
              {about.map((data, index) => {
                return <li className="tab h3 content-color content-data" key={index}> {data} </li>
              })}
              </ul>
              <h3 className="tab content-color text-center">
                Thank you for visiting this page...
              </h3>
            </div>
          </div>
      </div>
    );
  };
  
  export default Home;