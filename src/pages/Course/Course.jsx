import React from 'react'
import { useParams } from "react-router-dom"

function Course() {
    let  { course_id } = useParams()
  return (
    <div>
      Welcome to couse with ID: {course_id}
    </div>
  )
}

export default Course
