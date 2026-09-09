import { useState, useEffect } from 'react'
import './App.css'
import CourseDetail from './CourseDetail'
import CourseList from './CourseList'
import LanguageFilter from './LanguageFilter'

function App() {
  const [courses, setCourses] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  useEffect(() => {
    fetch(`https://j-goodman.github.io/language-class-data/data/class-list.json`)
    .then(response => response.json())
    .then(data => setCourses(data))
  }, [])

  useEffect(() => {
    fetch(`https://j-goodman.github.io/language-class-data/data/languages.json`)
    .then(response => response.json())
    .then(data => setLanguages(data.languages))
  }, [])

  const course = courses.find(c => c.id === selectedId)
  const language = languages.find(lang => lang.language === course?.language)
  return (
    <div>
      <LanguageFilter languages={languages} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
      {
        selectedId && course ? (
          <>
            <button onClick={
              () => { setSelectedId(null) }
            }>←</button>
            <CourseDetail course={course} language={language}/>
          </>
        ) : (
          <CourseList courses={courses} languages={languages} selectCourse={setSelectedId} selectedLanguage={selectedLanguage}/>
        )
      }
    </div>
  )
}

export default App
