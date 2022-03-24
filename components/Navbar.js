import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const toggleVisibility = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    }

    const links = [
        { href: '/', value: 'Lists' },
        { href: '/faq', value: 'FAQ' },
        { href: '/about', value: 'About' },
    ];

    return (
        <nav
            className="bg-white px-4 py-3 rounded-b-lg"
        >
            <div
                className="container flex flex-wrap justify-between items-center mx-auto sm:text-xl text-slate-600"
            >
                <Logo />
                <button
                    className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-slate-100 flex"
                    onClick={toggleVisibility}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <NavContainer visibility={mobileMenuVisible}>
                    {links.map(link => <NavItem {...link} key={link.value} />)}
                </NavContainer>
            </div>
        </nav>
    )
}

const Logo = () => {
    return (
        <div
            className="rounded-full shadow-zinc-500 shadow-md"
        >
            <img
                className="h-14 sm:h-20 m-1 sm:m-3"
                src="/images/logo.svg"
            />
        </div>
    );
}

const NavContainer = ({ children, visibility }) => {
    return (
        <div className={`${!visibility && 'hidden'} w-full md:block md:w-auto`}>
            <ul
                className="flex flex-col mt-4 md:flex-row md:space-x-20 md:mt-0 font-medium uppercase"
            >
                {children}
            </ul>
        </div>
    )
}

const NavItem = ({ href, value }) => {
    const router = useRouter();

    return (
        <li>
            <Link href={href}>
                <a
                    className={`block py-2 px-4 ${router.asPath == href ? 'text-white bg-sky-500 md:text-blue-500 md:bg-transparent' : 'text-slate-600 bg-transparent '} rounded md:p-0 font-bold`}
                >{value}</a>
            </Link>
        </li>
    )
}

export default Navbar;