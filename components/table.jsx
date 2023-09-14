// Table.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Table = ({ datas = ["undefined"], columns }) => {
  const [rows, setRows] = useState(datas);
  const [colonnes, setColonnes] = useState([]);
  const [cols, setCols] = useState(
    (datas[0] === 'undefined' )?
      Object.keys(columns)
      :Object.keys(datas[0])
    );
  

  

  //   useEffect(() => {
  //     const updatedColonnes = colonnes.map((colonnes) => {
  //         let updatedColonne = {
  //             ...colonnes
  //         }

  //         const hasTotalArray = ['total_temps_activite_ias', 'temps_mo_activite_ias', 'temps_ma_activite_ias']
  //         if (hasTotalArray.includes(colonnes.accessorKey)) {
  //             const sumInSeconds = datas.reduce((acc, row) => {
  //                 const value = parseInt(row[colonnes.accessorKey]) || 0
  //                 const unit = row['unite_temps_activite_ias']?.toLowerCase()

  //                 if (unit === 'seconde') {
  //                     return acc + value
  //                 } else if (unit === 'heure') {
  //                     return acc + value * 3600 // Convert hours to seconds
  //                 } else { // Assume unit is 'Minute'
  //                     return acc + value * 60 // Convert minutes to seconds
  //                 }
  //             }, 0)

  //             const sumInMinutes = Math.floor(sumInSeconds / 60)

  //             updatedColonne = {
  //                 ...updatedColonnes,
  //                 Footer: () => (
  //                     <span>{sumInMinutes} Minute(s)</span>
  //                 ),
  //             }
  //         }

  //         return updatedColonne
  //     })
  //     setColonnes(updatedColonnes)
  // }, [datas])

  return (
    <>
      <table className="table-auto w-full text-left shadow-sm">
        <thead className="bg-blue-400 w-full text-white text-[14px] font-sans ">
          <tr className="shadow-sm">
            {cols.map((col, index) => (
              <th key={index} className="py-3 pl-[10px] pr-0 uppercase">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-[16px] font-sans">

          {rows.map((row, idRow) => {
            if (row === "undefined") {
              console.log(row);
              return (
                <tr key={idRow}>
                  <td
                    colSpan={100}
                    draggable="true"
                    className="bg-[#e5e7eb] col-span-full text-center text-[#000000de] shadow-[0px 4px 4px] p-20 shadow-[#02020256] hover:bg-gray-100 w-full"
                    // eslint-disable-next-line react/no-unescaped-entities
                  >
                    {`aucune donnée n'a été trouvée`}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr
                    draggable="true"
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
  
                          return (
                            <td
                              key={idCell}
                              className="py-4 pl-[10px] pr-0 flex gap-x-6"
                            >
                              {icons.map((icon, idAction) => (
                                <button key={idAction}>
                                  <Image src={icon} width={25} height={25} alt="" />
                                </button>
                              ))}
                            </td>
                          );
                        } else {
                          return (
                            <td key={idCell} className="py-4 pl-[10px] pr-0">
                              {row[col]}
                            </td>
                          );
                        }
                      })}
                   
                  </tr>
              )
            }
          })}

        </tbody>
        <tfoot>
          <tr className="shadow-sm">
            {
              cols.map((cell,idcell) =>{
                  if( cell === 'total temps' || cell === 'temps machine' || cell === "temp mo"){
                      return <td key = {idcell} className="py-4 pl-[10px] pr-0">Minute(s)</td>  
                  }
                  else{
                      return <td key = {idcell} className="py-4 pl-[10px] pr-0"></td>  

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
