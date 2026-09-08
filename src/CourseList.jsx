import "./CourseList.css";

function CourseList({ courses, languages }) {
  return (
    <ul className="course-list">
      {courses.map((course) => {
        const language = languages.find(
          (lang) => lang.language === course.language,
        );

        return (
          <li key={course.id}>
            {language?.["flag-icon"] && (
              <img
                className="course-flag"
                src={language["flag-icon"]}
                alt={`${course.language} flag`}
              />
            )}
            <span className="course-details">
              {course.level} {course.language}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default CourseList;
