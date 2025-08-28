import Link from 'next/link';
import React from 'react';

const FooterDeveloper = () => {
    return (
        <div className="space-y-3">
            <h3 className="uppercase">Developers</h3>
            <ul className="space-y-1">
                <li>
                    <Link href="#">Public API</Link>
                </li>
                <li>
                    <Link href="#">Documentation</Link>
                </li>
                <li>
                    <Link href="#">Guides</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterDeveloper;