import styles from './index.module.css'
import coachimage from './assets/lifecoach-avatar.png'

import { useState } from 'react'


function App() {
  const [question, setQuestion] = useState('')

  const onSubmit = (e) => {

    e.preventDefault()
    console.log(" question submited ", question) 
    
  }

  return (
    <main className= {styles.main}>
      <img src={coachimage} alt="" className={styles.img}/>
      <h3>Talk to your AI Vertual Coach!</h3>
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
    </main> 
  )
}

export default App
