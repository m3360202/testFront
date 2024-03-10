import React from 'react';

import '../assets/css/main.css';

import SideBar from '../components/SideBar';
import MainBoard from '../components/MainBoard';

export default function App(): React.JSX.Element {

    return (
        <div className='container'>
            <SideBar />
            <MainBoard />
        </div>
    );
}