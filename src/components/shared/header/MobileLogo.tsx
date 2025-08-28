import { Cat } from "lucide-react";
import Link from "next/link";

const MobileLogo = () => {
    return (
        <>
            <Link href="/" className="flex items-center">
                <Cat className="text-primary" />
                <span className="text-primary text-lg md:text-xl font-bold">Pet Services</span>
            </Link>
        </>
    );
};

export default MobileLogo;