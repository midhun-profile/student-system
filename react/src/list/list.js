import React from 'react';
function List(props) {

   const data= props.stu.map(item =>
        // (item)=>{ 
        // console.log(item.id)}
    
        <div  key={item.id}>
             <center className='container p-3 m-1  bg-dark' style={{borderRadius:"10px"}}>
            <span className='m-3'><b>Name: {item.name}</b></span>
           
           <span className='m-3'><b>DOB: {item.dob}</b></span>
          
           <span className='m-3'><b>class: {item.std+item.division}</b></span>
           
           <span className='m-3'><b>Gender: {item.gender}</b></span> 
           </center>
             </div>
    
    
    
    
    )
 
    return (
        <div>
        <center className='container p-3 m-1  bg-dark' style={{borderRadius:"10px"}}>
            <h4 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >Student List</h4>
            </center>
           
          {data}
           
           
        
        </div>
    );
  }
  
  export default List;