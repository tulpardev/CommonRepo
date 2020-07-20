import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "./Table.js";

function ProducedCoilManagement() {
  const dispatch = useDispatch();
  const producedCoils = useSelector((state) => state.producedCoilsReducer);

  const [state, setState] = useState({
    page: 1,
    loading: false,
    data: producedCoils,
    sizePerPage: 10,
  });

  useEffect(() => {
    dispatch(producedCoilActions.getProducedCoils(sizePerPage, page - 1));
  }, []);

  const handleTableChange = (type, { page, sizePerPage }) => {
    dispatch(producedCoilActions.getProducedCoils(sizePerPage, page - 1));
    setState(() => ({ data: producedCoils }));
  };

  const expandRow = {
    renderer: (row) => (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Options
            </label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text" for="inputGroupSelect02">
              Options
            </label>
          </div>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    ),
    showExpandColumn: true,
    expandByColumnOnly: true,
  };

  const { sizePerPage, page, loading } = state;
  return (
    <Table
      data={producedCoils}
      page={page}
      sizePerPage={sizePerPage}
      totalSize={producedCoils.length * 100}
      loading={loading}
      onTableChange={handleTableChange}
      expandRow={expandRow}
    />
  );
}
export default ProducedCoilManagement;
