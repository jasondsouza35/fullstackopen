const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercises={props.parts[0].excercises}/>
      <Part part={props.parts[1].part} exercises={props.parts[1].excercises}/>
      <Part part={props.parts[2].part} exercises={props.parts[2].excercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', excercises: 10 },
    { part: 'Using props to pass data', excercises: 7 },
    { part: 'State of a component', excercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={parts[0].excercises + parts[1].excercises + parts[2].excercises} />
    </div>
  )
}

export default App