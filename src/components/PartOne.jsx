import React from 'react'
import logo from "../assets/logo.png"
import styles from "./PartOne.module.css"
function PartOne() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container1} >
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.container2}>
            <nav>
                <li className={styles.orgli}> صفحه اصلی</li>
                <li>| قرعه کشی های امروز</li>
                <li>| قرعه کشی های پیش رو</li>
                <li>| ارشیو قرعه کشی</li>
            </nav>
        </div>
      </div>
    </>
  )
}

export default PartOne
