import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import { Form, Navbar, Button, InputGroup, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";

function FilterBar({ sideBarLink }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [prodCoilIdCheck, setProdCoilIdCheck] = useState(false);
  const [inputCoilIdCheck, setInputCoilIdCheck] = useState(false);
  const [coilStatusCheck, setCoilStatusCheck] = useState(false);
  const [dateCheck, setDateCheck] = useState(false);
  const [filterData, setFilterData] = useState({
    ProdCoilId: "",
    InputCoilId: "",
    CoilStatus: "",
  });
  const dispatch = useDispatch();

  const ExampleCustomInput = ({ value, onClick }) => (
    <button
      className="btn btn-info"
      onClick={onClick}
      style={{ marginLeft: 10 }}
    >
      {value}
    </button>
  );

  function handleChangeCheckBoxProd(evt) {
    setProdCoilIdCheck(evt.target.checked);
  }
  function handleChangeCheckBoxInput(evt) {
    setInputCoilIdCheck(evt.target.checked);
  }
  function handleChangeCheckBoxStatus(evt) {
    setCoilStatusCheck(evt.target.checked);
  }
  function handleChangeCheckBoxDate(evt) {
    setDateCheck(evt.target.checked);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFilterData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    console.log(filterData);
  }

  function handleSave(event) {
    event.preventDefault();
    console.log(filterData);
    dispatch(producedCoilActions.getProducedCoilsByFilter(filterData));
    if (prodCoilIdCheck === false) {
      console.log("dahil etme");
    }
  }

  let NavbarBrand = "";
  if (sideBarLink === "scheduleListLink") {
    NavbarBrand = "Schedule List Management";
  } else if (sideBarLink === "inputCoilLink") {
    NavbarBrand = "Input Coil Management";
  } else if (sideBarLink === "producedCoilLink") {
    NavbarBrand = "Produced Coil Management";
  } else if (sideBarLink === "lineStoppageLink") {
    NavbarBrand = "Line Stoppage Management";
  }
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand>{NavbarBrand}</Navbar.Brand>
      <InputGroup.Prepend>
        <InputGroup.Checkbox
          aria-label="Checkbox for following text input"
          value={dateCheck}
          onChange={handleChangeCheckBoxDate}
        />
      </InputGroup.Prepend>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<ExampleCustomInput />}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<ExampleCustomInput />}
      />
      <Form inline onSubmit={handleSave}>
        <Form inline>
          <InputGroup style={{ marginLeft: 10 }}>
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                value={prodCoilIdCheck}
                onChange={handleChangeCheckBoxProd}
              />
            </InputGroup.Prepend>
            <FormControl
              placeholder="Prod. Coil Id"
              aria-label="ProdCoilId"
              aria-describedby="basic-addon1"
              name="ProdCoilId"
              value={filterData.ProdCoilId}
              onChange={handleChange}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <InputGroup style={{ marginLeft: 10 }}>
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                aria-label="InputCoilId"
                value={inputCoilIdCheck}
                onChange={handleChangeCheckBoxInput}
              />
            </InputGroup.Prepend>
            <FormControl
              placeholder="Input Coil Id"
              aria-label="InputCoilId"
              aria-describedby="basic-addon1"
              name="InputCoilId"
              value={filterData.InputCoilId}
              onChange={handleChange}
            />
          </InputGroup>
        </Form>
        <Form inline>
          <InputGroup style={{ marginLeft: 10 }}>
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                value={coilStatusCheck}
                onChange={handleChangeCheckBoxStatus}
              />
            </InputGroup.Prepend>
            <Form.Control
              as="select"
              type="text"
              name="REMARK"
              onChange={handleChange}
            >
              <option>10: PLANNED</option>
              <option>90: PRODUCED</option>
              <option>95: WEIGHTED</option>
              <option>100: RELEASED</option>
              <option>115: DELETED</option>
            </Form.Control>
          </InputGroup>
        </Form>
        <Form inline>
          <Button type="submit" style={{ marginLeft: 10 }}>
            Filter
          </Button>
        </Form>
      </Form>
    </Navbar>
  );
}

export default FilterBar;
