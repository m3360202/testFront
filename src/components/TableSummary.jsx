import React, { useEffect, useState } from "react";

import { useMetircs } from "../store/uiActions";
import { Button } from "antd";
import { Col, Input, Row, Modal, Checkbox } from "antd";
import axios from "axios";

const getTodayDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

const get7daysAgoDate = () => {
    let today = new Date();
    let dd = today.getDate() - 7;
    let mm = today.getMonth(); // January is 0, so no need to add 1
    let yyyy = today.getFullYear();

    // Adjust the date if subtracting 7 days results in a negative day
    if (dd < 1) {
        // Get the number of days in the previous month
        let daysInPrevMonth = new Date(yyyy, mm, 0).getDate();
        dd = daysInPrevMonth + dd; // Calculate the correct day
        mm--; // Go to the previous month
        if (mm < 0) { // If the previous month is December, we need to adjust the year
            mm = 11; // December is 11 in JavaScript's Date object
            yyyy--; // Decrement the year
        }
    }

    // Format the day and month to ensure they have leading zeros if needed
    dd = (dd < 10) ? '0' + dd : dd;
    mm = (mm + 1 < 10) ? '0' + (mm + 1) : mm + 1; // Remember to add 1 back since we used 0-based month index

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

const get14daysAgoDate = () => {
    let today = new Date();
    let dd = today.getDate() - 14;
    let mm = today.getMonth(); // January is 0, so no need to add 1
    let yyyy = today.getFullYear();

    // Adjust the date if subtracting 14 days results in a negative day
    if (dd < 1) {
        // Get the number of days in the previous month
        let daysInPrevMonth = new Date(yyyy, mm, 0).getDate();
        dd = daysInPrevMonth + dd; // Calculate the correct day
        mm--; // Go to the previous month
        if (mm < 0) { // If the previous month is December, we need to adjust the year
            mm = 11; // December is 11 in JavaScript's Date object
            yyyy--; // Decrement the year
        }
    }

    // Format the day and month to ensure they have leading zeros if needed
    dd = (dd < 10) ? '0' + dd : dd;
    mm = (mm + 1 < 10) ? '0' + (mm + 1) : mm + 1; // Remember to add 1 back since we used 0-based month index

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

const get1msAgoDate = () => {
    let today = new Date();
    let originalDay = today.getDate(); // Save the original day

    // Subtract 3 months from the current month
    today.setMonth(today.getMonth() - 1);

    // Check if the year has changed and adjust it
    let yyyy = today.getFullYear();
    if (today.getMonth() < 0) {
        today.setMonth(today.getMonth() + 12); // Wrap around to the previous year
        yyyy--; // Decrement the year
    }

    // Set the day to the original day, but make sure it's a valid day of the month
    let daysInMonth = new Date(yyyy, today.getMonth() + 1, 0).getDate();
    let dd = originalDay <= daysInMonth ? originalDay : daysInMonth;
    dd = String(dd).padStart(2, '0'); // Format the day with leading zero if needed

    let mm = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11

    return `${yyyy}-${mm}-${dd}`;
}

const get3msAgoDate = () => {
    let today = new Date();
    let originalDay = today.getDate(); // Save the original day

    // Subtract 3 months from the current month
    today.setMonth(today.getMonth() - 3);

    // Check if the year has changed and adjust it
    let yyyy = today.getFullYear();
    if (today.getMonth() < 0) {
        today.setMonth(today.getMonth() + 12); // Wrap around to the previous year
        yyyy--; // Decrement the year
    }

    // Set the day to the original day, but make sure it's a valid day of the month
    let daysInMonth = new Date(yyyy, today.getMonth() + 1, 0).getDate();
    let dd = originalDay <= daysInMonth ? originalDay : daysInMonth;
    dd = String(dd).padStart(2, '0'); // Format the day with leading zero if needed

    let mm = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11

    return `${yyyy}-${mm}-${dd}`;
}

const getStartOfYear = () => {
    let today = new Date();
    let dd = '01';
    let mm = '01'; //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

export default function TableSummary() {
    const { during, data, columns,chartColumns,options } = useMetircs();
    const { Search } = Input;
    const [span, setSpan] = useState(Math.floor(24 / columns.length));
    const [open, setOpen] = useState(false);
    const [readRows, setReadRows] = useState([]);

    const requestReport = (during) => () => {
        useMetircs.setState({ during });
    };

    const [startTime, setStartTime] = useState(get7daysAgoDate());
    const [endTime, setEndTime] = useState(getTodayDate());

    const requestData = {
        user_id: "gifteal",
        x_level: "ad_market",
        y_level: "ad_market",
        y: '["gifteal_global"]',
        start_time: startTime,
        end_time: endTime,
        aggregation: true,
    };

    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-api-key": "shulabs_data_fetcher_api_key",
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const createArrayFromJson = (json) => {
        // 假设所有的 key 都有一个 "0" 的索引
        const keys = Object.keys(json);
        const dataArray = [];

        // 获取索引的数量（在这个例子中应该是 1，即 "0"）
        const indices = Object.keys(json[keys[0]]);

        // 为每个索引创建一个对象，并将其添加到数组中
        indices.forEach((index) => {
            const dataEntry = {};
            keys.forEach((key) => {
                dataEntry[key] = json[key][index];
            });
            dataArray.push(dataEntry);
        });

        return dataArray;
    };
    const filterName = (value) => {
        let originColumns = ['actions', 'cpm', 'ctr', 'roas', 'spend'];

        // 假设 readRows 是一个包含数据的对象数组
        // readRows = [{actions.omni_purchase: ..., cpm: ..., ...}, ...]

        if (!value) {
            // 如果没有传入 value，则设置整个数据集
            useMetircs.setState({ columns: originColumns });
        } else {
            // 将传入的字符串按逗号分割成数组
            const valuesToFilter = value.split(',');
            console.log('valuesToFilter', valuesToFilter)

            // 设置过滤后的数据
            useMetircs.setState({ columns: valuesToFilter });
        }
    }

    useEffect(() => {
        async function fetchData() {
            axios
                .post(
                    "https://z62x5u2bnl.execute-api.us-east-1.amazonaws.com/dev/dataRequest",
                    requestData,
                    {
                        headers: headers,
                    }
                )
                .then((res) => {
                    console.log("res-----------", res.data);
                    if (res.data.value && res.data.value.length > 0) {
                        let resdata = createArrayFromJson(JSON.parse(res.data.value));
                        console.log('res.data', resdata)
                        useMetircs.setState({ data: resdata,loading:false });
                        setReadRows(resdata);
                    } else {
                        //每5秒请求一次轮询
                        const interval = setInterval(() => {
                            let data = {
                                job_id: res.data.job_id
                            }
                            axios
                                .post(
                                    ` https://z62x5u2bnl.execute-api.us-east-1.amazonaws.com/dev/dataStatus`,
                                    data,
                                    {
                                        headers: headers,
                                    }
                                )
                                .then((res) => {
                                    console.log("res-----------", res.data);
                                    if (res.data.value.length > 0) {

                                        let resdata = createArrayFromJson(JSON.parse(res.data.value));
                                        console.log('res.data', resdata)
                                        useMetircs.setState({ data: resdata,loading:false });
                                        setReadRows(resdata);
                                        clearInterval(interval);
                                    }
                                    if (res.data.status === 'error' || res.data.status === 'Not Found') {
                                        clearInterval(interval);
                                        console.log('request failed')
                                    }
                                });
                        }, 5000);
                    }

                });
        }
        fetchData();
    }, [startTime]);

    useEffect(() => {
        if (during === '7D') {
            setStartTime(get7daysAgoDate());
            setEndTime(getTodayDate());
        }
        if (during === '14D') {
            setStartTime(get14daysAgoDate());
            setEndTime(getTodayDate());
        }
        if (during === '1M') {
            setStartTime(get1msAgoDate());
            setEndTime(getTodayDate());
        }
        if (during === '3M') {
            setStartTime(get3msAgoDate());
            setEndTime(getTodayDate());
        }
        if (during === 'YTD') {
            setStartTime(getStartOfYear());
            setEndTime(getTodayDate());
        }
    }, [during])

    const onChangeSetChart = (checkedValues) => {
        console.log('checked = ', checkedValues)
        useMetircs.setState({ chartColumns: checkedValues });
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                    marginTop: "20px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#fff",
                        width: "100%",
                    }}
                >
                    <h2>Table Summary</h2>
                    <Button type="primary" onClick={showModal}>Add Column</Button>
                    <Modal
                        title="Add Column"
                        open={open}
                        onCancel={handleCancel}
                        onOk={handleOk}
                    >
                        <Checkbox.Group
                            options={options}
                            defaultValue={chartColumns}
                            onChange={onChangeSetChart}
                        />
                    </Modal>
                </div>
            </div>
            <div
                style={{
                    padding: "10px 0px",
                    borderTop: "#fefefe 1px solid",
                    borderBottom: "#fefefe 1px solid",
                }}
            >
                <Row
                    justify="center"
                    align="top"
                    style={{ display: "flex", alignItems: "center", justifyContent: 'flex-start' }}
                >
                    <Col span={span}>
                        <Search placeholder="Champaigns" allowClear onSearch={filterName} />
                    </Col>
                    {columns.indexOf('actions') > -1 && (<Col span={span}>actions</Col>)}
                    {columns.indexOf('cpm') > -1 && (<Col span={span}>cpm</Col>)}
                    {columns.indexOf('ctr') > -1 && (<Col span={span}>ctr</Col>)}
                    {columns.indexOf('roas') > -1 && (<Col span={span}>roas</Col>)}
                    {columns.indexOf('spend') > -1 && (<Col span={span}>spend</Col>)}

                </Row>

            </div>
            {data.map((item, index) => {
                return (
                    <Row
                        key={index}
                        justify="center"
                        align="top"
                        style={{ display: "flex", alignItems: "center", borderBottom: "#fefefe 1px solid", padding: "10px 0px", justifyContent: 'flex-start' }}
                    >
                        <Col span={span}>{item.market_name}</Col>
                        {columns.indexOf('actions') > -1 && (<Col span={span}>{item['actions.omni_purchase']}</Col>)}
                        {columns.indexOf('cpm') > -1 && (<Col span={span}>{item.cpm}</Col>)}
                        {columns.indexOf('ctr') > -1 && (<Col span={span}>{item.ctr}</Col>)}
                        {columns.indexOf('roas') > -1 && (<Col span={span}>{item['purchase_roas.omni_purchase']}</Col>)}
                        {columns.indexOf('spend') > -1 && (<Col span={span}>{item.spend}</Col>)}

                    </Row>
                )
            })}
            <div style={{height:'180px'}}></div>
        </>
    );
}
