import React from 'react'

const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
    const sum = parts.reduce((sum, part) => {
      return sum + part.exercises
    }, 0)
    return(
      <p>Number of exercises {sum}</p>
    ) 
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
  const Course = ({ courses }) => {
    return (
        courses.map(course => {
          return (
            <div id={course.id}>
              <Header name={course.name} />
              <Content parts={course.parts} />
              <Total parts={course.parts} />
            </div>
          )
        })
    )
  }

  export default Course