import { CatIcon } from "lucide-react";
import Link from "next/link";


const FooterLogo = () => {
    return (
        <div className="lg:w-1/3">
            <Link href="#" className="flex justify-center space-x-3 lg:justify-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                    <CatIcon />
                </div>
                <span className="self-center text-2xl font-semibold">Pet Services</span>
            </Link>
        </div>
    );
};

export default FooterLogo;