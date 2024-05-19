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

export default function Form() {
  const [email, setEmail] = useState<string | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>();

  const onSubmit = async (data: Form) => {
    console.log("Form Submitted withg data", data);
    //simulating some time dalay
    setTimeout(async() => {
      const res = await axios.post(`${BASE_URL}/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data) {
        setEmail(res.data.email);
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
      />
      <input
        placeholder="Password"
        {...register("password")}
        className="border border-black text-black"
      />
      <Button email={email} />
    </form>
  );
}
