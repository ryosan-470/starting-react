import * as React from "react";

export default class HelloWorld extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { greet: "" };
        // onClickの中でthisをすると親クラスを指してしまう
        this.onClick = this.onClick.bind(this); 
    }

    onClick(event) {
        this.setState({ greet: "Hello world" });
    }

    render() {
        return (
            <div>
                <p>{ this.state.greet }</p>
                <button ref="greetButton" onClick={ this.onClick }>Greet</button>
            </div>
        );
    }
};