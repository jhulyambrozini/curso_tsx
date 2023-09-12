import { ComponentProps } from "react"
import { InputGroup} from './style'

type Props = ComponentProps<'input'> & {
  label: string
}

const DateInput = ({label, id, ...props}: Props) => {
  return (
    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} {...props} />
    </InputGroup>
  )
}

export default DateInput