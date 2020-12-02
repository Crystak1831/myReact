import React from 'react'
import {Formik} from "formik";
import * as EmailValidator from 'email-validator'
import * as Yup from 'yup'


const ValidateLoginForm = () => {
  return  <Formik
      initialValues={{email: "", password: ""}}
      onSubmit={(values,{setSubmitting})=>{
          console.log("Submitting")
          console.log(values)
      }}

      //method 2
      validationSchema={Yup.object().shape({
          email:Yup.string()
              .email()
              .required("Email is Required"),
          password: Yup.string()
              .required()
              .min(8, "Password is too short")
              .matches(/(?=.*[0-9])/, "Password must contain a number")
      })}



      // validate={values => {
      //     let errors = {};
      //     if(!values.email){
      //         errors.email = "Requited"
      //     }
      //     else if(!EmailValidator.validate(values.email)){
      //         errors.email = "Invalid Email Address"
      //     }
      //
      //
      //     const passwordRegex = /(?=.*[0-9])/
      //     if(!values.password){
      //         errors.password = "Requited"
      //     }
      //
      //     else if((values.password.length < 8)){
      //         errors.password = "Password must be 8 charactors long"
      //     }
      //     else if(!passwordRegex.test(values.password)){
      //         errors.password = "Ivalid Password Must contains one number"
      //     }
      //
      //
      //     return errors
      // }}
  >
        {/*pass property as children inside the </Formik>*/}
      {
          props => {
              const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit
              } = props;
              return(
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="email">Email</label>
                      <br/>
                      <input type="text"
                             name = "email"
                             value={values.email}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={errors.email && touched.email && "error"}
                      />
                      <br/>

                      {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                      )}

                      <br/>
                      <label htmlFor="password">Password</label>
                      <br/>
                      <input type="password"
                             name="password"
                             value={values.password}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={errors.password && touched.password && "error"}
                      />

                      {errors.password && touched.password && (
                          <div className="input-feedback">{errors.password}</div>
                      )}
                      <br/>
                      <button type="submit">Login</button>
                  </form>
              )

          }
      }

        </Formik>
}
export default ValidateLoginForm
