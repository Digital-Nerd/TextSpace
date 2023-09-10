import React, { useState } from "react";
// import PropTypes from 'prop-types'


export default function Textform(props) {
  // let myStyle = {
    //   color: "white",
    //   backgroundColor: "black",
    //   borderRadius: "5px",
    //   height: "450px"
    // }
    

  let fontStyle = {
    paddingTop: "20px",
    paddingBottom: "10px",
  };
  const [text, setText] = useState("");
 

  const handleUpClick = () => {
    console.log("button was clicked");
    setText(text.toUpperCase());
  };

  const handleDownClick = () => {
    console.log("button was clicked");
    setText(text.toLowerCase());
  };
  const handleClearClick = () => {
    console.log("button was clicked");
    setText("");
  };
  const handleCopy = () => {
    console.log("button was clicked");
    var copyText = document.getElementById("textBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to clipboard");
  };

  const handleSummary = () => {
    let count = 0;
    let lengthCount = 0;
    let readTime = 0;
    let newText = text.trim();
    count = newText.split(" ").filter((element)=>{return element.length>0}).length;
    lengthCount = newText.length;
    readTime = 0.008 * count;
    // document.write(<p id="wordCount">Word Count: {count}</p>)
    // document.write(<p id=")wordLength">No. of characters: {lengthCount}</p>)
    // document.write(<p id="readTime">Reading Time: {readTime}</p>)
    document.getElementById("wordCount").innerHTML = count;
    document.getElementById("wordLength").innerHTML = lengthCount;
    document.getElementById("readTime").innerHTML = readTime + " minutes";
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      
        <div className="mb-3 container">
          <h4 style={fontStyle}> Text Analyzer</h4>
          <textarea
            className="form-control my-2"
            id="textBox"
            rows="5"
            value={text} style={{backgroundColor: props.mode==='dark' ? "#13466e":"white", color: props.mode==='dark' ? "white":"black"}}
            onChange={handleOnChange}
          ></textarea>
          <button className='btn btn-primary my-1' disabled={text.length===0} aria-pressed="true" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className='btn btn-primary mx-4 my-1' disabled={text.length===0} onClick={handleDownClick}>
            Lowercase
          </button>
          <button className='btn btn-primary my-1' disabled={text.length===0} onClick={handleClearClick}>
            Clear Text
          </button>
          <button className='btn btn-primary mx-4 my-1' disabled={text.length===0} onClick={handleCopy}>
            Copy Text
          </button>
        </div>
        <div className="container my-5">
          <h4>Text Summary</h4>
          Word Count: <p id="wordCount"></p>
          No. of characters: <p id="wordLength"></p>
          Reading Time: <p id="readTime"></p>
          <button className="btn btn-danger" onClick={handleSummary}>
            Generate Summary
          </button>
        </div>
    </>
  );
}
