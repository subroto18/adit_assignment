import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const RegisterForm = () => {
  return (
    <form className="space-y-5">
      {/* Username */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-300">
          Full Name
        </label>

        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          className="h-12 border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-300">
          Email Address
        </label>

        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="h-12 border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400"
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-300"
        >
          Password
        </label>

        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          className="h-12 border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400"
        />
      </div>

      {/* Submit */}
      <Button className="h-12 w-full rounded-xl bg-cyan-500 text-sm font-semibold text-white transition hover:bg-cyan-400">
        Create Account
      </Button>

      {/* Footer */}
      <div className="pt-2 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
