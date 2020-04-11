import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as customerActions from "../../redux/actions/customerActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function CustomerList() {
  const users = useSelector((state) => state.userListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerActions.userList());
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h1>Histograma Hoşgeldin</h1>
      {users.loading && (
        <em style={{ color: "white" }}>Kullanıcılar yükleniyor...</em>
      )}
      {users.error && <span className="text-danger">ERROR: {users.error}</span>}
      {users.items && (
        <ListGroup>
          {users.items.map((user, index) => (
            <ListGroupItem key={user.UserID}>{user.Name}</ListGroupItem>
          ))}
        </ListGroup>
      )}
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
}

export default CustomerList;
