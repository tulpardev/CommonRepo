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
  const [newScheduleDatas, setNewSchedulesDatas] = useState({
    ScheduleID: "",
    InputCoilID: "",
    ScheduleStatus: "",
    CoilStatus: "10: PLANNED",
    ScheduleRemark: "",
    SteelGradeID: "DC01",
    Width: "",
    Weight: "",
    Length: "",
    HeadScrapLength: "",
    TailScrapLength: "",
    ThermalCycle: "CQ",
    ExitSteelGradeId: "DX51D+Z",
    Sleeve: "NO",
    OilerMode: "",
    LowerCoatingWeightTarget: "",
    LowerCoatingWeightMin: "",
    LowerCoatingWeightMax: "",
    UpperCoatingWeightTarget: "",
    UpperCoatingWeightMin: "",
    UpperCoatingWeightMax: "",
  });

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNewSchedulesDatas((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    console.log(newScheduleDatas);
  }

  function handleSave(event) {
    event.preventDefault();
    console.log(newScheduleDatas);
    setShow(false);
  }
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        New
      </Button>

      <Button variant="primary" onClick={handleShow} style={{ marginLeft: 10 }}>
        Edit
      </Button>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ marginLeft: "auto" }}
          >
            New Schedule
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Form onSubmit={handleSave}>
            <Container>
              <Row>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalScheduledId">
                    <Form.Label column sm={4}>
                      Schedule ID
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Schedule ID"
                        name="ScheduleID"
                        value={newScheduleDatas.ScheduleID}
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Row} controlId="formHorizontalInputCoilId">
                    <Form.Label column sm={4}>
                      Input Coil ID
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        placeholder="Input Coil ID"
                        name="InputCoilID"
                        value={newScheduleDatas.InputCoilID}
                        onChange={handleChange}
                      />
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
                      <Form.Control
                        type="text"
                        placeholder="Schedule Status"
                        name="ScheduleStatus"
                        value={newScheduleDatas.ScheduleStatus}
                        onChange={handleChange}
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
                        as="select"
                        type="text"
                        name="CoilStatus"
                        value={newScheduleDatas.CoilStatus}
                        onChange={handleChange}
                      >
                        <option >10: PLANNED</option>
                        <option>90: PRODUCED</option>
                        <option>95: WEIGHTED</option>
                        <option>100: RELEASED</option>
                        <option>115: DELETED</option>
                      </Form.Control>
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
                      <Form.Control
                        type="text"
                        placeholder="Schedule Remark"
                        name="ScheduleRemark"
                        value={newScheduleDatas.ScheduleRemark}
                        onChange={handleChange}
                      />
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
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalSteelSteelGradeID"
                      >
                        <Form.Label column sm={4}>
                          Steel Steel GradeID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            as="select"
                            type="text"
                            name="SteelGradeID"
                            value={newScheduleDatas.SteelGradeID}
                            onChange={handleChange}
                          >
                            <option >DC01</option>
                            <option>DF01</option>
                            <option>DD11</option>
                            <option>DF600</option>
                            <option>SF01</option>
                            <option>DC01</option>
                            <option>AF03</option>
                            <option>DD11X</option>
                            <option>S275JR</option>
                            <option>SAE1010</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalWidth">
                        <Form.Label column sm={4}>
                          Width[mm]
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Width"
                            name="Width"
                            value={newScheduleDatas.Width}
                            onChange={handleChange}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalWeight">
                        <Form.Label column sm={4}>
                          Weight[kg]
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Weight"
                            name="Weight"
                            value={newScheduleDatas.Weight}
                            onChange={handleChange}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalLength">
                        <Form.Label column sm={4}>
                          Length[m]
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Length"
                            name="Length"
                            value={newScheduleDatas.Length}
                            onChange={handleChange}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontaleHeadScrapLength"
                      >
                        <Form.Label column sm={4}>
                          Head Scrap Length[m]
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Head Scrap Length"
                            name="HeadScrapLength"
                            value={newScheduleDatas.HeadScrapLength}
                            onChange={handleChange}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalTailScrapLength"
                      >
                        <Form.Label column sm={4}>
                          Tail Scrap Length[m]
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder=" Tail Scrap Length"
                            name="TailScrapLength"
                            value={newScheduleDatas.TailScrapLength}
                            onChange={handleChange}
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
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalThermalCycle"
                      >
                        <Form.Label column sm={4}>
                          Thermal Cycle
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            as="select"
                            type="text"
                            name="ThermalCycle"
                            value={newScheduleDatas.ThermalCycle}
                            onChange={handleChange}
                          >
                            <option >CQ</option>
                            <option>DQ</option>
                            <option>DDQ</option>
                            <option>EDDQ</option>
                            <option>HSS1</option>
                            <option>HSS2</option>
                            <option>FH</option>
                            <option>HR</option>
                            <option>HSLA</option>
                            <option>BH</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalExSteelGrade"
                      >
                        <Form.Label column sm={4}>
                          Ex. Steel Grade ID
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            as="select"
                            type="text"
                            name="ExitSteelGradeId"
                            value={newScheduleDatas.ExitSteelGradeId}
                            onChange={handleChange}
                          >
                            <option >DX51D+Z</option>
                            <option>DX51D+Z100B</option>
                            <option>DX52D+Z</option>
                            <option>DX53D+Z</option>
                            <option>DX54D+Z</option>
                            <option>GR33</option>
                            <option>GR50</option>
                            <option>HCT590X</option>
                            <option>S220GD+Z</option>
                            <option>HX300LAD+Z</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontaSleeve">
                        <Form.Label column sm={4}>
                          Sleeve
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            as="select"
                            type="text"
                            name="Sleeve"
                            value={newScheduleDatas.Sleeve}
                            onChange={handleChange}
                          >
                            <option>YES</option>
                            <option >NO</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Row} controlId="formHorizontalOilerMode">
                        <Form.Label column sm={4}>
                          Oiler Mode
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            placeholder="Oiler Mode"
                            name="OilerMode"
                            value={newScheduleDatas.OilerMode}
                            onChange={handleChange}
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
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalLowerCoating"
                      >
                        <Form.Label column sm={3}>
                          Lower Coating Weight[g/m^2]
                        </Form.Label>
                        <Col sm={2}>
                          <Form.Control
                            type="text"
                            placeholder="Target"
                            name="LowerCoatingWeightTarget"
                            value={newScheduleDatas.LowerCoatingWeightTarget}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={2}>
                          <Form.Control
                            type="text"
                            placeholder="Min"
                            name="LowerCoatingWeightMin"
                            value={newScheduleDatas.LowerCoatingWeightMin}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={2}>
                          <Form.Control
                            type="text"
                            placeholder="Max"
                            name="LowerCoatingWeightMax"
                            value={newScheduleDatas.LowerCoatingWeightMax}
                            onChange={handleChange}
                          />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        controlId="formHorizontalUpperCoating"
                      >
                        <Form.Label column sm={3}>
                          Upper Coating Weight[g/m^2]
                        </Form.Label>
                        <Col sm={2}>
                          <Form.Control
                            type="text"
                            placeholder="Target"
                            name="UpperCoatingWeightTarget"
                            value={newScheduleDatas.UpperCoatingWeightTarget}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={2}>
                          <Form.Control
                            type="text"
                            placeholder="Min"
                            name="UpperCoatingWeightMin"
                            value={newScheduleDatas.UpperCoatingWeightMin}
                            onChange={handleChange}
                          />
                        </Col>
                        <Col sm={2}>
                          <Form.Control
                            type="text"
                            placeholder="Max"
                            name="UpperCoatingWeightMax"
                            value={newScheduleDatas.UpperCoatingWeightMax}
                            onChange={handleChange}
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

export default ModalsInputCoil;
