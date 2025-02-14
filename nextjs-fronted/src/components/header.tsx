import Link from "next/link";

export default function Header(){
    return(
        <div className="pt-6 pb-6 bg-blue-500 ">
            <div className=" ...">
                
            <Link href={"/"}>Home</Link> | 
            <Link href={"/about/"}> About</Link> | 
            <Link href={"/store/"}> Store</Link> | 
            <Link href={"/profile/"}> Profile</Link>
            </div>
        </div>
    )
}