import React, { useState, useEffect } from 'react';

import '../assets/css/main.css';
import { useActions } from '../store/uiActions';
import SideBar from '../components/SideBar';

export default function App(): React.JSX.Element {


    return (
        <div className='container'>
            <SideBar />
        </div>
    );
}