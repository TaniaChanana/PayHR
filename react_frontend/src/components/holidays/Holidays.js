import axios from 'axios';
import React, { useEffect, useState , useMemo} from 'react'
import Header from '../header/Header';
import countryList from 'react-select-country-list'
import Select from 'react-select'
const Holiday = () => {

    const [list, setList] = useState();
    
    const [valuee, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const [user, setUser] = useState({
      day : "",
      occasion : "",
      country : ""
    });
  
    let name, value;
    const handleInput = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
  
      setUser({...user, [name] : value});
    }

    useEffect(() => {
      console.log('hi')
      let list = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/v1/getUpcomingHolidays', {
          })
          console.log(response.data.data)
          setList(response.data.data)
        } catch (err) {
          console.log(err);
        }
      }
      list();
    }, [user])

    const submitDetails = async(e) =>{
      user.country = valuee.label
      e.preventDefault();
    console.log("user  : ", user)

    try {
      const res = await axios.post("http://localhost:8080/api/v1/addHoliday", {
        ...user
      });
      alert(res.data.messege);
      console.log("res : ", res.data.messege);
      setUser({...user, day:'',occasion:''})
    } catch (err) {
      console.log(err);
    }
    }
  return (
    <>
        <Header />
       
      <div classNameName="d-flex justify-content-center">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', color : '#007BFF'}}>
    <h1> Upcoming Month Holidays </h1>
</div>
      <button type="button" className="btn btn-primary ml-3 btn-md " data-toggle="modal" data-target="#exampleModal">Add New Holiday</button>
                  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Add New Holiday</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                      <div className="modal-body">
                      <form className="row justify-content-center" method="post">
                    
                        <div className="row align-items-center inputBox">
                          <div className="col mt-1 form-floating">
                            
                            <input type="date" className=" form-control" id="ho" name="day" value={user.day} onChange={handleInput} placeholder="Enter Day of holiday" required/>
                            <label className="mx-3" htmlFor="ho">Enter day of Holiday</label>
                          </div>
                        </div>

                        <div className="row align-items-center inputBox">
                          <div className="col mt-1 form-floating">
                            
                            <input type="text" className=" form-control" id="ho" name="occasion" value={user.occasion} onChange={handleInput}  placeholder="Enter Holiday Occasion" required/>
                            <label className="mx-3" htmlFor="ctname">Holiday Occasion</label>
                          </div>
                        </div>

                        <div className="row align-items-center inputBox">
                          <div className="col mt-1 form-floating">
                            
                            {/* <input type="text" className=" form-control" id="ho" name="holidayOcc"  placeholder="Enter Holiday Occasion" required/> */}
                            <Select options={options} value={valuee}  onChange={(valuee) => setValue(valuee)}/>
                            <label className="mx-3" htmlFor="ctname"></label>
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
              <th>Day</th>
              <th>Occasion</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
          {
                list && list.map((l) => (
                    <tr>
                        <td>{l.day}</td>
                        <td>{l.occasion}</td>
                        <td>{l.country}</td>
                    </tr>))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Holiday;