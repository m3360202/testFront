import React, { useState, useEffect } from 'react';
import { MailOutlined } from '@ant-design/icons';

export default function MainBoard() {
    return (
        <div style={{background:'#000',color:'#fff',maxWidth:'100px',width:'90px'}}>
            <h2>C.</h2>
            <div style={{display:'flex',flexDirection:'column',lineHeight:'32px',marginTop:'20px'}}>
            <MailOutlined style={{marginBottom:'10px'}} />
            <MailOutlined style={{marginBottom:'10px'}} />
            <MailOutlined />
            </div>
            <div style={{display:'flex',flexDirection:'column',lineHeight:'32px',marginTop:'20px'}}>
            <MailOutlined style={{marginBottom:'10px'}} />
            <MailOutlined />

            </div>
            <div style={{display:'flex',flexDirection:'column',lineHeight:'32px',marginTop:'20px'}}>
            <MailOutlined />

            </div>
        </div>
    )
}