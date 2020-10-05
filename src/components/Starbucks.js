import React, { useState } from 'react';
import json from '../jsonData/jsondata.json';

const Main = (props) => {
    let data = json.menuDetails.STARBUCKS;
    let [avialable,setAvialable]=useState(true);

    const setUnavilable=()=>{
      setAvialable(true);
    }
    const setavilable=()=>{
      setAvialable(false);
    }
    return (
        <div>
        <div className="card-p">
            {data.map((val, i) => (
                <div>
                    {( avialable) ?
                        <div class="card card-title-green">
                            <div class="card-body">
                                <h5>{val.foodname}</h5>
                            </div>
                        </div> :
                        <div class="card card-title-red">
                            <div class="card-body">
                                <h5>{val.foodname}</h5>
                            </div>
                        </div>}
                </div>
            ))}
            </div>
            <div className="btn-p">
                <button onClick={() => { setUnavilable() }} className="btn">All available</button>
                <button onClick={() => { setavilable() }} className="btn">All unavailable</button>
                <button className="btn">Apply all</button>
            </div>
        </div>
    )
}
export default Main;