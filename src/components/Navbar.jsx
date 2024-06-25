import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-[10px]">
      <NavLink className={"text-lg hover:text-gray-400 hidden lg:block"} to={"/sale"}>
        Aкциялар
      </NavLink>
      <NavLink to={"/MuddatliTolov"}>
        <button className="bg-green-500 text-white px-6 rounded-[20px] hidden xl:block">
          Muddatli To'lov 12*0*0
        </button>
      </NavLink> 
      <NavLink className={"text-lg hover:text-gray-400 hidden lg:block"} to={"/Sotuvchilar"}>
        Ҳаво совутгичлар
      </NavLink>
      <NavLink className={"text-lg hover:text-gray-400 hidden lg:block"} to={"/Smartfonlar"}>
        smartfonlar
      </NavLink>
      <NavLink className={"text-lg hover:text-gray-400 hidden lg:block"} to={"/muzlatkichlar"}>
        muzlatkich
      </NavLink>
      <NavLink className={"text-lg hover:text-gray-400 hidden lg:block"} to={"/Changyutgich"}>
        changyutgich
      </NavLink>
      <NavLink className={"text-lg hover:text-gray-400 hidden xl:block"} to={"/Noutbooklar"}>
        Noutbooklar
      </NavLink>
      <NavLink className={"text-lg hover:text-gray-400 hidden xl:block"} to={"/Televizorlar"}>
        Televizorlar
      </NavLink>
      <NavLink className={"text-lg hover:text-gray-400 hidden xl:block"} to={"/BarchaQategoriyalar"}>
        Barcha qategoriyalar
      </NavLink>
    </div>
  );
};

export default Navbar;
