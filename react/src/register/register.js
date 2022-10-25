import React from 'react';
import { useEffect } from 'react';
import './register.css'
import List from '../list/list';

function Register() {

  const [name,setName]=React.useState("")
  const [address,setAddress]=React.useState("")
  const [dob,setDob]=React.useState("")
  const [std,setStd]=React.useState("")
  const [division,setDivision]=React.useState("")
  const [gender,setGender]=React.useState("")


  const [students,setStudents]=React.useState([])

  
  function handleclick(e){
    e.preventDefault()
    const student={name,address,dob,std,division,gender}
    console.log(student)  
  

//code connecting to springboot

    fetch("http://localhost:8080/create",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(() => {
      console.log("added")


      alert(
        `name=${name}  
          address=${address}
          date_off_birth=${dob} 
          class=${std} // division=${division} 
           gender=${gender} 
          data updated...`
       )


    })

//code connecting to springboot end


    setStudents(
      pre=>{
        return [...pre,{student}]
    }
    )
  
    setName("")
    setAddress("")
    setDob("")
    setStd("")
    setDivision("")
    setGender("") 

  }

  useEffect(()=> {
    fetch("http://localhost:8080/list")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result)
      console.log(students)
    })
  },[name,students])
 
    return (
      <div className='container p-2'>
      <div className='row'>
        <div className='col-md-4 m-2'>
   
        <form action="/action_page.php" className='bg-dark p-2' style={{borderRadius:"20px"}} autoComplete="off">
          
    <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >Fill Details</h3>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">Name:</label>
    <input type="text" className="form-control" id="n" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value.replace(/[^a-z]/gi, ''))} />
  </div>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">address:</label>
    <input type="text" className="form-control " id="a" placeholder="Enter address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
  </div>
 
  <div className="mb-3 m-4">
    <label  className="form-label">date of birth:</label>
    <input type="date" className="form-control" id="dob"  name="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>
  </div>

  <div  className="m-4" style={{display:"flux"}}>

  <label className="form-label">class:</label>
    <select className="form-select" id="sel11" name="sellist1" value={std} onChange={(e) => setStd(e.target.value)}>
    <option disabled></option>
      <option>l</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
<br/>
    <label className="form-label">divition:</label>
    <select className="form-select" id="sell2" name="sellist2" value={division} onChange={(e) => setDivision(e.target.value)}>
    <option disabled></option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

</div>

<div  className="m-4" style={{display:"flux"}}>
<label className="form-label">gender:</label>
    <span style={{margin:"10px"}}>
  <input type="radio" id="radio1" name="optradio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}/>
  <label style={{padding:"5px"}}>male</label>
  </span>

  <span style={{margin:"10px"}}>
  <input type="radio" id="radio2" name="optradio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}/> 
  <label style={{padding:"5px"}}>femail</label>
  </span>

</div> 
<center>
  <span><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}} onClick={handleclick} ><b>Submit</b></button></span>
  <span><button type="reset" className="btn m-4" style={{backgroundColor:"#61dbfb"}}><b>reset</b></button></span>
  </center>
</form>
</div>

<div className='col-md  m-2' style={{paddingTop:"20px"}}>

  <List  stu={students} />

  </div>

</div> 
</div>
    );
  }
  
  export default Register;