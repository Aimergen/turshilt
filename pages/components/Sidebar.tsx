import { FC, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

interface SideBarProps {
  children: ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children }) => {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTab ? false : true); //sidebariig neej haah

  const SideBarAnimation = isTab
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isTab) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTab]);

  return (
    <div>
      <div
        className={`md:hidden fixed inset-0 max-h-screen z-[998] ${
          open ? "block" : "hidden"
        } `}
        onClick={() => setOpen(false)}
      ></div>
      <motion.div
        variants={SideBarAnimation}
        animate={open ? "open" : "closed"}
        className="bg-white w-[16rem] max-w-[16rem] text-gray-500 z-[999] h-screen overflow-hidden md:relative fixed"
      >
        {/* logo */}
        <div className="flex items-center gap-3 font-medium border-b border-slate-300 py-3 mx-3">
          <Image alt="logo" width={50} height={50} src="/logo512.png" />
          <span className="text-2xl whitespace-pre">So-goos</span>
        </div>
        {/* menu */}
        <div className=" flex flex-col h-full text-lg">
          <Link
            href=""
            className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium scroll"
          >
            <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
              <HiOutlineShoppingBag size={30} className="min-w-max pr-2" />
              Миний захиалгууд
            </div>
          </Link>
          <Link
            href=""
            className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
          >
            <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
              <AiOutlineHeart size={30} className="min-w-max pr-2" />
              Таны хадгалсан
            </div>
          </Link>
          <Link
            href=""
            className="p-3 flex rounded-md gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium"
          >
            <div className=" flex items-center  pl-1 hover:text-gray-900 whitespace-pre gap-1 font-medium overflow-x-hidden">
              <MdExitToApp size={30} className="min-w-max pr-2" />
              Гарах
            </div>
          </Link>
        </div>
        {/* sum */}
        <motion.div
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
          onClick={() => setOpen(!open)}
          animate={
            open ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: -200, rotate: 180 }
          }
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <AiOutlineMenu size={25} />
      </div>
    </div>
  );
};

export default SideBar;
