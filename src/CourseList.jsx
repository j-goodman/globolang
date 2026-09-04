import './CourseList.css'

function CourseList({courses, languages}) {
    return (
        <ul className="course-list">
          {courses.map(course => {
            const language = languages.find(l => l.language === course.language)
            return <li className="course-list__item" key={`${course.level}-${course.language}`}>
              <img className="course-list__flag" src={language?.['flag-icon']} alt={`${course.language} flag`} />
              {course.level} {course.language}
            </li>
          })}
        </ul>
    )
}

export default CourseList