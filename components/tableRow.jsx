import Image from "next/image";
import { Children } from "react";

const TableRow = (props) => {

  const row = props.data;
  const cols = props.cols;

  return (
    <>
      <tr key={props.key} className={props.className} draggable ='true'>
        <td className="py-4 px-3 flex   gap-x-6">
          <button className="">
            <Image src=" /image/drop.svg" width={25} height={25} alt="" />
          </button>
        </td>
        {cols.map((cell, cellIndex) => {
          if (cell.id in row) {
            return (
              <td
                key={cellIndex}
                className=" text-[#000000de] p-4"
              >
                {row[cell.id]}
              </td>
            );
          }
        })}
        <td className="py-4 pl-[10px] pr-3 flex justify-end  gap-x-6">
          {row.children && (
            <button>
              <Image src="/image/plus-circle-blue.49fd18f1.svg" width={25} height={25} alt="" />
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
      <>{props.children}</>
    </>
  );
};

export default TableRow;
