import Image from "next/image";
import { Children, useState } from "react";

const TableRow = (props) => {
  const [rows,setRows] = useState(props.data);
  const cols = props.cols;
  let allRows =props.all
  const [isDragging, setIsDragging] = useState(false);
  let startIndex,endIndex;



  const handleDragStart = (e) => {
    startIndex = props.etape
    console.log(startIndex)
    e.dataTransfer.setData("text/plain", JSON.stringify(rows));
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    endIndex =props.etape
    

    console.log(endIndex)
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const draggedRow = JSON.parse(e.dataTransfer.getData("text/plain"));
    // Vous pouvez mettre en œuvre la logique de réorganisation ici en utilisant les données des lignes
    console.log("Row dropped:", draggedRow);
    if (startIndex != endIndex) {
      e.dataTransfer.getData =allRows
      console.log(allRows)
      // [allRows [startIndex], allRows[endIndex]] = [allRows [endIndex], allRows[startIndex]];
    } else {
      [allRows[startIndex + 1], allRows[endIndex]] = [ allRows [endIndex], allRows[startIndex + 1]];
    }
  };

  return (
    <>
      <tr
        id={props.key}
        className={`${props.className} ${isDragging ? "bg-gray-200" : ""}`}
        draggable={true}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <td className="py-4 px-3 flex   gap-x-6">
          <button className="">
            <Image src=" /image/drop.svg" width={25} height={25} alt="" />
          </button>
        </td>
        {cols.map((cell, cellIndex) => {
          if (cell.id in rows) {
            return (
              <td key={cellIndex} className=" text-[#000000de] p-4">
                {rows[cell.id]}
              </td>
            );
          }
        })}
        <td className="py-4 pl-[10px] pr-3 flex justify-end  gap-x-6">
          {rows.children && (
            <button>
              <Image
                src="/image/plus-circle-blue.49fd18f1.svg"
                width={25}
                height={25}
                alt=""
              />
            </button>
          )}
          <button>
            <Image src="/image/edit.svg" width={25} height={25} alt="" />
          </button>
          <button>
            <Image src="/image/trash.svg" width={25} height={25} alt="" />
          </button>
        </td>
      </tr>
      {props.children}
    </>
  );
};

export default TableRow;