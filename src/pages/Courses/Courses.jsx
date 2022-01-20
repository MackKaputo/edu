import React from 'react'
import styles from "./Courses.module.css"
import { CourseCard } from "../../components"
import { Outlet } from "react-router-dom"

function Courses() {
  return (
    <div className={styles.courses_container}>
        <CourseCard 
            course_name="Engineering Mathematics"
            course_id="mathID"
        />
        <CourseCard 
            course_name="Engineering Mechanics (statics)"
            course_id="mechanics_staticsID"
        />
    </div>
  )
}

export default Courses
