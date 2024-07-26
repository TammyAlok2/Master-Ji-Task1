import React from "react";
import { useState } from "react";
import item from '../Components/items.js'

import SingleCard1 from "../Components/SingleCard1";

const Batches = () => {
  const image  = 'https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__'


  const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(3);
const totalItems = item.length; // Total number of items
const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate the total number of pages

// Generate an array of page numbers from 1 to totalPages
const pageNumber = Array.from({ length: totalPages }, (_, index) => index + 1);
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = item.slice(indexOfFirstItem, indexOfLastItem);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
 }
  const [filterText,setFilterText] = useState('')

  const [items, setItems] = useState(item);
  const handleInputChange = (event)=>{
    console.log(event.target.value)
    setFilterText(event.target.value)
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    const filteredArray = items.filter(item=>{
      return item.name?.toLowerCase()?.includes(filterText?.toLowerCase())

    })
    console.log(filteredArray)
    setFilterText(filterText)
    setItems(filteredArray)
  }
  return (
    <div>
      <div className=" bg-pink-300 flex flex-col items-center  min-h-screen">
        <div className="h">
          <h1 className="text-center  text-6xl font-bold m-10 text-violet-950">
            Chai aur Code{" "}
          </h1>
        </div>
        <div className="bg-white min-h-22 w-3/4   ">
          <div className="">
            <h1 className="text-3xl font-bold m-4 p-2">Batches </h1>
            <p className="t m-2 font-sans">
              Create Learner's Batch and share inforamation at the same time{" "}
            </p>
            <div className="flex ">
              <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleInputChange}
                className=" m-2 p-2 w-2/4 border-solid border-2 border-black"
                placeholder="Enter your course"
                value={filterText}
                
              />
              <button
                className="bg-blue-900 text-white
 hover:bg-red-500  font-semibold m-2 p-2 w-28 border border-gray-400 rounded shadow"
             type="submit"
              >
                Search
              </button>
              </form>
            </div>
          </div>
          <div className="part2">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
            <div className="flex justify-start justify-between">
              <img src="1.png" alt="" />
            <div className="font-bold text-2xl">
                  <h1>Title</h1>
                </div>
                <div className="font-bold text-2xl">
                 <h1>Description </h1>
                </div>
                <div className="font-bold text-2xl">
Price
                </div>
                <div className="font-bold text-2xl">
Status
                </div>
              </div>
            </div>
            {
              currentItems.map((item)=>{
                return(
                  <SingleCard1 value={item} />
                )
              })
            }

          </div>

          <div className="flex  justify-end gap-4 m-10 ">
          
     {pageNumber.map(number => {
      return(
        <div className="min-w-8  text-center border-solid border-2 border-indigo-600 hover:bg-slate-800">
          
       <button key={number} onClick={() => handlePageChange(number)} className="w-22 " >
         {number}
       </button>
     
        </div>
      )
     })}
   
          </div>
        </div>
      </div>
      <div className="flex justify-end  m-28">
            <a href="https://chaicode.com/"><img src=
            {image} alt="lalok " className='h-28'/></a>
        </div>
    </div>
  );
};

export default Batches;
