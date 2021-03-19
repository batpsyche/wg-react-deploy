import { React } from "react";

const framer = (props) =>{
	return <img key={props.keyUnique} src = {props.source} alt={props.alter}/>
}

export default framer