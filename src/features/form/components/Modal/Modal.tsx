import { Modal as TchikiModal } from "tchiki-modal-react";
import PropTypes from "prop-types";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const customStyles = {
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
  },
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <TchikiModal isOpen={isOpen} onClose={onClose} style={customStyles}>
      <h1>Success</h1>
      <p>Employee created</p>
    </TchikiModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
