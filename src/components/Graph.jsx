// import React, { PureComponent } from 'react';
// import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const LineChart = () => {

//     const frameworkPopularity = [
//         { year: 2010, React: 5, Vue: 0, Angular: 30 },
//         { year: 2011, React: 10, Vue: 0, Angular: 35 },
//         { year: 2012, React: 15, Vue: 0, Angular: 40 },
//         { year: 2013, React: 20, Vue: 5, Angular: 50 },
//         { year: 2014, React: 30, Vue: 10, Angular: 60 },
//         { year: 2015, React: 45, Vue: 15, Angular: 58 },
//         { year: 2016, React: 55, Vue: 25, Angular: 55 },
//         { year: 2017, React: 65, Vue: 35, Angular: 53 },
//         { year: 2018, React: 72, Vue: 40, Angular: 50 },
//         { year: 2019, React: 78, Vue: 45, Angular: 47 },
//         { year: 2020, React: 82, Vue: 50, Angular: 45 },
//         { year: 2021, React: 85, Vue: 55, Angular: 43 },
//         { year: 2022, React: 88, Vue: 58, Angular: 42 },
//         { year: 2023, React: 90, Vue: 60, Angular: 40 },
//       ];
      

//     return (
//         <div className='w-full my-10 px-10 text-black'>

//           <h2 className='font-bold text-4xl text-center mb-6'>Rechart for Framework Popularity</h2>

//           <LChart width={600} height={300} data={frameworkPopularity}>
//             <Line type={'monotone'} dataKey={'React'} stroke='purple' strokeWidth={3}  />
//             <Line type={'monotone'} dataKey={'Angular'} stroke='green' strokeWidth={3} />
//             <Line type={'monotone'} dataKey={'Vue'} stroke='blue' strokeWidth={3} />
//             <CartesianGrid></CartesianGrid>
//             <XAxis></XAxis>
//             <YAxis></YAxis>
//             <Legend></Legend>
            
//           </LChart>

//         </div>
//     );
// };

// export default LineChart;

// import React from 'react';
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Graph = () => {

  const products = [
    { product_title: "HP Spectre x360 14", price: 1399 },
    { product_title: "Fitbit", price: 179 },
    { product_title: "RAVPower", price: 110 },
    { product_title: "ASUS", price: 1499 },
    { product_title: "Samsung", price: 1129 },
    { product_title: "Microsoft", price: 1199 },
    { product_title: "Samsung", price: 229 },
    { product_title: "Acer ", price: 899 },
    { product_title: "Apple", price: 1099 },
    { product_title: "RAVPower", price: 89 },
    { product_title: "Apple", price: 359 },
    { product_title: "Google", price: 999 },
    { product_title: "Lenovo", price: 1229 },
    { product_title: "Samsung", price: 324 },
    { product_title: "Charger", price: 119 },
    { product_title: "Razer", price: 1799 },
    { product_title: "Anker", price: 149 },
    { product_title: "OnePlus", price: 859 }
];


  return (
    <div className='flex items-center justify-center my-6'>
      <BarChart width={350} height={200} data={products}>
        <Bar dataKey='price' fill='#8874d8'></Bar>
        
        <YAxis dataKey={'price'}></YAxis>
      </BarChart>
    </div>
  );
};

export default Graph;