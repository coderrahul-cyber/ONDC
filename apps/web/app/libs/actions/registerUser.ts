"use server";

export default async function registerUser(previousState : unknown,formData : FormData){
    const firstName = formData.getAll("") ;
    console.log("form is working" , firstName);
    return ;
}