// import React,{useEffect,useState} from 'react'

// const Calcule = () => {
//   useEffect(() => {
//     const totalDuration = calculeTotalDuration()
//     if (hasTotalArray.includes(cols.accessorKey)) {
//                     const sumInSeconds = datas.reduce((acc, rows) => {
//                         const value = parseInt(rows[cols.accessorKey]) || 0
//                         const unit = rows['unite_temps']?.toLowerCase()
      
//                         if (unit === 'seconde') {
//                              return acc + value
//                          } else if (unit === 'heure') {
//                             return acc + value * 3600 // Convert hours to seconds
//                         } else { // Assume unit is 'Minute'
//                             return acc + value * 60 // Convert minutes to seconds
//                         }
//                     }, 0)
//                 }
//                 setTotalDuration(totalDuration)
//   } ,[datas])
//   const [ totalDuration, setTotalDuration] = useState[0]
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Calcule



// <td
//                               key={idCell}
//                               className="py-4 pl-[10px] pr-0 flex gap-x-6"
//                             >
//                               {icons.map((icon, idAction) => (
//                                 <button key={idAction}>
//                                   <Image src={icon} width={25} height={25} alt="" />
//                                 </button>
//                               ))}
//                             </td>



// {
//   rows.length > 0 
//   ? (
//     rows.map((row, index) => {
//       return (
//         <tr key={index} className="hover:bg-gray-100">
//           {
//             Object.values(row).map((cell, cellIndex) => {
//               // console.log(row);
//               return(
//                 <>
//                   {/* <td></td> */}
//                   <td
//                     key={cellIndex}
//                     draggable="true"
//                     className="bg-[#e5e7eb] text-[#000000de] p-4"
//                   >
//                     {cell}
//                   </td>
//                   {/* <td></td> */}
//                 </>
//               )
//             })
//           }
//         </tr>
//       )
//     })
//   ) 
//   : <div>{`aucune donnée n'a été trouvée`}</div>
// } 