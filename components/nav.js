import Link from 'next/link'


const Nav = () => {
  return (
    <div className="flex flex-col p-4 bg-blue">
      <div className="flex flex-row ">
        <div className="w-full">
          <img src="./Barcode.svg" alt=""/>
        </div>
        <img src="./notification.svg" alt=""/>
      </div>
      <div className="space-y-4 mt-4">
        <h1 className="text-white text-2xl">Olá, Joaquim</h1>
        <p className="text-white text-sm ">Aqui você encontra as melhores ofertas baseado no seu score</p>
      </div>
      
      <div className="flex flex-row space-x-4 mt-8">
        <div className="bg-white flex flex-row space-x-2 p-2 w-full rounded-md">
          <img className="" src="./Lupa.svg" alt=""/>
          <input placeholder="Empréstimo, Título de capitalização,Consórcio" className="" type="text"/>
        </div>
        <img src="./definicoes.svg" alt=""/>
      </div>
    </div>
  )
}

export default Nav;