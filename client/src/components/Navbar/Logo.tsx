import { Link } from "react-router-dom";
import NavbarToggleButton from "./NavbarToggleButton";

const Logo = () => {
  return (
    <div className="flex flex-row gap-2">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Tharuka Logo"
        /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Tharuka's<span className="text-blue-600">Blog</span>
        </span>
      </Link>
      <NavbarToggleButton />
    </div>
  );
};

export default Logo;
