import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "./Table.js";
import Modals from "./Modals";

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
        <Modals idInput={row.msG_COUNTER} exCoilId={row.eX_COIL_ID} />
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
