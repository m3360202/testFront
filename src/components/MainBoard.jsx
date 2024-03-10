import React from 'react';
import LeftBoard from './LeftBoard';
import RightBoard from './RightBoard';

export default function MainBoard() {
    return (
        <div className='mainBoard'>
            <LeftBoard />
            <RightBoard />
        </div>
    )
}