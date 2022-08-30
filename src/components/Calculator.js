import {useState, useEffect, useRef} from 'react'
import Button from './buttons/Button'
import OutputField from './output/OutputField'
import {labels} from '../assets/labels'

export default function Calculator(){
    const [output, setOutput] = useState(0);
    const [operation, setOperation] = useState("");
    const [firstTerm, setFirstTerm] = useState(0);
    const equation = useRef("");

    function handleClick(event){

        if(event.target.value === "AC"){
            setFirstTerm(0);
            setOperation("")
            setOutput(0);
            equation.current = "";
        }


        if (event.target.value === '+' || event.target.value === '-' || event.target.value === '/' || event.target.value === 'X'){
            setFirstTerm(Number.parseInt(equation.current))
            equation.current = "";
            setOperation(event.target.value);
        }

        if(operation === ""){
            if(Number.parseInt(event.target.value) || Number.parseInt(event.target.value) === 0){
                equation.current += event.target.value
                setOutput(equation.current)
            }
        }

        if(operation !== ""){
            if(Number.parseInt(event.target.value) || Number.parseInt(event.target.value) === 0){
                equation.current += event.target.value
                setOutput(equation.current)
            }

            if(event.target.value === "="){
                
                if(operation === "+"){
                    setOutput(Number.parseInt(firstTerm) + Number.parseInt(equation.current))
                    equation.current = "";
                    setFirstTerm(0);
                }
                if(operation === "-"){
                    setOutput(Number.parseInt(firstTerm) - Number.parseInt(equation.current))
                    equation.current = ""
                }
                if(operation === "X"){
                    setOutput(Number.parseInt(firstTerm) * Number.parseInt(equation.current))
                    equation.current = ""
                    setFirstTerm(0);
                }
                if(operation === "/"){
                    setOutput(Number.parseInt(firstTerm) / Number.parseInt(equation.current))
                    equation.current = ""
                    setFirstTerm(0);
                }
            }
        }
    }

    return(
    <div className='calculator-body'>
        <OutputField num={output}/>
        <div className='key-body'>
            {labels.map((label,idx)=>
            {   
                if(label === '0'){
                    return <Button key={idx} handleClick={handleClick} isZero>{label}</Button>
                }if(idx < 3){
                    return <Button key={idx} handleClick={handleClick} isMod>{label}</Button>
                }if(idx === 3 || idx === 7 || idx === 11 || idx === 15 || idx === 18){
                    return <Button key={idx} handleClick={handleClick} isOp>{label}</Button>
                }else{
                    return <Button key={idx} handleClick={handleClick} isDigit>{label}</Button>
                } 
            })}
        </div>
    </div>)
} 