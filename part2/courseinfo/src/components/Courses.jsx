const Part = ({ course, exercises }) => {
    return <div>{course} {exercises}</div>
}

const Course = ({ course }) => {
    return (
        <>
            <h1>{course.name}</h1>
            
            {course.parts.map(part =>
                <Part key={part.id} course={part.name} exercises={part.exercises}/>    
            )}  
            <b> total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>
        </>
    )
}

const Courses = ({ courses }) => {
    return <div>{courses.map( course => <Course key={course.id} course={course} /> )}</div>
}

export default Courses