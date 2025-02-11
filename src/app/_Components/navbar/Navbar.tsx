import Input from "./Input";

const Navbar = () => {
  return (
    <header className="flex z-50 flex-col sm:flex-row sm:gap-32 justify-between sm:items-center py-6 ">
      <div>
        <h1 className="text-xl sm:text-2xl text-white uppercase font-semibold">
          Weather App
        </h1>
      </div>
      <Input />
    </header>
  );
};

export default Navbar;
