"use client";
import { Form } from "@repo/ui/components/form";

export default  function page(){
    return (
        <div className=" font-rejouice   text-white h-[85vh] flex pt-[10vh] justify-center">
               <Form onSubmit={()=>console.log("clicked")} field={[{name : "userName"} , {name : "password" , type : "password"} , {name : "phone_Number"}]} >
                <>
               <label htmlFor="businessType">BusinessType</label>
               <select className="bg-white/30 border-none rounded-lg font-extralight w-full px-2 py-1 my-2  focus:outline-none   " name="businessType">
                <option value="ecommerce" className="bg-primary/50">E-Commerce</option>
                <option value="restaurant" className="bg-primary/50">Restaurant</option>
                <option value="driver" className="bg-primary/50">Cab-driver</option>
               </select>
                </>
               </Form>
        </div>
    )
}
