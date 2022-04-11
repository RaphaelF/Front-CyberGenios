import { Icon } from "@iconify/react";
import Button from "../../../UI/Button";
import { TableRow, TableCell } from "../Table";

function TableItem({ children, edit, del }) {
  function handleEdit() {
    edit();
  }
  function handleDelete() {
    del();
  }
  return (
    <TableRow>
      {children.map((child, index) => {
        return <TableCell key={index}>{child}</TableCell>;
      })}
      <TableCell>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button type={"tertiary"} click={handleDelete}>
            <Icon icon="mi:delete" width="24" />
          </Button>
          <Button type={"tertiary"} click={handleEdit}>
            <Icon icon="clarity:edit-line" width="24" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default TableItem;
