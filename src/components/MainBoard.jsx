import React from 'react';
import LeftBoard from './LeftBoard';
import RightBoard from './RightBoard';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
export default function MainBoard() {
    return (
        <div className='mainBoard'>
            <LeftBoard />
            <RightBoard />
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "#fff",
                    top: '20px', right: '20px',
                    position: 'fixed'
                }}
            >
                <QuestionCircleOutlined size='large' />
                <span style={{ marginLeft: '10px', marginRight: '16px' }}>Help</span>
                <Avatar style={{ backgroundColor: '#fff', color: '#0f1e41', fontWeight: 'bold' }}>M</Avatar>

            </div>
        </div>
    )
}