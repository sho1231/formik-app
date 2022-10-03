import React, { useState } from "react";
import { Formik, useFormik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

export default function JobAppFormik() {
  let obj = {
    fullname: "",
    email: "",
    roleapplied: "",
    comments: "",
    terms: false,
  };
  const [success, setSuccess] = useState(0);
  const [failure, setFailure] = useState(0);
  const [load, setLoad] = useState(0);
  const API = `
  https://62fd2442b9e38585cd4d740c.mockapi.io/Formik`;
  return (
    <div className="m-2 p-3">
      <h3>Job app with formik</h3>
      <br />
      <Formik id="for"
        initialValues={obj}
        onSubmit={(values, { resetForm }) => {
          setLoad(1);
          //   console.log(`successfull submission:`);
          //   console.log(values);
          const post = { ...values }
          console.log(post);
          axios.post(API, post).then((res) => {
            if (res.status === 201) {
              resetForm({ values: '' })
              setLoad(0);
              console.log(success);
              setSuccess(1);
              setTimeout(() => {
                setSuccess(0);
              }, 4000)
            }
          }
          ).catch((e) => {
            if (e.message) {
              console.log(e.message);
              setFailure(1);
            }
          })
        }}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) errors.fullname = "Please enter your full name";
          if (!values.email) errors.email = "Please enter your email address";
          else if (
            !values.email.includes("@") ||
            !values.email.includes(".com")
          )
            errors.email = "Please enter proper email address";
          if (!values.roleapplied) errors.roleapplied = "Please select a role";
          // if (!values.comments) errors.comments = "Please enter your comments";
          if (!values.terms) errors.terms = "Please checked the terms";
          return errors;
        }}
      >
        {() => {
          return (
            <Form>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="fullname"
                  placeholder="Enter your full Name"
                />
                {/* <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                /> */}
              </div>
              <ErrorMessage
                className="text-danger"
                name="fullname"
                component="span"
              />
              {/* {touched.fullname && errors.fullname && (
                <span className="text-danger">{errors.fullname}</span>
              )} */}
              <br />
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                />
                {/* <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                /> */}
              </div>
              <ErrorMessage
                className="text-danger"
                name="email"
                component="span"
              />
              <br />
              <div className="form-group">
                <label htmlFor="roleapplied">Role applied</label>
                <Field
                  className="form-control"
                  name="roleapplied"
                  component="select"
                >
                  <option value="">--Select---</option>
                  <option value="MERN">MERN</option>
                  <option value="MEAN">MEAN</option>
                  <option value="REACT NATIVE">REACT NATIVE</option>
                  <option value="AUTOMATION TESTING">AUTOMATION TESTING</option>
                </Field>
              </div>
              <ErrorMessage
                className="text-danger"
                name="roleapplied"
                component="span"
              />
              <br />
              <div className="form-group">
                <label htmlFor="comments">Why should we hire you?</label>
                <Field
                  component="textarea"
                  className="form-control"
                  name="comments"
                  rows="3"
                  value="123"
                />
              </div>
              {/* <ErrorMessage
                className="text-danger"
                name="comments"
                component="span"
              /> */}
              <br />
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  name="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  I acknowledge the terms
                </label>
              </div>
              <ErrorMessage
                className="text-danger"
                name="terms"
                component="span"
              />
              <br />
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              <br />
            </Form>
          );
        }}
      </Formik>
      {load ? (<span>Submitting data....</span>) : ""}
      {success ? (<div className="alert alert-success" role="alert">
        Data has been successfully submitted
      </div>) : ""
      }
      {
        failure ? (<div className="alert alert-danger" role="alert">
          Error occurred while submitting data <br />Something might be wrong
          with server
        </div>
        ) : ""
      }

    </div>
  );
}
