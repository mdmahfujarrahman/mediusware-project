import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal/CustomModal";
import { AppService } from "../service/appSevices";
import { useNavigate } from "react-router-dom";
import DetailsModal from "./CustomModal/DetailsModal";

const Problem2 = () => {
    const [showDeatilsModal, setShowDeatilsModal] = useState(false);
    const navigate = useNavigate();
    const [modalData, setModalData] = useState({
        title: "",
        data: [],
        filterData: [],
        singleData: {},
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDetailsModalClose = () => setShowDeatilsModal(false);
    const handleDetailsModalShow = () => setShowDeatilsModal(true);

    const handleModal = (val) => {
        setModalData((prev) => ({ ...prev, title: val }));
        handleShow();
        fetchData(val);
        const currentURL = new URL(window.location.href);
        currentURL.searchParams.set("ModalOpen", val.replace("Modal ", ""));
        navigate({ search: currentURL.search });
    };

    const fetchData = async (val) => {
        let getUrl =
            val === "Modal A"
                ? await AppService.getAllCountryReq()
                : await AppService.getUSCountryReq();

        const res = getUrl;
        setModalData((prev) => ({
            ...prev,
            data: res.data.results,
            filterData: res.data.results,
        }));
    };

    const handleDeatilsModal = (data) => {
        handleDetailsModalShow();
        setModalData((prev) => ({ ...prev, singleData: data }));
    };

    useEffect(() => {
        if (!show) {
            const currentURL = new URL(window.location.href);
            currentURL.searchParams.delete("ModalOpen");
            navigate({ search: currentURL.search });
        }
    }, [show]);

    console.log(modalData);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={() => handleModal("Modal A")}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={() => handleModal("Modal B")}
                    >
                        US Contacts
                    </button>
                </div>
                <CustomModal
                    handleClose={handleClose}
                    show={show}
                    modalData={modalData}
                    handleModal={handleModal}
                    setModalData={setModalData}
                    handleDeatilsModal={handleDeatilsModal}
                />
                <DetailsModal
                    show={showDeatilsModal}
                    handleClose={handleDetailsModalClose}
                    modalData={modalData}
                />
            </div>
        </div>
    );
};

export default Problem2;
