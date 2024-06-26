import homeLogo from "../../assets/home.png";
import "./Home.css";
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="border rounded px-4 hover:bg-white hover:text-indigo-800">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3 h-auto" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
