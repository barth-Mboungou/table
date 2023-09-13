// Table.js
"use client";
import React, { useState } from 'react';
import Image from "next/image";

const Table = ({ datas }) => {
  
  const [rows, setRows] = useState(datas);
  
  const cols = Object.keys(datas[0]);

  const setTotalTime = () =>{

  }


  return (
    <>
      <table className="table-auto w-full text-left shadow-sm">
        <thead className="bg-blue-400 w-full text-white text-[14px] font-sans ">
          <tr className="shadow-sm">
            {cols.map((col, index) => (
              <th key={index} className="py-3 pl-[10px] pr-0 ">
                {col}
              </th>
            ))}
           
          </tr>
        </thead>
        <tbody className="text-[16px] font-sans">
          {rows.map((row, idRow) => (
            <tr
              draggable='true'
              key={idRow}
              className="bg-[#e5e7eb] text-[#000000de] shadow-[0px 4px 4px]  shadow-[#02020256] hover:bg-gray-100"
            >
              {cols.map((col, idCell) => {
                if (col === "deplacer") {
                  return (
                    <td key={idCell} className="py-4 pl-[10px] pr-0">
                      <button key={idCell}>
                          <Image
                            key={idCell}
                            src={row[col]}
                            width={20}
                            height={25}
                            alt={row[col]}
                          />
                      </button>
                    </td>
                  );
                } else if (col === "actions") {
                  const icons = [...row[col]];

                  return  (
                    <td key={idCell} className="py-4 pl-[10px] pr-0 flex gap-x-6">
                      {  icons.map((icon, idAction) => (
                            <button key={idAction}>
                              <Image src={icon} width={25} height={25} alt="" />
                            </button>
                    ))}
                    </td>
                  )
                } else {
                  return (
                    <td key={idCell} className="py-4 pl-[10px] pr-0">
                      {row[col]}
                    </td>
                  );
                }
              })}
              {console.log(row)}
            </tr>
            // <TableRow key={index} data={data} />
          ))}
        </tbody>
        <tfoot>
            <tr className="shadow-sm">
               
                <td className="py-4 pl-[10px] pr-0">Minute(s)</td>
               
            </tr>

        </tfoot>
      </table>
    </>
  );
};

export default Table;
