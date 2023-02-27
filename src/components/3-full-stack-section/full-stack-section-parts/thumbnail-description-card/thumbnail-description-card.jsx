import React, { useState } from 'react';
import { CheckOrientation } from '../../../../utils/CheckOrientation.jsx';
import { CheckDevice } from '../../../../utils/CheckDevice.jsx';
import { Card, Button, Modal } from 'react-bootstrap';

function ThumbnailDescriptionCard({
  thumbnail,
  title,
  brief,
  modalTitle,
  modalBody,
}) {
  const isVertical = CheckOrientation();
  const isMobile = CheckDevice();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Card
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        borderRadius: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '1rem',
        boxShadow: 'inset 0 0 2rem 0.5rem rgba(255,255,255, 0.2)',
        color: 'white',
      }}
    >
      <div
        className="card-thumbnail"
        style={{
          margin: '2%',
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 200,
          minWidth: isVertical ? 200 : !isVertical && isMobile ? 250 : 600,
          borderRadius: '1rem',
        }}
      ></div>
      <Card.Body>
        <Card.Title
          style={{
            textAlign: isVertical ? 'left' : 'center',
            padding: '2% 0',
          }}
        >
          <h2>{title}</h2>
        </Card.Title>
        <Card.Text
          style={{
            textAlign: isVertical ? 'left' : 'center',
          }}
        >
          <p>{brief}</p>
        </Card.Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2% 0',
          }}
        >
          <Button
            onClick={handleShowModal}
            style={{
              borderRadius: '1rem',
              minWidth: 150,
              maxWidth: isVertical ? 200 : 300,
              minHeight: 50,
            }}
          >
            Read More
          </Button>
        </div>
      </Card.Body>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: 'ease-in-out 0.3s',
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: '2rem',
              color: 'white',
              width: '100%',
              height: '100%',
            }}
          >
            <p>{modalBody}</p>
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default ThumbnailDescriptionCard;
