 
 
 
import { Login } from "./Login"; 
import { Logo } from "./Logo";
import MobileMenu from "./mobileMenu";
import { MyCart } from "./MyCart";
 
import { SearchInput } from "./SearchInput";
import { WhatsAppIcon } from "./WhatsAppIcon";


export default function Header() {
  return (
    <header className="bg-primary px-4 py-6 lg:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 lg:gap-4">
          <Logo />
          <div className="hidden md:flex">
            {/* whatsApp */}
            <WhatsAppIcon />
          </div>
        </div>

        <div className="flex-1 w-full mx-4 hidden lg:block">

          <SearchInput className="w-full   " />
        </div>

        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <Login />
          <MyCart />
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>

  );
}
