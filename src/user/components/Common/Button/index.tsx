import { StyledButtonElement } from "./styledComponents"

interface buttonProps {
    type: "button" | "submit" | "reset" | undefined,
    onClickMethod ?: () => void
    text: string
}

const ButtonElement = (props: buttonProps) => {

    const {type, onClickMethod, text} = props

    return <StyledButtonElement type={type} onClick={onClickMethod}>{text}</StyledButtonElement>
} 


export default ButtonElement