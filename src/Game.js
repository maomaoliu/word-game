import React from 'react';

const words = [
    "词语",
    "天气预报",
    "这是个橘子",
    "成语接龙",
];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            charCount: 0,
            word: '',
            toggle: false,
            consumedWords: [],
        };

        this.randomWord = this.randomWord.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showWord = this.showWord.bind(this);
    }

    randomWord() {
        var { randomIndex, theWord } = this.findRandomWord();
        this.state.consumedWords.push(theWord);
        this.setState({ number: randomIndex + 1, charCount: theWord.length, word: theWord, toggle: !this.state.toggle });

    }

    noWordsLeft() {
        return words.length === this.state.consumedWords.length;
    }

    findRandomWord() {
        var randomIndex = Math.floor(Math.random() * words.length);
        const leftWords = words.filter(x => !this.state.consumedWords.includes(x));
        var theWord = leftWords[randomIndex % leftWords.length];
        return { randomIndex, theWord };
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

    resetGame() {
        this.setState({ toggle: false, consumedWords: [], word: ''}
        );

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
                        <button className={this.state.toggle ? "show-random-toggle" : "hide-random-toggle"} onClick={() => this.showWord()}>显示谜底</button>
                        <button className={this.state.toggle || this.noWordsLeft() ? "hide-word-toggle" : "show-word-toggle"} onClick={() => this.randomWord()}>随机抽词</button>
                        <button className={this.noWordsLeft() && !this.state.toggle ? "show-reset-toggle" : "hide-reset-toggle"} onClick={() => this.resetGame()}>再来一次</button>
                    </div>

                    <div className={this.state.toggle ? "show show-random-toggle" : "show hide-random-toggle"}>
                        <div id="no">  序号：{this.state.number}  </div>
                        <div id="char-count">  {this.state.charCount} 个字</div>
                    </div>

                    <div className={this.state.toggle ? "word hide-word-toggle" : "word show-word-toggle"}> {this.state.word}</div>
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