/** @format */

import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal";

//Object that contain our model

const modalLookup = {
  TestModal
};

const ModalManger = ({ currentModal }) => {
  let renderedModal;

  if (currentModal) {
    //destructure the modal type
    const { modalType, modalProps } = currentModal;

    //redender the modal component above
    const modalComponent = modalLookup[modalType];

    renderedModal = <modalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

const mapStateToProps = (state) => {
  return {
    currentModal: state.modals
  };
};

export default connect(null, mapStateToProps)(ModalManger);
