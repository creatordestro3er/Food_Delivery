import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout,user } = useAuth0();
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div  > <img src="./LOOOgo.jpg" alt="" /> </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <li>
            {isAuthenticated && <p>

              {user.name}
            </p>}
          </li>

          {isAuthenticated ? (
            <li>
              <button
                className="menuBtn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                {" "}
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="menuBtn" onClick={() => loginWithRedirect()}>
                Log In
              </button>
              )
            </li>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
