import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import {FC, InputHTMLAttributes} from "react";
import {toClassName} from "../../../utils/toClassName";
import s from "./style.css"


export type InputProps = InputHTMLAttributes<any>

const Input: FC<InputProps> = (props: InputProps) => {
    return (
        <input
            className={toClassName(s.input)}
            {...props}
        />
    )
}

export default injectTSFriendlyStyles<FC<InputProps>>(s, Input);