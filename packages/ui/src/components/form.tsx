"use client";
import { useActionState } from "react";
import "../styles/global.css";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";
interface Field {
    name: string;
    type?: string;
}

interface Props {
    onSubmit: (previousState: unknown, formData: FormData) => Promise<void>;
    field: Field[];
    children?: React.ReactNode;
}


export const Form = ({onSubmit , field  = [{name : "" ,type : "text"}] , children }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    const [data, action , isPending ] = useActionState(onSubmit , undefined);
    return (
        <form  action={action} className="flex flex-col gap-4 bg-white/10  h-max sm:w-1/2 lg:w-1/3  py-2 px-4 lg:py-4 lg:px-6 lg:min-h-[20vh] rounded-2xl  text-xl font-medium ">
            <h1 className="text-2xl   border-b-[1px] relative border-white/80 py-2"><span className="text-4xl mr-2  ">ONDC</span>A place for everyone <span onClick={()=>router.push("/")} className=" absolute right-2 cursor-pointer text-xl bottom-[10%] text-white/70 hover:text-white ">X</span></h1>
            <div className="bg-white/20 p-8  rounded-lg">
            {field.map((item,index)=>(
                <div key={index} className="flex flex-col text-xl">
                    <label htmlFor={item.name} >{item.name.toUpperCase().replace("_", " ")}</label>
                        <input type={item.type} name={item.name} id={item.name} className="bg-white/30 border-none rounded-lg font-extralight px-2 py-1 my-2 focus:outline-none   "  />                    
                </div>
            ))
            }
            {children}
            </div>
            {!pathname.includes("register")}
        <Button type="submit" className="  bg-white/30 hover:bg-white/10 cursor-pointer w-max px-4 py-2 rounded-md  mx-auto">
        {!pathname.includes("register") ? pathname.replace("/"," ").split("-")[0] : "Register"}
        </Button>            
        </form>
    )
}

