import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from './Provider/AuthContext';

import { toast } from 'react-toastify';


import UseAxiosPublic from './AdminRoutes/UseAxiosPublic';

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        const newUser = {
          name: data.name,
          email: data.email,
          role: 'user',
          createdAt: new Date()
        };
        axiosPublic.post('/users', newUser )
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            reset();
              toast.success("Registration Successful", "", "success");};
            navigate('/');
          })
          .catch(() => {
             toast.error('Error', 'Failed to registration', 'error');
          });
      })
      .catch(() => {
        toast.error('Error', 'Something went wrong during registration', 'error');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-[#121212] border border-orange-500/20 p-8 rounded-3xl shadow-2xl w-full max-w-md text-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
            Create Your SkillSync Account
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Build your AI-powered resume today!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="John Doe"
              className="w-full px-4 py-2 bg-zinc-900 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && <p className="text-orange-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-zinc-900 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && <p className="text-orange-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-zinc-900 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.password && <p className="text-orange-400 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-md hover:from-orange-600 hover:to-yellow-500 transition-all"
          >
            Register
          </button>

          {/* Divider & Socials */}
          <div className="text-gray-400 text-sm text-center mt-5">Or sign up with</div>
          <div className="flex justify-center gap-4 mt-3">
            <button className="btn btn-circle bg-orange-500 text-white hover:bg-orange-600">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle bg-orange-500 text-white hover:bg-orange-600">
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-orange-500 text-white hover:bg-orange-600">
              <FaGithub />
            </button>
          </div>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm mt-6 text-gray-400">
          Already have an account?
          <Link to="/login" className="underline ml-1 text-orange-400 hover:text-orange-300">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
