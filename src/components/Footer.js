import React from 'react';

const Footer=(props)=>{
    return(
    <div >
   <button onClick={()=>{props.setUnavilable()}} className="btn">All available</button>
   <button onClick={()=>{props.setavilable()}} className="btn">All unavailable</button>
   <button className="btn">Apply all</button>
    </div>
    )
}
export default Footer;