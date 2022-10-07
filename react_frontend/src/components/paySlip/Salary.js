import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../header/Header';

const Salary = () => {

  const [employeeList, setEmployeeList] = useState();
  const [selectedEmployeeName, setSelectedEmployeeName] = useState("");
  const [salaryList, setSalaryList] = useState([]);

  const [user, setUser] = useState({
    employeeId: "",
    month: "",
    noOfDays: '',
    grossPayment: 0,
    deduction: 0,
    netPay: 0
  });

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  useEffect(() => {
    console.log('hi')
    let list = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/getEmployees', {
        })
        console.log(response.data.data)
        setEmployeeList(response.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    list();
  }, [])

  useEffect(() => {
    console.log('hi')
    let slist = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/getSalaries', {
        })
        console.log(response.data.data)
        setSalaryList(response.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    slist();
  }, [])

  const handleInputEmployee = (e) => {
    employeeList.map((emp) => {
      if (emp.userName === e.target.value) {
        user.employeeId = emp.employeeId
      }
    })
    setSelectedEmployeeName(e.target.value)
  }

  const submitDetails = async (e) => {
    e.preventDefault();
    console.log("user  : ", user)

    try {
      const res = await axios.post("http://localhost:8080/api/v1/addSalary", {
        ...user
      });
      alert(res.data.messege);
      console.log("res : ", res.data.messege);
      setUser({ ...user, month: '', noOfDays: '', grossPayment: '', deduction: '', netPay: '' })
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
      <Header />

      <div classNameName="d-flex justify-content-center">

        <button type="button" className="btn btn-primary ml-3 btn-md " data-toggle="modal" data-target="#exampleModal">Add New Salary</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Salary</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">



                <form className="row justify-content-center" method="post">


                  <div className="row align-items-center inputBox mt-1">
                    <div className="col mt-1 form-floating d-flex align-items-center justify-content-between">

                      <select id="itname iname" className="form-control item_input" value={selectedEmployeeName} onChange={handleInputEmployee} required>
                        <option value='' selected>Select Employee</option>
                        {employeeList && employeeList.map((val) => (
                          <option key={val.employeeId} value={val.userName}>{val.userName}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row align-items-center inputBox">
                    <div className="col mt-1 form-floating">

                      <input type="text" className=" form-control" id="month" name="month" value={user.month} onChange={handleInput} placeholder="Enter Month" required />
                      <label className="mx-3" htmlFor="month">Month Name</label>
                    </div>
                  </div>
                  <div className="row align-items-center inputBox">
                    <div className="col mt-1 form-floating">

                      <input type="text" className=" form-control" id="days" name="noOfDays" value={user.noOfDays} onChange={handleInput} placeholder="Enter Number of days" required />
                      <label className="mx-3" htmlFor="days">Number of days</label>
                    </div>
                  </div>
                  <div className="row align-items-center inputBox">
                    <div className="col mt-1 form-floating">

                      <input type="text" className=" form-control" id="gp" name="grossPayment" value={user.grossPayment} onChange={handleInput} placeholder="Enter Gross Payment" required />
                      <label className="mx-3" htmlFor="gp">Gross Payment</label>
                    </div>
                  </div>

                  <div className="row align-items-center inputBox">
                    <div className="col mt-1 form-floating">

                      <input type="text" className=" form-control" id="deduction" name="deduction" value={user.deduction} onChange={handleInput} placeholder="Enter Deduction Amount" required />
                      <label className="mx-3" htmlFor="ctname">Deduction Amount</label>
                    </div>
                  </div>


                  <div className="row align-items-center inputBox">
                    <div className="col mt-1 form-floating">

                      <input type="text" className=" form-control" id="np" name="netPay" value={user.netPay} onChange={handleInput} placeholder="Enter Net Pay" required />
                      <label className="mx-3" htmlFor="ctname">Net Pay</label>
                    </div>
                  </div>

                </form>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={submitDetails}>Submit</button>
              </div>
            </div>
          </div>
        </div>

        <table className="container table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Employee Name</th>
              <th>Month</th>
              <th>No. of Days</th>
              <th>Gross Payment</th>
              <th>Deduction</th>
              <th>Net Pay</th>
            </tr>
          </thead>
          <tbody>
            {
              salaryList && salaryList.map((l) => (
                <tr>
                  <td>{l.employeeId}</td>
                  <td>{l.month}</td>
                  <td>{l.noOfDays}</td>
                  <td>{l.grossPayment}</td>
                  <td>{l.deduction}</td>
                  <td>{l.netPay}</td>
                </tr>))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Salary;