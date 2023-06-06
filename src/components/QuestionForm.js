import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    const isInputError = inputValue.includes('f') 
    
    // console.log(inputValue)
    return (
        <div>
            <textarea
            // This line sets the value of the textarea to the current value of inputValue.
                value={inputValue}

                /* This line sets the onChange event listener for the textarea. When the user types in the text area, 
                this function is called with the event object event. The function then calls the setInputValue function with 
                the value property of the event.target object, which is the current value of the text area. So I can
                update the value of inputValue to be the current value of the text area.*/
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            
            {isInputError && (
            <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
)}
        </div>
    )
}

export default QuestionForm
