import { Modal } from "react-bootstrap";

const CustomModal = ({
    show,
    handleClose,
    modalData,
    handleModal,
    setModalData,
    handleDeatilsModal,
}) => {
    const handleChnage = (e) => {
        if (e.target.checked) {
            const newData = modalData?.data.filter((item) => item.id % 2 === 0);
            setModalData((prev) => ({ ...prev, filterData: newData }));
        } else {
            setModalData((prev) => ({ ...prev, filterData: modalData?.data }));
        }
    };

    return (
        <Modal size="lg" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-lg btn-outline-primary btnA"
                        type="button"
                        onClick={() => handleModal("Modal A")}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning btnB"
                        type="button"
                        onClick={() => handleModal("Modal B")}
                    >
                        US Contacts
                    </button>
                </div>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modalData?.filterData?.map((item, index) => {
                            return (
                                <tr
                                    onClick={() => handleDeatilsModal(item)}
                                    key={index}
                                >
                                    <td>{item.id}</td>
                                    <td>{item?.country?.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <div className="checkbox">
                    <label>
                        <input onChange={handleChnage} type="checkbox" /> Only
                        Even
                    </label>
                </div>
                <button
                    className="btn btn-lg btn-outline-danger closeBtn"
                    type="button"
                    onClick={handleClose}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
