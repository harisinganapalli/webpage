import './Index.css';
import Orderdetailscomponent from './Orderdetailscomponemt';
import Activitycomponent from './Activitycomponemt';
import Sidebarcomponent from './Sidebarcomponemt';
import Navbarcomponent from './Navbarcomponent';
import Recentordercomponent from './Recentorderscomponemt';

const  Homecomponent = ()=> {
  return (
  <>
    <div className="container-fluid page-color">
        <div className=" row col-12">
           <Sidebarcomponent/>
            <div className="col-lg-11 top px-0 pb-3">
               <Navbarcomponent/>
                <Orderdetailscomponent/>
                <Activitycomponent/>
                <Recentordercomponent/>
            </div>
        </div>
    </div> 
  </>
  );
}

export default Homecomponent;