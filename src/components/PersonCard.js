import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = props.firstName
        this.lastName = props.lastName
        this.state = {clickAge: props.age}
        this.hairColor = props.hairColor
    }
    
    handleClick = () => {this.setState({clickAge: this.state.clickAge+1})}

    render() {
        return(
            <div>
                <h1>{this.lastName}, {this.firstName}</h1>
                <h4>Age: {this.state.clickAge}</h4>
                <h4>Hair Color: {this.hairColor}</h4>
                <button onClick={this.handleClick}>Birthday button for {this.firstName} {this.lastName}</button>
            </div>
        )
    }
}

export default PersonCard