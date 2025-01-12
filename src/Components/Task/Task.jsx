import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { actionIndexTask } from '../../redux/actions/actionIndexTask';
import { actionsQuestionsTasks } from '../../redux/actions/actionsQuestionsTasks';
import { API_URL } from '../../config';



export default function Task() {

  const dispatch = useDispatch()
  const tasks = useSelector(state => state.questionsTasksReducer.items)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };
  const handleShowAnswer = () => {
    const currentQuestion = tasks[currentQuestionIndex];
    alert(currentQuestion.answer);
  };
  const itemsCategories = useSelector(state => state.selectedCategory.items)
  const indexTask = useSelector(state => state.indexTask.items)
  const lengthObj = useSelector(state => state.questionsTasksReducer.items)



  useEffect(() => {
    if (currentQuestionIndex === tasks.length & 1 <= tasks.length) {
      axios.post(`${API_URL}/categories/`, { category: itemsCategories, indexTask: indexTask })
        .then((response) => {
          console.log(response)
          setCurrentQuestionIndex(0);
          const taskIds = response.data.map((task) => task.id);
          dispatch(actionsQuestionsTasks(response.data))
          dispatch(actionIndexTask(taskIds));
        })
        .catch(error => {
          console.log(error);
        });
    }
    else if (tasks.length === 0) {
      alert('Вы прошли мои задания')
    }

  },
    // [currentQuestionIndex],
  );


  return (
    <div div className="block-program" >
      <div className="block-category">
        <div className="block-question">
          {lengthObj.length > 0 ? (<div className="question-name">{tasks[currentQuestionIndex]?.question}</div>) : (<div className="question-name">Выберите категорию!</div>)}
          <div className="response-name">
            <div className="answer-button" onClick={handleShowAnswer}>ОТВЕТ</div>
            <div className="answer-button" onClick={handleNextQuestion}>NEXT</div>
          </div>
        </div>
      </div>
    </div >
  )
}
