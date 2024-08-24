import Logo from "./Logo";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Navlink to="/" name="Home" />
            <Navlink to="/about" name="About" />
            <Navlink to="/sign-in" name="Login" />
            <Navlink to="/sign-up" name="Register" />
          </ul>
        </div>
        <div className="flex gap-2">
          <button>Toggle</button>
          <button>Hello</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
