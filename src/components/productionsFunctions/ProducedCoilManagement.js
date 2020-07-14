import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function ProducedCoilManagement({options}) {
  const dispatch = useDispatch();
  const producedCoils = useSelector((state) => state.producedCoilsReducer);
  useEffect(() => {
    dispatch(producedCoilActions.getProducedCoils());
  }, []);

  const selectRowProp = {
    mode: 'checkbox',
    bgColor: 'pink',
    clickToSelect: true
  };

   options = {
    onPageChange:onPageChange,
    onSizePerPageList:sizePerPageListChange,
    // sizePerPage: 10,  // which size per page you want to locate as default
      // pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
  };


  function sizePerPageListChange(sizePerPage) {
    console.log(`sayfa boyutu size: ${sizePerPage}`);
  }
  function onPageChange (page, sizePerPage) {
    dispatch(producedCoilActions.getProducedCoils(sizePerPage,page));
  //   console.log(`sayfa count: ${page}, sizePerPage: ${sizePerPage}`);
   }
  return (

    <BootstrapTable data={ producedCoils } striped hover condensed selectRow={ selectRowProp } pagination={ true } options={options} version='4'>
    <TableHeaderColumn dataField="msG_COUNTER" isKey={true} >
        Msg Counter
        </TableHeaderColumn>
        <TableHeaderColumn dataField="eX_COIL_ID">Produced Coil Id</TableHeaderColumn>
        <TableHeaderColumn dataField="schedulE_ID">Scheduled Id</TableHeaderColumn>
        <TableHeaderColumn dataField="eX_STEEL_GRADE_ID">Steel Grade</TableHeaderColumn>
        <TableHeaderColumn dataField="width">Nominal Width</TableHeaderColumn>
        <TableHeaderColumn dataField="thickness">Nominal Thickness</TableHeaderColumn>
        <TableHeaderColumn dataField="calC_WEIGHT">Calculated Weight</TableHeaderColumn>
        <TableHeaderColumn dataField="measureD_WEIGHT">Measured Weight</TableHeaderColumn>
        <TableHeaderColumn dataField="productioN_END_DATE">Production End Date</TableHeaderColumn>
  </BootstrapTable>

  );
}
export default ProducedCoilManagement;
       
