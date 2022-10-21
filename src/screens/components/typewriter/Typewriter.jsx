import "./Typewriter.css"
import {useEffect} from 'react'

  /**
   * @param {Array} data - Array []: Array of strings to be typed
   * @param {Number} typeSpeed - Number: Speed of typing in milliseconds
   * @param {Number} msgDelay - Number: delay between each message in milliseconds
   * -----------------------------------------
   * 
   * usage:
   * 
   * <Typewriter 
   * 
   * &nbsp;&nbsp;&nbsp;data={msgArray} 
   * 
   * &nbsp;&nbsp;&nbsp;typeSpeed={100}
   * 
   * &nbsp;&nbsp;&nbsp;msgDelay={2000}
   * 
   * />
   */

  //https://jsdoc.app/tags-params.html

function Typewriter({data = [], typeSpeed = 100, msgDelay = 2000}) {
useEffect(() => {
  let characterPos=0
  let msgBuffer=""
  let msgIndex=0
  let delay

  function StartTyping() {
    let id = document.getElementById("typing-text")
    if(characterPos!==data[msgIndex].length) {
      msgBuffer = msgBuffer + data[msgIndex].charAt(characterPos);
      id.value = msgBuffer + "_";
      delay = typeSpeed;
    }else{
      delay=msgDelay
      msgBuffer=""
      characterPos= -1
      if(msgIndex !== data.length -1) {
        msgIndex++
      }else{
        msgIndex = 0
      }
    }
    characterPos++
    setTimeout(StartTyping, delay)
  }

  
  StartTyping()

}, [])
  
  return (
    <textarea id="typing-text" readOnly></textarea>
  )
}

export default Typewriter