import profile from '../src/assets/images/profileimage.jpg';

const Navbarcomponent = () => {
    return <>
     <div className="card card-color px-0 border-0 m-0 pb-2 pt-1 laptop-view">
                <div className=" col-12 row header mt-1 px-0 ">
                    <div className="col-lg-8 ">
                    <input type="text" className=" search-bar search-color" placeholder="Search..."/>
                    </div>
                    <div className="col-lg-3 user-info"> 
                        <div className="iconsize icon-container float-end ms-3">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <div className="iconsize icon-container float-end ms-3">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                        </div>
                        <div className="iconsize icon-container float-end  ms-3">
                            <i className="fa fa-bell-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-lg-1">
                    <img className=' iconsize' src={profile} alt="User Avatar"/>
                    </div>
                </div>
                </div> 
    </>
}

export default Navbarcomponent