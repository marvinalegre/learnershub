import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import * as Dialog from "@radix-ui/react-dialog";

const Navbar = ({ loggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar h-16">
      <div className="logo font-semibold">LearnersHub</div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <HamburgerButton />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content className="fixed inset-0 top-16 bg-nav-black">
            <ul className="text-xl p-7 text-white">
              <li
                onClick={() => setOpen(false)}
                className="py-4 border-b border-gray-50 hover:text-gray-300"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="py-4 border-b border-gray-50 hover:text-gray-300"
              >
                <Link to="resources">Resources</Link>
              </li>
              {loggedIn ? null : (
                <li className="mt-12">
                  <Link
                    to="login"
                    className="bg-white py-2 rounded px-4 text-black hover:text-gray-600"
                  >
                    Login
                  </Link>
                </li>
              )}
              {loggedIn ? (
                <li className="mt-12">
                  <Link
                    to="logout"
                    className="bg-white py-2 rounded px-4 text-black hover:text-gray-600"
                  >
                    Logout
                  </Link>
                </li>
              ) : null}
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <ul className="hidden md:flex text-white space-x-8 ml-10 text-xl">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="resources" className="hover:text-gray-300">
            Resources
          </Link>
        </li>
        {loggedIn ? null : (
          <li>
            <Link
              to="login"
              className="bg-white py-2 rounded px-4 text-black hover:text-gray-600"
            >
              Login
            </Link>
          </li>
        )}
        {loggedIn ? (
          <li>
            <Link
              to="logout"
              className="bg-white py-2 rounded px-4 text-black hover:text-gray-600"
            >
              Logout
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
