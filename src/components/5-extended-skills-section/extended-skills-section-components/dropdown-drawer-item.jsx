import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CheckOrientation } from '../../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../../utils/CheckDevice.jsx';

function DropdownDrawerItem({ title, body, thumbnail }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const isMobile = CheckDevice();
  const isVertical = CheckOrientation();

  return (
    <div
      style={{
        width: '100%',
        padding: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isExpanded
            ? 'rgba(255,255,255,0.1)'
            : 'rgba(0, 0, 0, 0.7)',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          borderBottomLeftRadius: isExpanded ? '0' : '1rem',
          borderBottomRightRadius: isExpanded ? '0' : '1rem',
          boxShadow: isExpanded
            ? 'none'
            : '0 0 1rem 0.1rem rgba(255,255,255, 0.2)',
          border: isExpanded ? 'none' : '3px solid rgba(255,255,255,0.2)',
          padding: '1rem',
          transition: 'all 0.5s ease-in-out',
          color: 'white',
        }}
      >
        <h2>{title}</h2>
        <Button
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#1e1e1e',
            border: '1px solid #fff',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '1rem',
            width: '5rem',
          }}
        >
          {isExpanded ? 'Hide' : 'Show'}
        </Button>
      </div>
      <div
        style={{
          overflow: 'hidden',
          boxShadow:
            'inset 0 0 1rem 0.1rem rgba(255,255,255, 0.2), 0 0 1rem 0.1rem rgba(255,255,255, 0.2)',
          minHeight: isExpanded ? '300px' : '0',
          height: isExpanded ? 'auto' : '0',
          padding: isExpanded ? '2rem' : '1rem',
          opacity: isExpanded ? 1 : 0,
          color: 'white',
          transition: 'all 0.5s ease-in-out',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          flexDirection: !isMobile && !isVertical ? 'row' : 'column',
        }}
      >
        <p
          style={{
            marginBottom: '2rem',
          }}
        >
          {body}
        </p>
        <div
          style={{
            width: !isMobile && !isVertical ? '50%' : '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={thumbnail}
            style={{
              width: '80%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '1rem',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DropdownDrawerItem;
