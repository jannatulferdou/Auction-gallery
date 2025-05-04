import React, { useEffect, useState } from 'react';
import Auction from './Auction';

const Auctions = ({handleFavorite,favorite}) => {

    
            

    const [auctions, setAuctions]=useState([]);

    useEffect(()=>{
        fetch('auction.json')
        .then(res=>res.json())
        .then(data=>setAuctions(data))
        .catch(error => console.error('Failed to load auctions:', error));
    },[])
    return (
        <div className='border-1 border-gray-400 rounded-t-xl'>
          <div className='flex gap-87 border-1 p-5 border-gray-400 rounded-t-xl'>
     <h4>Items</h4>
     <div className='flex gap-12'>
     <h4>Current Bid</h4>
     <h4>Time Left</h4>
     <h4 className='relative -right-1'>Bid Now</h4>
     </div>
     </div>
    <div className=''>
    {
        auctions.map(auction=><Auction
            key={auction.id}
            auction={auction}
            handleFavorite={handleFavorite}
            isFavorited={favorite.some(item => item.id === auction.id)}
          />)
     }
    </div>
        </div>
    );
};

export default Auctions;