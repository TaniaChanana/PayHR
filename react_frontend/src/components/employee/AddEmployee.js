import React, { useState, useEffect } from 'react';
import { options } from '../../Constants';
import './AddEmployee.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

const AddEmployee = () => {

  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('')
  const [selectedTeamName, setSelectedTeamName] = useState('')
  const [teamName, setTeamName] = useState('')

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    userName: "",
    emailAddress: "",
    password: "",
    phoneNumber: "",
    dob: "",
    doj: "",
    teamName: "",
    manager: "",
    ctc: 0.0,
    pf: 0.0,
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handleSelectedTeam = (e) => {
    console.log("in handle")
    setSelectedTeamName(e.target.value);

  }

  useEffect(() => {
    console.log(selectedTeamName)
    setSelectedTeam((teamList[0]?.find((c) => {
      console.log("hi id block")
      return (c.teamName === selectedTeamName)
    })))
    console.log(selectedTeam);
  }, [teamList, selectedTeamName])

  useEffect(() => {
    let teamL = async () => {
      console.log('list');
      try {
        const response = await axios.get('http://localhost:8080/api/v1/getTeams');
        console.log("res : ", response.data.data);
        let l1 = Array(response.data.data);
        setTeamList(l1)
        console.log("list : ", l1)
        // window.sessionStorage.setItem(sessionConst.cList, JSON.stringify(l1));

      } catch (err) {
        console.log(err);
      }
    }
    teamL();
  }, [selectedTeamName,])

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const handleInputNewTeam = (e) => {
    console.log(e);
    value = e.target.value;
    setTeamName(value);
    console.log("team  : ", teamName);
  }

  const newTeamUpdate = (e) => {
    e.preventDefault();
    let list = async () => {
      console.log('team');
      console.log(teamName);
      try {
        const res = await axios.post('http://localhost:8080/api/v1/addTeam', {
          teamName: teamName.toUpperCase()
        })
        alert(res.data.messege);
        console.log("team : ", teamName)

        setSelectedTeamName(teamName);
        console.log("select  : ", selectedTeamName);
        console.log(teamName);

      } catch (err) {
        console.log(err)
      }
    }
    list();
    user.teamName = teamName;
    setTeamName('');
  }

  const submitDetails = async (e) => {
    e.preventDefault();
    user.teamName = selectedTeamName;

    console.log("user  : ", user)

    try {
      const res = await axios.post("http://localhost:8080/api/v1/addEmployee", {
        ...user
      });
      alert(res.data.messege);
      console.log("res : ", res.data.messege);
      setSelectedTeamName('');
      setUser({ ...user, fname: '', lname: '', userName: '', emailAddress: '', password: '', phoneNumber: '', dob: '', doj: '', teamName: '', manager: '', ctc: '', pf: '', address: '', city: '', state: '', country: '', pincode: '' })
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
      <Header />
      <div className="container">
        <form className="row justify-content-center " method="post">
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col text-center">
                <h1 className="heading">Add Employee</h1>
                <p className="text-h3">Please fill in this form to add an employee.</p>
              </div>
            </div>
            <div className="row align-items-center inputBox mt-1">
              <div className="col mt-1 form-floating ">
                <input type="text" className="form-control  " id="f-name" name="fname" value={user.fname} onChange={handleInput} placeholder="Enter your first name" required />
                <label className="mx-3" htmlFor="fname">First Name</label>
              </div>


              <div className="col form-floating mt-1">
                <input type="text" className="form-control" id="l-name" name="lname" value={user.lname} onChange={handleInput} placeholder="Enter your last name" required />
                <label className="mx-3" htmlFor="lname">Last Name</label>
              </div>
            </div>
            <div className="row align-items-center inputBox mt-1">
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="phn-no" name="phoneNumber" value={user.phoneNumber} onChange={handleInput} placeholder="+91 XXXXX XXXXX" required />
                <label className="mx-3" htmlFor="phn">Phone Number  </label>
              </div>


              <div className="col mt-1 form-floating">

                <input type="email" className="form-control" id="email-id" name="emailAddress" value={user.emailAddress} onChange={handleInput} placeholder="Enter your Email-id" required />
                <label className="mx-3" htmlFor="email">Email Id  </label>
              </div>
            </div>

            <div className="row align-items-center inputBox mt-1">
              <div className="col mt-1 form-floating">

                <input type="password" className="form-control" name="password" value={user.password} onChange={handleInput} id="pass" placeholder="password" required />
                <label className="mx-3" htmlFor="password">Password  </label>
              </div>
              <div className="col mt-1 form-floating">

                <input type="password" className="form-control" id="cpass" name="cpassword" placeholder="password" required />
                <label className="mx-3" htmlFor="cpassword">Confirm Password  </label>
              </div>
            </div>


            <div className="row align-items-center inputBox mt-1">
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" name="ctc" value={user.ctc} onChange={handleInput} id="ctc" placeholder="Enter CTC" required />
                <label className="mx-3" htmlFor="ctc">CTC(Cost to Company)  </label>
              </div>
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="pf" name="pf" value={user.pf} onChange={handleInput} placeholder="Enter PF" required />
                <label className="mx-3" htmlFor="PF">PF(Provident Fund)  </label>
              </div>
            </div>

            <div className="row align-items-center inputBox mt-1">

              <div className="col mt-1 form-floating">

                <input type="date" className="form-control" name="dob" value={user.dob} onChange={handleInput} id="dob" placeholder="Enter DOB" required />
                <label className="mx-3" htmlFor="dob">Date of birth  </label>
              </div>
              <div className="col mt-1 form-floating">

                <input type="date" className="form-control" id="doj" name="doj" value={user.doj} onChange={handleInput} placeholder="Enter DOJ" required />
                <label className="mx-3" htmlFor="cpassword">Date of Joining  </label>
              </div>
            </div>

            <div className="row align-items-center inputBox mt-1">
              <div className="col mt-1 form-floating d-flex align-items-center justify-content-between">
                {console.log("selected : ", selectedTeamName)}
                <select id="itname iname" className="form-control item_input" value={selectedTeamName} onChange={handleSelectedTeam} required>
                  <option value='' selected>Select Team Name</option>
                  {teamList[0] && teamList[0].map((val) => (
                    <option key={val.teamId} value={val.teamName}>{val.teamName}</option>
                  ))}
                </select>
                <label className=" mx-3" htmlFor="itname">Team Name</label>


                <button type="button" className="btn btn-primary ml-3 btn-md " data-toggle="modal" data-target="#exampleModal">Add New Team</button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Team</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form className="row justify-content-center" method="post">

                          <div className="row align-items-center inputBox">
                            <div className="col mt-1 form-floating">

                              <input type="text" className=" form-control" id="tname" name="teamName" value={teamName} onChange={handleInputNewTeam} placeholder="Enter team name" required />
                              <label className="mx-3" htmlFor="tname">Team Name</label>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={newTeamUpdate}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center inputBox">
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="manager" name="manager" value={user.manager} onChange={handleInput} placeholder="Enter manager name" required />
                <label className="mx-3" htmlFor="fname">Manager name </label>
              </div>
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="uname" name="userName" value={user.userName} onChange={handleInput} placeholder="Enter your username" required />
                <label className="mx-3" htmlFor="username">Username  </label>
              </div>

            </div>

            <div className="row align-items-center inputBox">
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="address" name="address" value={user.address} onChange={handleInput} placeholder="Enter address name" required />
                <label className="mx-3" htmlFor="fname">Address </label>
              </div>
            </div>

            <div className="row align-items-center inputBox mt-1">
              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="city" name="city" value={user.city} onChange={handleInput} placeholder="Enter city" required />
                <label className="mx-3" htmlFor="city">City  </label>
              </div>


              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="state" name="state" value={user.state} onChange={handleInput} placeholder="Enter state" required />
                <label className="mx-3" htmlFor="state">State  </label>
              </div>

              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="country" name="country" value={user.country} onChange={handleInput} placeholder="Enter country" required />
                <label className="mx-3" htmlFor="country">country  </label>
              </div>

              <div className="col mt-1 form-floating">

                <input type="text" className="form-control" id="pincode" name="pincode" value={user.pincode} onChange={handleInput} placeholder="Enter pincode" required />
                <label className="mx-3" htmlFor="fname">Pincode  </label>
              </div>
            </div>





            <div className="row justify-content-start mt-1">
              <div className="col  d-flex flex-column justify-content-center align-items-center">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input checkbox" required />
                    I Read and Accept <a href="/">Terms and Conditions</a>
                  </label>
                </div>
                <button className="btn btn-primary mt-1" onClick={submitDetails}>Add Employee</button>
                {console.log("3")}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );

}

export default AddEmployee;