import { Component } from "react";
import './card-container.styles.css'
class Card extends Component {
    render(){

        const { name, id, email } = this.props.monster;

        return (

            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=200x200`} />
                <h1 key={id}>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card;