import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as customerActions from "../../redux/actions/customerActions";
import { ListGroup, ListGroupItem ,Badge} from "reactstrap";

function CustomerList() {
  const customers = useSelector(state => state.customerListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerActions.getCustomers());
  }, []);

  return (
    <div>
      <h3> <Badge color="warning">Customers</Badge></h3>
      <ListGroup>
        {customers.map(customer => (
          <ListGroupItem
            key={customer.UserID}
            >        
          {customer.Name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default CustomerList;
