import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../../ui/images/clean-tok-logo.png";

const Navbar = () => {
    return (
        <div>
            <Link href="/">
                <div>
                    <Image className="cursor-pointer" src={Logo} alt="CleanTok" />
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
