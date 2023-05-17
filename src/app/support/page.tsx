import AsideMainPage from "../components/asidemainPage/asideMainPage";
import NavBar from "../components/nav/navBar";

export default function supportPage() {
  return (
    <div className="flex flex-col   h-screen  w-screen  ">
      <div className="flex flex-1">
        <AsideMainPage />

        <main className="flex-1  h-screen w-screen  bg-mainPageBgColor ">
          <NavBar />

          <div className="flex  h-4/6 w-6/6 justify-center mt-16">
            <div className=" flex flex-col w-5/12 bg-white justify-center items-center mt-10 p-8 rounded-md">
              <span className=" flex text-black font-semibold text-3xl text-center">
                {" "}
                Favor escolher a melhor opção de contato
              </span>

              <div className="flex  mt-24 flex-col items-end">
                <button
                  className="bg-buttonFormColor transition duration-600 ease-out hover:opacity-75 mb-4 text-WhiteTextColor font-bold py-2 px-4  w-80 h-16   text-xl rounded-lg "
                  type="button"
                >
                  E-mail
                </button>

                <button
                  className="bg-buttonFormColor transition duration-600 ease-out hover:opacity-75  text-WhiteTextColor font-bold py-2 px-4 w-80 h-16  text-xl rounded-lg "
                  type="button"
                >
                  Whatsapp
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
