import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);


  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAverage(average + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setAverage(average - 1);
  }

  const calculateAverage = () => {
    return average/total;
  }

  const positivePercentage = () => {
    return (good/total) * 100;
  }

  if (total === 0) {
    return (
      <div>

        <h1>give feedback</h1>

        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        
        <h1>statistics</h1>
        <p>no feedback given</p>

      </div>
    )
  }
  return (
    <div>

      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      
      <h1>statistics</h1>

      <Statistics good={good} 
                  bad={bad} 
                  neutral={neutral} 
                  total={total}
                  calculateAverage={calculateAverage()} 
                  positive={positivePercentage()} />

    </div>
  )
}

const Statistics = ({total, calculateAverage, positive, good, neutral, bad}) => {
  
  
  return (
    <div>
      <table>
        <tbody>
        <Statistic text="good " value={good} />
        <Statistic text="neutral " value={neutral} />
        <Statistic text="bad " value={bad} />
        <Statistic text="total " value={total} />  
        <Statistic text="average " value={calculateAverage} />
        <Statistic text="positive percentage % " value={positive} ></Statistic>
        </tbody>
      </table>
  

    </div>
  )
}


const Statistic = (props) => (

      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>

)

const Button = ({handleClick, text}) => (
  <button onClick={handleClick} >
    {text}
  </button>
)


export default App
