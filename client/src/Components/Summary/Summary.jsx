// import React from 'react';
// import { useAppContext } from '../AppContext';
// import "./Summary.css";
// import PageSizeData from '../Data';
// import WireIcon from '../../Assets/WireIcon.svg';
// import SpiralIcon from '../../Assets/SpiralIcon.svg';
// import VelvoIcon from '../../Assets/VelvoIcon.svg';
// import TapeIcon from '../../Assets/TapeIcon.svg';
// import HardcoverIcon from '../../Assets/HardcoverIcon.svg';
// import PerfectIcon from '../../Assets/PerfectIcon.svg';
// import SideGlue from '../../Assets/SideGlue.svg';
// import TopGlue from '../../Assets/TopGlue.svg';
// import FoldingOne from '../../Assets/FoldingOne.svg';
// import FoldingTwo from '../../Assets/FoldingTwo.svg';
// import FoldingThree from '../../Assets/FoldingThree.svg';
// import FoldingFour from '../../Assets/FoldingFour.svg';
// import StaplingOne from '../../Assets/StaplingOne.svg';
// import StaplingTwo from '../../Assets/StaplingTwo.svg';
// import StaplingThree from '../../Assets/StaplingThree.svg';

// import emailjs from 'emailjs-com';
// import PdfDocument from '../PdfDocument/PdfDocument';

// function Summary() {
//   const { 
//     selectedFrontMaterial, selectedPageSizeId, selectedFrontMaterialColour, 
//     selectedBackMaterial, selectedBackMaterialColour, 
//     selectedPaperColour, selectedCopySide, selectedCopyColour, 
//     selectedBindingOption, selectedPaddingOption, selectedFoldingOption, selectedStaplingOption, selectedPaperType
//   } = useAppContext();
  
//   const selectedPageSize = PageSizeData.find(item => item.id === selectedPageSizeId);

//   const getBindingIcon = (bindingOption) => {
//     switch (bindingOption) {
//       case 'Wire':
//         return WireIcon;
//       case 'Spiral':
//         return SpiralIcon;
//       case 'Velvo':
//         return VelvoIcon;
//       case 'Tape':
//         return TapeIcon;
//       case 'Hardcover':
//         return HardcoverIcon;
//       case 'Perfect':
//         return PerfectIcon;
//       default:
//         return null;
//     }
//   };

//   const getOptionImage = (option) => {
//     switch (option) {
//       case 'Side Glue':
//         return SideGlue;
//       case 'Top Glue':
//         return TopGlue;
//       case 'Folding One':
//         return FoldingOne;
//       case 'Folding Two':
//         return FoldingTwo;
//       case 'Folding Three':
//         return FoldingThree;
//       case 'Folding Four':
//         return FoldingFour;
//       case 'Stapling One':
//         return StaplingOne;
//       case 'Stapling Two':
//         return StaplingTwo;
//       case 'Stapling Three':
//         return StaplingThree;
//       default:
//         return null;
//     }
//   };

//   const sendEmail = async () => {
//     try {
//       // Generate PDF blob using PdfDocument component
//       const pdfBlob = await PdfDocument({
//         selectedFrontMaterial, selectedPageSizeId, selectedFrontMaterialColour,
//         selectedBackMaterial, selectedBackMaterialColour,
//         selectedPaperColour, selectedCopySide, selectedCopyColour,
//         selectedBindingOption, selectedPaddingOption, selectedFoldingOption, selectedStaplingOption, selectedPaperType
//       });

//       // Prepare email form data
//       const formData = {
//         from_name: 'Your Name',
//         to_email: 'recipient@example.com', // Replace with recipient's email address
//         message: 'PDF Document',
//         attachment: pdfBlob,
//       };

//       // Send email using emailjs
//       emailjs.send('service_dir800i', 'template_58p36wj', formData, 'GUdObcS3xb-HzmRbQ')
//         .then((result) => {
//           console.log('Email successfully sent!', result.text);
//         })
//         .catch((error) => {
//           console.error('Failed to send email:', error);
//         });
//     } catch (error) {
//       console.error('Failed to generate PDF blob:', error);
//     }
//   };

//   return (
//     selectedPageSize && (
//       <div className="summary">
//         <div className='summary-container'>
//           {selectedFrontMaterial && (
//             <div className="summary-size">
//               <h2>Front Cover</h2>
//               <p>{selectedFrontMaterial}</p>
//               <p>{selectedFrontMaterialColour}</p>
//             </div>
//           )}
//           {selectedBackMaterial && (
//             <div className="summary-size">
//               <h2>Back Cover</h2>
//               <p>{selectedBackMaterial}</p>
//               <p>{selectedBackMaterialColour}</p>
//             </div>
//           )}
//           {selectedPaperColour && (
//             <div className="summary-size">
//               <h2>Paper/Envelop Colour</h2>
//               <p>{selectedPaperColour}</p>
//               <div className="summary-color-box" style={{ backgroundColor: selectedPaperColour === 'White' ? '#ffffff' : selectedPaperColour }}></div>
//             </div>
//           )}
//           {selectedCopySide && (
//             <div className="summary-size">
//               <h2>Copies to be Printed</h2>
//               <p>{selectedCopySide}</p>
//               <p>{selectedCopyColour}</p>
//             </div>
//           )}
//           {selectedBindingOption && (
//             <div className="summary-size">
//               <h2>Binding Option</h2>
//               <div className="binding-content">
//                 <img src={getBindingIcon(selectedBindingOption)} alt={selectedBindingOption} />
//                 <p>{selectedBindingOption}</p>
//               </div>
//             </div>
//           )}
//           {selectedPaddingOption && (
//             <div className="summary-size">
//               <h2>Padding Option</h2>
//               <div className="padding-content">
//                 <img src={getOptionImage(selectedPaddingOption)} alt={selectedPaddingOption} />
//                 <p>{selectedPaddingOption}</p>
//               </div>
//             </div>
//           )}
//           {selectedFoldingOption && (
//             <div className="summary-size">
//               <h2>Folding Option</h2>
//               <div className="folding-content">
//                 <img src={getOptionImage(selectedFoldingOption)} alt={selectedFoldingOption} />
//                 <p>{selectedFoldingOption}</p>
//               </div>
//             </div>
//           )}
//           {selectedStaplingOption && (
//             <div className="summary-size">
//               <h2>Stapling Option</h2>
//               <div className="stapling-content">
//                 <img src={getOptionImage(selectedStaplingOption)} alt={selectedStaplingOption} />
//                 <p>{selectedStaplingOption}</p>
//               </div>
//             </div>
//           )}
//           {selectedPaperType && (
//             <div className="summary-size">
//               <h2>Paper Type</h2>
//               <p>{selectedPaperType}</p>
//             </div>
//           )}
//           {selectedPageSize && (
//             <div className="summary-size">
//               <h2>Selected Size</h2>
//               <p>{selectedPageSize.size}</p>
//               <p>{selectedPageSize.width} x {selectedPageSize.height}mm</p>
//             </div>
//           )}
//         </div>
//         <div className="summary-actions">
//           <button className="summary-button" onClick={sendEmail}>Send PDF</button>
//         </div>
//       </div>
//     )
//   );
// }

// export default Summary;


// without sending pdf attachment
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import './Summary.css';
import PageSizeData from '../Data';
import WireIcon from '../../Assets/WireIcon.svg';
import SpiralIcon from '../../Assets/SpiralIcon.svg';
import VelvoIcon from '../../Assets/VelvoIcon.svg';
import TapeIcon from '../../Assets/TapeIcon.svg';
import HardcoverIcon from '../../Assets/HardcoverIcon.svg';
import PerfectIcon from '../../Assets/PerfectIcon.svg';
import SideGlue from '../../Assets/SideGlue.svg';
import TopGlue from '../../Assets/TopGlue.svg';
import FoldingOne from '../../Assets/FoldingOne.svg';
import FoldingTwo from '../../Assets/FoldingTwo.svg';
import FoldingThree from '../../Assets/FoldingThree.svg';
import FoldingFour from '../../Assets/FoldingFour.svg';
import StaplingOne from '../../Assets/StaplingOne.svg';
import StaplingTwo from '../../Assets/StaplingTwo.svg';
import StaplingThree from '../../Assets/StaplingThree.svg';
import emailjs from 'emailjs-com';
import '../ContactSection/ContactSection.css';
import Modal from '../Modal/Modal';


function Summary() {
  const { 
    selectedFrontMaterial, selectedPageSizeId, selectedFrontMaterialColour, 
    selectedBackMaterial, selectedBackMaterialColour, 
    selectedPaperColour, selectedCopySide, selectedCopyColour, 
    selectedBindingOption, selectedPaddingOption, selectedFoldingOption, selectedStaplingOption, selectedPaperType
  } = useAppContext();
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    copies: '',
    sheets: ''
  });
  const [errors, setErrors] = useState({});

  const selectedPageSize = PageSizeData.find(item => item.id === selectedPageSizeId);

  const getBindingIcon = (bindingOption) => {
    switch (bindingOption) {
      case 'Wire':
        return WireIcon;
      case 'Spiral':
        return SpiralIcon;
      case 'Velvo':
        return VelvoIcon;
      case 'Tape':
        return TapeIcon;
      case 'Hardcover':
        return HardcoverIcon;
      case 'Perfect':
        return PerfectIcon;
      default:
        return null;
    }
  };

  const getOptionImage = (option) => {
    switch (option) {
      case 'Side Glue':
        return SideGlue;
      case 'Top Glue':
        return TopGlue;
      case 'Folding One':
        return FoldingOne;
      case 'Folding Two':
        return FoldingTwo;
      case 'Folding Three':
        return FoldingThree;
      case 'Folding Four':
        return FoldingFour;
      case 'Stapling One':
        return StaplingOne;
      case 'Stapling Two':
        return StaplingTwo;
      case 'Stapling Three':
        return StaplingThree;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required";
    if (!form.email) tempErrors.email = "Email is required";
    if (!form.copies) tempErrors.copies = "Number of copies is required";
    if (!form.sheets) tempErrors.sheets = "Number of sheets is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const formData = {
          name: form.name,
          email: form.email,
          message: `
            Front Cover: ${selectedFrontMaterial}, ${selectedFrontMaterialColour}
            Back Cover: ${selectedBackMaterial}, ${selectedBackMaterialColour}
            Paper/Envelope Colour: ${selectedPaperColour}
            Copies to be Printed: ${selectedCopySide}, ${selectedCopyColour}
            Binding Option: ${selectedBindingOption}
            Padding Option: ${selectedPaddingOption}
            Folding Option: ${selectedFoldingOption}
            Stapling Option: ${selectedStaplingOption}
            Paper Type: ${selectedPaperType}
            Selected Size: ${selectedPageSize.size}, ${selectedPageSize.width} x ${selectedPageSize.height}mm
            Number of Copies/Sets: ${form.copies}
            Number of Sheets in Original: ${form.sheets}
          `,
        };

        await emailjs.send('service_dir800i', 'template_58p36wj', formData, 'GUdObcS3xb-HzmRbQ')
          .then((result) => {
            console.log('Email successfully sent!', result.text);
            setModalMessage('Email successfully sent!');
            setShowModal(true);
          })
          .catch((error) => {
            console.error('Failed to send email:', error);
            setModalMessage('Failed to send email. Please try again later.');
            setShowModal(true);
          });
      } catch (error) {
        console.error('Failed to send email:', error);
        setModalMessage('Failed to send email. Please try again later.');
        setShowModal(true);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="summary">
      <div className='summary-container-one'>
        {selectedPaperType && (
          <div className="summary-size">
            <h2>Paper Type</h2>
            <p>{selectedPaperType}</p>
          </div>
        )}
        {selectedPageSize && (
          <div className="summary-size">
            <h2>Selected Size</h2>
            <p>{selectedPageSize.size}</p>
            <p>{selectedPageSize.width} x {selectedPageSize.height}mm</p>
          </div>
        )}
        {selectedFrontMaterial && (
          <div className="summary-size">
            <h2>Front Cover</h2>
            <p>{selectedFrontMaterial}</p>
            <p>{selectedFrontMaterialColour}</p>
          </div>
        )}
        {selectedBackMaterial && (
          <div className="summary-size">
            <h2>Back Cover</h2>
            <p>{selectedBackMaterial}</p>
            <p>{selectedBackMaterialColour}</p>
          </div>
        )}
        {selectedPaperColour && (
          <div className="summary-size">
            <h2>Paper/Envelop Colour</h2>
            <p>{selectedPaperColour}</p>
            <div className="summary-color-box" style={{ backgroundColor: selectedPaperColour === 'White' ? '#ffffff' : selectedPaperColour }}></div>
          </div>
        )}
        {selectedCopySide && (
          <div className="summary-size">
            <h2>Copies to be Printed</h2>
            <p>{selectedCopySide}</p>
            <p>{selectedCopyColour}</p>
          </div>
        )}
      </div>
      <div className='summary-container-two'>
        {selectedBindingOption && (
          <div className="summary-size">
            <h2>Binding Option</h2>
            <div className="binding-content">
              <img src={getBindingIcon(selectedBindingOption)} alt={selectedBindingOption} />
              <p>{selectedBindingOption}</p>
            </div>
          </div>
        )}
        {selectedPaddingOption && (
          <div className="summary-size">
            <h2>Padding Option</h2>
            <div className="padding-content">
              <img src={getOptionImage(selectedPaddingOption)} alt={selectedPaddingOption} />
              <p>{selectedPaddingOption}</p>
            </div>
          </div>
        )}
        {selectedFoldingOption && (
          <div className="summary-size">
            <h2>Folding Option</h2>
            <div className="folding-content">
              <img src={getOptionImage(selectedFoldingOption)} alt={selectedFoldingOption} />
              <p>{selectedFoldingOption}</p>
            </div>
          </div>
        )}
        {selectedStaplingOption && (
          <div className="summary-size">
            <h2>Stapling Option</h2>
            <div className="stapling-content">
              <img src={getOptionImage(selectedStaplingOption)} alt={selectedStaplingOption} />
              <p>{selectedStaplingOption}</p>
            </div>
          </div>
        )}
      </div>
      <form className="summary-form" onSubmit={handleSubmit}>
        <h2>Fill your order details</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="copies">Number of Copies/Sets:</label>
          <input
            type="number"
            id="copies"
            name="copies"
            value={form.copies}
            onChange={handleChange}
          />
          {errors.copies && <p className="error">{errors.copies}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="sheets">Number of Sheets in Original:</label>
          <input
            type="number"
            id="sheets"
            name="sheets"
            value={form.sheets}
            onChange={handleChange}
          />
          {errors.sheets && <p className="error">{errors.sheets}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {showModal && (
        <Modal closeModal={closeModal}>
          <p>{modalMessage}</p>
        </Modal>
      )}
    </div>
  );
}

export default Summary;
