import React from "react";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import overlayFactory from 'react-bootstrap-table2-overlay';
function Table({ data, page, sizePerPage, onTableChange, totalSize,loading,expandRow }) {

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
      text: "Calculated Weight",
      headerAlign: "center",
    },
    {
      dataField: "measureD_WEIGHT",
      text: "Measured Weight",
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

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#00BFFF",
  };

  return (
    <div>
      <BootstrapTable
        remote
        keyField="msG_COUNTER"
        data={data}
        columns={columns}
        pagination={paginationFactory({ page, sizePerPage, totalSize })}
        onTableChange={onTableChange}
        loading={ loading }
        overlay={ overlayFactory({ spinner: true, styles: { overlay: (base) => ({...base, background: 'rgba(255, 0, 0, 0.5)'}) } }) }
        striped
        hover
        condensed
        selectRow={selectRow}
        expandRow={ expandRow }
      />
    </div>
  );
}
export default Table;
