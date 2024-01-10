import { IoCall } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { design, marketing, webdesign, webdevelopment } from "../(utils)/NavbarData";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
    function createSubmenu(items: any[]) {
        return <div className=" opacity-0 translate-y-1 duration-300 transition-all group-hover:translate-y-0 invisible w-[80vw] bg-[#142638] border border-[#1e3a57] p-5 rounded-[30px] text-white font-normal text-base top-full left-1/2 -translate-x-1/2 absolute group-hover:opacity-100 group-hover:visible">
            <ul className="grid grid-cols-2 gap-5">
                {items.map(function (item: any, index) {
                    return <li key={index} className="w-full p-5 rounded-full border border-[border border-[#1e3a57]">{item.item}</li>
                })}
            </ul>
        </div>
    }
    return <nav className="relative text-text flex w-full justify-between items-center px-10 h-32">
        <div>
            <a href="/">
                <div className="group flex items-center gap-3 overflow-x-hidden">
                    <img src="https://th.bing.com/th/id/OIP.4dcJ_AHTJ81dikKbJ_xBtgHaGw?rs=1&pid=ImgDetMain " className="rounded-full z-10 h-16 w-16 object-cover" />
                    <span id="logotext" className="text-xl text-white -translate-x-[200%] z-0 font-extrabold group-hover:translate-x-0 transition-all duration-500">OCTABIZ</span>
                </div>
            </a>
        </div>
        <div>
            <ul className="flex gap-10  font-semibold uppercase">
                <li className="group">
                    <NavbarLink path='/' text="home" />
                </li>
                <li className="group">
                    <NavbarLink path='' text="app" />
                </li>
                <li className="group">
                    <NavbarLink path="/web" text="web design" />
                    {createSubmenu(webdesign)}
                </li>
                <li className="group">
                    <NavbarLink path="/web" text="web development" />
                    {createSubmenu(webdevelopment)}
                </li>
                <li className="group">
                    <NavbarLink path='' text="Graphic design" />
                    {createSubmenu(design)}
                </li>
                <li className="group">
                    <NavbarLink path='' text='marketing' />
                    {createSubmenu(marketing)}
                </li>
                <li className="group">
                    <NavbarLink path='' text='contact' />
                </li>
            </ul>
        </div>
        <div className="flex gap-3 text-xl">
            <div className="hover:bg-black">
                <IoCall />
            </div>
            <div>
                <TbMessage />
            </div>
        </div>
    </nav>
}