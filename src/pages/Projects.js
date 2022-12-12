import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import {projects} from '../data'

const Projects = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage);
    };

    const setDataBasedOnOffset = () => {
      const slice = projects.slice(offset, offset + perPage)
      const displayData = slice.map((dd) => {
        return (
        <div className='card bg-dark container'>
          <div className='card-head h2 text-warning'> {dd.title} </div>
          <div className='card-body tab content-color' style={{padding: "20px", textIndent: "20px"}}> {dd.desc} <br/> 
          <strong>Domain: </strong>{dd.domain} <br/> 
          <strong>Technology: </strong> {dd.technology} <br/> 
          <strong>Github: </strong> {dd.gitHub} </div>
          </div>
        )
      });
      setData(displayData);
      setPageCount(Math.ceil(projects.length / perPage))
    }

    useEffect(() => {
      setDataBasedOnOffset();
    },[offset]) 

    return (
    <div className="container-fluid bg-dark card" style={{"height": "34rem"}}>
      <header className="card-header text-warning">
        <h1 className="text-center">Projects I have explored....!</h1>
      </header>
      <div className="card-body container-fluid">
        <ul>
        {data}
        </ul>
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
      </div>
    </div>);
  };
  
  export default Projects;