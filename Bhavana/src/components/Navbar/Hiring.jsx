import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axiosInstance from '../../helpers/axiosInstence'
import { toast } from 'react-toastify'
import "./index.css"
const Hiring = () => {

  let token = sessionStorage.getItem("token")
        let navigate = useNavigate()
        let [userData, setUserData] = useState({
                userName: "",
                email: "",
                phone: "",
                eduation: "",
                Marks: "",
                Resume: ""
        })

        let data = (e) => {
                setUserData({ ...userData, [e.target.name]: e.target.value })
        }


        let handlesubmit = (e) => {
                e.preventDefault();
                try {
                        axiosInstance.post("/company", userData,{
                                headers : {
                                                Authorization : `Bearer ${token}`
                                }
                        })    
                        toast.success(`Added ${userData.userName}  successfully !`,{
            className:"mainblock"
        })
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }

        }
  return (
    <>
    <div className='formholder'>
      
      <form className='formitems' action="apply" onSubmit={handlesubmit}>
      <h2> APPLY NOW </h2>
        <label htmlFor="userName">Candidate Name:</label> <input type="text" />
        <label htmlFor="email">Candidate Email:</label> <input type="email"/>
        <label htmlFor="phone">Candidate Phone:</label> <input type="number"/>
        <label htmlFor="eduation">Candidate higer eduation:</label> <input type="text"/>
        <label htmlFor="Marks ">Percentage of Marks:</label><input type="number"/>
        <label htmlFor="Resume"> Resume:</label> <input type="file"/>
        <button className='submit' >submit</button>
      </form>
      <div className='rounds'>
        <h2>ROUND 1 :</h2>
        <p>
        RESUME SCREENIG<br /> APTITUDE 
        </p>
        <h2>ROUND 2 :</h2>
        <p> HR ROUND <br />
        TECHNICAL ROUND</p>
        <h2>ROUND 3 :</h2>
        <p>TECHNICAL ROUND <br />
        PRACTICAL TEST</p>
    </div>
    </div>


    
    </>
  )
}

export default Hiring
