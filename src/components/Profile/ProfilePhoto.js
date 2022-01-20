import React from "react";
import './Profile.css';
import profil from '../../profil.jpg';


export default  function ProfilePhoto (){
    return(
        <div className='profilPhoto' style={{backgroundImage:`url(${profil})`}}>
        </div>
    );
}