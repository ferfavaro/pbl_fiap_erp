export default function SupportContent() {
  return (
    <div className="flex  h-4/6 w-6/6 justify-center mt-16">
      <div className=" flex flex-col w-5/12 bg-white items-center mt-10 p-8 rounded-md">
        <span className=" flex text-black font-semibold text-3xl text-center w-64">
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
  );
}
