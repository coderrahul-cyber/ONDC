"use client";
// import "../styles/global.css";
import clsx from "clsx";


interface Props{
    className?:string;
    route : 'main' | 'other';
    children: React.ReactNode;
}

export const CommonNavbar = ({className , route , children} : Props) => {
    return (
        <nav  className={clsx("flex justify-between items-center  text-[2vmax] -mt-4 border-b-[1px] border-white/80 ", className)}>
           {children}
        </nav>
    )
}
