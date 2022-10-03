import React,{useState} from "react";

export default function JobApp() {
    let obj={
        fullname:"",
        email:"",
        roleapplied:"",
        comments:"",
        terms:false
    };
    const obj2={
        fullname:"",
        email:"",
        roleapplied:"",
        comments:"",
        terms:false
    };
    const [touched,setTouched]=useState(obj2);
    const[form,setForm] =useState(obj);
    const handleChange=({target:{id,value,type,checked}})=>{
            if(type==="checkbox")
              value=checked
            setForm({...form,[id]:value});
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(form);
    }
  return (
    <div className="m-2 p-5">
      <h2>Job application</h2>
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Enter your full name"
            value={form.fullname}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="roleapplied">Role applied</label>
          <select className="form-control" id="roleapplied"  value={form.roleapplied} onChange={handleChange}>
            <option value="">--Select---</option>
            <option value="MERN">MERN</option>
            <option value="MEAN">MEAN</option>
            <option value="REACT NATIVE">REACT NATIVE</option>
            <option value="AUTOMATION TESTING">AUTOMATION TESTING</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea className="form-control" id="comments" rows="3" value={form.comments} onChange={handleChange}></textarea>
        </div>
        <br />
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="terms" value={form.terms} onChange={handleChange}/>
            <label className="form-check-label" htmlFor="terms">I acknowledge the terms</label> 
        </div>
        <br/>
        <div className="form-group">
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
        <br/>
      </form>
    </div>
  );
}
