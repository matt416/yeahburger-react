import Field from "./Field"
import Label from "./Label"
import TextInputNode from "./nodes/TextInputNode";

export default function TextField({ label, ...props }) {
  return <Field {...props}>
    <Label {...props}>{ label }</Label>
    <TextInputNode />
  </Field>
}