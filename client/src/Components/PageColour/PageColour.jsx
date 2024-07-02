import './PageColour.css';

function PageColour() {
  return (
    <div className="colour-container">
      <h2>Colour of paper/envelop</h2>
      <div className="colour-card-container">       
          <div className= 'colour-card-white'>
            <div className="colour-box-white"></div>
            <div className="colour-text-content">
              <p>White</p>
            </div>
          </div>
          <div className= 'colour-card-custom'>
            <div className="colour-box-white"></div>
            <div className="colour-text-content">
              <p>custom</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PageColour;
