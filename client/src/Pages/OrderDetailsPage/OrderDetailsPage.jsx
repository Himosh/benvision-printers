import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./OrderDetailsPage.css";
import { useAppContext } from '../../Components/AppContext';
import PaperDetails from '../PaperDetails/PaperDetails';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import CoverDetails from '../CoverDetails/CoverDetails';
import OtherDetails from '../OtherDetails/OtherDetails';
import { fa1, fa2,fa3 ,faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OrderDetailsPage() {
  const { selectedPageSize } = useAppContext();
  const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  
  const [isDoneOne, setIsDoneOne] = useState(false)
  const [isDoneTwo, setIsDoneTwo] = useState(false)
  const [isDoneThree, setIsDoneThree] = useState(false)

  const handleSelectedPageSize = (id) => {
    setSelectedPageSizeId(id);
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const onClickOne = () => {
      setIsDoneOne(true);
      scrollToTop();
  }

  const onClickTwo = () => {
      setIsDoneTwo(true);
      scrollToTop();
  }

  const onClickBack = () => {
    setIsDoneOne(false);
  }

  const onClickBackTwo = () => {
      setIsDoneTwo(false);
  }

  const onClickThree = () => {
    setIsDoneThree(true);
    scrollToTop();
  }

  return (
    <div className="order-page-container">
      <h1>Select your requirements here!</h1>
      <div className="progress-bar-container">
        <div className="progress-container-one">
            <div className="progress-circle">
              <FontAwesomeIcon icon={isDoneOne? faCheck : fa1} style={{color:"#fff"}} />
            </div>
            <p>choose your pages</p>
        </div>
        <div class="divider"></div>
        <div className="progress-container-one">
            <div className="progress-circle">
              <FontAwesomeIcon icon={isDoneTwo? faCheck : fa2} style={{color:"#fff"}} />
            </div>
            <p>choose your covers</p>
        </div>
        <div class="divider"></div>
        <div className="progress-container-one">
            <div className="progress-circle">
              <FontAwesomeIcon icon={isDoneThree? faCheck : fa3} style={{color:"#fff"}} />
            </div>
            <p>choose other details</p>
        </div>
      </div>
      <div className={`step-one ${isDoneOne? 'hide' : ''}`}>
        <PaperDetails />
      </div>
      <div className={`step-two ${isDoneOne && !isDoneTwo? 'show' : ''}`}>
        <CoverDetails />
      </div>
      <div className={`step-three ${isDoneTwo? 'show' : ''}`}>
        <OtherDetails />
      </div>
      <div className="button-container">
        <div className={`button-container-one ${isDoneOne? 'hide' : ''}`}>
          <button className='progress-button' onClick={onClickOne}>Next</button>
        </div>
        <div className={`button-container-two ${isDoneOne && !isDoneTwo? 'show' : ''}`}>
          <button className='progress-button' onClick={onClickBack}>Back</button>
          <button className='progress-button' onClick={onClickTwo}>Next</button>
       </div>
       <div className={`button-container-two ${isDoneTwo? 'show' : ''}`}>
          <button className='progress-button' onClick={onClickBackTwo}>Back</button>
          <Link to="/summary">
          <button className='progress-button' onClick={onClickThree}>Finish</button>
          </Link>
        </div>
      </div>
    </div>  
  );
}

export default OrderDetailsPage;
