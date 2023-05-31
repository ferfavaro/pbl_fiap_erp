"use client"
import AsideMainPage from "@/app/components/asidemainPage/asideMainPage";
import NavBar from "@/app/components/nav/navBar";

export default function InputsPage() {

  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />
          <div>
          <div className="flex flex-col bg-asideBgColor w-full h-14 p-2 pl-3">
            <h3 className="text-3xl font-bold">Módulo Produto</h3>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-500">
            <div className="px-4 py-2">
              <label about="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
              <input type="text" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            </div>
            <div className="px-4 py-2">
              <label about="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            </div>
            <div className="px-4 py-2">
              <label about="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
              <input type="text" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            </div>
            <div className="px-4 py-2">
              <label about="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantid. Estoque</label>
              <input type="number" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 m-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}