import Footer from '../../components/Footer';

const Boleto = () => {
  return (
    <>
    <div className="h-full flex flex-col">
      <div className="flex flex-col items-start p-4  space-y-4 ">
        <img src="arrow.svg" alt=""/>
        <h1 className="text-3xl font-bold">Pagamentos</h1>
        <span>Parcelas atuais</span>
      </div>
      <div className="bg-white rounded-md  p-4 m-4">
        <ul>
          <li className="my-4">
            <h1 className="font-bold">Referência</h1>
            <span>112020</span>
          </li>
          <li className="my-4">
            <h1 className="font-bold">Data de vencimento</h1>
            <span>16/12</span>
          </li>
          <li className="my-4">
            <h1 className="font-bold">Situação da fatura</h1>
            <span>Fechada</span>
          </li>
          <li className="my-4">
            <h1 className="font-bold">Fechada</h1>
            <span>665,0</span>
          </li>
        </ul>
      </div>
      <div className="mx-4  flex flex-col ">
        <div className="flex flex-row items-center justify-center space-x-2 ">
          <button className="bg-red w-6/12 rounded-2xl h-12 p-2 text-white">VISUALIZAR FATURA</button>
          <button className="bg-red w-5/12 rounded-2xl h-12 p-2 text-white">GERAR BOLETO</button>
        </div>
         <span className="ml-36 mt-2 text-red">Visualizar faturas em aberto</span>
      </div>
      
    </div>
    <Footer/>
    </>
  
  )
}

export default Boleto;