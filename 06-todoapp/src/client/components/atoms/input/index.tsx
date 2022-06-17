import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import {FC, InputHTMLAttributes} from "react";
import {classNameFactory} from "../../../utils/classNameFactory";
import s from "./style.css"


export type InputProps = InputHTMLAttributes<any>

const Input: FC<InputProps> = (props: InputProps) => {
    return (
        <input
            className={classNameFactory(s.input)}
            {...props}
        />
    )
}

export default injectTSFriendlyStyles<FC<InputProps>>(s, Input);