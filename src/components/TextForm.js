import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClearClick = () => {
    console.log("Clear was clicked");
    let newText = "";
    setText(newText);
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  
  // Calculate word count properly - filter out empty strings
  const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const readingTime = (0.008 * words).toFixed(2);
  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            id="myBox" 
            rows="8"
            placeholder=""
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{words} words and {text.length} characters</p>
        <p>{readingTime} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}