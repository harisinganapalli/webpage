import './Index.css';
import OrderChart from './Charts1';
// import { CChart } from "@coreui/react-chartjs";
const  Orderdetailscomponent = ()=> {
  return (
  <>
  <h4 className='text-color mt-1 ms-4'>Dashboard</h4>
  <div className='row ps-3 laptop-tablet-view'>
     <div class="card col-lg-2 ms-4 me-4 pt-2 ">
        <div className="totalsize popularcolor"><img width="28" height="28" src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/496AF8/external-Basket-shopping-carts-baskets-basicons-solid-edtgraphics-2.png" alt="external-Basket-shopping-carts-baskets-basicons-solid-edtgraphics-2"/></div>
         <div class="card-title text-color" style={{fontSize:"14px"}}>Total Orders</div>
         <div className="row">
         <div className="col-lg-7 value text-color">75</div>
         <div class="col-lg-5 pt-1 change arrowcolorgreen " style={{textAlign:"end"}}>↑ 3%</div>
         </div>
     </div>
     <div class="card col-lg-2 me-4 pt-2">
        <div className="totalsize ordersuccesscolor"><img width="28" height="28" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/19896B/external-bag-ecommerce-flatart-icons-outline-flatarticons.png" alt="external-bag-ecommerce-flatart-icons-outline-flatarticons"/></div>
         <div class="card-title text-color " style={{fontSize:"14px"}}>Total Delivered</div>
         <div className="row">
         <div class="col-lg-7 value text-color">70</div>
         <div class="col-lg-5 pt-1 change arrowcolorred" style={{textAlign:"end"}}>↓ 3%</div>
         </div>
     </div>
     <div class="card col-lg-2 me-4 pt-2">
        <div className="totalsize ordercancelcolor"><img width="28" height="28" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/B5595d/external-bag-ecommerce-flatart-icons-outline-flatarticons-1.png" alt="external-bag-ecommerce-flatart-icons-outline-flatarticons-1"/></div>
         <div class="card-title text-color " style={{fontSize:"14px"}}>Total Cancelled</div>
         <div className="row">
         <div class=" col-lg-7 value text-color">5</div>
         <div class="col-lg-5 pt-1 change arrowcolorgreen" style={{textAlign:"end"}}>↑ 3%</div>
         </div>
     </div>
     <div class="card col-lg-2 pt-2">
        <div className="totalsize dollorcolor"><img width="26" height="26" src="https://img.icons8.com/ios/50/000000/low-price.png" alt="low-price"/></div>
         <div class="card-title text-color" style={{fontSize:"14px"}}>Total Revenue</div>
         <div className="row">
         <div class=" col-lg-7 value text-color">$12k</div>
         <div class=" col-lg-5 pt-1 change arrowcolorred" style={{textAlign:"end"}}>↓ 3%</div>
         </div>
     </div>
    <div className="col-lg-4 ms-3"> 
        <div class="card ps-2 tablet-space">
            <div className="row">
                <div className="col-lg-7">
                <div class="card-title text-color">Net Profit</div>
                <div class="value text-color">$6759.25 </div>
                <div class="change arrowcolorgreen">↑ 3%</div>
                </div>
                <div className="col-lg-5 ">
                    <OrderChart></OrderChart>
                </div>
                <p className="text-color text-desktop" style={{fontSize:"10px"}}>*the value has been rounded off </p>
            </div>
           
           
        </div>
    </div>
    
  </div>
  <div className=" ps-3 me-2 tablet-laptop-view ">
    <div class=" row card ms-3 pt-2 ">
        <div className="ps-2">
        <div className="totalsize popularcolor pt-2 ">
            <img width="28" height="28" src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/496AF8/external-Basket-shopping-carts-baskets-basicons-solid-edtgraphics-2.png" alt="external-Basket-shopping-carts-baskets-basicons-solid-edtgraphics-2"/>
        </div>
        </div>
         <div class="card-title text-color" style={{fontSize:"14px"}}>Total Orders</div>
         <div className=" value text-color">75</div>
         <div class="change arrowcolorgreen " >↑ 3%</div>
    </div>

     <div class=" row card ms-3 mt-2 pt-2">
        <div className="ps-2">
           <div className="totalsize ordersuccesscolor pt-2"><img width="28" height="28" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/19896B/external-bag-ecommerce-flatart-icons-outline-flatarticons.png" alt="external-bag-ecommerce-flatart-icons-outline-flatarticons"/></div>
        </div>
         <div class="card-title text-color " style={{fontSize:"14px"}}>Total Delivered</div>
         <div class=" value text-color">70</div>
         <div class=" change arrowcolorred">↓ 3%</div>

     </div>
    
     <div class=" row card ms-3 mt-2  pt-2">
        <div className="ps-2">
        <div className="totalsize ordercancelcolor"><img width="28" height="28" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/B5595d/external-bag-ecommerce-flatart-icons-outline-flatarticons-1.png" alt="external-bag-ecommerce-flatart-icons-outline-flatarticons-1"/></div>
        </div>
         <div class="card-title text-color " style={{fontSize:"14px"}}>Total Cancelled</div>
         <div class=" value text-color">5</div>
         <div class="change arrowcolorgreen">↑ 3%</div>
     </div>
     <div class=" row card ms-3 mt-2 pt-2">
        <div className="ps-2">
        <div className="totalsize dollorcolor"><img width="26" height="26" src="https://img.icons8.com/ios/50/000000/low-price.png" alt="low-price"/></div>
        </div>
         <div class="card-title text-color" style={{fontSize:"14px"}}>Total Revenue</div>
         <div class=" value text-color">$12k</div>
         <div class=" change arrowcolorred">↓ 3%</div>
     </div>
    
     <div className=" ms-3 mt-2 pt-2"> 
        <div class="card ps-2">
                <div class="card-title text-color">Net Profit</div>
                <div class="value text-color">$6759.25 </div>
                <div class="change arrowcolorgreen">↑ 3%</div>
                <OrderChart></OrderChart>
                <p className="text-color" style={{fontSize:"10px"}}>*the value has been rounded off </p>
           
           
        </div>
    </div>
      
  </div>
  </>
)
}
export default Orderdetailscomponent