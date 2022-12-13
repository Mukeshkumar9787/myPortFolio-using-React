import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import {projects} from '../data'

const Projects = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage);
    };


    useEffect(() => {
      const setDataBasedOnOffset = () => {
        const perPage = 1;
        const slice = projects.slice(offset, offset + perPage)
        const displayData = slice.map((dd) => {
          return (
          <div className='card bg-dark container-fluid'>
            <div className='card-head h2 text-warning'> {dd.title} </div>
            <div className='card-body tab content-color content-data text-justify-center' style={{padding: "30px", margin: "20px", textIndent: "20px", width: "1000px"}}> 
            {dd.desc} <br/> 
            <strong>Domain: </strong>{dd.domain} <br/> 
            <strong>Technology: </strong> {dd.technology} <br/> 
            <strong>Github: </strong> <a href= {dd.gitHub}> {dd.gitHub} </a></div>
          </div>
          )
        });
        setData(displayData);
        setPageCount(Math.ceil(projects.length / perPage))
      };
      setDataBasedOnOffset();
    },[offset]) 

    return (
    <div className="container bg-dark card" style={{"height": "35rem"}}>
      <header className="card-header text-warning">
        <h1 className="text-center">Projects I have explored....!</h1>
      </header>
      <div className="card-body container text-wrap">
      <ul style={{"font-size": "1em"}}>
        {data}
      </ul>
      <footer className='footer'>
        <ReactPaginate previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={0}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination custom-pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
      </footer>
      </div>
    </div>);
  };
  
  export default Projects;