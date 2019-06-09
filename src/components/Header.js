import React from 'react';
import kitty from '../assets/rainbow-kitty.jpeg';
import '../styles/Header.css';

export default function Header() {
    return (
        <div className="App-header">
            <header>
                <img src={kitty} className="App-logo" alt="logo" />
                <h1>Kitties in the City</h1>
            </header>
        </div>
    );
}
