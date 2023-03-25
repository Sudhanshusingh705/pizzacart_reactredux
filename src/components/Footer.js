import React from 'react'

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-primary bg-gradient text-white' style={{ minHeight: '12rem'}}>
      <div className='row pt-2 text-center'>
       <div className='col-lg-4 col-md-4 col-sm-12  '>
         <h4>Quick Links</h4>
           <div className='d-flex flex-column mb-2  '>
             <a href='#' className='text-white p-1'>About Us</a>
             <a href='#' className='text-white p-1' >Our Post</a>
             <a href='#' className='text-white p-1' >Our Team</a>
             <a href='#' className='text-white p-1' >Contact Us</a>
           </div>
       </div>
       <div className='col-lg-4 col-md-4 col-sm-12 '>
         <h4>Newsletter</h4>
          <div style={{minHight: "8rem"}} className='d-flex flex-column justify-content-around mb-2'>
             <input type='text' className='form-control' placeholder='Subscribe to the newsletter' />
             <br/>
             <button className='btn btn-warning'>Subscribe</button>
          </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 '>
         <h4>Contact Address</h4>
         <div className='d-flex flex-column '>
         <p><i class=" px-1 fa-solid fa-location-crosshairs"></i>104 Lotus Apartment</p>
         <p><i class=" px-1 fa fa-phone" aria-hidden="true"></i>+91 7054955296</p>
         <p><i class=" px-1 fa fa-user" aria-hidden="true"></i>Sudhanshu Singh</p>
            
         </div>
     </div>
      </div>
    </div>
  )
}

export default Footer