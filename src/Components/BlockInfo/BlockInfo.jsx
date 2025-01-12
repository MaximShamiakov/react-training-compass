import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../redux/actions/actionsProjectInformations";


export default function BlockInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  const info = useSelector((state) => state.projectInformationsReducer.items);

  console.log("Полученные данные:", info);

  if (!Array.isArray(info)) {
    return <div>Ошибка: Данные имеют неправильный формат</div>;
  }

  return (
    <div className="information-block">
      <div className="block-info">
        <div className="info-text">
          <h3>
            {info.map((el, index) => (
              <div key={index}>{el.body}</div>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
}
