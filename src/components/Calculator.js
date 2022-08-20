import {useState, useEffect} from 'react'
import Button from './buttons/Button'
import OutputField from './output/OutputField'
import {labels} from '../assets/labels'

export default function Calculator(){
    const [num, setNum] = useState('0')

    function handleClick(event){
        setNum(event.target.value)
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