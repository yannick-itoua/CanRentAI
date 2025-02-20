'use client';
import axios from '../services/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    
    return (
        <div>
        <h1 className='text-center'>Listings</h1>
        <p className='text-center'>All Listings</p>
        
        </div>
    );
    }