const React = require('react')
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '지렁이',
        value: '',
        result: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value[0], this.state.word[this.state.word.length-1])
        if (this.state.value[0] === this.state.word[this.state.word.length-1]) {
            this.setState({
                word : this.state.value,
                value: '',
                result: '정답!'
            })
            this.input.focus()
        } else {
            this.setState({
                value: '',
                result: '땡!'
            })
            this.input.focus()
        }

    }

    onChange = (e) => {
        this.setState({ value: e.target.value })
    }

    input;

    onRefInput = (c) => { this.input = c; }; 


    render() {
        return (
            <>
                <h1>{this.state.word}</h1>
                <form onSubmit={this.onSubmit}>
                    <input ref={ this.onRefInput} value={this.state.value} onChange={this.onChange}/>
                    <button>입력!</button>
                    </form>
                <h1>{this.state.result}</h1>
            </>
        )
    }
}

module.exports = WordRelay;