"use client";
import { Form } from "@repo/ui/components/form";
import registerUser from "../../libs/actions/registerUser";

export default  function page(){
    return (
        <div className=" font-rejouice   text-white h-[85vh] flex pt-[10vh] justify-center">
               <Form onSubmit={registerUser} field={[{name : "userName"} ,{name : "email" , type : "email"}, {name : "Password" , type : "password"} ]}  />
        </div>
    )
}
