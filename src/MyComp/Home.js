import axios from "axios";
import React, { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
const Home = () => {
  const [contact, setcontact] = useState({
    fullname: "",
    email: "",
    mobilenumber: "",
    notes: "",
    birthdate: "",
    gender: "",
    city: "",
  });

  const cityList = [
    "Ahmedabad",
    "Vadodra",
    "Bharuch",
    "Surat",
    "Navsari",
    "Valsad",
  ];
  const [userData, setuserData] = useState([]);
  const [isEdit, setisEdit] = useState(true);
  const [id, setid] = useState("");
  const [errorMsg, seterrorMsg] = useState(
    "Records Not Availale or Add Records"
  );

  const Handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcontact({ ...contact, [name]: value });
    // console.log(value);
  };

  const ApiReq = "http://localhost:4000";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await axios.get(`${ApiReq}/studentall`).then((res) => {
        console.log(res.data.data);
        setuserData(res.data.data);
      });
    } catch (error) {
      // console.log(error.message);
      seterrorMsg(error.message);
    }
  };

  const submit = async () => {
    console.log(contact);
    try {
      const { fullname, email, mobilenumber, notes, birthdate, gender, city } =
        contact;
      if (
        fullname === "" &&
        email === "" &&
        mobilenumber === "" &&
        notes === "" &&
        birthdate === "" &&
        gender === "" &&
        city === ""
      ) {
        setShow(true);
        settoastBg("warning");
        settoastMsg("Please Input All Detail !!!");
        return false;
      } else {
        await axios
          .post(`${ApiReq}/studentcreate/`, { ...contact, idcode: Date.now() })
          .then((res) => {
            console.log(res);
          });
        setcontact({
          fullname: "",
          email: "",
          mobilenumber: "",
          notes: "",
          birthdate: "",
          gender: "",
          city: "",
        });

        getData();
        setShow(true);
        settoastBg("success");
        settoastMsg("Record Submitted !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onEdit = (data) => {
    console.log(data);
    setcontact({
      fullname: data.fullname,
      email: data.email,
      mobilenumber: data.mobilenumber,
      notes: data.notes,
      birthdate: data.birthdate,
      gender: data.gender,
      city: data.city,
    });
    setid(data.idcode);
    setisEdit(false);
  };
  const onUpdate = async () => {
    console.log({ ...contact, idcode: id });
    try {
      // setcontact
      await axios
        .post(`${ApiReq}/studentupdate`, { ...contact, idcode: id })
        .then((res) => {
          console.log(res);
        });
      setcontact({
        fullname: "",
        email: "",
        mobilenumber: "",
        notes: "",
        birthdate: "",
        gender: "",
        city: "",
      });
      getData();
      setisEdit(true);
      setShow(true);
      settoastBg("info");
      settoastMsg("Record Updated !!!");
    } catch (error) {}
  };
  const onClose = () => {
    setcontact({
      fullname: "",
      email: "",
      mobilenumber: "",
      notes: "",
      birthdate: "",
      gender: "",
      city: "",
    });
    setisEdit(true);
  };
  const onDelete = async (data) => {
    console.log(data);
    let text = "Are You Sure";
    if (window.confirm(text) === true) {
      // console.log(contact);
      await axios
        .post(`${ApiReq}/studentdelete/`, { idcode: data.idcode })
        .then((res) => {
          console.log(res);
        });
      getData();
    }
    setShow(true);
    settoastBg("danger");
    settoastMsg("Record Deleted !!!");
  };

  // for toastyfy
  const [show, setShow] = useState(false);
  const [toastBg, settoastBg] = useState("");
  const [toastMsg, settoastMsg] = useState("");

  return (
    <div className="row mt-5 m-3 ">
      <div className=" col-4  border rounded p-4 h-25">
        <div className="col mb-2">
          <input
            type="text"
            className="form-control"
            name="fullname"
            value={contact.fullname}
            onChange={Handler}
            placeholder="Fullname"
          />
        </div>
        <div className="col mb-2">
          <input
            type="email"
            className="form-control"
            name="email"
            value={contact.email}
            onChange={Handler}
            placeholder="Email"
          />
        </div>

        <div className="mb-2">
          <input
            type="number"
            className="form-control"
            name="mobilenumber"
            value={contact.mobilenumber}
            onChange={Handler}
            placeholder="Mobile Number"
          />
        </div>

        <div className="mb-2">
          <input
            type="date"
            className="form-control"
            name="birthdate"
            value={contact.birthdate}
            onChange={Handler}
            placeholder="birthdate"
            title="Enter Birthday"
          />
        </div>
        <div className="text-center">
          <div className="form-check form-check-inline mb-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              onChange={Handler}
              checked={contact.gender === "Male"}
              id="male"
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline mb-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              onChange={Handler}
              checked={contact.gender === "Female"}
              id="Female"
            />
            <label className="form-check-label" htmlFor="Female">
              Female
            </label>
          </div>
        </div>

        <div className="mb-2">
          <select
            // multiple
            className="form-select"
            name="city"
            value={contact.city}
            onChange={Handler}
          >
            {cityList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="notes"
            rows="3"
            value={contact.notes}
            onChange={Handler}
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          {isEdit ? (
            <button
              type="button"
              onClick={submit}
              className="btn btn-outline-primary mb-2 btn-block"
            >
              Submit
            </button>
          ) : (
            <div>
              <button
                type="button"
                onClick={onUpdate}
                className="btn btn-outline-info mb-2 btn-block"
              >
                Update
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline-danger mb-2 ms-2 btn-block"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="col-8 border rounded p-4 ">
        {userData.length > 0 ? (
          <div
            className="table-responsive overflow-y-scroll"
            style={{ height: "400px" }}
          >
            <table className="table table-primary">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile No</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.fullname}</td>
                    <td>{data.email}</td>
                    <td>{data.mobilenumber}</td>
                    <td>
                      <button
                        onClick={() => onEdit(data)}
                        className="btn  btn-outline-success btn-sm mb-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(data)}
                        className="btn btn-outline-danger btn-sm mb-2 ms-1"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-danger mt-5 h4">
            <strong>{errorMsg}</strong>
          </div>
        )}
      </div>
      <ToastContainer position="bottom-center">
        <Toast
          bg={toastBg}
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white text-center">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Home;
