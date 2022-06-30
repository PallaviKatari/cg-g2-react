import React from "react";
import { useAxios } from "use-axios-client";
//npm install use-axios-client --force
export default function AxiosuseAxios() {
    const { data, error, loading } = useAxios({
        url: "https://fakestoreapi.com/products"
    });

    if (loading || !data) return "Loading...";
    if (error) return "Error!";

    return (
        <div className="row" style={{ marginTop: 100 }}>
            <h1 class="head"> PRODUCT DETAILS </h1>
            <div className="col md-3">
                <h1 class="head">Employees list</h1>
                {data.map((record, i) =>
                    <div key={i} className="App" style={{ marginLeft: 500, width: 500, borderStyle: 'solid', borderBlockColor: 'red', lineHeight: 2 }}>
                        <img src={record.image} style={{ height: 100, width: 100 }} />
                        <br></br><br></br>
                        <p>{record.title}</p>
                        <p>RS: {record.price}</p></div>)}
            </div>
        </div>
    )
}