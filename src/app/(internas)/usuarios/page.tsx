"use client";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuarios from "@/app/components/usuario/ListaUsuarios";
import useUsuarios from "@/app/data/hooks/useUsuarios";
import { IconPlus, IconUser } from "@tabler/icons-react";


export default function Page() {
  const {usuario, usuarios, salvar, excluir, cancelar, alterarUsuario} = useUsuarios();

  return (
    <Pagina classname="flex flex-col gap-10">
      <Titulo
        icone={IconUser}
        principal="Usuários"
        secundario="Cadastro de Usuários"
      />
      {usuario ? (
        <FormularioUsuario
          usuario={usuario}
          onchange={alterarUsuario}
          cancelar={cancelar}
          salvar={salvar}
          excluir={excluir}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => alterarUsuario({})}
            >
              <IconPlus size={20} />
              <span>Novo Usuário</span>
            </button>
          </div>
          <ListaUsuarios onClick={alterarUsuario} usuarios={usuarios} />
        </>
      )}
    </Pagina>
  );
}
