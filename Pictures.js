import React, { useState, useCallback } from "react";
//import ReactDOM from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Pictures_link";
import "./Pictures_link";
import "./Pictures.css";

function Pictures() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    //TURN THIS OFF FROM BEING A CAROUSEL
    <div className="pictures">
      <div className="pictures__container">
        <div className="pictures__wrapper">
          <ul className="pictures__items">
            {/* <div className="modal-dialog-modal-sm"> */}
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title, 
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
            {/* </div>  */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Pictures;
