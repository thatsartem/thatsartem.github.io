import { Link } from "react-router-dom";
import "../css/buttons.css"

export default function Buttons() {
    return (
      <>
        <div className="buttons">
                <Link className="task-button" to="/">Задание 1</Link>
                <Link className="task-button" to="/2">Задание 2</Link>
                <Link className="task-button" to="/3">Задание 3</Link>
                <Link className="task-button" to="/4">Задание 4</Link>
        </div>
      </>
    );
  }