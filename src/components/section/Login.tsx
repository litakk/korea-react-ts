import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom";


interface LoginProps {}

const Login: React.FC<LoginProps> = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();

const onSubmit = (data: any) => {
    console.log(data);
    reset();
}

const regExp = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
};


  return (
    <div className="relative w-full h-screen">
   
      <div className="absolute w-[400px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
       <Link to={"/"}> <img src="./loginLogo.png" alt=""  className="mx-auto mb-[100px] w-[200px]"/></Link>
        <h1 className="font-bold mb-8">Sign in to your account</h1>

<div>
<form onSubmit={handleSubmit(onSubmit)} className="shadow p-7 ">

<div className="flex">

</div>
<Input 
{...register("email", {required: true, pattern: regExp.email})}
name="email"
autoFocus
placeholder="Email" className="mb-5 h-12 text-center" />
            {errors.email && (
              <span className="text-red-500">* Неверный email</span>
            )}
<Input 
{...register("password", {required: true, pattern: regExp.password})}
name="password"
placeholder="Password" className="h-12 text-center mb-7" />
            {errors.password && (
              <span className="text-red-500">* Неверный пароль</span>
            )}
<label className="flex items-center justify-between w-full mb-4">
  <div className="flex items-center gap-2 ">
    <input type="checkbox" 
    {...register("checkbox")}
    name="checkbox"
    />
    
    <p>Remember me</p>
  </div>
  <p className="text-blue-500 cursor-pointer">Forgot Password</p>
</label>
<button className="w-[350px] h-[50px] rounded-[10px] p-2.5 bg-[#2563EB] text-[#FFFFFF]">Sign In</button>
</form>

</div>
      
      </div>
    </div>
  );
};

export default Login;
