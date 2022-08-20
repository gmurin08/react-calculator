import {useState, useEffect} from 'react'

export default function OutputField(props){
    const [total, setTotal] = useState(0)
    
    return(<div className="output-field"><div id='num-field'>{props.num}</div></div>)
}