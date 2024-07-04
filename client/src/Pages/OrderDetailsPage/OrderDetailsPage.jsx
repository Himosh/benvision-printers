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
import { useNavigate } from 'react-router-dom';

function OrderDetailsPage() {
  // const { selectedPageSize } = useAppContext();
  // const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  // const [selectedColor, setSelectedColor] = useState(null);

  const navigate = useNavigate();
  const { 
    selectedPageSizeId,
    selectedPaperColour,
    selectedCopySide,
    selectedCopyColour,
    selectedFrontMaterial,
    selectedFrontMaterialColour,
    selectedBackMaterial,
    selectedBackMaterialColour,
    selectedBindingOption,
    selectedPaddingOption,
    selectedFoldingOption,
    selectedPaperType,
    selectedStaplingOption
   } = useAppContext();

  const [isDoneOne, setIsDoneOne] = useState(false)
  const [isDoneTwo, setIsDoneTwo] = useState(false)
  const [isDoneThree, setIsDoneThree] = useState(false)
  const [warning, setWarning] = useState('');

  // const handleSelectedPageSize = (id) => {
  //   setSelectedPageSizeId(id);
  // };

  // const handleSelectedColor = (color) => {
  //   setSelectedColor(color);
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const onClickOne = () => {
    if (!selectedPageSizeId) {
        setWarning('Please select a page size before proceeding...');
        scrollToTop();
    } else if (!selectedPaperColour) {
        setWarning('Please select a page colour before proceeding...');
        scrollToTop();
    } else if (!selectedCopySide || !selectedCopyColour) {
        setWarning('Please select a copy side and colour before proceeding...');
        scrollToTop();
    } else {
        setIsDoneOne(true);
        scrollToTop();
        setWarning('');
    }
};

const onClickTwo = () => {
  if (!selectedFrontMaterial || !selectedFrontMaterialColour || !selectedBackMaterial || !selectedBackMaterialColour) {
    setWarning('Please select all cover details before proceeding.');
    scrollToTop();
  } else {
    setIsDoneTwo(true);
    scrollToTop();
    setWarning('');
  }
};


  const onClickBack = () => {
    setIsDoneOne(false);
  }

  const onClickBackTwo = () => {
      setIsDoneTwo(false);
  }

  const onClickThree = () => {
    if (!selectedBindingOption || !selectedPaddingOption || !selectedFoldingOption || !selectedPaperType || !selectedStaplingOption) {
      setWarning('Please select all other details before finishing.');
      scrollToTop();
    } else {
      setIsDoneThree(true);
      setWarning('');
      navigate('/summary');
    }
  };
  

  return (
    <div className="order-page-container">
      {!isDoneOne && !isDoneTwo && !isDoneThree && (
      <h1>Select your requirements here!</h1>
      )}
       {isDoneOne && !isDoneTwo && !isDoneThree && (
      <h1>Great, One step more...</h1>
      )}
        {isDoneOne && isDoneTwo && !isDoneThree && (
      <h1>Whoo! You're almost done.</h1>
      )}
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
      {warning && <p className="warning">{warning}</p>}
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
          {/* <Link to="/summary"> */}
          <button className='progress-button' onClick={onClickThree}>Finish</button>
          {/* </Link> */}
        </div>
      </div>
    </div>  
  );
}

export default OrderDetailsPage;
