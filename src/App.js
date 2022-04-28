import React from "react";
// TODO: import useFormik from formik library
import {FormikContext, useFormik} from "formik";



function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSumbit: values =>{
      alert("Login Successful");
    },
    validate: values =>{
      let errors ={}
      if(!values.email) errors.email = "field required";
      if(!values.password) errors.password ="feild required";

      return errors
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
          id="emailFeild"
          name="email" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{color:'red'}}>
            {formik.errors.email}
          </div>
        ): null}
        <div>Password</div>
        <input 
          id="pswField"
          name="password" 
          type="text" 
          onChange={formik.handleChange} 
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{color:'red'}}>
            {formik.errors.password}
          </div>
        ): null}
        <button id="sumbitBtn" type="sumbit">Submit</button>
      </form>
    </div>
  );
}

export default App;
