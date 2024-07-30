/**
 * Homepage
 */

import { Link } from "react-router-dom";
import LogInForm from "../components/LogInForm";

const Homepage = () => {
  return (
    <>
      <LogInForm />
      <div id="create-account-section">
        <h2>
          New to My Daily Planner?{" "}
          <Link className="links" to="/signup">
            Create account
          </Link>
        </h2>
      </div>
    </>
  );
};

export default Homepage;
