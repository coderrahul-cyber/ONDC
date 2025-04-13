"use client";

import Link from "next/link";


export default function page(){
    return (
        <main className="font-rejouice   text-white h-[85vh] flex pt-[10vh] justify-center">
       
          <section className=" flex flex-col gap-4 bg-white/10  h-max sm:w-1/2 lg:w-1/3  py-2 px-4 lg:py-4 lg:px-6 lg:min-h-[20vh] rounded-2xl  text-xl font-medium">
             <div className="text-2xl   border-b-[1px] border-white/80 py-2">
                <h1 className="text-4xl inline mr-2 ">ONDC</h1>
                <span className="text-2xl">A place for everyone</span>
             </div>
             <ul className="bg-white/20 p-4  rounded-lg flex flex-col items-center gap-4">
                <Link href="/login-user" className="w-1/2   text-center bg-white/30 rounded-lg px-2 py-2  ">Login As User </Link>
                <Link href="/login-retail" className="w-1/2   text-center bg-white/30 rounded-lg px-2 py-2  ">Login As Retailer</Link>
             </ul>
             <div className="flex items-center justify-center gap-2 text-white/70 ">
             <Link href="/register/user" className="text-center hover:text-white/100 ">Resgister as user</Link>
                 / 
             <Link href="/register/retailer" className="text-center hover:text-white/100 ">Resgister as retailer</Link>
             </div>
          </section>
          
        </main>
    )
}