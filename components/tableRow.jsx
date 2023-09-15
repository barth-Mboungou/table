import Image from "next/image";
import { Children } from "react";

const TableRow = (props) => {
  return (
    <>
      {props.data.map((row) => (
       
        <> {console.log(row)}
          <tr key={row.id} className={props.className}>
          <td key={row.id} className="pl-[10px] pr-0 flex py-4 ">
              <button key={row.id}>
                <Image src=' /image/drop.svg' width={25} height={25} alt="" />
              </button>
            </td>
            {Object.values(row).map((cell, cellIndex) => (
              <td
                key={cellIndex}
                draggable="true"
                className=" text-[#000000de] p-4"
              >
                {cell}
              </td>
            ))}
            <td key={row.id} className="py-4 pl-[10px] pr-0 flex gap-x-6">

              <button key={row.id}>
                <Image src='/image/trash.svg' width={25} height={25} alt="" />
              </button>
              {
                row.children && (

                    <button key={row.id}>
                        <Image src='/image/edit.svg' width={25} height={25} alt="" />
                    </button>
               )
              }
              <button key={row.id}>
                <Image src='/image/edit.svg' width={25} height={25} alt="" />
              </button>
            </td>
          </tr>
          <>{props.children}</>
        </>
      ))}
    </>
  );
};

export default TableRow;
