import axios from "axios";
import React, { useEffect, useState } from "react";

const Records = () => {
  const [student, setstudent] = useState("");
  const [errorMsg, seterrorMsg] = useState(
    "Records Not Availale or Add Records"
  );
  const ApiReq = "http://localhost:4000";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await axios.get(`${ApiReq}/studentall`).then((res) => {
        console.log(res.data.data);
        setstudent(res.data.data);
      });
    } catch (error) {
      // console.log(error.message);
      seterrorMsg(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center border border-dark rounded-3 p-3 mb-1">
        <h3>Student Records</h3>
      </div>
      {student.length > 0 ? (
        <div className="table-responsive-lg border border-dark rounded-3 ">
          <table
            className="table table-striped
      table-hover	
      table-borderless
      table-primary
      align-middle"
          >
            <thead className="table-light">
              {/* <caption>Table Name</caption> */}
              <tr>
                <th>ID</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Mo-Number</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>City</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {student.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.fullname}</td>
                  <td>{data.email}</td>
                  <td>{data.mobilenumber}</td>
                  <td>{data.birthdate}</td>
                  <td>{data.gender}</td>
                  <td>{data.city}</td>
                  <td>{data.notes}</td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      ) : (
        <div className="text-center text-danger mt-5 h4">
          <strong>{errorMsg}</strong>
        </div>
      )}
    </div>
  );
};

export default Records;
