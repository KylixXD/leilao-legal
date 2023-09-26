import Image from "next/image";
import LogoImage from "@/assets/logo-leilao-legal.png"

export default function Logo(){
    return (
        <div className="w-[92px] h-[139px]">
            <a href="/" className="flex items-center">
                <Image src={LogoImage} alt="Logo Legal" width={0} height={0} sizes="100vw" className="w-full h-full"/>
            </a>
        </div>
    )
}