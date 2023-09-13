// TableRow.js
import React from "react";



const TableRow = ({ data }) => {
  
  return (
    <tr>
      <td dangerouslySetInnerHTML={{ __html: data.deplacer }}></td>
      <td>{data.etape}</td>
      <td>{data.CS}</td>
      <td>{data.description_de_letepe}</td>
      <td>{data.lien_fichier}</td>
      <td>{data.unite_de_temps}</td>
      <td>{data.total_temps}</td>
      <td>{data.temps_machine}</td>
      <td>{data.temp_mo}</td>
      <td dangerouslySetInnerHTML={{ __html: data.actions }}></td>
    </tr>
  )
}

export default TableRow;

