import { Table } from "../Table";

function TableContainer({ children }) {
  return (
    <Table>
      <tbody>{children}</tbody>
    </Table>
  );
}

export default TableContainer;
