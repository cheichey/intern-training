import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import {FC, HTMLAttributes} from "react";
import {classNameFactory} from "../../../utils/classNameFactory";

export type H3Props = HTMLAttributes<any>
const H3: FC<H3Props> = (props: H3Props) => {
    const {children, className} = props;
    return (
        <h3
            className={classNameFactory(s.h3, className)}
            {...props}
        >
            {children}
        </h3>
    )
}

export default injectTSFriendlyStyles<FC<H3Props>>(s, H3)