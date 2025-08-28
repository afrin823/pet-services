import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
const iconStyle = "flex items-center p-1";

const FooterSocial = () => {
    return (
        <div className="space-y-3">
            <div className="uppercase ">Social media</div>
            <div className="flex justify-start space-x-3">
                <Link href="#" title="Facebook" className={iconStyle}>
                    <Facebook />
                </Link>
                <Link href="#" title="Twitter" className={iconStyle}>
                    <Twitter />
                </Link>
                <Link href="#" title="Instagram" className={iconStyle}>
                    <Instagram />
                </Link>
            </div>
        </div>
    );
};

export default FooterSocial;