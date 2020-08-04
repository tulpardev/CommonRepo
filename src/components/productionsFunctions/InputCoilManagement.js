import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as inputCoilActions from "../../redux/actions/inputCoilActions";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "./Table.js";
import ModalsInputCoil from "./ModalsInputCoil";

function InputCoilManagement() {
  const dispatch = useDispatch();
  const inputCoils = useSelector((state) => state.inputCoilsForTableReducer);

  const [state, setState] = useState({
    page: 1,
    loading: false,
    data: inputCoils,
    sizePerPage: 10,
  });

  useEffect(() => {
    dispatch(inputCoilActions.getInputCoils(sizePerPage, page - 1));
  }, []);

  const handleTableChange = (type, { page, sizePerPage }) => {
    dispatch(inputCoilActions.getInputCoils(sizePerPage, page - 1));
    setState(() => ({ data: inputCoils }));
  };

  const expandRow = {
    renderer: (row) => (
      <div>
        <ModalsInputCoil />
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
        return <b>-</b>;
      }
      return <b>...</b>;
    },
  };

  const columns = [
    {
      dataField: "coiL_NO",
      text: "Coil No",
      headerAlign: "center",
    },
    {
      dataField: "coiL_ID",
      text: "Input Coil Id",
      headerAlign: "center",
    },
    {
      dataField: "coiL_SEQ",
      text: "Coil Seq.",
      headerAlign: "center",
    },
    {
      dataField: "materiaL_GRADE_ID",
      text: "Steel Grade",
      headerAlign: "center",
    },
    {
      dataField: "width",
      text: "Width",
      headerAlign: "center",
    },
    {
      dataField: "thickness",
      text: "Thickness",
      headerAlign: "center",
    },
    {
      dataField: "length",
      text: "Length",
      headerAlign: "center",
    },
    {
      dataField: "weight",
      text: "Weight",
      headerAlign: "center",
    },
    {
      dataField: "internaL_DIAMETER",
      text: "Internal Diam.",
      headerAlign: "center",
    },
    {
      dataField: "status",
      text: "Coil Status",
      headerAlign: "center",
    },
    {
      dataField: "creatioN_DATE",
      text: "Creation Date",
      headerAlign: "center",
      align: "left",
      style: {
        fontSize: "9px",
      },
    },
  ];

  const { sizePerPage, page, loading } = state;
  return (
    <Table
      data={inputCoils}
      page={page}
      sizePerPage={sizePerPage}
      totalSize={inputCoils.length * 100}
      loading={loading}
      onTableChange={handleTableChange}
      expandRow={expandRow}
      keyField="coiL_NO"
      columns={columns}
    />
  );
}
export default InputCoilManagement;
