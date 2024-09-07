'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import userLogIn from '@/libs/userLogin';
import userLogOut from '@/libs/userLogout';

import incrementClick from '@/libs/incrementClick';

export default function Banner() {
    const [clicked, addClick] = useState(0);
    const [onMouseDowned, MouseDown] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const click = async () => {
        const audio = new Audio('/sound/PopSound.mp3');
        audio.play();
        addClick(clicked + 1);
        setIsAnimating(true);

        try {
            if (isLoggedIn) {
                await incrementClick(); // Increment click count in backend if logged in
            }
        } catch (err) {
            console.error('Error incrementing click:', err);
        }

        // Reset animation state after a short delay
        setTimeout(() => {
            setIsAnimating(false);
        }, 50); // Animation duration
    };

    const handleMouseDown = (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') {
            return;
        }
        MouseDown(true);
        click();
    };

    const handleMouseUp = () => {
        MouseDown(false);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await userLogIn(username);
            console.log(data);
            setIsLoggedIn(true);
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    const handleLogout = async () => {
        try {
            await userLogOut();
            setIsLoggedIn(false);
            setUsername('');
        } catch (err) {
            setError('An error occurred during logout. Please try again.');
        }
    };

    return (
        <div 
            className="relative w-full h-screen"
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp}
            style={{ userSelect: 'none' }}
        >
            <div className={`h-16 flex flex-row fixed top-0 left-0 right-0 z-30`}>
                <div className="absolute right-3 top-3 flex flex-column h-full">
                    {!isLoggedIn ? (
                        <form onSubmit={handleLogin} className="flex flex-row items-center">
                            <input 
                                type="text" 
                                placeholder="Enter username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="p-2 m-2 border border-gray-300 rounded"
                                required
                            />
                            <button 
                                type="submit" 
                                className="p-2 m-2 bg-pink-400 text-white rounded hover:bg-pink-500"
                            >
                                Login
                            </button>
                            {error && <p className="text-red-500 mt-2">{error}</p>}
                        </form>
                    ) : (
                        <div className="flex flex-row items-center">
                            <p className="m-2 p-2 text-green-400">Logged in as: {username}</p>
                            <button 
                                onClick={handleLogout} 
                                className="m-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div>
                {/* Background Image */}
                <Image 
                    src="/img/LiliRoom.png" 
                    alt="cover" 
                    fill={true} 
                    sizes="100vw" 
                    className="object-cover w-full h-full opacity-80 blur-[6px]"
                    onDragStart={(e) => e.preventDefault()}
                />

                <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-black text-4xl font-bold">
                    <h1 className='text-center font-mono text-5xl text-pink-400'>POP LILI</h1>
                    <motion.h1 
                        className='text-center font-mono text-5xl text-pink-400'
                        initial={{ scale: 1, rotate: 0 }}
                        animate={isAnimating ? { scale: 1.25, rotate: 15 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}>
                        {clicked}
                    </motion.h1>
                </div>

                {/* Popcat Image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <Image 
                        src={onMouseDowned ? "/img/LiliPOP_2.png" : "/img/LiliPOP_1.png"} 
                        alt="POP_Lili" 
                        width={700}
                        height={700}
                        className="object-contain"
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
            </div>
        </div>
    );
}

