"use client"
import { LayoutTemplateIcon, MenuIcon, MenuSquareIcon, PencilIcon, PlusCircleIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  cpf: string;
}

interface ListProps {
  contacts: Contact[];
}

const ListPage: React.FC<ListProps> = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(
    null
  );

  const handleClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="">
      <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
        <h3 className="text-3xl font-bold">Módulo escolhido</h3>
      </div>

      <div className="flex flex-row w-full bg-mainPageBgColor h-12 p-4">
        <input
          className=" pl-4 relative rounded-xl w-80 h-6 text-black text-sm"
          type="search"
          name="Lista de pesquisa"
          placeholder="Lista de Pesquisa"
        ></input>
        <SearchIcon className=" ml-72 absolute text-black pt-1 " size={24} />

        <div className="flex flex-row justify-end items-center w-4/6 gap-2">
          <MenuIcon className="text-black" />
          <MenuSquareIcon className="text-black" />
          <LayoutTemplateIcon className="text-black mr-6" />
          <PlusCircleIcon className="text-black" />
          <PencilIcon className="text-black" />
          <Trash2Icon className="text-black" />
        </div>
      </div>

      <table className="w-full border-b-black">
        <thead>
          <tr className="border-2 border-white border-b-black">
            <th className="text-left text-black px-4 py-2">ID</th>
            <th className="text-black text-left px-4 py-2">Nome</th>
            <th className="text-black text-left px-4 py-2">Número de telefone</th>
            <th className="text-black text-left px-4 py-2">CPF</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr
              key={index}
              onClick={() => handleClick(contact)}
              className={`cursor-pointer ${
                selectedContact === contact ? 'bg-gray-500' : ''
              }`}
            >
              <td className="text-black px-4 py-2">{contact.id}</td>
              <td className="text-black px-4 py-2">{contact.name}</td>
              <td className="text-black px-4 py-2">{contact.phoneNumber}</td>
              <td className="text-black px-4 py-2">{contact.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
