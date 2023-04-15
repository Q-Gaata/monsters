import { Component } from "react";
import Card from "../card-container/card-container.component";
import './card-list.styles.css'

class Cardlist extends Component {

    
    render(){
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map((monster) => (
                    
                <Card monster={monster} />
                   
                ))}
            </div>
        )
    }
}

export default Cardlist;