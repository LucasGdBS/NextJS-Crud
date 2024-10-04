"use server";
import RepostiórioUsuario from "./RepositorioUsuario";

export default async function obterTodos() {
  return RepostiórioUsuario.obterTodos();
}
