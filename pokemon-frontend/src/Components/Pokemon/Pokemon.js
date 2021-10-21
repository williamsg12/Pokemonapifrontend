import axios from 'axios';
import React from 'react';
import { useEffect } from 'react'
const Pokemon = () => {

    useEffect(() => {
        axios.get('https://localhost:8000')
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Pokemon;