import { useFormik } from 'formik'
import * as Yup from 'yup';
import React from 'react'
function StudentForm() {
    const studentForm=useFormik({
        initialValues:{
            "firstName":"",
            "lastName":"",
            "gender":"",
            "techs":[],
            "country":"",
        },
        validationSchema:Yup.object({
          firstName:Yup.string().required("FirstName is Mandatory").min(3)
        }),
        onSubmit:(values)=>{
           console.log(values);
        }
    })
  return (
    <div className="border border-2 border-success-subtle m-3 p-3">
      <h3>StudentForm:</h3>
      <p>{JSON.stringify(studentForm.errors)}</p>
      <form onSubmit={studentForm.handleSubmit}>
        <b>FirstName</b>
        <input type="text" name="firstName" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/>
        {studentForm.errors.firstName && <div>FirstName is Mandatory</div>}
        <br></br>
        <br></br>
        <b>LastName</b>
        <input type="text" name="lastName" onChange={studentForm.handleChange}/>
        <br></br>
        <br></br>
        <b>Gender</b>
        <input type="radio" name="gender" value="Female" onChange={studentForm.handleChange}/>Female
        <input type="radio" name="gender" value="Male" onChange={studentForm.handleChange}/>Male
        <input type="radio" name="gender" value="Others" onChange={studentForm.handleChange}/>Others
        <br></br>
        <br></br>
        <b>Technologies:</b>
        <input type="checkbox" name="techs" value="HTML" onChange={studentForm.handleChange}/>:HTML
        <input type="checkbox" name="techs" value="CSS" onChange={studentForm.handleChange}/>:CSS
        <input type="checkbox" name="techs" value="Javascript" onChange={studentForm.handleChange}/>:Javascript
        <input type="checkbox" name="techs" value="ReactJs" onChange={studentForm.handleChange}/>:ReactJs
        <input type="checkbox" name="techs" value="Angular" onChange={studentForm.handleChange}/>:Angular
        <input type="checkbox" name="techs" value="Php" onChange={studentForm.handleChange}/>:PHP
        <input type="checkbox" name="techs" value="Bootstrap" onChange={studentForm.handleChange}/>:Bootstrap
        <br></br>
        <br></br>
        <b>Country:</b>
        <select name="country" onChange={studentForm.handleChange} >
        <option default value="">Select your Country</option> 
        <option value="India">INDIA</option>
        <option value="Usa">USA</option>
        <option value="Uk">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        </select>
        <br></br>
        <br></br>
        <button className='btn bg-info-subtle border-info-subtle me-3' type='submit'>Show Data</button>
        <button className='btn bg-danger-subtle border-danger-subtle' type='reset' onClick={()=>{studentForm.resetForm()}}>Clear Data</button>
      </form>
    </div>
  )
}
export default StudentForm
