import {toClassName} from "../../../utils/toClassName";
import s from "./style.css"
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import {FC, HTMLAttributes} from "react";

export type H1Props = HTMLAttributes<any>
const H1: FC<H1Props> = (props: H1Props) => {
    const {children, className} = props;
    return (
        <h1
            className={toClassName(s.h1, className)}
            {...props}
        >{children}
        </h1>
    )
}

export default injectTSFriendlyStyles<FC<H1Props>>(s, H1);