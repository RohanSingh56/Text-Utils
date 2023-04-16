import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");

  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");

  }

  const handleFirstLetter = () => {
    let newText = text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    setText(newText);
    props.showAlert("First letter capitalized", "success");

  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3" >
          <textarea className="form-control" style={{backgroundColor: props.Mode === 'dark' ? 'grey' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleFirstLetter}>First letter Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
      </div>
    </>
  )
}
