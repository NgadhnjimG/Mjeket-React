import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

export const VleresoDoktorin = () => {
  let params = useParams();

  const [data, setData] = useState({ doctorId: params.id });

  const handleChange = (e) => {
    var tempData = data;
    tempData = {
      ...tempData,
      [e.target.name]: e.target.value,
    };
    setData(tempData);
  };

  const submit = () => {
    saveData().then((res) => {});
  };

  const saveData = async () => {
    var token = localStorage.getItem("token");
    var tempdata = data;
    tempdata = {
      ...tempdata,
      token: token.replace('"', ""),
    };

    return await axios.post(
      "http://localhost:50500/review/api/StarReviews",
      JSON.stringify(tempdata)
    );
  };

  return (
    <Container className="flex justify-content-center">
      <Form className="col-3">
        <FormGroup>
          <FormLabel>Vlereso doktorin me emrin {params.name}</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormLabel>Numri nga 1 deri ne 5</FormLabel>
          <FormControl type="number" onChange={handleChange} name="starRate" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Komenti</FormLabel>
          <textarea
            onChange={handleChange}
            className="form-control"
            type="number"
            name="comment"
          ></textarea>
        </FormGroup>
        <Button className="mt-3 mb-4" onClick={submit}>
          Ruaj
        </Button>
      </Form>
    </Container>
  );
};
