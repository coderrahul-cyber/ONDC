"use client";
import { Form } from "@repo/ui/components/form";

export default function page() {
  return (
    <div className=" font-rejouice   text-white h-[85vh] flex pt-[10vh] justify-center">
        <Form onSubmit={()=>console.log("clicked")} field={[{name : "userName"} , {name : "password" , type : "password"} ]}  />
    </div>
  );
}
