import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from '../styles/sidebar.module.css'
import {SideBarData} from './SideBarData';



function SideBar () {
  return (
    <div className = {styles.Sidebar}>
      <ul className = {styles.SideBarList}>
      {SideBarData.map((val, key) => {
        return (
          <li key = {key} 
          className = {styles.row}
          onClick = {() => {
            window.location.pathname = val.link;
          }}>  

          <div id= {styles["icon"]} > {val.icon}</div> {" "}
          {/*<div id= {styles["title"]}> {val.title} </div>*/}
          
          </li>
        )

      }

      
      )}
      </ul>
      </div>
  )
}

export default SideBar