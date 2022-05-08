import React from 'react'
import styles from './mainpage.module.scss';
import Header from '../Layout/Header/index.js';

export default function Mainpage() {
  return (
    <>
      <Header/>
       <div className= {styles.text}>index</div>
    </>
   
  )
}
