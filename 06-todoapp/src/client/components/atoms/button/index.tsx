import React, {ButtonHTMLAttributes, FC, MouseEventHandler} from "react";
import s from "./style.css";
import {toClassName} from "../../../utils/toClassName";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";

export type ButtonProps = {
    size: "s" | "m" | "l" | "xl";
    onClick: MouseEventHandler;
} & ButtonHTMLAttributes<any>
const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {children, size, onClick} = props;
    return (
        <button
            id="noob"
            className={toClassName(s.button, s[size])}
            type="button"
            onClick={onClick}
            {...props}
        >{children}</button>
    )
}

export default injectTSFriendlyStyles<FC<ButtonProps>>(s, Button);