import { Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [input, setinput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
  });
  const { firstname, lastname, email, comment } = input;
  const handleInput = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success(" SUCCESS ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div className="my-5 text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="container vh-100">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={onSubmit}>
              <Paper className="d-flex flex-column p-5  " elevation={3}>
                <TextField
                  autoComplete="off"
                  name="firstname"
                  onChange={handleInput}
                  value={firstname}
                  className="my-2"
                  required
                  variant="outlined"
                  label="First Name"
                  type="text"
                />
                <TextField
                  autoComplete="off"
                  name="lastname"
                  onChange={handleInput}
                  value={lastname}
                  className="my-2"
                  required
                  variant="outlined"
                  label="Last Name"
                  type="text"
                />
                <TextField
                  autoComplete="off"
                  name="email"
                  onChange={handleInput}
                  value={email}
                  className="my-2"
                  required
                  variant="outlined"
                  label="Email"
                  type="email"
                />
                <TextField
                  autoComplete="off"
                  name="comment"
                  onChange={handleInput}
                  value={comment}
                  className="my-2"
                  id="outlined-multiline-flexible"
                  label="Comment"
                  multiline
                  required
                  maxRows={4}
                />
                <Button
                  variant="outlined"
                  color="error"
                  className="my-2"
                  type="submit"
                >
                  Submit
                </Button>
              </Paper>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact;
