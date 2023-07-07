import { useState } from "react";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import styles from "./FormPage.module.scss";

const FormPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleEmployeeCreated = () => {
    handleOpenModal();
  };

  return (
    <main className={styles.page}>
      <h2>Create Employee</h2>
      <Form onEmployeeCreated={handleEmployeeCreated} />
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal} />
    </main>
  );
};

export default FormPage;
