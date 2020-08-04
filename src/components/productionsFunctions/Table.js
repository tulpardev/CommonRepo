import React from "react";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import overlayFactory from 'react-bootstrap-table2-overlay';
function Table({ data, page, sizePerPage, onTableChange, totalSize,loading,expandRow,keyField,columns}) {


  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#00BFFF",
  };

  return (
    <div>
      <BootstrapTable
        remote
        keyField={keyField}
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
