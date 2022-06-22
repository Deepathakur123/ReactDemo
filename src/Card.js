import { renderIntoDocument } from "react-dom/test-utils";

function Card(){
    return(
        <div>
            <h1> This is first react components 123</h1>
            <li>To Do list </li>
            <ol>Learn Hooks</ol>
            <ol>Learn states</ol>
           <h4> This is new header</h4>
        </div>
    )
}

export default Card