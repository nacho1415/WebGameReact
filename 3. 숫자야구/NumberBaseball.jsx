const React = require('react')
const { Component } = React;
const Try = require('./Try');

class NumberBaseBall extends Component {
    
    rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandNumbers = () => {
        const randNums = []
        while(randNums.length != 4) {
            const randValue = this.rand(0, 9)
            if (!randNums.includes(randValue)) {
                randNums.push(randValue)
            }
        }
        return randNums
    }
    
    state = {
        infoGame: "숫자야구게임에 오신 것을 환영합니다",
        value: "",
        tryCount: 0,
        strikeBallSet: this.getRandNumbers(), 
        tries: []
    }

    onChange = (e) => {
        this.setState({ value: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.strikeBallSet.join("") === this.state.value) {
            this.setState({
                infoGame: `${this.state.strikeBallSet.join("")} 정답입니다! 새 게임을 시작합니다`,
                value: "",
                strikeBallSet: this.getRandNumbers(),
                tryCount: 0,
                tries: []
            })
        } else {
            if (this.state.tryCount >= 9) {
                this.setState({
                    infoGame: `기회를 모두 소진하였습니다\n정답은 ${this.state.strikeBallSet.join("")}이었습니다!\n새 게임을 시작합니다!`,
                    value: "",
                    strikeBallSet: this.getRandNumbers(),
                    tryCount: 0,
                    tries: []
                })
            } else {
                this.state.tryCount += 1
                let strike = 0
                let  ball = 0
                for (let i = 0; i < 4; i++) {
                    console.log(this.state.value[i], this.state.strikeBallSet[i], this.state.strikeBallSet.join(""))
                    console.log(typeof(this.state.value[i]), typeof(this.state.strikeBallSet[i]), this.state.strikeBallSet.join(""))
                    if (this.state.value[i] == this.state.strikeBallSet[i]) {
                        strike +=1
                    } else if (this.state.strikeBallSet.includes(Number(this.state.value[i]))) {
                        ball +=1
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value,  result: `${strike} 스트라이크 ${ball} 볼입니다`}],
                })

            }
        }
        
    }

    styles = {
        "white-space": "pre-wrap"
    };

    render() {
        return (
            <>
                <h1 style={this.styles}>{this.state.infoGame}</h1>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.value} onChange={this.onChange}/>
                    <button onSubmit={this.onSubmit}>입력!</button>
                </form>
                <h1>시도: {this.state.tryCount}</h1>
                <ul>
                    {this.state.tries.map((v, i) => {
                        return (
                            <li>
                                <div>{v.try}</div>
                                <div>{v.result}</div>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

module.exports = NumberBaseBall;