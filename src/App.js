import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName ,setfirstName]=useState("")
  // const [lastName ,setlastName]=useState("")
  // console.log(firstName)
  // console.log(lastName)

  // function changefirstHandler(event){
  //   // console.log(event.target.value)
  //   // console.log("printing first name")
  //   setfirstName(event.target.value)
  // }
  // function changesecondHandler(event){
  //   // console.log(event.target.value)
  //   // console.log("printing last name")
  //   setlastName(event.target.value)
    
 // }


 const [formData,setformData]=useState({firstName:"",lastName:"",email:"",comments:"",isVisible:false,mode:"",favcar:""});
 console.log(formData)

 
 function changeHandler(event){

  const {name,value,checked,type}=event.target
  setformData(prevFormData =>{
    return {
      ...prevFormData,
      //[event.target.name]:event.target.value
      [name]:type==="checkbox"?checked:value//we have handle different way to handle checkbox 
      //using ternery condition this is the way to handle checkbox
    }
  })
 }
  return (
    <div className="  flex flex-col justify-center items-center" >
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          />
          <br/>
          <br/>
          <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          />


         <br/>
          <input
          type="text"
          placeholder="email"
          onChange={changeHandler}
          name="email"
          />
      <br></br>
       <br></br>
       
       <textarea
       placeholder="Enter here comments"
       onChange={changeHandler}
       name="comments"
       value={formData.comments}

       />
       <br/>
       <input
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}
        
        
       />

      <label htmlFor="isVisible">Am i visible</label>
    
         <br/>
         <br/>
         <input
          type="radio"
          onChange={changeHandler}
           name="mode"
           value="online-mode"
           id="online-mode"
           checked={formData.mode==="online-mode"}
         />
         <label htmlFor="online-mode">online mode</label>
         

         <input
          type="radio"
          onChange={changeHandler}
           name="mode"
           value="offline-mode"
           id="offline-mode"
           checked={formData.mode==="online-mode"}
         />
        
        
         <label htmlFor="offline-mode">offline mode</label>
    <br></br>

    <label html="favcar">tell me your favrioute</label>
     <select
     name="favcar"
     onChange={changeHandler}
     id="favcar"
     value={formData.favcar}>

     <option value="scorpio">scarpio</option>
     <option value="fartunure">Thar</option>
     <option value="THAT">fortunure</option>
     <option value="lengent">omega</option>
     <option value="defender">defenfder</option>
     <label html="favcar">tell me your favrioute</label>

     </select>
      </form>

    </div>
   );
}

export default App;
//control components topics new
  // defn:[maintain state inside component]
