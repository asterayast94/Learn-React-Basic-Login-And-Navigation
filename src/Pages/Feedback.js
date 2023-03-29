import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import { sum, ShowUSerNAme, checkUserLogedInStatus,ShowText } from '../component/sessionManager.js';
export default function Main(props) {
  // checkUserLogedInStatus();


  return (
    <div>
 
      
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Feedbacks </h3>

          {/* <button onClick={changePage}>Home</button> 
          <button onClick={changePage2}>in</button> */}

          <div className="text-center">
         
              <span className="link-primary" onClick={ }>
              <h2>Logged in user name is : {ShowUSerNAme()}</h2>
              </span>

              </div>
     

      
              </div>
  
 
   <div className="Auth-form-content">
<MDBTable align='middle'>
  <MDBTableHead>
    <tr>
      <th scope='col'>No</th>
      <th scope='col'>Tag</th>
      <th scope='col'>Customer Id</th>
      <th scope='col'>Customer Name</th>
      <th scope='col'>	Ratings</th>
      <th scope='col'>Feedback</th>
      <th scope='col'>		Date</th>
      <th scope='col'>		View</th>
      
      
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className='fw-normal mb-1'>Software engineer</p>
        <p className='text-muted mb-0'>IT department</p>
      </td>
      <td>
        <MDBBadge color='success' pill>
          Active
        </MDBBadge>
      </td>
      <td>Senior</td>
      <td>
        <MDBBtn color='link' rounded size='sm'>
          Edit
        </MDBBtn>
      </td>
    </tr>
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>ast Ray</p>
            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className='fw-normal mb-1'>Consultant</p>
        <p className='text-muted mb-0'>Finance</p>
      </td>
      <td>
        <MDBBadge color='primary' pill>
          Onboarding
        </MDBBadge>
      </td>
      <td>Junior</td>
      <td>
        <MDBBtn color='link' rounded size='sm'>
          Edit
        </MDBBtn>
      </td>
    </tr>
    <tr>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Kate Hunington</p>
            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className='fw-normal mb-1'>Designer</p>
        <p className='text-muted mb-0'>UI/UX</p>
      </td>
      <td>
        <MDBBadge color='warning' pill>
          Awaiting
        </MDBBadge>
      </td>
      <td>Senior</td>
      <td>
        <MDBBtn color='link' rounded size='sm'>
          Edit
        </MDBBtn>
      </td>
    </tr>
  </MDBTableBody>
</MDBTable>


</div>

  </div>

 
 
  );
}
// const Sheeps = () => {
//   return (
//     <div>
//       <h3>Sheeps real PAge dg</h3>
//       <div>
//         {/* <img src="./sheeps.png" />
//         <img src="./sheeps.jpg" /> */}
//       </div>
//     </div>
//   );
// };
// export default Sheeps;
