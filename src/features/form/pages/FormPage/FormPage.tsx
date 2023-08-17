import { lazy, useState } from "react";
import styles from "./FormPage.module.scss";
const Form = lazy(() => import ("../../components/Form/Form"));
const Modal = lazy(() => import ("../../components/Modal/Modal"));

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
