// Table.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import TableRow from "./tableRow";

const Table = ({ datas = ["undefined"], columns }) => {
  const [rows, setRows] = useState(datas);
  const [cols, setCols] = useState(columns)
  const [total, setTotal] = useState({
    total_temps: 0,
    temps_mo: 0,
    temps_ma: 0,
  });

  useEffect(() => {
    const updatedTotal = {
      total_temps: 0,
      temps_mo: 0,
      temps_ma: 0,
    };

    cols.forEach((col) => {
      const hasTotalArray = ["total_temps", "temps_mo", "temps_ma"];
      if (hasTotalArray.includes(col.id)) {
        const sumInSeconds = datas.reduce((acc, row) => {
          const value = parseInt(row[col.id]) || 0;
          const unit = row["unite_temps"]?.toLowerCase();

          if (unit === "seconde") {
            return acc + value;
          } else if (unit === "heure") {
            return acc + value * 3600; // Convert hours to seconds
          } else {
            // Assume unit is 'Minute'
            return acc + value * 60; // Convert minutes to seconds
          }
        }, 0);

        const sumInMinutes = Math.floor(sumInSeconds / 60);

        updatedTotal[col.id] = sumInMinutes;
      }
    });

    setTotal(updatedTotal);
  }, [datas, cols]);
 
  return (
    <>
      <table className="table-auto w-[96%] mx-auto my-6 px-6 text-left shadow-sm">
        <thead className="bg-blue-400 w-full text-white text-[14px] font-sans ">
          <tr className="shadow-sm">
            {cols.map((col, index) => (
              <th key={index} className="py-3 pl-[10px] pr-0 uppercase">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-[16px] font-sans">
        

          {
            rows.length > 0 
            ? (
              rows.map((row, index) => {
                return (
                  
                  <TableRow data={rows} key = {index} className ='bg-[#e5e7eb] "hover:bg-gray-100"' >
                    {/* <td className="text-center py-3 bg-blue-300 text-white" colSpan={100}>Enfant</td> */}
                    <TableRow data ={rows} />
                  </TableRow>
                  
                );
              })
            ) 
            : <div>{`aucune donnée n'a été trouvée`}</div>
          } 
          
        </tbody>
        <tfoot className="bg-white">
          <tr className="shadow-sm">
            {
              rows.length > 0 && cols.map((col,idcol) =>{
                  if( col.id === 'total_temps' || col.id === 'temps_ma' || col.id === "temps_mo"){
                   
                      return <td key = {idcol} className="py-4 pl-[10px] pr-0">{total[col.id]} Minute(s)</td>  
                  }
                  else{
                      return <td key = {idcol} className="py-4 pl-[10px] pr-0"></td>  

                  }
              })
            }         
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
