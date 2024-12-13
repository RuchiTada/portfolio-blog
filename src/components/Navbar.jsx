/** @format */
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link
        to="/"
        className="w-full h-16 md:h-20 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-4 text-2xl font-bold">
          <img src="/logo.png" className="w-8 h-8 " />
          <span> RuchiTada</span>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Mobile Button */}

          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "X" : "O"}
          </div>
          {/* Mobile Link list */}
          <div
            className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium tex-lg absolute top-16 transition-all ease-in-out ${
              open ? "right-0" : "right-[100%]"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
        </div>
      </Link>
      <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};
export default Navbar;
