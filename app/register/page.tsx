"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

      router.push("/login");

    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="register">
      <div className="register__container">

        <h1 className="register__title">
          Register
        </h1>

        <form
          className="register__form"
          onSubmit={handleSubmit}
        >

          <div className="register__group">
            <label className="register__label">
              Name
            </label>

            <input
              className="register__input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register__group">
            <label className="register__label">
              Email
            </label>

            <input
              className="register__input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register__group">
            <label className="register__label">
              Password
            </label>

            <input
              className="register__input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="register__button"
            type="submit"
          >
            Register
          </button>

        </form>

      </div>
    </div>
  );
}