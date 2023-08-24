import styles from './index.module.css'
import coachimage from './assets/lifecoach-avatar.png'


import { useState } from 'react'


function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const onSubmit = async (e) => {

    e.preventDefault()
    const generatedAnswer = await generateAnswer();
    setAnswer(generatedAnswer)
    // console.log(" question submited: ", question) 
    // console.log(" coach answer: ", generatedAnswer)
  }

  const generateAnswer = async () => {
    const response = await fetch('http://localhost:3005/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: question})
    })
    const data = await response.json()
    return data.response.trim();
    console.log(data.response.trim())
  }

  return (
    <main className={styles.main}>
      <img src={coachimage} alt="" className={styles.img} />
      <h3>Talk to your AI Virtual Coach!</h3>
      <h4>Ask me anything about your life!</h4>
  
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Ask me anything about your life!"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input type="submit" value="Ask me now!" />
      </form>
  
      <div className="text-card">
      <h3 className="text-card-title"> </h3>
      <p className="text-card-text">{answer}</p>
      </div>

    </main>
  );  
}

export default App
