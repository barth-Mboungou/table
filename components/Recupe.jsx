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


useEffect(() => {
  const updatedColonnes = colonnes.map((colonnes) => {
      let updatedColonne = {
          ...colonnes
      }
      
      const hasTotalArray = ['total_temps_activite_ias', 'temps_mo_activite_ias', 'temps_ma_activite_ias']
      if (hasTotalArray.includes(colonnes.accessorKey)) {
          const sumInSeconds = datas.reduce((acc, row) => {
              const value = parseInt(row[colonnes.accessorKey]) || 0
              const unit = row['unite_temps_activite_ias']?.toLowerCase()
  
              if (unit === 'seconde') {
                  return acc + value
              } else if (unit === 'heure') {
                  return acc + value * 3600 // Convert hours to seconds
              } else { // Assume unit is 'Minute'
                  return acc + value * 60 // Convert minutes to seconds
              }
          }, 0)
  
          const sumInMinutes = Math.floor(sumInSeconds / 60)
  
          updatedColonne = {
              ...updatedColonnes,
              Footer: () => (
                  <span>{sumInMinutes} Minute(s)</span>
              ),
          }
      }
  
      return updatedColonne
  })
  setColonnes(updatedColonnes)
}, [datas])
