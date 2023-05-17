import AsideMainPage from "../components/asidemainPage/asideMainPage";

export default function mainPage() {
  return (
    <div className="flex flex-1">
      <AsideMainPage />

      <main className=" flex h-screen w-screen  bg-black">
        <p className="text-whiteTextColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolorum
          nesciunt architecto maiores magnam consequatur quae quaerat aut
          recusandae iste cupiditate deserunt odio corporis accusantium
          reiciendis molestias laborum omnis reprehenderit!
        </p>
      </main>
    </div>
  );
}
