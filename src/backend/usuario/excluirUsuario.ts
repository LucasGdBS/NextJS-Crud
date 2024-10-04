'use server'
import RepostiórioUsuario from "./RepositorioUsuario";

export default async function deletar(id: string) {
    return RepostiórioUsuario.excluir(id);
}