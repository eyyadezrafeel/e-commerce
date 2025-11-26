import React , {useState} from 'react'
import axios from 'axios';



interface CreateStoreProps {
  isDark: boolean;
}

export default function CreateStore({ isDark }: CreateStoreProps) {

  const [storeName, setStoreName] = useState('');
const [storeEmail, setStoreEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [description, setDescription] = useState('');
const [isSubmitted, setIsSubmitted] = useState(false);

const sendStoreRequest = async () => {
  try {
    const response = await axios.post('https://api.example.com/stores', {
      storeName,
      storeEmail,
      phoneNumber,
      description,
    });
    console.log('Store created successfully:', response.data);
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error creating store:', error);
  }

  if( !isSubmitted){
    return (
    
    <div className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundColor: isDark ? "#000" : "#fff"
      }}>
      <div className="flex flex-col justify-center items-center p-10 gap-6 rounded-3xl"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
        }} >
            
        <h2 style={{
          color: isDark ? "#fff" : "#000"
        }}>Create your store</h2>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <input className="w-80 px-2 py-2 rounded-full outline-none"
              style={{
                border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
                backgroundColor: isDark ? "#000" : "#fff",
                color: isDark ? "#fff" : "#000"
              }}
              type="text" placeholder='Enter store name' onChange={(e)=> setStoreName(e.target.value)} />
            <input className="w-80 px-2 py-2 rounded-full outline-none"
              style={{
                border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
                backgroundColor: isDark ? "#000" : "#fff",
                color: isDark ? "#fff" : "#000"
              }}
              type="text" placeholder='Enter your store email' onChange={(e)=> setStoreEmail(e.target.value)} />
            <input className="w-80 px-2 py-2 rounded-full outline-none"
              style={{
                border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
                backgroundColor: isDark ? "#000" : "#fff",
                color: isDark ? "#fff" : "#000"
              }}
              type="number" placeholder='Enter your phone number' onChange={(e)=> setPhoneNumber(e.target.value)}/>
          </div>
          <textarea
            className="w-full p-3 rounded-lg outline-none"
            style={{
              border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
              backgroundColor: isDark ? "#000" : "#fff",
              color: isDark ? "#fff" : "#000"
            }}
            rows={6}
            placeholder="Write your description here..."
            onChange={(e)=> setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className="px-4 py-4 rounded-full cursor-pointer transition-all duration-200"
          style={{
            border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
            color: isDark ? "#fff" : "#000",
            backgroundColor: isDark ? "#000" : "#fff"
          }}
          onClick={sendStoreRequest}
          >Create Store</button>
      </div>
    </div>
    )}
    else{

        return(
            <div className="w-screen h-screen flex justify-center items-center"
              style={{
                backgroundColor: isDark ? "#000" : "#fff"
              }}>
              <h2 className="text-4xl"
                style={{
                  color: "#10b981"
                }}>You will resive a massege and an email</h2>
            </div>
        )
    }
}

