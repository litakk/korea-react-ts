import { useForm } from "react-hook-form";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="relative w-full h-screen">
   
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="./loginLogo.png" alt="" />
        <h1 className="font-bold">Sign in to your account</h1>
        <form action="" className="">
          <input type="text" />
          <input type="text" />
        </form>
      
      </div>
    </div>
  );
};

export default Login;
