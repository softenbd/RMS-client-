import Logo from "../../shared/ui/Logo";

import { FieldValues, SubmitHandler } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { useSignUpMutation } from "../../redux/features/auth/authApi";
import { validateFieldsOfSingUpForm } from "../../utils/validation";
import { toast } from "sonner";
import { extractErrorMessage } from "../../types";

import RMForm from "@/shared/forms/RMForm";
import RMInput from "@/shared/forms/RMInput";
import { Button } from "@/components/ui/button";
import SidePanel from "./components/SidePanel";

function Signup() {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const hanleSignUp: SubmitHandler<FieldValues> = async (data) => {
    if (!validateFieldsOfSingUpForm(data)) {
      toast.warning("Please fill out all required fields.");
      return;
    }

    const userData = {
      ...data,
      role: "user",
    };

    console.log(userData);

    // try {
    //   const res = (await signUp(userData).unwrap()) as SignUpResponse;
    //   console.log(res);
    //   if (res?.success) {
    //     toast.success(`Singed in `);
    //     navigate("/login");
    //   }
    // } catch (error) {
    //   const errorMessage = extractErrorMessage(error);
    //   toast.error(errorMessage);
    // }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex bg-[#fff]  shadow-lg rounded-lg overflow-hidden max-w-4xl w-full my-11">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-10">
          <div className="flex flex-col items-center mb-10">
            <Logo />
            <h2 className="mt-6 text-3xl font-extrabold ">
              Sign up to your account
            </h2>
          </div>
          <RMForm onSubmit={hanleSignUp} className="space-y-6">
            <RMInput type="text" label="Name" name="name" />
            <RMInput type="text" label="Email" name="email" />
            <RMInput type="text" label="Password" name="password" />
            <RMInput type="number" label="Phone" name="phone" />
            <RMInput type="text" label="Address" name="address" />

            <RememberAndForgetPassword />
            <Button
              type="submit"
              className="border-none  hover:!primaryGradient/90 hover:!text-white mt-6 w-full primaryGradient text-white"
            >
              Sign up
            </Button>
            <SwitchBetweenLoginToSignin />
          </RMForm>
        </div>

        {/* Right Side Section */}
        <SidePanel
          title="Order Your Favorite Meals Easily"
          description="Discover a diverse range of delicious dishes."
          backgroundImage="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}

export default Signup;

const SwitchBetweenLoginToSignin = () => {
  return (
    <p className="pt-3 text-center text-sm text">
      Alreadt have an account?{" "}
      <Link to="/sign-in" className="text-blue-400 hover:text-blue-500">
        Sign in
      </Link>
    </p>
  );
};

export const RememberAndForgetPassword = () => {
  return (
    <div className="flex px-4 items-center justify-between py-3">
      <label className="flex items-center text-sm text-black">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-500"
        />
        <span className="ml-2">T&Q</span>
      </label>
      <a href="#" className="text-sm text-blue-400">
        Forgot password?
      </a>
    </div>
  );
};
