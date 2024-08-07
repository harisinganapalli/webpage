import './Index.css';
import ActivityChartex from './Charts3';
// import ActivityChart from './Chart2';

const  Activitycomponent = ()=> {
 
  return (
  <>
   <div className="row mt-3 ms-3">
   <div className="col-lg-8">
    <div className="card ps-3">
      <h4 className='text-color'>Activity</h4>
      <ActivityChartex></ActivityChartex>
    </div>
   </div>
   <div className="col-lg-4  ">
    <div className='card ps-3 pt-3 pb-1 laptop-view'>
        <div className='row py-2 px-2'>
          <div className='col-lg-3  iconsize goalcolor' >
            <img width="25" height="25" src="https://img.icons8.com/ios/50/D16731/center-direction.png" alt="center-direction"/>
          </div>
          <div className='col-lg-7 text-color'>
             <p className='mt-2'>Goals</p>
          </div>
          <div className="col-lg-3">
          <p class="menu-item-arrow text-color mt-2 arrowsize "><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/forward.png" alt="forward"/></p>
          </div> 
        </div>
        <div className='row py-2 px-2 '>
          <div className='col-lg-3  iconsize popularcolor' >
          <img width="25" height="25" src="https://img.icons8.com/ios/50/6F83E2/hamburger.png" alt="hamburger"/>
          </div>
          <div className='col-lg-7 text-color'>
             <p className='mt-2'>Popular Dishes</p>
          </div>
          <div className="col-lg-3">
          <p class="menu-item-arrow text-color mt-2 arrowsize"><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/forward.png" alt="forward"/></p>
          </div>
        </div>

        <div className='row py-2 px-2 '>
          <div className='col-lg-3  iconsize menucolor' >
             <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/4093BE/breakfast--v2.png" alt="breakfast--v2"/>         
          </div>
          <div className='col-lg-7 text-color'>
             <p className='mt-2'>Menus</p>
          </div>
          <div className="col-lg-3">
          <p class="menu-item-arrow text-color mt-2 arrowsize"><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/forward.png" alt="forward"/></p>
          </div> 
        </div>
    </div>


    <div className=" mobile-view">
      <div className="card mt-2 pt-2">
        <div className="mx-auto">
          <div className=' iconsize goalcolor' >
            <img width="25" height="25" src="https://img.icons8.com/ios/50/D16731/center-direction.png" alt="center-direction"/>
          </div>
          <p className=' mt-2 text-color'>Goals</p>
          <p class=" text-color mt-2 arrowsize "><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/forward.png" alt="forward"/></p>
      </div>
      </div>
      
      <div className='card mt-2 pt-2 '>
        <div className="mx-auto">
          <div className='iconsize popularcolor' >
          <img width="25" height="25" src="https://img.icons8.com/ios/50/6F83E2/hamburger.png" alt="hamburger"/>
          </div>
          <p className=' text-color mt-2'>Popular <br></br>Dishes</p>
          <p class=" text-color mt-2 arrowsize"><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/forward.png" alt="forward"/></p>
        </div>
        </div> 

          <div className='card mt-2 pt-2 '>
          <div className='mx-auto'>
          <div className=' iconsize menucolor' >
             <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/4093BE/breakfast--v2.png" alt="breakfast--v2"/>         
          </div>
          <p className='mt-2  text-color'>Menus</p>
          <p class="text-color mt-2 arrowsize"><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/forward.png" alt="forward"/></p>
        </div>
        </div> 
    </div>   
      
   </div>
   </div>
  </>
  )
}

export default Activitycomponent