import { TableRow, TableHeader } from "../Table";

function TableHead({ children }) {
  return (
    <TableRow>
      {children.map((child, index) => {
        return <TableHeader key={index}>{child}</TableHeader>;
      })}
    </TableRow>
  );
}

export default TableHead;
