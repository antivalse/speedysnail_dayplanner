/**
 * Signup form component
 */

interface SignUpFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setUsername: (name: string) => void;
  setPassword: (password: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  handleSubmit,
  setUsername,
  setPassword,
}) => {
  return (
    <>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Create username:
          <input
            type="text"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Create password:
          <input
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
