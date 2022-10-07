import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../header/Header';

const Birthday = () => {

  const [list, setList] = useState();
  useEffect(() => {
    console.log('hi')
    let slist = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/getUpcomingBirthdays', {
        })
        console.log(response.data.data)
        setList(response.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    slist();
  }, [])

  return (
    <>
      <Header />

      <div classNameName="d-flex justify-content-center">



        <table className="container table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#007BFF' }}>
              <h1> Upcoming Month Birthdays </h1>
            </div>
            <tr>
              <th>Employee Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
              list && list.map((l) => (
                <tr>
                  <td>{l.name}</td>
                  <td>{l.date}</td>
                </tr>))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Birthday;