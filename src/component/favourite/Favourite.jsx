import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";

const Favourite = ({ favorite, handleRemoveFavorite }) => {
    
    const formattedTotalBidAmount = favorite
    .reduce((total, item) => total + (parseFloat(item.currentBidPrice.replace(/[^0-9.]/g, '')) || 0), 0)
    .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div>
      <div className="w-90 shadow items-center text-center p-0 rounded-xl">
        <div>
          <h2 className="text-[#0E2954] text-2xl p-5 flex justify-center items-center gap-2">
            <IoIosHeartEmpty /> Favorite Items
          </h2>

          {favorite.length === 0 ? (
            <div className='border-y border-gray-400 p-7'>
              <h3 className='text-lg mb-3'>No favorites yet</h3>
              <p className='text-gray-600'>Click the heart icon on any item to add it to your favorites</p>
            </div>
          ) : (
            <div className='border-y border-gray-400 p-5 space-y-4 text-left'>
              {favorite.map((fav) => (
                <div key={fav.id} className='flex gap-4 items-start border-1 p-2 border-gray-300 rounded-xl'>
                  <img src={fav.image} alt={fav.title} className='w-20 h-16 object-cover rounded' />
                  <div>
                    <h3 className='text-[#0E2954] text-sm font-semibold'>{fav.title}</h3>
                    <p className='text-[#0E2954] text-xs'>${fav.currentBidPrice}</p>
                    <p>Bids: {fav.bidsCount}</p>
                  </div>
                  <div>
                    <button className='btn top-4 relative' onClick={() => handleRemoveFavorite(fav.id)}>x</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex p-5 justify-between border-t border-gray-300">
            <h3 className='font-semibold'>Total bids Amount</h3>
            <h3 className='font-semibold'>
            ${formattedTotalBidAmount}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;

