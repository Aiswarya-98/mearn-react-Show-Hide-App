import React from "react"
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit"

function Header() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src="https://cdn.dribbble.com/users/717532/screenshots/3892561/untitled2.gif" height="45" alt="" loading="lazy" />
          Show and Hide Content
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header
