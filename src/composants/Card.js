import '../App.css';
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
    return <div className="rectangle" onClick={() => navigate(`/cardImage/${props.id}`)} >
      <h1 className='name'>{  props.name } </h1>
      <p className="mana"> ManaCost : {props.manaCost} </p>
      <div className='imgParent'>
      <img className='image' src={props.url} alt={props.name}></img>
      </div>
      <h1 className='title'> Description : </h1>
      <p className='description'> {props.text} </p>
    </div>;
  }



  export default Card;
  