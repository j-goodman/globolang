function CourseList({courses, languages}) {
    return (
        <ul>
          {courses.map(course => {
            return <li>{course.level} {course.language}</li>
          })}
        </ul>
    )
}

export default CourseList