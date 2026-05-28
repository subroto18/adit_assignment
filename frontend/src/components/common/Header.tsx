import Container from "@/components/common/Container";
import { APP_CONFIG } from "@/config/app.config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <Container maxWidth="98%">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2">
              <img
                src={APP_CONFIG.branding.logo}
                alt={APP_CONFIG.branding.appName}
                className="h-10 object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-800">
                {APP_CONFIG.branding.appName}
              </h1>

              <p className="text-sm text-slate-500">
                {APP_CONFIG.branding.tagline}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
