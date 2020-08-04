import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "./Table.js";
import ModalsProducedCoil from "./ModalsProducedCoil";

function ProducedCoilManagement() {
  const dispatch = useDispatch();
  const producedCoils = useSelector((state) => state.producedCoilsForTableReducer);

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
        <ModalsProducedCoil idInput={row.msG_COUNTER} exCoilId={row.eX_COIL_ID} />
      </div>
    ),
    showExpandColumn: true,
    expandByColumnOnly: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return (
          <b>-</b>
        );
      }
      return (
        <b>...</b>
      );
    }
  };

  const columns = [
    {
      dataField: "msG_COUNTER",
      text: "Msg Counter",
      headerAlign: "center",
    },
    {
      dataField: "eX_COIL_ID",
      text: "Produced Coil Id",
      headerAlign: "center",
    },
    {
      dataField: "schedulE_ID",
      text: "Scheduled Id",
      headerAlign: "center",
    },
    {
      dataField: "eX_STEEL_GRADE_ID",
      text: "Steel Grade",
      headerAlign: "center",
    },
    {
      dataField: "width",
      text: "Nominal Width",
      headerAlign: "center",
    },
    {
      dataField: "thickness",
      text: "Nom. Thickness",
      headerAlign: "center",
    },
    {
      dataField: "calC_WEIGHT",
      text: "Cal. Weight",
      headerAlign: "center",
    },
    {
      dataField: "measureD_WEIGHT",
      text: "Meas. Weight",
      headerAlign: "center",
    },
    {
      dataField: "productioN_END_DATE",
      text: "Prod.End Date",
      headerAlign: "center",
      align: "left",
      style: {
        fontSize: "14px",
      },
    },
  ];


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
      keyField="msG_COUNTER"
      columns = {columns}
    />
  );
}
export default ProducedCoilManagement;
