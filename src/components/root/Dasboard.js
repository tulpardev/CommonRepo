import React from "react";
import { Row, Col } from "reactstrap";
import CustomerList from "../customers/CustomerList";
import AddCustomers from "../customers/AddCustomers";

function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs="3">
          <CustomerList/>
        </Col>
        <Col xs="9">
            <AddCustomers/>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
