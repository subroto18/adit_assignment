import { AUTH_CONFIG } from "../config/auth.config";

const AuthFooter = () => {
  return (
    <div className="mt-8 border-t border-white/5 pt-5 text-center">
      <p className="text-xs tracking-wide text-slate-500">
        {AUTH_CONFIG.branding.footer}
      </p>
    </div>
  );
};

export default AuthFooter;
