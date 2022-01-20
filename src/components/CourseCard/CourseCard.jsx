import React from 'react'
import styles from "./CourseCard.module.css"
import { useNavigate } from "react-router-dom"

function CourseCard({course_name, course_id}) {
  
  let navigate =useNavigate()
  
  const goToCourse = () => navigate(`/courses/${course_id}`)

  return (
    <div className={styles.course_container}>
      <div>Course Name: {course_name}</div>
      <div>Description: my description</div>
      <div>Objectives to attain: blah blah blah</div>
      <button onClick={goToCourse}>Go to course : {course_id}</button>
      <div>Content</div>
      <hr></hr>
      <div>
          reviews
          <ul>
              <li>Quite a good course</li>
              <li>Content is great!</li>
          </ul>
      </div>
    </div>
  )
}

export default CourseCard
