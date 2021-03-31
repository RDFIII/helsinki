import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const handleNextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    const copy = {...votes}
    
    if (copy[selected]) {
      copy[selected] += 1;
    } else {
      copy[selected] = 1;
    }

    setVotes(copy);
    
  }

  const conditional = () => {
    if (votes[selected]) {
      return `has ${votes[selected]} votes`
    } else {
      return 'has 0 votes'
    }
  }

  const mostVotes = () => {
    if (Object.keys(votes).length > 0) {
      let most = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
      return `${anecdotes[most]} (has ${votes[most]} votes)`;
    }
  }

  const mostVotesEdgeCase = () => {
    if (votes[selected]) {
      return ''
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>

      {conditional()}

      <br></br>

      <button onClick={handleVoteClick}>vote</button>

      <button onClick={handleNextClick}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {mostVotes()}
    </div>
  )
}

export default App
