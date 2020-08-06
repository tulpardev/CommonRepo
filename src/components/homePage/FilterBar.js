import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import { Form, Navbar, Button, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as producedCoilActions from "../../redux/actions/producedCoilActions";

function FilterBar({ sideBarLink }) {
  const dispatch = useDispatch();
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

  const DateRangeCustomInput = ({ value, onClick }) => (
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
    let { name, value } = event.target;
    if (name === "CoilStatus" && value === "10: PLANNED") {
      value = 10;
    } else if (name === "CoilStatus" && value === "90: PRODUCED") {
      value = 90;
    } else if (name === "CoilStatus" && value === "95: WEIGHTED") {
      value = 95;
    } else if (name === "CoilStatus" && value === "100: RELEASED") {
      value = 100;
    } else if (name === "CoilStatus" && value === "115: DELETED") {
      value = 115;
    }
    setFilterData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    let { ProdCoilId, InputCoilId, CoilStatus } = filterData;
    let ProdStartDate = formatTime(startDate);
    let ProdEndDate = formatTime(endDate);

    if (prodCoilIdCheck === false) {
      ProdCoilId = "";
    }
    if (inputCoilIdCheck === false) {
      InputCoilId = "";
    }
    if (coilStatusCheck === false) {
      CoilStatus = "";
    }
    if (dateCheck === false) {
      ProdStartDate = "";
      ProdEndDate = "";
    }

    let filteredDataWithCheck = {
      ProdCoilId: ProdCoilId,
      InputCoilId: InputCoilId,
      CoilStatus: CoilStatus,
      ProdStartDate: ProdStartDate,
      ProdEndDate: ProdEndDate,
    };
    if (sideBarLink === "scheduleListLink") {
      NavbarBrand = "Schedule List Management";
    } else if (sideBarLink === "inputCoilLink") {
      NavbarBrand = "Input Coil Management";
    } else if (sideBarLink === "producedCoilLink") {
      //dispatch(producedCoilActions.getProducedCoilsByFilter(filteredDataWithCheck));
    } else if (sideBarLink === "lineStoppageLink") {
      NavbarBrand = "Line Stoppage Management";
    }
  }

  const formatTime = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const miliSeconds = date.getMilliseconds();

    //2020-08-02 15:43:17.140
    const monthText = month < 10 ? `0${month}` : month;
    const dayText = day < 10 ? `0${day}` : day;
    const hoursText = hours < 10 ? `0${hours}` : hours;
    const minutesText = minutes < 10 ? `0${minutes}` : minutes;
    const secondsText = seconds < 10 ? `0${seconds}` : seconds;
    let miliSecondsText;
    if (miliSeconds < 10) {
      miliSecondsText = `00${miliSeconds}`;
    } else if (miliSeconds > 10 && miliSeconds < 100) {
      miliSecondsText = `0${miliSeconds}`;
    } else {
      miliSecondsText = miliSeconds;
    }
    let dateFormat = `${year}-${monthText}-${dayText}`;
    return dateFormat;
  };

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
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<DateRangeCustomInput />}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        customInput={<DateRangeCustomInput />}
      />
      <Form inline onSubmit={handleSave}>
        <Form.Group>
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
        </Form.Group>
        <Form.Group>
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
              aria-describedby="basic-addon2"
              name="InputCoilId"
              value={filterData.InputCoilId}
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group>
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
              name="CoilStatus"
              //value={filterData.CoilStatus}
              onChange={handleChange}
            >
              <option></option>
              <option>10: PLANNED</option>
              <option>90: PRODUCED</option>
              <option>95: WEIGHTED</option>
              <option>100: RELEASED</option>
              <option>115: DELETED</option>
            </Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Button type="submit" style={{ marginLeft: 10 }}>
            Filter
          </Button>
        </Form.Group>
      </Form>
    </Navbar>
  );
}

export default FilterBar;
