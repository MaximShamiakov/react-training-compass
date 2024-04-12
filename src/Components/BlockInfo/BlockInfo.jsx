import React, { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { fetchModels } from "../../redux/actions/actionsProjectInformations";


export default function BlockInfo() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);


  const info = useSelector(state => state.projectInformationsReducer.items);
  console.log(info)

  return (
    <div className="information-block">
              <dev className="block-info">
                <dev className="info-text">
                  <h3>
                  {info.map((el)=>(<div >{el.body} </div>))}                    
                  </h3>
                </dev>
              </dev>
            </div>
  )
}
