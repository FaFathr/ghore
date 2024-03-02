import React from 'react'
import PartOne from './PartOne'
import OrgPage from './OrgPage'
import PartTwo from './PartTwo'
import PartTree from './PartTree'
import PartFor from './PartFor'
import Slider from 'react-slick'
import Crousel from './Crousel'
import styles from "./GhoreKeshi.module.css"
function GhoreKeshi() {
  return (
    <div className={styles.container}>
    <PartOne/>
    <OrgPage/>
    <PartTwo/>
    <PartTree/>
    <PartFor/>
<Crousel/>
    </div>
  )
}

export default GhoreKeshi
