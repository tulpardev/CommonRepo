import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";

function Modals({ idInput, exCoilId }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({
    scheduledId: "",
    measWeight: "",
  });

  const handleShow = () => {
    dispatch(producedCoilActions.getProducedCoilsFieldsById(idInput))
    setShow(true)
  };

  const handleClose = () => setShow(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setEditData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    console.log(editData)
  }

  function handleSave(event) {
    event.preventDefault();
    
    setShow(false);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Produced Coil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <Form onSubmit={handleSave}>
              <Form.Group>
                <Form.Label for="disabledTextInput">MSG COUNTER</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder={`${idInput}`}
                  disabled
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="disabledTextInput">
                  Produced Coil Id
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder={`${exCoilId}`}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Prod Coil Status</Form.Label>
                <Form.Control as="select">
                  <option>10: PLANNED</option>
                  <option>90: PRODUCED</option>
                  <option>95: WEIGHTED</option>
                  <option>100: RELEASED</option>
                  <option>115: DELETED</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Measured Weight</Form.Label>
                <Form.Control
                  type="text"
                  name="measWeight"
                  placeholder="0"
                  value={editData.measWeight}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Scheduled Id</Form.Label>
                <Form.Control
                  type="text"
                  name="scheduledId"
                  placeholder="0"
                  value={editData.scheduledId}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
