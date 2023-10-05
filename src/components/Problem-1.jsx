import React, { useEffect, useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState("all");
    const [inputData, setInputData] = useState({
        name: "",
        status: "",
    });
    const [filterData, setFilterData] = useState([]);
    const [tasks, setTasks] = useState([]);

    const handleClick = (val) => {
        setShow(val);
        if (val === "all") {
            setFilterData(sortData(tasks));
            return;
        }
        const newData = tasks.filter(
            (item) => item.status?.toLowerCase() === val
        );
        setFilterData(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputData.name || !inputData.status)
            return alert("Please fill all the fields");
        setTasks((prev) => [...prev, inputData]);
        setFilterData((prev) => [...prev, inputData]);
        setInputData({
            name: "",
            status: "",
        });
    };

    const sortData = (array) => {
        const sortItem = array.sort((a, b) => {
            if (a.status.toLowerCase() === "active") return -1;
            if (b.status.toLowerCase() === "active") return 1;
            if (a.status.toLowerCase() === "completed") return -1;
            if (b.status.toLowerCase() === "completed") return 1;
            return 0;
        });
        return sortItem;
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        onSubmit={handleSubmit}
                        className="row gy-2 gx-3 align-items-center mb-4"
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                onChange={(e) =>
                                    setInputData((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                className="form-control"
                                value={inputData?.name}
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) =>
                                    setInputData((prev) => ({
                                        ...prev,
                                        status: e.target.value,
                                    }))
                                }
                                value={inputData?.status}
                                name="status"
                                placeholder="Status"
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "all" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "active" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "completed" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
