import * as url from "url";

const Optionas = (props) => {
    //localStorage.setItem('url', props.image)
    return(
        <option value={(props.value)}>{props.name}</option>
    )
}

export default Optionas