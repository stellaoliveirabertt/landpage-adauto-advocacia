import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <main className='App'>

        {/* Header */}
        <section id="header" className="bg-blue-100 flex flex-col justify-between min-h-screen p-8 w-full">

          {/* Logo */}
          <img className="w-64" loading="lazy" alt="Logo" src="./assets/logo.jpeg" />

          {/* Título e leading */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl lg:text-4xl leading-tight max-w-3xl font-semibold my-6 text-blue-500 tracking-tight">Para chegar aonde quer que seja, não é preciso utilizar força, basta aplicar a razão.</h2>
            <p className="mb-8 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni natus, exercitationem aspernatur placeat ratione possimus debitis alias laborum quia deleniti eos fugit tempora corrupti, quos dolores perferendis.</p>
          </div>

          <div className="flex flex-wrap gap-8">

            {/* Avatar */}
            <div className="relative w-32">
              <a className="block focus:outline-none focus:ring focus:ring-black/20 focus:border-black rounded-full transition-all shadow-gray-300/20 shadow-lg hover:shadow-xl" href="#bio">
                <div className="rounded-full">
                  <div className="aspect-square bg-gray-200 relative overflow-hidden rounded-full">
                    <img loading="lazy" alt="Foto do advogado" src="https://images.generated.photos/1woq-qm9oLPwhEk_Rz_TeDSiO7BPZa111eC9sX8Gf88/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk2MDI1LmpwZw.jpg" />
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-2 text-white">
              <h3 className="font-semibold text-2xl tracking-tight">Nome Sobrenome</h3>
              <p className="mb-4">Advogado especialista em ...</p>
              <a className="active:bg-green-700 active:shadow-lg align-center bg-green-500 duration-150 ease-in-out flex focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 font-medium hover:bg-green-600 hover:shadow-lg inline-block px-4 py-2.5 rounded shadow-md transition w-fit" href='http://wa.me/+55319999999' target='blanket'>
                <img className="h-5 mr-2" loading="lazy" alt="WhatsApp" src="./assets/whatsapp-logo.svg" />
                <p className="font-semibold leading-normal text-white text-sm">Conversar por WhatsApp</p>
              </a>
            </div>
          </div>

        </section>

        {/* Seção com cards */}
        <section className="bg-white p-8">
          <h3 className="font-semibold leading-tight lg:text-4xl text-2xl text-center text-sky-900 tracking-tight">Ratione possimus debitis alias laborum</h3>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni natus, exercitationem.</p>

          {/* Cards */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's contefnt.</p>
            </div>
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </section>

        {/* Seção com estrelas */}
        <section className="bg-gradient-to-br from-sky-900 via-slate-800 to-black p-8">

          <div className="flex flex-row flex-nowrap gap-1 mx-auto w-fit">
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
          </div>

          <p className="font-semibold leading-tight lg:text-4xl mb-6 text-2xl text-center text-white tracking-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni natus, exercitationem aspernatur placeat ratione possimus debitis alias laborum quia deleniti.</p>

          <a className="active:bg-green-700 active:shadow-lg align-center bg-green-500 duration-150 ease-in-out flex focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 font-medium hover:bg-green-600 hover:shadow-lg mx-auto px-4 py-2.5 rounded shadow-md transition w-fit" href='http://wa.me/+55319999999' target='blanket'>
            <img className="h-5 mr-2" loading="lazy" alt="WhatsApp" src="./assets/whatsapp-logo.svg" />
            <p className="font-semibold leading-normal text-white text-sm">Conversar por WhatsApp</p>
          </a>

        </section>

        {/* Seção de serviços */}
        <section className="bg-white p-8">
          <h3 className="font-semibold leading-tight lg:text-4xl text-2xl text-sky-900 tracking-tight">Conheça nossos serviços</h3>

          {/* Cards */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <div className="block p-6 rounded-lg shadow-lg w-full md:w-1/4">
              <h4 className="font-bold my-4 text-center text-lg text-sky-900">Serviço #1</h4>
              <ul className="list-disc list-inside">
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
                <li>Item #5</li>
              </ul>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-full md:w-1/4">
              <h4 className="font-bold my-4 text-center text-lg text-sky-900">Serviço #2</h4>
              <ul className="list-disc list-inside">
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
                <li>Item #5</li>
              </ul>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-full md:w-1/4">
              <h4 className="font-bold my-4 text-center text-lg text-sky-900">Serviço #3</h4>
              <ul className="list-disc list-inside">
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
                <li>Item #5</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção com apresentação do profissional */}
        <section id="bio" className="bg-gradient-to-br from-sky-900 to-slate-800 flex flex-row p-0">
          <div className="aspect-square bg-gray-200 overflow-hidden w-full">
            <img className="w-full" loading="lazy" alt="Foto do advogado" src="https://images.generated.photos/1woq-qm9oLPwhEk_Rz_TeDSiO7BPZa111eC9sX8Gf88/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk2MDI1LmpwZw.jpg" />
          </div>
          <div className="p-8 text-white">
            <div className="align-content-flex-start flex flex-row flex-wrap justify-between mb-8">
              <div>
                <p className="font-bold text-2xl">Nome Sobrenome</p>
                <p className="text-xl">OAB 0000/AA e 0000/AA</p>
              </div>
              <div className="flex flex-row flex-nowrap gap-8 h-8 w-fit">
                <a href="#">
                  <img className="w-6" loading="lazy" alt="Instagram" src="./assets/instagram-logo.svg" />
                </a>
                <a href="#">
                  <img className="w-7" loading="lazy" alt="Facebook" src="./assets/facebook-circle.svg" />
                </a>
                <a href="#">
                  <img className="w-7" loading="lazy" alt="LinkedIn" src="./assets/linkedin-logo.svg" />
                </a>
              </div>
            </div>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
          </div>
        </section>

        {/* Seção final */}
        <section className="bg-white p-8">

          <p className="font-semibold leading-tight lg:text-2xl mb-6 text-center text-xl tracking-tight">"A mão que joga pedra é a mesma que apedreja." - Falcão</p>

          <a className="active:bg-green-700 active:shadow-lg align-center bg-green-500 duration-150 ease-in-out flex focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 font-medium hover:bg-green-600 hover:shadow-lg mx-auto px-4 py-2.5 rounded shadow-md transition w-fit" href='http://wa.me/+55319999999' target='blanket'>
            <img className="h-5 mr-2" loading="lazy" alt="WhatsApp" src="./assets/whatsapp-logo.svg" />
            <p className="font-semibold leading-normal text-white text-sm">Conversar por WhatsApp</p>
          </a>

        </section>

      </main>

      <footer className="bg-slate-800 text-white p-4">
        <div className="flex flex-wrap font-semibold gap-2 mx-auto text-center text-grey-700 text-sm w-fit">
          <p>©2022 Todos os direitos reservados</p>
          <p> · </p>
          <p>Desenvolvido por <span className="font-bold uppercase">Star Solution</span></p>
          <p> · </p>
          <a href="#" className="hover:underline">Privacidade e segurança</a>
          <p> · </p>
          <a href="#" className="hover:underline">Termos e condições</a>
        </div>
      </footer >
    </>
  );
}

export default App;
