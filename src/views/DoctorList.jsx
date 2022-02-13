import React, { useEffect, useState } from "react";
import { Container, Nav, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import api from '../api';

export const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (doctors.length == 0) {
      getDoctors().then((res) => {
        console.log(res.data);
        setDoctors(res.data);
      });
    }
  }, [doctors]);

  const getDoctors = async () => {
    return await api.get("http://localhost:50500/spitali/api/Doctors");
  };

  return (
    <Container>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Emri</th>
            <th>Spitali</th>
            <th>Departamenti</th>
            <th>Vlereso doktorin</th>
          </tr>
        </thead>
        <tbody>
          {doctors.legnth == 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            doctors.map((doc, index) => {
              return (
                <tr key={index} className="clickable">
                  <td>{doc.doctorId}</td>
                  <td>
                    {doc.name} {doc.surname}
                  </td>
                  <td>{doc.hospital}</td>
                  <td>{doc.departments}</td>
                  <td>
                    <Nav.Link
                      className="btn btn-info"
                      onClick={() =>
                        navigate("/doctor/" + doc.doctorId + "/" + doc.name)
                      }
                    >
                      Vlereso doktorin
                    </Nav.Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </Container>
  );
};
