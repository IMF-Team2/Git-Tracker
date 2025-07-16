import Image from "next/image";
import { Button } from "./ui/button";
import clsx from "clsx";
import SearchInput from "./SearchInput";
import { Pencil } from "lucide-react";

function Navbar({ className = "" }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex flex-row justify-between items-center px-2",
        className
      )}
    >
      <div className="lg:flex gap-2 hidden ">
        <Image
          src="/git.png"
          alt="Git Tracker Logo"
          className=" w-8 h-8  custom-1050:w-9 custom-1050:h-9"
          width={10}
          height={10}
        />
        <p className=" text-base md:text-lg custom-1050:text-xl font-semibold">
          Git Tracker
        </p>
      </div>
      <div className="flex items-center gap-3 custom-1050:gap-6 mr-8">
        <SearchInput />
        <Button className="hidden sm:flex py-5 px-3 text-center bg-[#5B6AD0] hover:bg-[#5B6AD0]">
          Add Employee
        </Button>
        <div className="hidden lg:block py-2 px-3 border rounded-xl">
          {<Pencil className=" text-gray-500" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
