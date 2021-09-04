import Button from "./Button/Button";

const Navbar = () => {
  return (
    <nav className="py-5 px-3 lg:px-0 flex justify-between items-center">
      <div>
        <img src="/images/BrandLogo.png" alt="" />
      </div>

      <div>
        <Button>Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
