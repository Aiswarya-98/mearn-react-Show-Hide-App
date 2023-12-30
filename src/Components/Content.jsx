import React, { useState } from "react"
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit"
import { MDBBtn } from "mdb-react-ui-kit"

function Content() {
  const [show, setShow] = useState()

  function visible() {
    setShow("HAI, WELCOME TO REACTJS")
  }

  function inVisible() {
    setShow("")
  }

  return (
    <div>
      <MDBTable>
        <MDBTableHead>
          <tr className="text-center p-4">
            <th scope="col">SHOW AND HIDE THE CONTENT</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr className="table-warning text-center">
            <th scope="row">
              <img src="https://i.pinimg.com/originals/eb/1e/e4/eb1ee44698dd68ae1ba1613d7bef7b4b.gif" height="205" alt="" loading="lazy" />
              <br /> <br /> <br />
              <h1>{show}</h1>
              {/* button */}
              <MDBBtn color="light" rippleColor="dark" onClick={visible}>
                SHOW
              </MDBBtn>
              &nbsp; &nbsp;
              <MDBBtn color="dark" onClick={inVisible}>
                HIDE
              </MDBBtn>
            </th>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default Content
