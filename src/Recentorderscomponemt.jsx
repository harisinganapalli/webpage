import wadewarren from '../src/assets/images/wadewarren.jpg';
import janecooper from '../src/assets/images/janecooper1.jpg';
import guyhawkins from '../src/assets/images/hawkins.jpg';
import kristinwatson from '../src/assets/images/kristinwatson.jpg';
import codyfisher from '../src/assets/images/codyfisher.jpg';
import savannahnguyen from '../src/assets/images/savannahnguyen.jpg';
import comment1 from '../src/assets/images/comment1.jpg';
import comment2 from '../src/assets/images/comment2.jpg';
import comment3 from '../src/assets/images/comment3.jpg';




const Recentordercomponent = () =>{
    return <>
    
    <div className="row mt-3 ms-3">
    <div class="orders col-lg-8 ">
        <div className="card text-color ps-3 pb-3 laptop-tablet-view">
                <h2 className='pt-4'>Recent Orders</h2>
                <table className='table-bg-dark pt-2'>
                    <thead>
                        <tr>
                            <th className='py-2'>Customer</th>
                            <th className='py-2'>Order No.</th>
                            <th className='py-2'>Amount</th>
                            <th className='py-2'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  className='py-2' ><img className='imagesize' src={wadewarren} alt="User Avatar"/><span className='ps-1'>Wade Warren</span></td>
                            <td  className='py-2' >15478256</td>
                            <td  className='py-2' >$124.00</td>
                            <td  className='py-2  mt-3 orderupdate ordersuccesscolor' >Delivered</td>
                        </tr>
                        <tr>
                            <td  className='py-2'><img className='imagesize' src={janecooper} alt="User Avatar"/><span className='ps-1'>Jane Cooper</span></td>
                            <td  className='py-2'>48965786</td>
                            <td  className='py-2'>$305.02</td>
                            <td  className='py-2 mt-3 orderupdate ordersuccesscolor'>Delivered</td>
                        </tr>
                        <tr>
                            
                            <td  className='py-2'><img className='imagesize' src={guyhawkins} alt="User Avatar"/><span className='ps-1'>Guy Hawkins</span></td>
                            <td  className='py-2'>78985215</td>
                            <td  className='py-2'>$45.88</td>
                            <td  className='py-2 mt-3 orderupdate ordercancelcolor'>Cancelled</td>
                        </tr>
                        <tr>
                            <td  className='py-2'><img className='imagesize' src={kristinwatson} alt="User Avatar"/><span className='ps-1'>Kristin Watson</span></td>
                            <td  className='py-2'>20965732</td>
                            <td  className='py-2'>$65.00</td>
                            <td  className='py-2 mt-3 orderupdate ordercancelcolor'>Pending</td>
                        </tr>
                        <tr>
                        <td className='py-2'><img className='imagesize' src={codyfisher} alt="User Avatar"/><span className='ps-1'>Cody Fisher</span></td>
                         <td  className='py-2'>95715620</td>
                            <td  className='py-2'>$545.00</td>
                            <td  className='py-2  mt-3 orderupdate ordersuccesscolor'>Delivered</td>
                        </tr>
                        <tr>
                        <td  className='py-2'><img className='imagesize' src={savannahnguyen} alt="User Avatar"/><span className='ps-1'>Savannah Nguyen</span></td>
                            <td  className='py-2'>78514568</td>
                            <td  className='py-2'>$128.20</td>
                            <td  className='py-2 mt-3 orderupdate ordersuccesscolor'>Delivered</td>
                        </tr>
                    </tbody>
                </table>
        </div> 

        <div className="card tablet-laptop-view">
        <div className="table-responsive">
    <table className="table table-dark pt-2">
        <thead>
            <tr>
                <th className="py-2">Customer</th>
                <th className="py-2">Order No.</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="py-2">
                    <img className="imagesize" src={wadewarren} alt="User Avatar"/><br></br>
                    <span className="ps-1">Wade Warren</span>
                </td>
                <td className="py-2">15478256</td>
                <td className="py-2">$124.00</td>
                <td className="py-2 mt-3 orderupdate ordersuccesscolor">Delivered</td>
            </tr>
            <tr>
                <td className="py-2">
                    <img className="imagesize" src={janecooper} alt="User Avatar"/><br></br>
                    <span className="ps-1">Jane Cooper</span>
                </td>
                <td className="py-2">48965786</td>
                <td className="py-2">$305.02</td>
                <td className="py-2 mt-3 orderupdate ordersuccesscolor">Delivered</td>
            </tr>
            <tr>
                <td className="py-2">
                    <img className="imagesize" src={guyhawkins} alt="User Avatar"/><br></br>
                    <span className="ps-1">Guy Hawkins</span>
                </td>
                <td className="py-2">78985215</td>
                <td className="py-2">$45.88</td>
                <td className="py-2 mt-3 orderupdate ordercancelcolor">Cancelled</td>
            </tr>
            <tr>
                <td className="py-2">
                    <img className="imagesize" src={kristinwatson} alt="User Avatar"/><br></br>
                    <span className="ps-1">Kristin Watson</span>
                </td>
                <td className="py-2">20965732</td>
                <td className="py-2">$65.00</td>
                <td className="py-2 mt-3 orderupdate ordercancelcolor">Pending</td>
            </tr>
            <tr>
                <td className="py-2">
                    <img className="imagesize" src={codyfisher} alt="User Avatar"/><br></br>
                    <span className="ps-1">Cody Fisher</span>
                </td>
                <td className="py-2">95715620</td>
                <td className="py-2">$545.00</td>
                <td className="py-2 mt-3 orderupdate ordersuccesscolor">Delivered</td>
            </tr>
            <tr>
                <td className="py-2">
                    <img className="imagesize" src={savannahnguyen} alt="User Avatar"/><br></br>
                    <span className="ps-1">Savannah Nguyen</span>
                </td>
                <td className="py-2">78514568</td>
                <td className="py-2">$128.20</td>
                <td className="py-2 mt-3 orderupdate ordersuccesscolor">Delivered</td>
            </tr>
        </tbody>
    </table>
</div>
        </div>   
    </div>
    <div className="col-lg-4">
        <div class="card feedback text-color pt-2 tablet-space feebback-space">
                <h3 className='ps-2'>Customer's Feedback</h3>
                <div className='ps-2'>
                 <img className='imagesize' src={comment1} alt="User Avatar"/><span className='ps-1'><b>Jenny Wilson</b></span>
                 <div >⭐⭐⭐⭐★</div>
                 <p style={{fontSize:"11px"}}>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about allergies</p>
                </div>
                <hr></hr>
                <div className='ps-2'>
                   <img className='imagesize' src={comment2} alt="User Avatar"/><span className='ps-1'><b>Dianne Russell</b></span>
                   <div>⭐⭐⭐⭐⭐</div>
                   <p style={{fontSize:"11px"}}>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                </div>
                <hr></hr>
                <div className='ps-2'>
                  <img className='imagesize' src={comment3} alt="User Avatar"/><span className='ps-1'><b>Devon Lane</b></span>
                  <div>⭐⭐⭐⭐★</div>
                  <p style={{fontSize:"11px"}}>Normally wings are wings, but theirs are lean meaty and tender, and perfectly sauced. We'll be back.</p>
                </div>
      
        </div>
    </div>
    </div>
    </>
}

export default Recentordercomponent