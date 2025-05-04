import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-gray-100 p-15">
  <aside>
  <a className="btn btn-ghost text-2xl"><span className='text-blue-800 text-2xl'>Auction</span><span className='text-yellow-400 text-2xl -ml-1.5'>Gallery</span></a>
    <div className='flex gap-4 font-medium'>
        <h4>Bid.</h4>
        <h4>Win.</h4>
        <h4>Own.</h4>
    </div>

    <div className='flex gap-5'>
        <h5>Home</h5>
        <h5>Auctions</h5>
        <h5>Categories</h5>
        <h5>How to works</h5>
    </div>
    <p> © {new Date().getFullYear()} - AuctionHub. All rights reserved</p>
    
  </aside>
  
</footer>
        </div>
    );
};

export default Footer;