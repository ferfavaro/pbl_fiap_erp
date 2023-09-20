"use client"

import Login from "@/app/application/usecases/Login";
import SignIn from "@/app/application/usecases/SignIn";
import AxiosAdapter from "@/app/infra/adapters/AxiosAdapter";
import UserGateway from "@/app/infra/gateways/UserGateway"
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function signIn(email: string, password: string) {
    try {
      const signIn = await new SignIn(new UserGateway(new AxiosAdapter())).execute(email, password);
      router.push("../screens/homepage")
    } catch (error) {
      console.log(error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const login = await new Login(new UserGateway(new AxiosAdapter())).execute(email, password);
      router.push("/screens/homepage")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main
      className=" bg-white h-screen w-screen justify-center bg-cover  "
      style={{
        backgroundImage: `url('/Images/LoginPage/background.png')`,
      }}
    >
      <div className="h-screen w-screen flex items-center justify-center w-fit  rounded-xl ">
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
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black leading-tight"
                type="text"
                placeholder="Kaiquefj@Hotmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-WhiteTextColor text-sm font-bold mb-2">
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-black mb-1 leading-tight"
                type="text"
                placeholder="******************"
                value={password}
                onChange={handlePasswordChange}
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
                onClick={() => signIn(email, password)}
              >
                Cadastre-se
              </button>
              <button
                className="bg-buttonFormColor transition duration-600 ease-out hover:opacity-75  text-WhiteTextColor font-bold py-2 px-4  text-md rounded-full "
                type="button"
                onClick={() => login(email, password)}
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
