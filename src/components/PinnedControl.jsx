import React from "react";

import { useMetircs } from "../store/uiActions";
import  ratePng from '../assets/img/rate.png';

export default function PinnedControl() {
    const { during } = useMetircs();

    const requestReport = (during) => () => {
        console.log("requestReport", during);
        useMetircs.setState({ during, loading: true});
    };
    
    const RateIcon = () => {

            return (
                <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 0L8 8H0L4 0Z"
                        fill="#4cbd1b"
                    />
                </svg>
            );

    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        color: "#fff",
                    }}
                >
                    <h2>Pinned Metrics</h2>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "#fff",
                            marginLeft: "30px",
                            marginTop:'16px'
                        }}
                    >
                        <div
                            style={{
                                border: "#fff 1px solid",
                                padding: "5px 20px",
                                background: during === "7D" ? "#1491ff" : "none",
                            }}
                            onClick={requestReport("7D")}
                        >
                            7D
                        </div>
                        <div
                            style={{
                                border: "#fff 1px solid",
                                padding: "5px 20px",
                                background: during === "14D" ? "#1491ff" : "none",
                            }}
                            onClick={requestReport("14D")}
                        >
                            14D
                        </div>
                        <div
                            style={{
                                border: "#fff 1px solid",
                                padding: "5px 20px",
                                background: during === "1M" ? "#1491ff" : "none",
                            }}
                            onClick={requestReport("1M")}
                        >
                            1M
                        </div>
                        <div
                            style={{
                                border: "#fff 1px solid",
                                padding: "5px 20px",
                                background: during === "3M" ? "#1491ff" : "none",
                            }}
                            onClick={requestReport("3M")}
                        >
                            3M
                        </div>
                        <div
                            style={{
                                border: "#fff 1px solid",
                                padding: "5px 20px",
                                background: during === "YTD" ? "#1491ff" : "none",
                            }}
                            onClick={requestReport("YTD")}
                        >
                            YTD
                        </div>
                    </div>
                </div>
                <h2>. . .</h2>
            </div>
            {/*rows*/}
            <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                
                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden'
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Facebook
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "30px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                    <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden'
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Shopify
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "30px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                    <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>
                    
                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden',

                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Blended
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "36px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                        <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden'
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Facebook
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "30px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                    <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden'
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Shopify
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "30px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                    <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>
                    
                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden',

                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Blended
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "36px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                        <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden'
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Facebook
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "30px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                    <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>

                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden'
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Shopify
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "30px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                    <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>
                    
                        <div
                            style={{
                                background: "#003764",
                                padding: "10px 20px",
                                display: "flex",
                                borderRadius: "8px",
                                marginTop:'16px',
                                width:'28%',overflow:'hidden',

                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
                                <div style={{ color: "#8aa3b7", fontSize: "14px" }}>
                                    Blended
                                </div>
                                <div style={{ color: "#fff", fontSize: "24px",padding:'20px 0' }}>
                                    <span style={{ fontSize: "36px", fontWeight: "blod" }}>$</span>
                                    112,893
                                </div>
                                <div style={{ color: "#fff", padding:'0',display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                                    <span style={{ fontSize: "12px",marginRight:'10px' }}>Revenue</span>
                                        <RateIcon  />
                                    <span style={{ fontSize: "14px", color:'#4cbd1b',marginLeft:'8px' }}>70.5%</span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={ratePng}
                                    alt="facebook"
                                    style={{ width: "100%", height: "120px",marginLeft:'15px' }}
                                />
                            </div>
                        </div>

                        
            
            </div>
        </>
    );
}
