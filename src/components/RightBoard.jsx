import React from 'react';

import { Progress } from 'antd';
import { Column } from '@ant-design/plots';
import { useMetircs } from '../store/uiActions';

export default function RightBoard() {
    const { data, chartColumns, loading, options, during } = useMetircs();
    const actionData = [{ name: '2-12', value: 10 },
    { name: '2-13', value: 50 },
    { name: '2-14', value: 40 },
    { name: '2-15', value: 30 },
    { name: '2-16', value: 50 }
    ];
    console.log('actionData', actionData);
    const cpmData = data.map((item) => {
        return {
            name: 'cpm',
            value: item.cpm,
        };
    }
    );
    const ctrData = data.map((item) => {
        return {
            name: 'ctr',
            value: item.ctr,
        };
    }
    );

    const roasData = data.map((item) => {
        return {
            name: 'roas',
            value: item['purchase_roas.omni_purchase'],
        };
    }
    );
    const spendData = data.map((item) => {
        return {
            name: 'spend',
            value: item.spend,
        };
    }
    );

    const Chart = ({ data }) => {
        const config = {
            data: data,
            xField: "name",
            yField: "value",
            style:{
                maxWidth: 50,
                titleFill:'white'
            },
            axis: {
                x: {
                    titleStroke:'#fff',
                    tickStroke:'#fff',
                    labelFill:'#fff',
                    lineStroke:'#fff'
                },
                y: {
                    titleStroke:'#fff',
                    tickStroke:'#fff',
                    labelFill:'#fff',
                    lineStroke:'#fff',
                    
                },
              },
            };

        return <Column  {...config} />;
    };

    return (
        <div className='rightBoard'>
            
            <div
                style={{
                    marginTop: '80px',
                    width:'100%',
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexDirection: 'column',
                    color: "#fff",
     
                }}
            >
                <div>
                <div style={{ marginBottom: '30px', marginRight: '10px' }} >sales</div>
                <Progress type="circle" percent={75} trailColor='#fff' format={() => { return (<span style={{ color: '#fff' }}>$12,000</span>) }} />
                </div>
                {chartColumns.indexOf('actions') > -1 && (<div style={{ background: 'rgb(0, 55, 100)', color: '#fff', borderRadius: '10px', width: '80%',textAlign:'left', margin: '0 auto', marginTop: '10px',paddingTop:'10px'}}>
                    <h6 style={{marginLeft:'20px'}}>Order of month</h6>
                    <Chart
                        data={actionData}
                    />
                </div>)}
                {chartColumns.indexOf('cpm') > -1 && (<div style={{ background: 'rgb(0, 55, 100)', color: '#fff', borderRadius: '10px', width: '80%',textAlign:'left', margin: '0 auto', marginTop: '10px',paddingTop:'10px'}}>
                    <h6 style={{marginLeft:'20px'}}>Chart of CPM</h6>
                    <Chart
                        data={cpmData}
                    />
                </div>)}
                {chartColumns.indexOf('ctr') > -1 && (<div style={{ background: 'rgb(0, 55, 100)', color: '#fff', borderRadius: '10px', width: '80%',textAlign:'left', margin: '0 auto', marginTop: '10px',paddingTop:'10px'}}>
                    <h6 style={{marginLeft:'20px'}}>Chart of CTR</h6>
                    <Chart
                        data={ctrData}
                    />
                </div>)}
                {chartColumns.indexOf('roas') > -1 && (<div style={{ background: 'rgb(0, 55, 100)', color: '#fff', borderRadius: '10px', width: '80%',textAlign:'left', margin: '0 auto', marginTop: '10px',paddingTop:'10px'}}>
                    <h6 style={{marginLeft:'20px'}}>Chart of ROAS</h6>
                    <Chart
                        data={roasData}
                    />
                </div>)}
                {chartColumns.indexOf('spend') > -1 && (<div style={{ background: 'rgb(0, 55, 100)', color: '#fff', borderRadius: '10px', width: '80%',textAlign:'left', margin: '0 auto', marginTop: '10px',paddingTop:'10px'}}>
                    <h6 style={{marginLeft:'20px'}}>Chart of Spend</h6>
                    <Chart
                        data={spendData}
                    />
                </div>)}

               
            </div>
            

        </div>
    )
}