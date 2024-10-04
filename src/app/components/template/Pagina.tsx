import Menu from "./Menu"

export interface PaginaProps{
    children: React.ReactNode,
    classname?: string
}

export default function Pagina(props: PaginaProps){
    return (
        <div className="flex">
            <Menu />
            <main className={`flex-1 p-7 ${props.classname ?? ''}`}>{props.children}</main>
        </div>
    )
}