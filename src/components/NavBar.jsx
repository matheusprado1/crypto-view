import { LogoIcon } from "../icons/icons";

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor pointer">
          <LogoIcon />
          <p className="font-semibold"><span className="text-yellow-500">C</span>rypto<span className="text-yellow-500">V</span>iew</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
