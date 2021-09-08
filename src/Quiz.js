import React, {useState, useEffect} from 'react';

function Quiz() {
    
    const [questiondata, setArrayOfQuestions] = useState([])
    // let questions = [], 
    let answers = [], correctAnswer = []
    
    
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then((data) => setArrayOfQuestions(data.results))
        localStorage.setItem("mail", "admin@example.com")
        localStorage.setItem("password", "123456")
    },[])

    console.log(localStorage)
    console.log(localStorage.getItem("mail"))
    
    // console.log(questiondata)
    // for (const idx of questiondata) {
    //     questions.push(idx.question)
    // }
    //console.log(questions)

    let ans
    for (const idx of questiondata) {
        ans = [...idx.incorrect_answers, idx.correct_answer].sort( () => .5 - Math.random() );
        answers.push(ans)
    }
    console.log(answers)
     for (const idx of questiondata) {
        correctAnswer.push(idx.correct_answer)
    }
    //  console.log(correctAnswer)
    let score = 0
    let total_questions_count = 0
    let historyRound = Math.floor(Math.random() * 1000000)
    const validateAnswer = (e,i) => {
        if(e.target.innerHTML == correctAnswer[i]){
            score++;
            alert("Correct Answer")
        }else if((e.target.innerHTML != correctAnswer[i])){
            alert("Incorrect Answer")
        }
        total_questions_count++
        if(total_questions_count == 5){
            alert("Your score is: " + score)
            localStorage.setItem(historyRound, score);
        }
        
    }
    
    return (
      <>
      {questiondata.map((d,i) => (
          <div key={i+10}>
            <p>{i+1}. {d.question}</p>
            <p>{answers[i].map(a => (
                <button key={i+300} onClick={(e) => validateAnswer(e,i)}>{a}</button>
            ))}</p>
          </div>
      ))}
      </>
    );
}


export default Quiz