import Link from 'next/link';
import React from 'react';

const FooterCompany = () => {
    return (
        <div className="space-y-3">
            <h3 className="uppercase">Company</h3>
            <ul className="space-y-1">
                <li>
                    <Link href="#">Privacy</Link>
                </li>
                <li>
                    <Link href="#">Terms of Service</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterCompany;