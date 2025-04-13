import { Metadata } from "next";

export const metadata : Metadata = {
    title : "ONDC-login",
    description : "A marketplace for all",

}
function layout({children} : {children : React.ReactNode}){
    return(
        <>
        {children}
        </>
    )
}

export default layout;