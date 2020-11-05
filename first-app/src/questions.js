import React, { Component } from "react";

export default class questions extends Component {
  state = {
    questions: [],
    counter: 0,
    questionCounter: 1
   
  };

  componentDidMount() {
    this.getQuestions();
    this.random();
  }

  componentDidUpdate() {
    this.getQuestions();
  }

  random = () => {
    var q = this.state.a;
    var w = this.state.b;
    var e = this.state.c;
    var r = this.state.d;
    while (q === w || q === e || q === r || w === e || w === r || e === r) {
      q = Math.floor(Math.random() * 4) + 1;

      w = Math.floor(Math.random() * 4) + 1;

      e = Math.floor(Math.random() * 4) + 1;

      r = Math.floor(Math.random() * 4) + 1;
    }
    if (q === 4) {
      this.setState({ winner: "q" });
    }
    if (w === 4) {
      this.setState({ winner: "w" });
    }
    if (e === 4) {
      this.setState({ winner: "e" });
    }
    if (r === 4) {
      this.setState({ winner: "r" });
    }
    this.setState({ a: [q, w, e, r] });
  };

  getQuestions = () => {
    fetch("http://localhost:3000/questions?id=" + this.state.questionCounter)
      .then((Response) => Response.json())
      .then((data) => this.setState({ questions: data }));
  };

  changeQuestiona = () => {
    if (this.state.questionCounter < 5) {
      if (this.state.winner==="q") {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
        this.setState({ counter: this.state.counter + 1 });
        this.random();
      } else {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
      }
    } else{
      this.setState({questionsCounter:this.state.questionCounter+" SORU"})
        this.setState({trueAnswers:this.state.counter+" DOĞRU"})
        this.setState({ wrongAnswers: this.state.questionCounter - this.state.counter+" YANLIŞ" });
     
    }
  };
  changeQuestionb = () => {
    if (this.state.questionCounter < 5) {
      if (this.state.winner==="w") {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
        this.setState({ counter: this.state.counter + 1 });
        this.random();
      } else {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
      }
    } else{
      this.setState({questionsCounter:this.state.questionCounter+" SORU"})
        this.setState({trueAnswers:this.state.counter+" DOĞRU"})
        this.setState({ wrongAnswers: this.state.questionCounter - this.state.counter+" YANLIŞ" });
       
    }
  };
  changeQuestionc = () => {
    if (this.state.questionCounter < 5) {
      if (this.state.winner==="e") {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
        this.setState({ counter: this.state.counter + 1 });
        this.random();
      } else {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
      }
    } else{
      this.setState({questionsCounter:this.state.questionCounter+" SORU"})
        this.setState({trueAnswers:this.state.counter+" DOĞRU"})
        this.setState({ wrongAnswers: this.state.questionCounter - this.state.counter+" YANLIŞ" });
        
    }
  };
  changeQuestiond = () => {
    if (this.state.questionCounter < 5) {
      if (this.state.winner==="r") {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
        this.setState({ counter: this.state.counter + 1 });
        this.random();
      } else {
        this.setState({ questionCounter: this.state.questionCounter + 1 });
      }
    }else{
      this.setState({questionsCounter:this.state.questionCounter+" SORU"})
        this.setState({trueAnswers:this.state.counter+" DOĞRU"})
        this.setState({ wrongAnswers: this.state.questionCounter - this.state.counter+" YANLIŞ" });
     
    }
  };

  render() {
    return (
      <div>
        {this.state.questions.map((question) => (
          <p key={question.id} id="tamsoru">
            <br /><span id="abc">
            <div id="soruSayac">SORU {question.id}/5 </div>
            <div id="soru">{question.question}</div>
            <img src={question.img} alt="img"></img>
            <br />
            <button onClick={this.changeQuestiona}>
              {question.answers["t" + [this.state.a[0]]]}
            </button>
            <button onClick={this.changeQuestionb}>
              {question.answers["t" + [this.state.a[1]]]}
            </button>
            <button onClick={this.changeQuestionc}>
              {question.answers["t" + [this.state.a[2]]]}
            </button>
            <button onClick={this.changeQuestiond}>
              {question.answers["t" + [this.state.a[3]]]}
            </button></span>
            <p id="counters">
              <div id="answers">{this.state.questionsCounter}</div>
             <div id="trueAnswers">{this.state.trueAnswers}</div>
              <div id="wrongAnswers">{this.state.wrongAnswers}</div>
            </p>
          </p>
        ))}
      </div>
    );
  }
}
