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
        boxShadow: isExpanded ? '0 0 1rem 0.1rem rgba(255,255,255, 0.2)' : '',
        borderRadius: '1rem',
        border: isExpanded ? 'none' : '3px solid rgba(255,255,255,0.2)',
        transition: 'all 0.5s ease-in-out',
        margin: isExpanded ? '1rem 0' : '0',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isExpanded
            ? 'rgba(255,255,255,0.7)'
            : 'rgba(0, 0, 0, 0.7)',
          padding: '1rem',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          borderBottomLeftRadius: isExpanded ? '0' : '1rem',
          borderBottomRightRadius: isExpanded ? '0' : '1rem',
          color: isExpanded ? 'black' : 'white',
          transition: 'all 0.5s ease-in-out',
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
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 1rem 0.1rem rgba(255,255,255, 0.2)',
          color: 'white',
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
          flexDirection: !isMobile && !isVertical ? 'row' : 'column',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            height:
              isExpanded && !isMobile
                ? '500px'
                : isExpanded && isMobile && isVertical
                ? '450px'
                : isExpanded && isMobile && !isVertical
                ? '400px'
                : '0',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <p
            style={{
              padding: '1rem',
              fontSize: isVertical
                ? '2.5vh'
                : !isVertical && isMobile
                ? '3.2vw'
                : '2.6vw',
            }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DropdownDrawerItem;
