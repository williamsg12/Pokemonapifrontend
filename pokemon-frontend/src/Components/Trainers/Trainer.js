import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios'
const Trainer = () => {
    const [trainer, setTrainer] = useState([])


    const GetTrainer =async()=>{
     try {
				const res = await axios.get(`http://localhost:8000/trainer/`);
				setTrainer(res.data);
			} catch (error) {
				console.log(error);
			}   try {
            
        } catch (error) {
            
        }
    }
        useEffect(() => {
					GetTrainer()
				}, []);
    return (
        <div>
            {trainer.map(items=>{
                <h1>{trainer.name}</h1>
            })}
            
        </div>
    );
};

export default Trainer;