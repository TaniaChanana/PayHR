import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../header/Header';

const ViewEmployee = () => {

    const [list, setList] = useState();
    
    useEffect(() => {
      console.log('hi')
      let list = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/v1/getEmployees', {
          })
          console.log(response.data.data)
          setList(response.data.data)
        } catch (err) {
          console.log(err);
        }
      }
      list();
    }, [])

  return (
    <>
        <Header />
       
      <div classNameName="d-flex justify-content-center">
    
      

        <table className="container table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Employee Name</th>
              <th>Email Address</th>
              <th>CTC</th>
              <th>PF</th>
              <th>Date of joining</th>
              <th>Team Name</th>
              <th>Manager</th>
            </tr>
          </thead>
          <tbody>
          {
                list && list.map((l) => (
                    <tr>
                        <td>{l.fname}</td>
                        <td>{l.emailAddress}</td>
                        <td>{l.ctc}</td>
                        <td>{l.pf}</td>
                        <td>{l.doj}</td>
                        <td>{l.teamName}</td>
                        <td>{l.manager}</td>
                    </tr>))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ViewEmployee;