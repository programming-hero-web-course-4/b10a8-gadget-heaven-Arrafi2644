import React from 'react';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const Graph = () => {
    const data = [
        { product_title: "HP Spectre x360 14", price: 1399 },
        { product_title: "Fitbit Charge 5", price: 179 },
        { product_title: "RAVPower 20000mAh Portable Charger", price: 110 },
        { product_title: "ASUS ROG Zephyrus G14", price: 1499 },
        { product_title: "Samsung Galaxy S23 Ultra", price: 1129 },
        { product_title: "Microsoft Surface Laptop 5", price: 1199 },
        { product_title: "Samsung 45W Super Fast Charger", price: 229 },
        { product_title: "Acer Swift 5", price: 899 },
        { product_title: "Apple iPhone 15 Pro Max", price: 1099 },
        { product_title: "RAVPower 20000mAh Portable Charger", price: 89 },
        { product_title: "Apple Watch Series 9", price: 359 },
        { product_title: "Google Pixel 8 Pro", price: 999 },
        { product_title: "Lenovo ThinkPad X1 Carbon", price: 1229 },
        { product_title: "Samsung Galaxy Watch 6", price: 324 },
        { product_title: "Anker PowerPort III Nano Charger", price: 119 },
        { product_title: "Razer Blade 15", price: 1799 },
        { product_title: "Anker PowerCore 20100 Power Bank", price: 149 },
        { product_title: "OnePlus 11", price: 859 }
    ]
    
    
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="price" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="product_title" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Graph;

