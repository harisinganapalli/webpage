import profile from '../src/assets/images/profileimage.jpg';


const Sidebarcomponent = () =>{
    return <>
     <div className="col-lg-1 col-md-1 border-end-0 card-color laptop-view">
            <div className=" iconsize home-icon mt-1">
            <img width="25" height="25" src="https://img.icons8.com/material-rounded/24/5655E4/windows8.png" alt="windows8"/>
            </div>
            <div className="iconsize home-icon mt-3">
            <img width="25" height="25" src="https://img.icons8.com/material-rounded/24/5655E4/home.png" alt="home"/>
            </div>      
            <div className="iconsize mt-3">
            <img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/poll-vertical.png" alt="poll-vertical"/> 
                     
            </div>
            <div className="iconsize mt-3">
            <img width="25" height="25" src="https://img.icons8.com/sf-regular/48/FFFFFF/today.png" alt="today"/> 
            </div>
            <div className="iconsize mt-3">
            <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/FFFFFF/safe.png" alt="safe"/>    
            </div>
            <div className="iconsize mt-3">
            <img width="25" height="25" src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/FFFFFF/external-bag-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan.png" alt="external-bag-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan"/>    
            </div>
            <div className="iconsize bottom-0 pb-4 poweroff " >
            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/logout-rounded--v1.png" alt="logout-rounded--v1"/>
            </div>
     </div>
     <div className="col-lg-1 mobile-view  card mt-3 ms-4  ">
        <div className="row">
        <div className="col-9">
        <input type="text" className=" search-bar search-color text-color mt-2" placeholder="Search..."/>
     </div>
     <div className="col-3 text-color float-end">
     
     <div class="dropdown">
     <div class="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img className=' iconsize' src={profile} alt="User Avatar"/></div>

  <ul class="dropdown-menu card-color">
    <li>
        <div className="iconsize icon-container">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
    </li>
    <li>
    <div className="iconsize icon-container ">
        <i className="fa fa-cog" aria-hidden="true"></i>
    </div>
    </li>
    <li>
    <div className="iconsize icon-container">
         <i className="fa fa-bell-o" aria-hidden="true"></i>
     </div>
    </li>
    <li>
        <div className=" iconsize home-icon">
            <img width="25" height="25" src="https://img.icons8.com/material-rounded/24/5655E4/windows8.png" alt="windows8"/>
        </div>
    </li>
    <li>
        <div className="iconsize home-icon">
                <img width="25" height="25" src="https://img.icons8.com/material-rounded/24/5655E4/home.png" alt="home"/>
        </div>
    </li>
    <li>
        <div className="iconsize ">
            <img width="25" height="25" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/poll-vertical.png" alt="poll-vertical"/> 
        </div>
    </li>
    <li>
    <div className="iconsize">
            <img width="25" height="25" src="https://img.icons8.com/sf-regular/48/FFFFFF/today.png" alt="today"/> 
            </div> 
    </li>
    <li>
        <div className="iconsize">
            <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/FFFFFF/safe.png" alt="safe"/>    
        </div>
    </li>
    <li>
        <div className="iconsize">
            <img width="25" height="25" src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/FFFFFF/external-bag-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan.png" alt="external-bag-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan"/>    
        </div>
    </li>
    <li>
        <div className="iconsize" >
            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/logout-rounded--v1.png" alt="logout-rounded--v1"/>
        </div>
    </li>
  </ul>
</div>

     </div>
        </div>
      
       
     </div>
    </>
}

export default Sidebarcomponent