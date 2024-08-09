import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/UserAPI";
import { NewUser } from "../../../shared/user.types";

const useCreateUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: async (newUser: NewUser) => {
      console.log("successfully created new user: ", newUser);
    },
  });
};

export default useCreateUser;
