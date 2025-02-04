import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Replace with your custom image paths or URL for each icon
import leetcodeIcon from "../assets/leetcode.png";
import geeksforgeeksIcon from "../assets/gfg.png";
import codechefIcon from "../assets/codechef.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/murugavelv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Murugavl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/U9RL6UoFrD/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={leetcodeIcon} alt="Leetcode" className="w-8 h-8" />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/mrvmvho0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={geeksforgeeksIcon} alt="GeeksForGeeks" className="w-8 h-8" />
        </a>
        <a
          href="https://www.codechef.com/users/murugavelv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={codechefIcon} alt="CodeChef" className="w-8 h-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
