import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { API } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.1)",
  },
};

const Register = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const { register, handleSubmit } = useForm();

  //handle submit login
  const onSubmit = async (data) => {
    setIsLoading(true);
    clearError();
    const payload = {
      email: data.email,
      password: data.password,
    };
    const res = await API.post("/register", payload).catch(function (error) {
      if (error.response) {
        const errorMessage = error?.response?.data?.message;
        setError({
          error: true,
          message: errorMessage,
        });
        setIsLoading(false);
      }
    });
    if (res?.status === 200) {
      props.setIsLogin(!props.isLogin);
      localStorage.setItem("token", res.data.token);
      setIsLoading(false);
      toggle();
    }
  };

  const toggle = () => {
    props.setModal(!props.setModal);
  };

  const clearError = () => {
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <div>
      <Modal
        isOpen={props.modal}
        style={customStyles}
        contentLabel="Modal Login"
        ariaHideApp={false}
      >
        <div className="" style={{ minWidth: 400 }}>
          <div className="block">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggle}
              className="cursor-pointer"
            />
          </div>
          <h2 className="text-4xl font-mono font-extrabold text-blue-primary text-center my-3">
            Register
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={() => clearError()}
                className="w-full border-gray-light border my-2 p-2 pl-4 rounded-3xl focus:outline-none shadow appearance-none "
                {...register("email", { required: true })}
                //    {...register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={() => clearError()}
                name="password"
                {...register("password", { required: true })}
                //    {...register({ required: true, min: 8 })}
                className="w-full border-gray-light border my-2 p-2 pl-4 rounded-3xl focus:outline-none shadow appearance-none "
              />
              {error.error && (
                <p className="text-red text-center">{error.message}</p>
              )}
              {isLoading ? (
                <div className="h-5 w-full bg-gray-400 rounded-full mr-1 animate-bounce text-center d-flex justify-center align-middle ">
                  Loading
                </div>
              ) : (
                <input
                  type="submit"
                  className="w-full my-2 p-2 rounded-3xl bg-light-blue hover: hover:bg-blue-primary cursor-pointer focus:outline-none shadow appearance-none "
                />
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
