import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo3.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <a href="#" className="text-xl tracking-tight hover:text-orange-500 transition-colors duration-200">
              Чайка
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}
                  className="text-white hover:text-orange-500 transition-colors duration-200"
                  >{item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#footer" className="py-2 px-3 border rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors duration-200">
              Контакты
            </a>
            <a
              href="#footer"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition duration-300 hover:shadow-[0_0_15px_5px_rgba(200,30,20,0.7)] hover:scale-105"
            >
              Заказать демо
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-6 flex flex-col justify-center items-center text-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <a href={item.href}
                    className="text-white hover:text-orange-500 transition-colors duration-200"
                    >{item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 pt-4">
              <a href="#footer" className="py-2 px-3 border rounded-md">
                Контакты
              </a>
              <a
                href="#footer"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Заказать демо
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
