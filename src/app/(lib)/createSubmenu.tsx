// import React from "react"
export default function createSubmenu(items: any[]) {
    return <div className=" opacity-0 translate-y-1 duration-300 transition-all group-hover:translate-y-0 invisible w-[80vw] bg-[#142638] border border-[#1e3a57] p-5 rounded-[30px] text-white font-normal text-base top-full left-1/2 -translate-x-1/2 absolute group-hover:opacity-100 group-hover:visible">
        <ul className="grid grid-cols-2 gap-5">
            {items.map(function (item: any, index) {
                return <li key={index} className="w-full p-5 rounded-full border border-[border border-[#1e3a57]">{item.item}</li>
            })}
        </ul>
    </div>
}