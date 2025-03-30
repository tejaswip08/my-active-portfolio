import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const formsSchema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("Provided email is invalid!")
    .required("Email is required!"),
  message: yup.string().required("Message is required!"),
});

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formsSchema), mode: "onTouched" });

  const formData = () => {
    //
  };
  return (
    <>
      <Card elevation={0} className="neumorphic-card" sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <div className="heading2 font-weight-500 line-space text-shadow">
            Contact Me
          </div>
          <Box sx={{ mx: "auto", mt: 3 }} className="input-field-main-div">
            <form onSubmit={handleSubmit(formData)}>
              <div>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="custom-input-field"
                />
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="custom-input-field"
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div>
                <textarea
                  {...register("message")}
                  placeholder="Message"
                  className="custom-input-field"
                />
                <p className="error-message">{errors.message?.message}</p>
              </div>
              <Box sx={{ mt: 2 }}>
                <button className="custom-send-button">
                  Send
                  <FontAwesomeIcon
                    icon={faRocket}
                    color="black"
                    style={{ marginLeft: "5px" }}
                  />
                </button>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
      {/* <Card elevation={0} className="neumorphic-card" sx={{ mt: 3, p: 5 }}>
        <CardContent>
          <div className="navbar-div2-type2">
            <div className="heading2 font-weight-500 line-space text-shadow">
              Contact Me_
            </div>
            <Box sx={{ mt: 3 }}>
              <form onSubmit={handleSubmit(formData)}>
                <div>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="custom-input-field"
                  />
                  <p className="error-message">{errors.name?.message}</p>
                </div>
                <div>
                  <input
                    {...register("email")}
                    placeholder="Email"
                    className="custom-input-field"
                  />
                  <p className="error-message">{errors.email?.message}</p>
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Message"
                    className="custom-input-field"
                  />
                  <p className="error-message">{errors.message?.message}</p>
                </div>
                <button className="custom-send-button">Send</button>
              </form>
            </Box>
          </div>
        </CardContent>
      </Card> */}
    </>
  );
};

export default ContactMe;
