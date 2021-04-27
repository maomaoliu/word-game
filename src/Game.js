import React from 'react';

const words = [
    "词语1",
    "词语2"
];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            charCount: 0,
            word: '',
            toggle: true
        };

        this.randomWord = this.randomWord.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showWord = this.showWord.bind(this);
        this.numbers = words.length;
    }

    randomWord() {
        var randomIndex = Math.floor(Math.random() * this.numbers);
        var theWord = words[randomIndex];
        this.setState({ number: randomIndex + 1, charCount: theWord.length, word: theWord, toggle: !this.state.toggle });
        console.log(this.state.number);
        console.log(theWord);

    }

    showWord() {
        this.setState({ toggle: !this.state.toggle });
        console.log(this.state.word);

    }

    handleChange(event) {
        var theNumber = event.target.value;
        this.setState({ number: theNumber, word: words[theNumber - 1] });

        console.log(theNumber);
    }

    render() {
        return (
            <div className="game" >
                <header className="app-header">
                    <h1>
                        你来比划我来猜
                    </h1>
                </header>
                <div id="content-desktop">

                    <div className="buttons">
                        <button className={"random-toggle-" + this.state.toggle} onClick={() => this.showWord()}>显示谜底</button>
                        <button className={"word-toggle-" + this.state.toggle} onClick={() => this.randomWord()}>随机抽词</button>
                    </div>

                    <div className={"show random-toggle-" + this.state.toggle}>
                        <div id="no">  序号：{this.state.number}  </div>
                        <div id="char-count">  {this.state.charCount} 个字</div>
                    </div>

                    <div className={"word word-toggle-" + this.state.toggle}> {this.state.word}</div>
                </div>

                <div id="content-mobile">
                    <input type="number" onChange={this.handleChange} >{this.state.inputNumber}</input>
                    <div id="no">  序号：{this.state.number}  </div>
                    <div className="word">{this.state.word}</div>
                </div>
            </div >
        );
    }
}

export default Game;