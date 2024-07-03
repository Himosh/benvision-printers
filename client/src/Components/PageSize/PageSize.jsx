import React from 'react';
import PageSizeData from '../Data';
import "./PageSize.css";
import { useAppContext } from '../AppContext';

function PageSize() {
  const { selectPageSize, selectedPageSizeId } = useAppContext();

  return (
    <div className="container">
      <h2>Size of paper/envelop</h2>
      <div className="card-container">
        {PageSizeData.map((item) => (
          <div
            className={`card ${selectedPageSizeId === item.id ? 'selected' : ''}`}
            key={item.id}
            onClick={() => selectPageSize(item.id)}
          >
            <img src={item.image} alt='' />
            <div className="text-content">
              <h3>{item.size}</h3>
              <h4>{item.width} x {item.height}mm</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageSize;