"use client";

import { useForm } from "react-hook-form";
import Button from "./Button";
import axios from "axios";
import { BASE_URL } from "@/config";
import { useState } from "react";

interface Form {
  email: string;
  password: string;
}

interface User {
  email: string | null;
  isUserLoading: boolean;
  isButtonDisabled: boolean;
}

export default function Form() {
  const [user, setUser] = useState<User>({
    isUserLoading: true,
    email: null,
    isButtonDisabled: false,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>();

  const onSubmit = async (data: Form) => {
    console.log("Form Submitted with data", data);
    setUser({
      email: null,
      isUserLoading: true,
      isButtonDisabled: true,
    });
    //simulating some time dalay
    setTimeout(async () => {
      try {
        const res = await axios.post(`${BASE_URL}/signup`, data, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.email) {
          setUser({
            email: res.data.email,
            isUserLoading: false,
            isButtonDisabled: false,
          });
        } else {
          setUser({
            email: null,
            isUserLoading: false,
            isButtonDisabled: false,
          });
        }
      } catch (error) {
        console.error(error);
        setUser({
          email: null,
          isUserLoading: false,
          isButtonDisabled: false,
        });
      }
    }, 3000);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
    >
      <input
        placeholder="Email"
        {...register("email")}
        className="border border-black text-black"
        type="email"
      />
      <input
        placeholder="Password"
        {...register("password")}
        className="border border-black text-black"
        type="password"
      />
      <Button
        email={user.email}
        isUserLoading={user.isUserLoading}
        isButtonDisabled={user.isButtonDisabled}
      />
    </form>
  );
}
