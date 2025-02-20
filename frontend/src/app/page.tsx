'use client';

import axios from '../services/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <title>CanRentAI</title>
      <h1 className=' text-center'>Welcome to CanRentAI</h1>
      <br />
      <p className=' text-center'>
        Already have an account?{' '}
        <Link href="/login">Login Here</Link>
      </p>
      <p className='  text-center'>
        Don't have an account?{' '}
        <Link href="/register">Register Here</Link>
      </p>
    </div>
  );
}