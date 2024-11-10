"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`capitalize font-medium hover:text-accent-default transition-all ${
                        link.path === pathname
                            ? "text-accent-default border-b-2 border-accent-default"
                            : ""
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;