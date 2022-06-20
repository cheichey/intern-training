import React, {ButtonHTMLAttributes, FC, MouseEventHandler} from "react";
import s from "./style.css";
import {classNameFactory} from "../../../utils/classNameFactory";
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
            className={classNameFactory(s.button, s[size])}
            type="button"
            onClick={onClick}
            {...props}
        >{children}</button>
    )
}

export default injectTSFriendlyStyles<FC<ButtonProps>>(s, Button);