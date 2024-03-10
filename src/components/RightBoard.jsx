import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Progress } from 'antd';
export default function RightBoard() {
    return (
        <div className='rightBoard'>
            <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        color: "#fff",
                        top:'20px',right:'20px',
                        position:'fixed'
                    }}
                >
                    <QuestionCircleOutlined size='large' />
                    <span style={{marginLeft:'10px',marginRight:'16px'}}>Help</span>
                    <Avatar style={{ backgroundColor: '#fff',color:'#0f1e41',fontWeight:'bold' }}>M</Avatar>
                    
                </div>
                <div
                    style={{
                        marginTop:'80px',
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        color: "#fff",
                        top:'20px',right:'20px',
                        position:'fixed'
                    }}
                >   
                <div  style={{marginBottom:'30px',marginRight:'10px'}} >sales</div>
                <Progress type="circle" percent={75} trailColor='#fff' format={() => '$12,000'} />
                </div>
        </div>
    )
}