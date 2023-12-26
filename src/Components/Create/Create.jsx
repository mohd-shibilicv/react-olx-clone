import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header.jsx';

const Create = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  return (
    <Fragment>
      <Header />
      <h1 className='flex justify-center mt-20 text-2xl font-bold'>POST YOUR AD</h1>
      <card>
        <div className="centerDiv mx-auto mt-5">
          <form className='-mt-5'>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={price} onChange={(e) => setPrice(e.target.value)} type="number" id="price" name="Price" />
            <br />
          </form>
          <br />
          {image && <img alt="Posts" className='mx-auto' width="200px" height="200px" src={image && URL.createObjectURL(image)}></img> }
          <form>
            <br />
            <input type="file" onChange={(e) => {setImage(e.target.files[0])}} />
            <br />
            <button className="uploadBtn rounded">Upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
