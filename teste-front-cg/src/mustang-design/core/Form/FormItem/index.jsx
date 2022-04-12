import { FormItem, Label } from "../Form";

function StyledInput({ id, label, placeholder, value, onChange }) {
  return (
    <div style={{ position: "relative", margin: "1.5rem" }}>
      <Label htmlFor={id}>{label}</Label>
      <FormItem
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default StyledInput;
