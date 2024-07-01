import logo from '../public/airbnb 1.png';

const Navbar = () => {
  return (
    <nav className=" flex h-[70px] items-center shadow-lg">
      <img src={logo} alt="" className="ml-10 h-[25px] w-[82px]" />
    </nav>
  );
};

export default Navbar;
