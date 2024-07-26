import React, { useState } from 'react';
import SingleCard from '../Components/SingleCard';

const image  = 'https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__'

const DragDrop = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Kristina Zasiadko',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png',
    },
    {
      id: 2,
      name: 'John Doe',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230721212159/gfg-logo.jpeg',
    },
    {
      id: 3,
      name: 'Jane Smith',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230909123918/GeeksforGeeks-Wide-logo-black.png',
    },
    {
        id: 4,
        name: 'Kristina Zasiadko 1 ' ,
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png',
      },
      {
        id: 5,
        name: 'John Doe 1',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230721212159/gfg-logo.jpeg',
      },
      {
        id: 6,
        name: 'Jane Smith 1',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230909123918/GeeksforGeeks-Wide-logo-black.png',
      },
  ]);

  const [draggingItem, setDraggingItem] = useState(null);
  const [newItemName, setNewItemName] = useState('');
  const [newItemImage, setNewItemImage] = useState('');

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
    e.dataTransfer.setData('text/plain', '');
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    if (!draggingItem) return;

    const currentIndex = items.indexOf(draggingItem);
    const targetIndex = items.indexOf(targetItem);

    if (currentIndex !== -1 && targetIndex !== -1) {
      const updatedItems = [...items];
      updatedItems.splice(currentIndex, 1);
      updatedItems.splice(targetIndex, 0, draggingItem);
      setItems(updatedItems);
    }
  };

  const handleNameChange = (e) => {
    setNewItemName(e.target.value);
  };

  const handleImageChange = (e) => {
    setNewItemImage(e.target.value);
  };

  const addNewItem = () => {
    const newItemId = Math.max(...items.map((item) => item.id)) + 1;
    const newItem = {
      id: newItemId,
      name: newItemName,
      image: newItemImage,
    };

    setItems([...items, newItem]);
    setNewItemName('');
    setNewItemImage('');
  };

  return (
    <div className="sortable-list">
      
      <div className=" bg-green-200 flex flex-col items-center justify-center">
      <div className="part1">
        <h1 className="text-6xl font-extrabold m-20 text-green-500 ">Chai Aur Code </h1>
      </div>

      <div className="bg-white h-3/4 w-3/4 ">
        <div className="1">
          <h2 className="text-2xl font-bold m-3 p-2 text-opacity-95">Manage Bundle </h2>
          <p className="text-xl mx-3 p-2 text-black">Change orders of the product based on priority </p>
        </div>
        <div className="2">



        {items.map((item) => (
        <div
          key={item.id}
          className={`item ${item === draggingItem ? 'dragging' : ''}`}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, item)}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, item)}
        >
          <div className="details">
           <SingleCard value={item}/>
            

          </div>
          
        </div>
      ))}

        
          

        </div>
      </div>
      <div className="flex justify-end  m-28">
            <a href="https://chaicode.com/"><img src=
            {image} alt="lalok " className='h-28'/></a>
        </div>
    </div>












     
    </div>
  );
};

export default DragDrop
