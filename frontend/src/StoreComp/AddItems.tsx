import React , {useState} from 'react'
import axios from 'axios';


//name, description, price, store, category, subcategory
export default function AddItems() {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [quantity, setQuantity] = useState('');
const [category, setCategory] = useState('');
const [subcategory, setSubcategory] = useState('');
const [images, setImages] = useState([]);
const [preview , setPreview] = useState([]);

const handleFileChange = (e)  => {
  const files = Array.from(e.target.files);
  setImages(prev => [...prev, ...files]);

  const newpreviews = files.map(file => URL.createObjectURL(file));
  setPreview(prev => [...prev, ...newpreviews]);
};

const handleSubmit = async () => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('quantity', quantity);
  formData.append('category', category);
  formData.append('subcategory', subcategory);

  images.forEach(img => formData.append('images', img));

  try {
    const response = await axios.post('http://localhost:5000/api/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Item added successfully:', response.data);
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setCategory('');
    setSubcategory('');
    setImages([]);
    setPreview([]);
  } catch (error) {
    console.error('Error adding item:', error);
  }



}

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center h-screen gap-4 mt-30'>
        <h2>Add New Item</h2>

        <input type="text" placeholder='enter product name' onChange={(e)=>setName(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl'/>
        <input type="text" placeholder='enter product description' onChange={(e)=>setDescription(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />
        <input type="number" placeholder='enter product price' onChange={(e)=>setPrice(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />
        <input type="number" placeholder='enter product quantity' onChange={(e)=>setQuantity(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />
        <input type="text" placeholder='enter category' onChange={(e)=>setCategory(e.target.value) }  className='border border-[#7EC8FF] p-2 rounded-2xl'/>
        <input type="text" placeholder='enter subcategory' onChange={(e)=>setSubcategory(e.target.value)} className='border border-[#7EC8FF] p-2 rounded-2xl' />
        <input type="file" multiple onChange={handleFileChange} accept='image/*' className='border border-[#7EC8FF] p-2 rounded-2xl' />

<div className='flex flex-row'>
  {preview.map((src, i) => (
    <img key={i} src={src} alt={`Preview ${i}`} className='h-20 w-20 border  object-cover m-2' />
  ))}
</div>


        <button className='border border-[#7EC8FF] p-4 rounded-3xl'
        type = "submit">Create Item</button>




    </form>
  )
}
