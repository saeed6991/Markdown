import React from "react";
import "./App.css";
import {marked} from 'marked';

function App() {
  const styling = {
    margin: 0,
    postion: "relative",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  };
  return (
    <div className="App">
      <div style={styling}>
        <Wrapper />
      </div>
    </div>
  );
}

export default App;

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor_max: false,
      preview_max: false,
      input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n".split(""),
      markdown:[],
    };
    this.editorMaximize = this.editorMaximize.bind(this);
    this.previewerMaximize = this.previewerMaximize.bind(this);
    this.copyText = this.copyText.bind(this);
  }
  editorMaximize() {
    if (this.state.editor_max) {
      this.setState({
        editor_max: false,
      });
    } else {
      this.setState({
        editor_max: true,
      });
    }
  }
  previewerMaximize() {
    if (this.state.preview_max) {
      this.setState({
        preview_max: false,
      });
    } else {
      this.setState({
        preview_max: true,
      });
    }
  }
  copyText(event) {
    this.setState({
      input: [...marked.parse(event.target.value)],
    });

  }
  render() {
    const editorStyle = {
      backgroundColor: "grey",
      height: "500px",
      fontSize: "12px",
      width: "500px",
      border: "2px solid #ccc",
      boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
      marginBottom: "10px",
      marginTop: "20px",
      marginLeft: "50px",
      borderRadius: '40px 15px 20px 40px'
    };
    const previewStyle = {
      backgroundColor: "grey",
      height: "1000px",
      fontSize: "15px",
      width: "600px",
      border: "2px solid #ccc",
      boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
      marginBottom: "30px",
      borderRadius: '40px 15px 20px 40px',
    };
    const containerStyling = {
      position: "relative",
    };
    const TextsStyle = {
      width: "95%",
      height: "83%",
    };
    const floatLeft = {
      float: "left",
      marginLeft: "10px",
    };
    const floatRight = {
      float: "right",
      margin: "10px",
    };
    const breakStyle = {
      position: "relative",
      top: "50px",
    };
    const TopContainerStyling = {
      marginBottom: "0",
    };
    const previewingStyle = {
      marginTop: "250px",
    };
    if (!this.state.editor_max && !this.state.preview_max) {
      return (
        <div className="container" style={containerStyling}>
          <div style={editorStyle}>
            <div className="topContainer" style={TopContainerStyling}>
              <h1 style={floatLeft}>This is my Markdown Editor:</h1>
              <a onClick={this.editorMaximize} style={floatRight}>o
              </a>
            </div>
            <textarea style={TextsStyle} value={this.state.input.join("")} onChange={this.copyText}></textarea>
          </div>
          <div style={previewStyle}>
            <div className="topContainer">
              <h1 style={floatLeft}>This is my Markdown Previewer:</h1>
              <a onClick={this.previewerMaximize} style={floatRight}>o
              </a>
            </div>
            <p style={previewingStyle}>{this.state.input.join("")}</p>
          </div>
        </div>
      );
    }
    if (this.state.editor_max) {
      return (
        <div className="container" style={containerStyling}>
          <div style={editorStyle}>
            <div className="topContainer">
              <h1 style={floatLeft}>This is my Markdown Editor:</h1>
              <a onClick={this.editorMaximize} style={floatRight}>x
              </a>
            </div>
            <textarea style={TextsStyle} value={this.state.input.join("")} onChange={this.copyText}></textarea>
          </div>
        </div>
      );
    }
    if (this.state.preview_max) {
      return (
        <div className="container" style={containerStyling}>
          <div style={previewStyle}>
            <div className="topContainer">
              <h1 style={floatLeft}>This is my Markdown Previewer:</h1>
              <a onClick={this.previewerMaximize} style={floatRight}>x
              </a>
            </div>
            <p style={previewingStyle}>{this.state.input.join("")}</p>
          </div>
        </div>
      );
    }
  }
}