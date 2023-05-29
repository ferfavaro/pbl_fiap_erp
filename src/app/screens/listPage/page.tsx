import ListPage from "@/app/components/listPage/listPage";
import AsideMainPage from "../../components/asidemainPage/asideMainPage";
import NavBar from "../../components/nav/navBar";

export default function ListPageScreen() {

  interface Contact {
    id: string;
    name: string;
    phoneNumber: string;
    cpf: string;
  }
  
  const contacts: Contact[] = [
    {
      id: '1',
      name: 'João',
      phoneNumber: '11937287458',
      cpf: '12345678912',
    },
    {
      id: '2',
      name: 'Maria',
      phoneNumber: '11936277389',
      cpf: '98765432112',
    },
    // Adicione mais contatos aqui
  ];

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-bgCardModules ">
          <NavBar />

          <ListPage contacts={contacts}/>
         
        </main>
      </div>
    </div>
  );
}
