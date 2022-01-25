import React from 'react'
import { useParams } from "react-router-dom"

const subscriptions = [
  {
    name: "math",
    id: "mathID"
  }
]

function Course() {
    let  { course_id } = useParams()
    
  return (
    <div>
      Welcome to couse with ID: {course_id} and { subscriptions[0].id}
      <div>
        {subscriptions.map((course) => course.id === course_id? 
          <h1>Hello my subscriber </h1> 
            : 
          <div>
            <h1>No access, sorry. buy the course</h1>
            <button>Buy {course_id}</button>
          </div>
          )}
      </div>
    </div>
  )
}

export default Course
