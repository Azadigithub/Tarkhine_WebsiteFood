import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from "react-router-dom";

const Login = () => {
  const schema = yup.object({
    MobileNumber: yup.string().required("پرکردن این فیلد الزامی است!").matches(/^09\d{9}$/, "شماره همراه معتبر نیست !").length(11, "شماره همراه باید دقیقا 11 رقم باشد!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      MobileNumber: "",
    },
    resolver: yupResolver(schema),
  });
  const user = [
    { id: 1, username: "", password: "" },
    { id: 2, username: "", password: "" },
    { id: 3, username: "", password: "" },
  ];
  const userValid = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="w-[148px] h-[71px] ">
        <img
          className="w-full h-full"
          src="/Images/Vector.png"
          alt=""
        />
      </div>
      <h1 className="mt-[80px] font-bold text-gray-8">ورود / ثبت نام</h1>
      <h3 className="mt-[24px] text-gray-7">
        شماره همراه خود را وارد کنید
      </h3>
      <div className="mt-[24px]">
        <form action="" onSubmit={handleSubmit(userValid)}>
          <fieldset className={`border-2 rounded-4 px-16 w-[320px] flex items-end justify-end ${errors.MobileNumber? " border-Error": "border-gray-7 text-gray-7 "}`}>
            <legend type="text" className={`${errors.MobileNumber? "text-Error":"text-gray-8"}`}>
              شماره همراه
            </legend>
            <input
              type="text"
              placeholder="09134567893"
              className="text-end w-full pb-6 border-none outline-none placeholder-costom-gray text-black"
              {...register("MobileNumber")}
            />
          </fieldset>
          {errors.MobileNumber && (
            <div className="flex items-center justify-start text-Error">
                <ErrorOutlineIcon fontSize="small"/>
              <p className="text-costom-red ">{errors.MobileNumber.message}</p>
            </div>
          )}
          <button className={`w-[320px] h-[40px] mt-[10px]  rounded-[5px] ${isValid ?"bg-primary":"bg-gray-300"}`}>
            ورود
          </button>
        </form>
      </div>
      <div className="mt-[8px]">
        <p className="text-[12px] flex items-center justify-center gap-4">
          ورود و عضویت در ترخینه به منزله قبول
          <Link to={"/"} className="text-primary">
          قوانین و مقررات
          </Link>
            است
        </p>
      </div>
    </div>
  );
};

export default Login;
