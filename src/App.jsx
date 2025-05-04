import { useState } from 'react'
import './App.css'
import Auctions from './component/auctions/Auctions'
import Favourite from './component/favourite/Favourite'
import Footer from './component/footer/footer'
import Header from './component/header/Header'
import Navbar from './component/navbar/navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleFavorite = (auction) => {
    if (!favorite.some(item => item.id === auction.id)) {
      setFavorite([...favorite, auction]);
      toast.success(`Item added to your favorite list`);
    }
  }

  const handleRemoveFavorite = (id) => {
    if (favorite.find(item => item.id === id)){
    setFavorite(favorite.filter(item => item.id !== id));
    toast.warn(`Items removed from favorite list!`);

  }
  }
  return (
    <>
      <Navbar />
      <Header />
      <div className='ml-20'>
        <h3 className='text-2xl text-[#0E2954] font-semibold mt-20 mb-5'>Active Auctions</h3>
        <p className='mb-8'>Discover and bid on extraordinary items</p>
        <div className='flex gap-5 mb-30'>
          <div className='shadow-sm p-6 rounded-xl '>
            <Auctions handleFavorite={handleFavorite} favorite={favorite} />
          </div>
          <div>
            <Favourite favorite={favorite} handleRemoveFavorite={handleRemoveFavorite} />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App;

