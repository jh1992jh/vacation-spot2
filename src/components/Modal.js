import React from 'react';
import video from '../items/Outside View Of An Airplane Wing.mp4';

const Modal = () => {
  return (
    <div className="modal fade text-dark" id="contact-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <video
              playsInline
              autoPlay
              loop
              muted
              style={{ maxWidth: '100%', minHeight: '100%', zIndex: '0' }}
            >
              <source type="video/mp4" src={video} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
