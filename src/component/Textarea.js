import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, SetText] = useState("");
    const change_text_up = () => {
        let newtext = text.toUpperCase();
        SetText(newtext);
    }
    const change_text_lo = () => {
        let newtext = text.toLowerCase();
        SetText(newtext);
    }
    const clear = () => {
        let newtext = '';
        SetText(newtext);
    }
    const handleonClick = (event) => {
        SetText(event.target.value);
    }
    const correct = () => {
        const word = text.split(" ");
        for (let i = 0; i < word.length; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].substring(1);
        }
        SetText(word.join(" "));
    }
    const copy = () => {

        const input = document.getElementById('exampleFormControlTextarea1'); // get the input element
        input.select(); // select the input text
        input.setSelectionRange(0, 99999); // for mobile devices

        try {
            navigator.clipboard.writeText(input.value); // write the selected text to clipboard
            console.log("Copied to clipboard"); // print success message to console
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }


    }
    return (
        <div>
            <div className={`container my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>{props.heading}</h2>
                <div className="form-group my-4">
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleonClick} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={change_text_up}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={change_text_lo}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={correct}>Correct Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={copy}>Copy Text</button>
            </div>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h2>Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Takes {0.008 * text.length} min to read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Some Text To Preview Here"}</p>
            </div>
        </div>
    );
}
