import { Metadata } from "next"

export const metadata : Metadata = {
    title : "ONDC-Resgisteration",
}

export default function  layout({children}: {children : React.ReactNode}){
    return (
        <>
        {children}
        </>
    )
}