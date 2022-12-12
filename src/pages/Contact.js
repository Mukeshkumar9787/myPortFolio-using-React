import {contact} from "../data";

function Contact() {
    return (
        <div className="d-flex align-items-center card about-child container-fluid bg-dark " style={{"height": "34rem"}}>  
            <header className="card-header text-warning">
                <h1>Keep in Touch....!</h1>
            </header>
            <div className="card content-bg" style={{"height": "25rem", "width": "60rem"}}>
                <table className="table-sm card-body text-justify-center">
                    <tbody className="px-5">
                    {contact.map((data, index) => {
                        return (
                        <tr key={index}> 
                            <th scope="row" className="content-color h3 content-data"> ➼ </th>
                            <td className="content-color h3 content-data" style={{"padding":"20px"}}>{data.name}</td> 
                            <td className="content-color h3 content-data"><a href={data.link} target="_blank" rel="noreferrer"> {data.text} </a></td> 
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Contact;