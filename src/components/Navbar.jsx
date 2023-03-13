import {logo} from "../assets/img/logo.png";
import {menu} from "../assets/img/menu.png";
const Navbar = () => {
  return (
    <>
      {/* Containier */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="flex justify-between items-center py-4 ">
          {/* Logo */}
          <img src={logo} alt="" />
          {/* Navbar */}
          <div className="text-white">
            <img className="lg:hidden" src={menu} alt="" />
            <ul className="hidden lg:flex items-center gap-20 text-xl">
              <li className="border-b-[3px] border-orange-400">
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Travel</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>
          {/* Button */}
          <div className="hidden lg:flex gap-6 items-center text-white">
            <button className="">Login</button>
            <button className="bg-orange-400 p-3 rounded-md">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
