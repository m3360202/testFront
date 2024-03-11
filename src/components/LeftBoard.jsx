import React from 'react';
import PinnedControl from './PinnedControl';
import TableSummary from './TableSummary';

export default function LeftBoard() {
    return (
        <div className='leftBoard'>
            <PinnedControl />
            <TableSummary />
            <div style={{height:'60px'}}></div>
        </div>
    )
}