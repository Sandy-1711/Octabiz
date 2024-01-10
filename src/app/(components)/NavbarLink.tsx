export default function NavbarLink({ text,path }: any) {
    return <a href={path} className="block overflow-y-hidden relative">
        <span className=" transition-all block group-hover:-translate-y-full uppercase">{text}</span>
        <span className="z-10 translate-y-full transition-all absolute block group-hover:-translate-y-full uppercase">{text}</span>
    </a>
}