import {ButtonHTMLAttributes, FC} from "react";
import s from "./style.css";
import {classNameFactory} from "../../../utils/classNameFactory";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";

export type ButtonProps = {
    size: "s" | "m" | "l" | "xl";
} & ButtonHTMLAttributes<any>
const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {children, size} = props;
    return (
        <button
            className={classNameFactory(s.button, s[size])}
            type="button"
            {...props}
        >{children}</button>
    )
}

export default injectTSFriendlyStyles<FC<ButtonProps>>(s, Button);