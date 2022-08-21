import {useState, useEffect} from 'react'
import Button from './buttons/Button'
import OutputField from './output/OutputField'
import {labels} from '../assets/labels'

export default function Calculator(){
    const [num, setNum] = useState(0)
    const [input, setInput] = useState(["0"])
    const [op, setOp] = useState()
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);

    useEffect(()=>{ 
        setNum(Number(input.join('')))
    },[input])

    useEffect(()=>{

        if(op === "+"){
            setNum(operand1 + operand2)
        }
        if(op === "-"){
            setNum(operand1 - operand2)
        }
        if(op === "/"){
            if(!operand2){
                return
            }
            const result = operand1/operand2
            if(result % 1 !== 0){
                setNum(result.toPrecision(4))
            }
            setNum(result)
        }
    
    }, [operand1, operand2, op])


    function handleClick(event){
        const digit = event.target.value
        console.log("++++++++++++++++++++++++++++")
        console.log("input is " + input)
        console.log("num is " + num)
        console.log("operand1 is " + operand1)
        console.log("operator is " + op)
        console.log("operand2 is " + operand2)
        if (Number.parseInt(digit) || Number.parseInt(digit) === 0){
            setInput([...input, digit])
        }

        if(digit === "+"){
            setOp('+')
            setOperand1(num)
            setInput([])
        }

        if(digit === "-"){
            setOp('-')
            setOperand1(num)
            setInput([])
        }

        if(digit === "/"){
            setOp('/')
            setOperand1(num)
            setInput([])
        }

        if(digit === "="){
            setOperand2(num) 
            setInput([0])
            
        }

        if(digit === "AC"){
            setOperand1(0)
            setOperand2(0);
            setNum(0)
            setInput([])
        }
    }

    return(
    <div className='calculator-body'>
        <OutputField num={num}/>
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