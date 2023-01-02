import React, { useState } from 'react';
import './App.css';

export function App() {

  // const texto = `*Nome*\n${nome}\n\n*Telefone*\n${telefone}\n\n*E-mail*\n${email}*Serviço*\n${servico}\n*Mensagem*\n${mensagem}`;

  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    console.log(nome);
    event.preventDefault();
  }

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  }

  const handleChangeTel = (event) => {
    setTel(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeServico = (event) => {
    console.log(event.target.value);
  }

  const handleChangeMensagem = (event) => {
    setMensagem(event.target.value);
  }

  function enviarMensagem() {
    const nome = "";
    const telefone = "";
    const email = "";
    const servico = "";
    const mensagem = "";
    console.log("OK");
    // Verificação
    /*
    if (1!==1) {
      alert();
    } else {
    // Monta mensagem
    const texto = `*Nome*\n${nome}\n\n*Telefone*\n${telefone}\n\n*E-mail*\n${email}*Serviço*\n${servico}\n*Mensagem*\n${mensagem}`;
    }
    */
  }

  return (
    <>
      <main className='App'>

        {/* Header */}
        <section id="header" className="bg-blue-100 bg-cover bg-left-top md:bg-top flex flex-col justify-between min-h-screen p-8 w-full">

          {/* Logo */}
          <img className="mb-6 md:w-3/12 md:mb-0 md:mx-0 mx-auto sm:w-6/12 w-8/12" loading="lazy" alt="Logo" src="./assets/adauto-campos-logo.png" />

          {/* Título e leading */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-2xl lg:text-4xl leading-tight max-w-3xl font-semibold my-6 text-yellow-600 tracking-tight">Para chegar aonde quer que seja, não é preciso utilizar força, basta aplicar a razão.</h2>
            <p className="mb-8 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni natus, exercitationem aspernatur placeat ratione possimus debitis alias laborum quia deleniti eos fugit tempora corrupti, quos dolores perferendis.</p>
          </div>

          <div className="flex flex-wrap gap-0 items-center justify-center md:justify-start md:gap-8">

            {/* Avatar */}
            <div className="relative w-32">
              <a className="block focus:outline-none focus:ring focus:ring-black/20 focus:border-black rounded-full transition-all shadow-gray-300/20 shadow-lg hover:shadow-xl" href="#bio">
                <div className="rounded-full">
                  <div className="aspect-square bg-black relative overflow-hidden rounded-full">
                    <img loading="lazy" alt="Adauto Campos" src="./assets/adauto-campos-foto.jpg" />
                  </div>
                </div>
              </a>
            </div>
            <div className="text-white">
              <h3 className="font-semibold md:text-left md:mt-0 mt-2 text-2xl text-center text-yellow-600 tracking-tight">Adauto Campos</h3>
              <p className="mb-4 md:text-left text-center">Advogado especialista em ...</p>
              <a className="active:bg-green-700 active:shadow-lg align-center bg-green-500 duration-150 ease-in-out flex focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 font-medium hover:bg-green-600 hover:shadow-lg inline-block px-4 py-2.5 rounded shadow-md transition w-fit" href='#formulario'>
                <img className="h-5 mr-2" loading="lazy" alt="WhatsApp" src="./assets/whatsapp-logo.svg" />
                <p className="font-semibold leading-normal text-white text-sm">Conversar por WhatsApp</p>
              </a>
            </div>
          </div>

        </section>

        {/* Seção com cards */}
        <section className="bg-white p-8">
          <h3 className="font-semibold leading-tight lg:text-4xl text-2xl text-center text-yellow-600 tracking-tight">Ratione possimus debitis alias laborum</h3>
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
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="bg-sky-900 block p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-white mb-4 text-center text-lg">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </section>

        {/* Seção com estrelas */}
        <section className="bg-gradient-to-br from-sky-900 via-slate-800 to-black p-8">

          <div className="flex flex-row flex-nowrap gap-1 mb-4 mx-auto w-fit">
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
            <img className="w-7" loading="lazy" alt="estrela" src="./assets/star.svg" />
          </div>

          <p className="font-semibold leading-tight lg:text-4xl mb-6 text-2xl text-center text-white tracking-tight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error magni natus, exercitationem aspernatur placeat ratione possimus debitis alias laborum quia deleniti.</p>

          <a className="active:bg-green-700 active:shadow-lg align-center bg-green-500 duration-150 ease-in-out flex focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 font-medium hover:bg-green-600 hover:shadow-lg mx-auto px-4 py-2.5 rounded shadow-md transition w-fit" href='#formulario'>
            <img className="h-5 mr-2" loading="lazy" alt="WhatsApp" src="./assets/whatsapp-logo.svg" />
            <p className="font-semibold leading-normal text-white text-sm">Conversar por WhatsApp</p>
          </a>

        </section>

        {/* Seção de serviços */}
        <section className="bg-white p-8">
          <h3 className="font-semibold leading-tight lg:text-4xl text-2xl text-yellow-600 tracking-tight">Conheça nossos serviços</h3>

          {/* Cards */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <div className="block p-6 rounded-lg shadow-lg w-full md:w-1/4">
              <h4 className="font-bold mb-4 text-lg text-sky-900">Serviço #1</h4>
              <ul className="list-disc list-inside">
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
                <li>Item #5</li>
              </ul>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-full md:w-1/4">
              <h4 className="font-bold mb-4 text-lg text-sky-900">Serviço #2</h4>
              <ul className="list-disc list-inside">
                <li>Item #1</li>
                <li>Item #2</li>
                <li>Item #3</li>
                <li>Item #4</li>
                <li>Item #5</li>
              </ul>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-full md:w-1/4">
              <h4 className="font-bold mb-4 text-lg text-sky-900">Serviço #3</h4>
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

        {/* Bio */}
        <section className="container md:px-6 md:w-fit mx-auto md:my-10 my-2 px-0 w-full" id="bio">

          <div className="bg-gradient-to-br from-sky-900 to-slate-800 block md:rounded-lg no-shadow-on-mobile rounded-none shadow-lg">
            <div className="flex flex-wrap items-center">

              {/* Foto */}
              <div className="aspect-square grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                <img src="./assets/adauto-campos-foto.jpg" alt="Adauto Campos"
                  className="aspect-square object-contain lg:rounded-tr-none lg:rounded-bl-lg md:rounded-t-lg rounded-none w-full" />
              </div>

              {/* Container de informações */}
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">

                <div className="align-content-flex-start flex flex-row flex-wrap justify-between md:px-12 md:py-6 md:px-12 px-6 py-0">

                  {/* Nome e credenciais */}
                  <div className="mb-0 md:mb-4">
                    <h2 className="font-bold mb-1 md:mt-0 mt-8 text-3xl text-yellow-500">Adauto Campos</h2>
                    <p className="font-semibold mb-3 md:mb-4 mt-0 text-white text-xl">OAB 0000/AA e 0000/AA</p>
                  </div>

                  {/* Redes sociais */}
                  <div className="flex flex-row flex-nowrap gap-8 h-8 mb-5 md:mb-0 md:mt-2 mt-0 w-fit">
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

                  {/* Texto descritivo */}
                  <p className="text-white mb-10 md:mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
                </div>
              </div>
            </div>
          </div>

        </section>


        {/* Seção com frase */}
        <section className="bg-white mb-0 mt-6 md:mb-12 md:mt-0 p-8">

          <p className="leading-tight lg:text-5xl text-center text-3xl text-yellow-600 tracking-tight">&ldquo;A justiça é o destino.<br className="block md:hidden" /> A lei é o caminho.&rdquo;</p>

        </section>

        {/* Formulário */}
        <section className="bg-white block max-w-md mb-8 mx-auto no-shadow-on-mobile p-6 rounded-lg shadow-lg">
          <form id="formulario" onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="text-md mb-4">Preencha seus dados no formulário abaixo, por favor. Sua mensagem será respondida imediatamente assim que eu recebê-la. Obrigado por entrar em contato.</p>
              <div className="flex flex-col justify-center">
                <div className="mb-3">
                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none hover:border-blue-800 duration-300" id="form-nome" placeholder="Nome completo" value={nome} onChange={handleChangeNome} required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none hover:border-blue-800 duration-300" id="form-telefone" placeholder="Telefone com DDD" value={tel} onChange={handleChangeTel} required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none hover:border-blue-800 duration-300" id="form-email" placeholder="E-mail" value={email} onChange={handleChangeEmail} required />
                </div>
                <div className="mb-3">
                  <select className="form-select cursor-pointer block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none hover:border-blue-800" id="form-servico" aria-label="serviço solicitado" value={servico} onChange={handleChangeServico} required>
                    <option value="none" defaultValue>Selecione o serviço</option>
                    <option value="1">Serviço #1</option>
                    <option value="2">Serviço #2</option>
                    <option value="3">Serviço #3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none hover:border-blue-800 resize-none duration-300" id="form-mensagem" placeholder="Mensagem" rows="3" value={mensagem} onChange={handleChangeMensagem} required></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="active:bg-green-700 active:shadow-lg align-center bg-green-500 duration-150 ease-in-out flex focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 font-medium hover:bg-green-600 hover:shadow-lg justify-center mx-auto px-4 py-2.5 rounded shadow-md transition w-full" href='http://wa.me/+55319999999' target='blanket'>
              <img className="h-5 mr-2" loading="lazy" alt="WhatsApp" src="./assets/whatsapp-logo.svg" />
              <p className="font-semibold leading-normal text-white text-md">Enviar por WhatsApp</p>
            </button>
          </form>

        </section>

      </main>

      <footer className="bg-slate-800 text-white p-4">
        <div className="flex flex-col font-semibold gap-2 md:flex-row mx-auto text-center text-grey-700 text-sm w-fit">
          <p>©2023 Todos os direitos reservados</p>
          <p className="hidden md:block"> · </p>
          <p>Desenvolvido por <span className="font-bold uppercase">Star Solution</span></p>
          <p className="hidden md:block"> · </p>
          <p><a href="#" className="hover:underline">Privacidade e segurança</a></p>
          <p className="hidden md:block"> · </p>
          <p><a href="#" className="hover:underline">Termos e condições</a></p>
        </div>
      </footer>
    </>
  );
}
