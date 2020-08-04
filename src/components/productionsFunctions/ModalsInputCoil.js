import React, { useState } from "react";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";

function ModalsInputCoil() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        New
      </Button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Schedule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form>
            <Container>
              {/* Stack the columns on mobile by making one full-width and the other half-width */}
              <Row>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalScheduledId">
                    <Form.Label column sm={4}>
                      Schedule ID
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Schedule ID" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalInputCoilId">
                    <Form.Label column sm={4}>
                      Input Coil ID
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Input Coil ID" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalScheduleStatus">
                    <Form.Label column sm={4}>
                      Schedule Status
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="text" placeholder="Schedule Status" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalCoilStatus">
                    <Form.Label column sm={4}>
                      Coil Satatus
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control type="email" placeholder="Coil Satatus" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalScheduleRemark">
                    <Form.Label column sm={2}>
                      Schedule Remark
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Schedule Remark" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>

        <Modal.Body className="show-grid">
          <Tabs
            justify
            variant="tabs"
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="generalData" title="Genaral Data">
              <Form>
                <Container>
                  {/* Stack the columns on mobile by making one full-width and the other half-width */}
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduledId"
                      >
                        <Form.Label column sm={4}>
                          Schedule ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="text" placeholder="Schedule ID" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalInputCoilId"
                      >
                        <Form.Label column sm={4}>
                          Input Coil ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Input Coil ID"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduleStatus"
                      >
                        <Form.Label column sm={4}>
                          Schedule Status
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Schedule Status"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalCoilStatus">
                        <Form.Label column sm={4}>
                          Coil Satatus
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="email"
                            placeholder="Coil Satatus"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduleRemark"
                      >
                        <Form.Label column sm={2}>
                          Schedule Remark
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Schedule Remark"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Tab>
            <Tab eventKey="processData" title="Process Data">
              <Form>
                <Container>
                  {/* Stack the columns on mobile by making one full-width and the other half-width */}
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduledId"
                      >
                        <Form.Label column sm={4}>
                          Schedule ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="text" placeholder="Schedule ID" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalInputCoilId"
                      >
                        <Form.Label column sm={4}>
                          Input Coil ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Input Coil ID"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduleStatus"
                      >
                        <Form.Label column sm={4}>
                          Schedule Status
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Schedule Status"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalCoilStatus">
                        <Form.Label column sm={4}>
                          Coil Satatus
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="email"
                            placeholder="Coil Satatus"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduleRemark"
                      >
                        <Form.Label column sm={2}>
                          Schedule Remark
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Schedule Remark"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Tab>
            <Tab eventKey="coatingData" title="Coating Data">
              <Form>
                <Container>
                  {/* Stack the columns on mobile by making one full-width and the other half-width */}
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduledId"
                      >
                        <Form.Label column sm={4}>
                          Schedule ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="text" placeholder="Schedule ID" />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalInputCoilId"
                      >
                        <Form.Label column sm={4}>
                          Input Coil ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Input Coil ID"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduleStatus"
                      >
                        <Form.Label column sm={4}>
                          Schedule Status
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Schedule Status"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalCoilStatus">
                        <Form.Label column sm={4}>
                          Coil Satatus
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="email"
                            placeholder="Coil Satatus"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalScheduleRemark"
                      >
                        <Form.Label column sm={2}>
                          Schedule Remark
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Schedule Remark"
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalsInputCoil;
