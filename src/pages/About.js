import { Fragment } from "react/jsx-runtime";

function Aboutpage()
{
    return <h1>this is first page</h1>;
}

export default Aboutpage;

function Abc()
{                                                
    return <h3>heading one</h3>
}
export {Abc}

export function Student()
{
    return "dfksfidndksj"
}

export function Companyinfo()     //function
{                                //block and scope
    const name="Gunjan";
    const age=20;
    // const stu={name:"titu", age:26,phone:7466038654}
    return(                           //template / JSX
        <Fragment>
        <h2>this is heading</h2>
        <h3>username: {name}</h3>
        <h1>age:{age}</h1>              
        </Fragment>
    )
}


 export const Service = ()=>{
    const age=25;
    return(
        <Fragment>
            <h2>this is heading {age}</h2>
            <h3>server</h3>
        </Fragment>
            
    )
}