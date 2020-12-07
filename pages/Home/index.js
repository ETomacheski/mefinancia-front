import Nav from '../../components/nav'
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center p-16">
        <img src="./Ellipse.svg" alt=""/>
      </div>
      <div className="space-y-4 mx-2">
        <div className="flex flex-row space-x-4 bg-white py-8 px-2 rounded-md ">
          <img className="w-12 h-12"  src="./bb.png" alt=""/>
          <div>
            <span className="text-2xl text-blue font-bold">Banco do Brasil</span>
            <p className="text-sm">Você tem XX,XX R$ em título de capitalização</p>
            </div>
        </div>
        <div className="flex flex-row space-x-4 bg-white py-6 px-2 rounded-md ">
          <img className="w-12 h-12"  src="./nubank.png" alt=""/>
          <div>
            <span className="text-2xl text-blue font-bold">NuBank</span>
            <p className="text-sm">Você tem XX,XX R$ disponível em crédito para empréstimo</p>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home;