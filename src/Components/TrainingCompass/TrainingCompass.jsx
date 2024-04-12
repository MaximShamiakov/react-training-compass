import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchModels } from "../../redux/actions/actionsCategories";
import {actionsQuestionsTasks} from "../../redux/actions/actionsQuestionsTasks"
import {actionsSelectedCategory} from '../../redux/actions/actionsSelectedCategory'
import {actionIndexTask} from "../../redux/actions/actionIndexTask"
import Task from '../Task/Task';
import { Link } from 'react-router-dom'
import { API_URL } from '../../config';


export default function TrainingCompass(props) {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  const items = useSelector(state => state.categoriesReducer.items);

  const onSelectItems = (category)=>{
    axios
    .post(`${API_URL}/categories/`, {category, indexTask: []})
    .then((response) => {
      const taskIds = response.data.map((task) => task.id);
      dispatch(actionsSelectedCategory(category))
      dispatch(actionsQuestionsTasks(response.data))
      dispatch(actionIndexTask(taskIds));
     
    })
    .catch((error) => {
      console.log(error);
    });
};




  return (
    <div className="content">
    <div className="category-block">
      <div className="block-category">
        <div className="category-text">          
        {items.map((el)=> (<div onClick={()=>{onSelectItems(el.category)}} className="name-category" key={el.id}>{el.title}</div>))}
        <Link className='link' to={'/'}>
          <div className="name-category">Выйти</div>
        </Link>
        </div>
      </div>
    </div>
    < Task/>
  </div>
  )
}
