import { MdSpeakerNotes, MdLanguage } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { SiGooglemessages } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="border-b-4 shadow">
      <div className=" container mx-auto px-8 py-2 flex justify-between">
        <div className="flex items-center">
          <MdSpeakerNotes className="text-6xl text-blue-400 inline" />
          <h2>Speak</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative flex items-center">
            <IoIosArrowDropdownCircle className="absolute left-0 pointer-events-none" />
            <select
              name="Nivel"
              className="pl-4 gap-20 p-2 appearance-none bg-transparent"
            >
              <option value="A1">Nivel: Principiante A1</option>
              <option value="A2">Nivel: Principiante A2</option>
              <option value="A3">Nivel: Principiante A3</option>
              <option value="A4">Nivel: Principiante A4</option>
            </select>
          </div>

          <div className="relative bg-gray-400 text-white py-1 w-1/2 grid place-items-center rounded-full">
            <div className="absolute h-full w-8/12 bg-blue-400 top-0 left-0 rounded-full"></div>
            <p className="relative">70%</p>
          </div>
        </div>
        <div className="flex items-center text-blue-400 text-2xl justify-between flex-1 max-w-lg">
          <button className="flex flex-col items-center">
            <IoHome />
            <p className="text-sm">Mi Curso</p>
          </button>
          <button className="flex flex-col items-center">
            <AiOutlineFileText />
            <p className="text-sm">Instrucciones</p>
          </button>
          <button className="flex flex-col items-center">
            <SiGooglemessages />
            <p className="text-sm">Mensajes</p>
          </button>
          <div className="flex flex-col items-center">
            <MdLanguage />
            <div className="relative text-sm">
              <IoIosArrowDropdownCircle className="absolute left-0 top-1 pointer-events-none" />
              <select
                name="language"
                className="pl-4 gap-20 w-max appearance-none bg-transparent"
              >
                <option value="A1">ES</option>
                <option value="A2">EN</option>
                <option value="A3">FR</option>
                <option value="A4">JP</option>
              </select>
            </div>
          </div>
          <button>
            <FaUserAlt className="p-1 border-2 text-3xl border-gray-400 rounded-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
