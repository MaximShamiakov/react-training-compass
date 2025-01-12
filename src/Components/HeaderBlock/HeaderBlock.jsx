import React from "react";
import { useSelector } from "react-redux";


export default function HeaderBlock(props) {
  const tasks = useSelector(state => state.questionsTasksReducer.items)
  const replied = tasks.length > 0 ? tasks[0].replied : 0;
  const left_to_answer = tasks.length > 0 ? tasks[0].left_to_answer : 0;


  return (
    <div className="header-block-name">
      <div className="quantity">
        <div>Ответил на {replied} вопросов</div>
        <div>Осталось ответить на {left_to_answer} вопросов</div>
      </div>
      <div className="header-project-name">
        <h1 className="header-text"> Учебный компас </h1>
      </div>
    </div>
  )
}
