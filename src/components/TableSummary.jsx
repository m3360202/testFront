import React from "react";

import { useMetircs } from "../store/uiActions";
import { Button } from "antd";

export default function TableSummary() {
    const { during } = useMetircs();

    const requestReport = (during) => () => {
        console.log("requestReport", during);
        useMetircs.setState({ during });
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                    marginTop:'20px'
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
                    <Button type="primary">
                        Add Column
                    </Button>
                </div>
            </div>
        </>
    );
}
