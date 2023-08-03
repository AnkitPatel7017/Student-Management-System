import React from "react";

function About() {
  return (
    <div className="container">
      <div className="text-center m-3 border border-dark border-2 rounded-2 fs-4">
        <p>
          <strong>Portfolio Name : </strong>Simple Student Record Managment
          System
          <br />
          <strong>FrontEnd : </strong>HTML,CSS,JavaScript,ReactJS,Bootstrap
          <br />
          <strong>BackEnd : </strong>Sqlite3
          <br />
        </p>
        <p>
          <strong>
            <u>Description</u>
          </strong>
          <br />
          -This is simple Student Record Managment System
          <br />
          -This Portfolio made with HTML,CSS,JavaScript,ReactJS,Bootstrap
          <br />
          - You Can Insert,Update,Delete Record
          <br />- For Database Sqlite3 used
          <br />
          -For Start Project <strong> "npm start"</strong> in Terminal
          <br />
          -For Start Database <strong> "npm run start-server"</strong> in
          Terminal
        </p>
      </div>
    </div>
  );
}

export default About;
