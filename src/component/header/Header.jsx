import React from 'react';

const Header = () => {
    return (
        <div>
            <div
  className="min-h-screen bg-no-repeat bg-cover"
   style={{
    backgroundImage: "url(https://i.ibb.co.com/wrQM46f9/Banner-min.jpg)",
  }}
  >
    
  <div className=""></div>
  <div className=" text-neutral-content  reap ml-20 pb-47 ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold pt-50 w-[610px]">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions.
      </p>
      <button className="rounded-full bg-white text-black py-2 px-6">Explore Auctions</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;