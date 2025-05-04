import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Auction = ({ auction, handleFavorite, isFavorited }) => {
  return (
    <div className="border p-3 flex gap-5 border-gray-400">
      <figure>
        <img src={auction.image} alt="Item" className='w-24 h-22' />
      </figure>
      <div className="flex gap-14 mx-auto items-center justify-between">
        <h3 className="w-60 text-[#0E2954]">{auction.title}</h3>
        <h5 className='text-[#0E2954]'>${auction.currentBidPrice}</h5>
        <p className='text-[#0E2954]'>{auction.timeLeft}</p>

        <button
          onClick={() => handleFavorite(auction)}
          disabled={isFavorited}
          className={isFavorited ? 'cursor-not-allowed' : 'cursor-pointer'}
        >
          {
            isFavorited
              ? <IoIosHeart size={20} className='text-red-500' />
              : <IoIosHeartEmpty size={20} className='text-gray-500 hover:text-red-400' />
          }
        </button>
      </div>
    </div>
  );
};

export default Auction;
