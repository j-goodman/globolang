import './CourseList.css'

function CourseList({courses, languages, selectCourse}) {
    return (
        <ul className="course-list">
          {courses.map(course => {
            const language = languages.find(l => l.language === course.language)
            return <li className="course-list__item" key={`${course.level}-${course.language}`}>
              <img className="course-list__flag" src={language?.['flag-icon']} alt={`${course.language} flag`} />
              <button onClick={
                () => { selectCourse(course.id) }
              } className="course-list__button">{course.level} {course.language}</button>
            </li>
          })}
        </ul>
    )
}

export default CourseList