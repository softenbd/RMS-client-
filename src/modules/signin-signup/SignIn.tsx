import Logo from "../../shared/ui/Logo";

import { FieldValues, SubmitHandler } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { RememberAndForgetPassword } from "./SignUp";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

import { validateFieldsOfLoginForm } from "../../utils/validation";

import RMForm from "@/shared/forms/RMForm";
import RMInput from "@/shared/forms/RMInput";
import { Button } from "@/components/ui/button";
import SidePanel from "./components/SidePanel";
import RMDatePicker from "@/shared/forms/RMDatePicker";

function SignIn() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {


    
    console.log(data)
    
    // if (!validateFieldsOfLoginForm(data)) {
    //   toast.warning("Please fill out all required fields.");
    //   return;
    // }

    // try {
    //   // Correctly type the response using LoginResponse
    //   const res = (await login(data).unwrap()) as LoginResponse;

    //   if (res.token) {
    //     const user = verifyToken(res.token);
    //     const userData = {
    //       user,
    //       token: res.token,
    //     };
    //     dispatch(setUser(userData));
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   // Handle the error appropriately, possibly by showing a message to the user
    // }
  };
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center ">
      <div className="flex bg-[#fff]  shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-10 ">
          <div className="flex flex-col justify-center  items-center mb-10">
            <Logo/>
            <h2 className="mt-6 text-3xl font-extrabold ">
              Sign in to your account
            </h2>
          </div>
          <RMForm onSubmit={handleSignIn} className="space-y-4">
            <RMInput type="text" label="Email" name="email" />
            <RMInput type="text" label="Password" name="password" />
            <RMDatePicker name="date"/>
            <RememberAndForgetPassword />
            <Button
              type="submit"
              className="w-full !my-8 block"
            >
              Sign in
            </Button>
            <p className="mt-4 text-center text-sm text-black">
              Don't have an account?{" "}
              <Link
                to={"/sign-up"}
                className="text-blue-400 hover:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </RMForm>
        </div>
        {/* Right Side Section */}
        <SidePanel
          title="Order Your Favorite Meals Easily"
          description="Discover a diverse range of delicious dishes."
          backgroundImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
}

export default SignIn;
