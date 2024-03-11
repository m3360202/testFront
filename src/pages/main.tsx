import React from 'react';

import '../assets/css/main.css';
import { Spin } from 'antd';
import SideBar from '../components/SideBar';
import MainBoard from '../components/MainBoard';
import {useMetircs} from '../store/uiActions';

export default function App(): React.JSX.Element {
    const {loading} = useMetircs((store)=>store);

    return (
        <div className='container'>
            <Spin spinning={loading} style={{height:'auto',minHeight:'100%'}}>
            <SideBar />
            <MainBoard />
            </Spin>
        </div>
    );
}