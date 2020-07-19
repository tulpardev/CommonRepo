import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";
import "../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../../../node_modules/react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Table from "./Table.js";
import initialState from "../../redux/reducers/initialState.js";

function ProducedCoilManagement() {
  const dispatch = useDispatch();
  const producedCoils = useSelector(
    (state) => state.producedCoilsReducer
  );

  const [state, setState] = useState({
    page: 1,
    loading: false,
    data: producedCoils.slice(0,10),
    sizePerPage: 10,
  });
  useEffect(() => {
    dispatch(producedCoilActions.getProducedCoils(sizePerPage, page - 1));
  }, []);

  const handleTableChange = (type, { page, sizePerPage }) => {
    dispatch(producedCoilActions.getProducedCoils(sizePerPage, page - 1));
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      setState(() => ({
        page,
        loading: initialState.loadingProd,
        data: producedCoils.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage
      }));
    }, 3000);
    initialState.loadingProd = true;
     setState(() => ({ loading:true, data: data }));
  };

  const { data, sizePerPage, page, loading } = state;
  return (
    <Table
      data={data}
      page={page}
      sizePerPage={sizePerPage}
      totalSize={producedCoils.length*10 }
      loading={false}
      onTableChange={handleTableChange}
    />
  );
}
export default ProducedCoilManagement;
