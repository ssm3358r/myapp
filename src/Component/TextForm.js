import React ,{useState}from 'react'


export default function TextForm(props) {


   const [text, setText] = useState('');
   
   const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success")
   }
   const handleOnChange=(event)=>{
    // console.log("on change");
    setText(event.target.value)
   }
   const handleUpClick=()=>{
    // console.log("upperCase was Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Text is converted to uppercase","success")
   }
   const handleLoClick=()=>{
    // console.log("upperCase was Clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
        props.showAlert("Text is converted to lowercase","success")

   }
   const capitaliseClick=()=>{
    let newText=text.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    setText(newText);
        props.showAlert("Text is capitalized","success")

   }
   const remExtraSpace=()=>{
    let newText=text.trim().replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert("extra space removed","success")
   }
  return (
    <>
    <div style={{color:props.mode==="dark"?"white":"black"}}>
     <h1>{props.heading}</h1>
  <div className=" container mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"#17152a",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
  </div>
<button className="btn btn-secondary mx-2" onClick={handleUpClick}>Convert the Text into UpperCase</button>
<button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert the Text into LowerCase</button>
<button className="btn btn-secondary mx-2" onClick={capitaliseClick}>Capitalize the word</button>
<button className="btn btn-secondary mx-2" onClick={remExtraSpace}>remove space</button>
<button className="btn btn-secondary mx-2" onClick={handleCopy}>Copy Clipboard</button>
    </div>
    <div style={{color:props.mode==="dark"?"white":"black"}} className="container my-3">
  <h1>text summary</h1>
  <p>  {text===""?0:text.trim().replace(/\s+/g, ' ').split(" ").length } words, and {text.trim().replace(/\s+/g, ' ').length} characters{" "}
          .</p>
  <p>{0.008*text.trim().replace(/\s+/g, ' ').split(" ").length} minutes can be taken to read</p>
  <h2>Preview</h2>
  <p>{text.length===0?"Enter text into clipboard to preview ":text}</p>
</div>
    </>
  )
}
