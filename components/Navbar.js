import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

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
                className="container text-slate-600 flex flex-wrap justify-between items-center mx-auto sm:text-xl"
            >
                <Logo />
                <ButtonComponent
                    className="md:hidden p-3 focus:ring-gray-300 hover:bg-slate-100 flex rounded-lg shadow-none"
                    onClick={toggleVisibility}
                >
                    <FontAwesomeIcon icon={faBars} />
                </ButtonComponent>
                <NavContainer visibility={mobileMenuVisible}>
                    {links.map(link => <NavItem {...link} key={link.value} />)}
                </NavContainer>
            </div>
        </nav>
    )
}

const Logo = () => {
    const router = useRouter();

    return (
        <button
            className="rounded-full shadow-zinc-500 shadow-md p-1 sm:p-3 flex"
            onClick={() => router.push('/')}
        >
            <Image
                src="/images/logo.svg"
                alt=""
                width={65}
                height={65}
            />
        </button>
    );
}

const NavContainer = ({ children, visibility }) => {
    return (
        <div className={`${!visibility ? 'hidden' : ''} w-full md:block md:w-auto`}>
            <ul
                className="flex flex-col gap-2 mt-4 md:flex-row md:gap-16 md:mt-0 font-medium uppercase"
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
                    className={`block py-2 px-4 ${router.asPath == href ? 'text-white bg-sky-500 md:text-blue-500 md:bg-transparent' : 'text-slate-600 bg-transparent '} rounded md:p-1 font-bold`}
                >{value}</a>
            </Link>
        </li>
    )
}

export default Navbar;