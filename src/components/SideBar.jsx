import React, { useState, useEffect } from "react";
import { MailOutlined } from "@ant-design/icons";
import '../assets/css/main.css';

export default function SideBar() {
    return (
        <div className='sidebar'>
            <h2>C.</h2>
            <div className='list'>
                <MailOutlined className='item' />
                <MailOutlined className='item' />
                <MailOutlined />
            </div>
            <div className='list'>
                <MailOutlined className='item' />
                <MailOutlined />
            </div>
            <div className='list'>
                <MailOutlined />
            </div>
        </div>
    );
}
