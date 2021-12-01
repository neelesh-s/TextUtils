import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let hi=text.toUpperCase()
        setText(hi)
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const Clickclear=()=>{
        let newText=''
        setText(newText);
    }
    const [text, setText] = useState('Enter Text here');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}className="form-control" value={text} onChange={handleOnChange} onClick={handleUpClick} id="myBox" rows="8"></textarea>
            </div>
        
            <button className="btn btn-primary mx-2" onClick={handleUpClick} onChange={handleOnChange}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={Clickclear}>Clear text</button>
        </div>
        <div className="container" my-3>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters. {text.split(" ").length*0.008} min read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
