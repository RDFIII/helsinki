import React from 'react';

const Content = ({ course }) => {
    return (
      <div>
        
        {course.parts.map(a => <Part key={a.id} part={a} /> )}
  
      </div>
    )
  }

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }

const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises} 
      </p>    
    )
  }

const Total = ({ course }) => {
    const sum = course.parts.reduce((total, ex) => total += ex.exercises, 0);
    
    return(
      <p><strong>total of {sum} exercises</strong></p>
    ) 
  }


const Course = ({ course }) => {
  
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

const Courses = ({ courses }) => {
    return (
      <div>
        {courses.map(cour => <Course key={cour.id} course={cour} /> )}
      </div>
    )
  }

export default Courses;