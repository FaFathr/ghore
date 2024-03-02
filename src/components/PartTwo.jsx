import React from 'react'
import styles from "./PartTwo.module.css"
import today from "../assets/today.png"
import future from "../assets/future.png"
import result from "../assets/result.png"
function PartTwo() {
  return (
    <div>
      <div className={styles.container}>
      <img src={today} alt="today" />
      <img src={future} alt="future" />
      <img src={result} alt="result" />
      </div>
    </div>
  )
}

export default PartTwo
