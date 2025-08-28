import Link from 'next/link';
import React from 'react';

const Route = () => {
    const route = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Shop", href: "/shop" },
        { name: "Food", href: "/food" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" }
    ];
    return (
        <>
            {route.map((item) => {
                return (
                    <li key={item.name} className="flex items-center">
                        <Link
                            href={item.href}
                        >
                            {item.name} 
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default Route;