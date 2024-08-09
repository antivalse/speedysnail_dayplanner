/**
 * Sign up page
 */

import { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import useCreateUser from "../hooks/useCreateUser";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createUserMutation = useCreateUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserMutation.mutate({ username, password });
  };
  return (
    <>
      <h1>Create account</h1>
      {createUserMutation.isSuccess ? "Created new user!" : ""}
      <SignUpForm
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </>
  );
}

export default SignUpPage;
