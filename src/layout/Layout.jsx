import React from 'react'
import styles from "./Layout.module.css"
import { IoIosLogIn } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import logofooter from "../assets/logofooter.png"
function Layout({children}) {
   const loginhandler=()=>{
    
   }
  return (

    <>
  <header className={styles.header}>
      <div>
         <span>به سامانه جامع اطلاع رسانی قرعه ها خوش آمدید</span>
      </div>
      <div className={styles.containerbtn} >
        <button onClick={loginhandler} className={styles.login}><IoIosLogIn className={styles.icon}/></button>
        <button className={styles.search}> <IoIosSearch className={styles.icon} /></button>
       <button className={styles.submit}>ثبت قرعه کشی شما</button>
      </div>
  </header>
  {children}
  <footer className={styles.footer}>
  <div  className={styles.right}>
  <img src={logofooter} alt="logofooter.png" />
  <h4>سامانه جامع اطلاع رسانی قرعه کشی ها</h4>
   </div>
   <div  className={styles.left}>
      <a>تمام حقوق برای سایت قرعه ها محفوظ میباشد</a>
   </div>

 
  </footer>
    </>
  )
}

export default Layout
