import React from 'react';
import { useEffect } from 'react';
import axios
const Trainer = () => {
        useEffect(() => {
					axios.get('https://localhost:8000');
				}, []);
    return (
        <div>
            
        </div>
    );
};

export default Trainer;