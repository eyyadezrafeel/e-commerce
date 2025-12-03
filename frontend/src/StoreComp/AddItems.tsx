import React , {useState} from 'react'
import axios from 'axios';


//name, description, price, store, category, subcategory
export default function AddItems() {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [category, setCategory] = useState('');
const [subcategory, setSubcategory] = useState('');

const handleAddItem = async () => {
    try{
    const response = await axios.post('http://localhost:5000/api/items/create', {
        name,
        description,
        price,
        category,
        subcategory,

    });
    console.log('Item added successfully:', response.data);


}catch(error){
    console.error('Error adding item:', error);
}
}

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
        <h2>Add New Item</h2>

        <input type="text" placeholder='enter product name' onChange={(e)=>setName(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl'/>
        <input type="text" placeholder='enter product description' onChange={(e)=>setDescription(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />
        <input type="text" placeholder='enter product price' onChange={(e)=>setPrice(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />
        <input type="text" placeholder='enter category' onChange={(e)=>setCategory(e.target.value) }  className='border border-[#7EC8FF] p-2 rounded-2xl'/>
        <input type="text" placeholder='enter subcategory' onChange={(e)=>setSubcategory(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />

        <button className='border border-[#7EC8FF] p-4 rounded-3xl'
        onClick={handleAddItem}>Add</button>




    </div>
  )
}
