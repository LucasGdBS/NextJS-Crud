import { Usuario } from "@prisma/client";
import LinhaUsuario from "./LinhaUsuario";

export interface ListaUsuariosProps {
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuarios(props: ListaUsuariosProps) {
    return(
        <div className="flex flex-col gap-4">
            {props.usuarios.map((usuario: Usuario) => {
                return (
                    <LinhaUsuario usuario={usuario} key={usuario.id} onClick={props.onClick} />
                );
            })}
        </div>
    )
}