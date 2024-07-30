/**
 * Sign up page
 */

import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import { registerUser } from "../services/UserAPI";

interface NewUser {
  username: string;
  password: string;
}

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const addUser = async (user: NewUser) => {
    try {
      await registerUser(user);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("something unexpected happened");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
    addUser({ username, password });
    console.log("new user info is: ", username, password);
  };
  return (
    <>
      <h1>Create account</h1>
      <SignUpForm
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </>
  );
}

export default SignUpPage;
