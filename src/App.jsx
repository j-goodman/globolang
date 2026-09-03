import { useState, useEffect } from 'react'
import './App.css'
import CourseDetail from './CourseDetail'
import CourseList from './CourseList'

function App() {
  const [courses, setCourses] = useState([])
  const [languages, setLanguages] = useState([])
  const [selectedId, setSelectedId] = useState(13)

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
      <CourseList courses={courses} languages={languages}/>
    </div>
  )
}

export default App
