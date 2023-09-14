import React from "react";
import "./frame.css";
import imagename from "../Layout 2/img/doctor1.jpeg";
import doctor from "../Layout 2/img/doctor5.jpg";
import bike from "./img/doctor2.jpeg";
import cycle from "./img/doctor6.jpg";
import meet from "./img/doctor3.avif";
import comes from "./img/doctor7.jpg";
import doctor4 from "./img/doctor4.jpg";
import doctor8 from "./img/doctor8.jpg";
export default class Frame extends React.Component
{

    constructor() {
        super();
        this.state = {

         //   ...first set start...

          name1: "Andi",
          img: imagename,
          descr1 : "our neuro surgeon",

          name5: "Amiliya",
          doc: doctor,
          descr5 : "Our senior neuro surgeon",

          show: true,

        //   ...first set end...

        // second set start...

          name2:"Clairen",
          motor: bike,
          desc2: "our heart specialist",

          name6 : "Mark",
          bicy : cycle,
          desc6: "our seniour heart specialist",

          hello : true,
          
        //  second set end....]

        // third set start....

          name3:"Emiliya",
          doc3: meet,
          desc3: "our kidney specialist",

          name7 : "Visen",
          doc7: comes,
          desc7: "our seniour kidney specialist",

          gotted : true,

        //   third set end...

        //   fourth set start...

        name4:"Roman",
        doc4: doctor4,
        desc4: "our eye specialist",

        name8 : "Susan",
        doc8: doctor8,
        desc8: "our seniour eye specialist",

        next : true,

        // fourth set end...

          }}
        

        //   ...first button
        changetext = () =>
        {
              
            this.setState( recall => ({

                show:!recall.show

            }));
        }


        // ...second button
        brain = () =>
        {

            this.setState( recall=> ({

                hello:!recall.hello
            }));
        }

        // ...third button
        callback = () =>
        {

            this.setState( recall=> ({

                gotted:!recall.gotted
            })

            )
        }

        // ...fourth button
        change = () =>
        (

            this.setState( recall => ({
                  
                next:!recall.next


            }))
        )
    
    
    render()
    {
        

        return(
               <>

            {/* ...top nav start... */}


            <div className="container-fluid "  >
                <div className="row" >
                    <div className="col-md-6 ps-5">
                        <img src={require('./img/large_carecation.png')}  alt="Text" width="200px" height="100px" />
                    </div>
                    <div className="col-md-6  ">
                        <ul className="nav mt-5 ">
                        <li className="nav-item ps-2"><a href="#" active >Home</a></li>
                            <li className="nav-item ps-5">About</li>
                            <li className="nav-item ps-5">Services</li>
                            <li className="nav-item ps-5">Doctors</li>
                            <li className="nav-item ps-5">News</li>
                            <li className="nav-item ps-5">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*...top nav end... */}

            {/*...header start..*/}

            <div className="container-fluid pt-5 pb-5 ps-5 pe-5 text-center image"  >
              <div className="w-50">
                <h2 className="pt-3">One Stop Solution for<br/>
                 All Medical Needs</h2>
                <p className="text-brake pt-3">Medical records are the document that explains
                     all detail about the patient's history, clinical findings, diagnostic test results, pre and postoperative care, patient's progress and medication.
                </p>
                <div className="btn btn-primary">VIEW SERVICES</div>
              </div>
            </div>  

            {/*...header end...*/}

            {/*...summary start... */}

            <div className="container-fluid text-center   ">
                <div className="row">
                    <div className="col-md-3 pt-5 pb-5 bg-primary">
                        <img src={require('./img/50115-200.png')} width="80px" height="80px" />
                        <h4>Qualified Doctors</h4>
                        <p>(our doctors are very qulaified specialist,they are very intelligent.)</p>
                    </div>
                    <div className="col-md-3 pt-5 pb-5 bg-info ">
                        <img src={require('./img/Regular check up.png')} width="80px" height="80px" />
                        <h4>Regular checkup</h4>
                        <p>(Regular check is the best way to maintain your health stable.)</p>
                    </div>
                    <div className="col-md-3 pt-5 pb-5 bg-primary">
                        <img src={require('./img/Lab test.png')} width="80px" height="80px" />
                        <h4>Lab test</h4>
                        <p>(We have a best laboratoty to check adn anlyse tests.)</p>
                    </div>
                    <div className="col-md-3 pt-5 pb-5 bg-info ">
                        <img src={require('./img/clinic.png')} width="80px" height="80px" />
                        <h4>Clinic News</h4>
                        <p>(Our surrounding are we have the best clinic.)</p>
                    </div>
                </div>
            </div>

            {/* ...summary end... */}

            {/* ...section start... */}

            <div className="container-fluid text-center med">
                <div className="w-50 ps-5 pe-5 pt-5 pb-5">
                    <h2 className="pt-5 ps-5">We offer Fast & Reliable <br/>
                        Medical & Healthcare Needs</h2>
                    <p className="pt-4 ps-5">It is long established fact that a rader will be <br/>
                        distracted by the readable content of a page When <br />
                        looking at its Layout.The point of using Lorem Ipsum<br />
                        is that it has a more-or-less normal disstribution <br/>
                        of letters , as opposed to using content.</p>
                </div>
            </div>

            {/* ...section end... */}

            {/* ...staff start... */}

            <div className="container-fluid text-center doctors">
                    <h1 className="pb-3 pt-4">Meet Our Doctors</h1>
                <div className="row">
                <div className="col-md-3 pt-5">
                    <img src={this.state.show ? this.state.img: this.state.doc} width="200px" height="200px" alt="Appointment" />
                    {this.state.show ? <h2>{this.state.name1}</h2> : <h2>{this.state.name5}</h2>}
                    {this.state.show ? <p>{this.state.descr1}</p>: <p>{this.state.descr5}</p>}
                    <button className="btn btn-primary" onClick={this.changetext}>Click to our senior</button>
                    </div>

                
                    <div className="col-md-3 pt-5">
                        <img src={this.state.hello ? this.state.motor : this.state.bicy } width="200px" height="200px" />
                        {this.state.hello ? <h2>{this.state.name2}</h2> : <h2>{this.state.name6}</h2>}
                        {this.state.hello ? <p>{this.state.desc2}</p>: <p>{this.state.desc6}</p>}
                        <button className="btn btn-primary" onClick={this.brain} >Click to our senior</button>
                    </div>
                    <div className="col-md-3 pt-5">
                    <img src={this.state.gotted ? this.state.doc3 : this.state.doc7 } width="200px" height="200px" />
                        {this.state.gotted ? <h2>{this.state.name3}</h2> : <h2>{this.state.name7}</h2>}
                        {this.state.gotted ? <p>{this.state.desc3}</p>: <p>{this.state.desc7}</p>}
                        <button className="btn btn-primary" onClick={this.callback} >Click to our senior</button>
                    </div>
                    <div className="col-md-3 pt-5 change ">
                    <img src={this.state.next ? this.state.doc4 : this.state.doc8 } width="200px" height="200px" />
                        {this.state.next ? <h2>{this.state.name4}</h2> : <h2>{this.state.name8}</h2>}
                        {this.state.next ? <p>{this.state.desc4}</p>: <p>{this.state.desc8}</p>}
                        <button className="btn btn-primary" onClick={this.change} >Click to our senior</button>
                    </div>
                </div>
            </div>

            {/* ...staff end... */}

            {/* ...footer start... */}

            <div className="container-fluid pt-5 ps-5 pb-3 call ">
                <div className="row ">
                    <div className="col-md-4 pt-5 ps-5">
                        <h2 >Hospital Information</h2><br/>
                        <p>Our hosital run more over 14 years,we<br/> have world top surgions</p>
                        <img src={require("./img/EMAIL.avif")} className="e" alt="mail" width="20px" />    info@xyz.com<br/>
                        <img src={require("./img/Phone.png")} className="e" alt="phone" width="20px" /> +01-234-4762<br />
                        <img src={require("./img/location.png")} className="e" alt="location" width="20px" />   123,dubai.
                    </div>
                    <div className="col-md-4 pt-5 ps-5">
                        <h2>Our Services</h2><br />
                            <ol>
                            <li>Pediatric Clinic</li>
                            <li>Dental clinic</li>
                            <li>Physactric clinic</li>
                            <li>Lab Analysis</li>
                            <li>Cardiac clinic</li>
                            <li>Diagnosis Clinic </li>
                            </ol>
                    </div>
                    <div className="col-md-4 pt-5 ps-5">
                        <h2>Signup Newsletter</h2>
                        <form>
                            <label for="fname">Your Name</label><br/>
                            <input type="text" className="fname" placeholder="type here....." /><br/><br/>
                            <label for="email">Email Addresa</label><br/>
                            <input type="text" className="fname" placeholder="type here....." /><br/><br/>
                            <input type="submit" value="submit"  />
                        </form>
                    </div>
                </div>
            </div>

            {/* ...footer end.... */}

            {/* ...empty start... */}

            <div className="container-fluid pt-5 pb-5 color">
                <h2></h2>
            </div>

            {/* ...empty end... */}
               </>
            
        )
    }
} 