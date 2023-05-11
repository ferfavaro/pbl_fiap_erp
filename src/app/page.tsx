import Image from "next/image";

export default function Home() {
  return (
    <main
      className=" bg-white h-screen w-screen  bg-cover  "
      style={{
        backgroundImage: `url('/Images/LoginPage/background.png')`,
      }}
    >
      <div className="h-screen flex items-center justify-center w-fit ml-96  p-52  rounded-xl ">
        <div className=" flex  flex-row justify-center">
          <form className=" bg-backgroundFormColor shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            <h2 className="flex  mb-3 justify-center text-6xl text-titleFormColor font-montSerrat">
              Crio
            </h2>

            <div className="mb-4">
              <label className="block text-WhiteTextColor text-sm font-bold mb-2">
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-WhiteTextColor leading-tight"
                type="text"
                placeholder="Kaiquefj@Hotmail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-WhiteTextColor text-sm font-bold mb-2">
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-WhiteTextColor mb-1 leading-tight"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="mb-4">
              <a
                href=""
                className=" text-md  w-full py-2 px-3 text-WhiteTextColor  leading-tight "
              >
                Esqueceu sua senha? Clique aqui
              </a>
            </div>

            <div className="grid grid-cols-1">
              <button
                className="bg-buttonFormWhiteColor transition duration-600 ease-out hover:opacity-75  text-buttonTextFormColor font-bold py-2 px-4 text-md mb-4 rounded-full "
                type="button"
              >
                Cadastre-se
              </button>
              <button
                className="bg-buttonFormColor transition duration-600 ease-out hover:opacity-75  text-WhiteTextColor font-bold py-2 px-4  text-md rounded-full "
                type="button"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
