import {ButtonHTMLAttributes, FC} from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./style.css";
import {classNameFactory} from "../../../utils/classNameFactory";

export type ButtonProps = {
    size: "s" | "m" | "l" | "xl";
} & ButtonHTMLAttributes<any>
const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {children, size} = props;
    return (
        <button
            className={classNameFactory(s.button, s[size])}
            {...props}
        >{children}</button>
    )
}

export default withStyles(s)(Button as FC<ButtonProps>);