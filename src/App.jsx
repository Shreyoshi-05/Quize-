import { useEffect, useState } from 'react'
import './App.css'
// import Page from './Page'

function App() {

  const[questions, setQuestions] = useState([])
  const[index, setIndex] = useState(0);
  const[marks, setMarks] = useState(0);

  function fetchData(){
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((res)=>res.json())
    .then((data)=>{
    if(data.response_code==0){
      setQuestions(data.results);
      console.log(data.results);
    }
  })
  }

  useEffect(()=>{
    fetchData();
  },[])

  function chengeIndex(currect){
    if(currect==true){
      setMarks(marks+1);
      setIndex(index+1);
    }else{
      if(index <= 9){
        setIndex(index+1);
      }
    }
  }

  // let index = 0;
  
  return (
    <>
    
   {index <= 9 ? <div>
      <div id="conatiner">

      <h2>Quiz App</h2>
      {
        questions.length > 0 ?<div>
          <p>{questions[index].question}</p>
          {
            questions[index].incorrect_answers.map((item,ind)=> <li><button onClick={()=>chengeIndex(false)}>{item}</button></li> )
          }
          <li><button onClick={()=>chengeIndex(true)}>{questions[index].correct_answer}</button></li>
        </div> : null 
      }
    </div>
    </div> : <div>
      <h1>Quiz Ended</h1>
      <br />
      <p>your score :{marks}/10</p>
    </div>

    }
    </>
  )
}

export default App
