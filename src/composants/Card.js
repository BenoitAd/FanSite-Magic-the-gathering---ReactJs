import '../App.css';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const navigate = useNavigate();
    const filters = props.filters;
    return (
        <div className="rectangle">
            <h1 className="name">{props.name} </h1>
            <p className="mana"> ManaCost : {props.manaCost} </p>
            <div className="imgParent">
                <img className="image" src={props.url} alt={props.name}></img>
            </div>
            <h1 className="descriptionTitle"> Description : </h1>
            <p className="description"> {props.text} </p>
            <button
                type="button"
                className="button"
                onClick={() => navigate(`/cardImage/${props.id}+${filters}`)}
            >
                Card Full Artwork
            </button>
        </div>
    );
}

export default Card;
