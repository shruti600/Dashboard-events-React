import React from 'react';
import {FaRegComment} from 'react-icons/fa';

export default function Descrip() {
    return (
        <ul style={{listStyle:'none',marginLeft:'50px',marginRight:'50px'}}>
            <li>
                <div className="a">
                   <h4 style={{width:'50px'}}>Date</h4>
                   <div style={{marginLeft:'100px',fontSize:'20px',color:'orange'}}>12th June'2020</div>
                </div>
                <div className="a">
                    <h4 style={{width:'50px'}}>Venue</h4>
                    <div style={{marginLeft:'100px',fontSize:'20px',color:'orange'}}>London</div>
                </div> 
                <div className="a">
                    <h4 style={{width:'50px'}}>Time</h4>
                    <div style={{marginLeft:'100px',fontSize:'20px',color:'orange'}}>5pm Onwards</div>
                </div> 
            </li>
            <li>
    
                Quis laboris aliquip in ipsum incididunt laborum dolor occaecat duis ad dolore dolore non. Cillum elit proident reprehenderit do mollit. Exercitation cupidatat aliqua fugiat elit enim nisi ut. Elit ullamco voluptate culpa non labore do laboris qui. Sunt magna quis fugiat laboris laboris adipisicing dolor. Ad officia cupidatat velit elit.Quis laboris aliquip in ipsum incididunt laborum dolor occaecat duis ad dolore dolore non. Cillum elit proident reprehenderit do mollit. Exercitation cupidatat aliqua fugiat elit enim nisi ut. Elit ullamco voluptate culpa non labore do laboris qui. Sunt magna quis fugiat laboris laboris adipisicing dolor. Ad officia cupidatat velit elit.Quis laboris aliquip in ipsum incididunt laborum dolor occaecat duis ad dolore dolore non. Cillum elit proident reprehenderit do mollit. Exercitation cupidatat aliqua fugiat elit enim nisi ut. Elit ullamco voluptate culpa non labore do laboris qui. Sunt magna quis fugiat laboris laboris adipisicing dolor. Ad officia cupidatat velit elit.
                Quis laboris aliquip in ipsum incididunt laborum dolor occaecat duis ad dolore dolore non. Cillum elit proident reprehenderit do mollit. Exercitation cupidatat aliqua fugiat elit enim nisi ut. Elit ullamco voluptate culpa non labore do laboris qui. Sunt magna quis fugiat laboris laboris adipisicing dolor. Ad officia cupidatat velit elit.
                Quis laboris aliquip in ipsum incididunt laborum dolor occaecat duis ad dolore dolore non. Cillum elit proident reprehenderit do mollit. Exercitation cupidatat aliqua fugiat elit enim nisi ut. Elit ullamco voluptate culpa non labore do laboris qui. Sunt magna quis fugiat laboris laboris adipisicing dolor. Ad officia cupidatat velit elit.
                <br/>
                <br/>  
            </li>
            <li className="a">
                <div className="b" style={{width:'500px'}}>
                   <div>- BandName</div>
                </div>
                <div className="b" style={{width:'500px'}}>
                    <div >- Lead Artist</div>
                </div> 
                <div className="b" style={{width:'500px'}}>
                    <div>- Available Seats</div>
                </div>    
            </li>
            <li className="a">
                <div className="b" style={{width:'500px'}}>
                   <div>- Concert</div>
                </div>
                <div className="b" style={{width:'500px'}}>
                    <div>- BandInfo</div>
                </div> 
                <div className="b" style={{width:'500px'}}>
                    <div>- Price</div>
                </div>    
            </li>
            <li className="a">
                <div className="b" style={{width:'500px'}}>
                   <div>- Refreshments</div>
                </div>
                <div className="b" style={{width:'500px'}}>
                    <div>- Additional Info</div>
                </div> 
                <div className="b" style={{width:'500px'}}>
                    <div>- Status</div>
                </div>    
            </li>
            <li className="c">
                <br/>
                <div className="d">
                    <FaRegComment style={{marginBottom:'auto',marginTop:'auto'}}/>
                    <div style={{marginLeft:'10px',fontSize:'25px'}}>Comments</div>
                </div>
                <textarea cols="50" style={{height:'100px',width:'600px',padding:'10px'}} placeholder="Comments"/>
                <br/>
                <button style={{textAlign:'center',height:'35px',width:'150px',fontSize:'20px',borderRadius:'10px'}}>
                    Submit
                </button> 
            </li>
            <li style={{marginBottom:'auto'}}>
                <br/>
                <br/>
                <button style={{textAlign:'center',height:'50px',width:'200px',fontSize:'20px',backgroundColor:'orange',borderRadius:'10px'}}>
                    Book Tickets
                </button>            
            </li>
            <br/>
        
        </ul>
    )
}
