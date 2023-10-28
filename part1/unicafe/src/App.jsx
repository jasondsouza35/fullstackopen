import { useState } from 'react'

const DisplayData = ({valueType, value}) => {
  if (valueType == "positive") {
    return (
      <tr>
        <td>{valueType}</td>
        <td>{value} % </td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{valueType}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad == 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <tbody>
        <DisplayData valueType={"good"} value={good}/>
        <DisplayData valueType={"neutral"} value={neutral}/>
        <DisplayData valueType={"bad"} value={bad}/>
        <DisplayData valueType={"all"} value={good + neutral + bad}/>
        <DisplayData valueType={"average"} value={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}/>
        <DisplayData valueType={"positive"} value={(good / (good + neutral + bad)) * 100}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleReview = (reviewType) => {
    if (reviewType == "good") {setGood(good + 1)}
    else if (reviewType == "neutral") {setNeutral(neutral + 1)}
    else if (reviewType == "bad") {setBad(bad + 1)}
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleReview("good")}>good</button>
      <button onClick={() => handleReview("neutral")}>neutral</button>
      <button onClick={() => handleReview("bad")}>bad</button>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
} 

export default App
