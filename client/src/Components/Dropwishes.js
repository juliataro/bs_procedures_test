import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../index.css';


const gridExamplesPage = () => {
    return (
        <MDBContainer>
          <MDBRow >
              {/** Wishes Dropdown Button */}
            <MDBCol style={{ paddingLeft: 0, paddingRight: "10px" }}>
            <div class="btn-group">
  <button type="button" class="btn dropcolor">Soovitused / Eesmärgid</button>
  <button
    type="button"
    class="btn droptoggle dropdown-toggle dropdown-toggle-split"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    <span class="visually-hidden"></span>
  </button>
  <ul class="dropdown-menu">
 
  </ul>
</div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
  
  export default gridExamplesPage;
  