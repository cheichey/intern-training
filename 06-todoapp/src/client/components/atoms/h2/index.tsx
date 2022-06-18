import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import {FC, HTMLAttributes} from "react";
import {classNameFactory} from "../../../utils/classNameFactory";

export type H2Props = HTMLAttributes<any>
const H2: FC<H2Props> = (props: H2Props) => {
    const {children, className} = props;
    return (
        <h2
            className={classNameFactory(s.h2, className)}
            {...props}
        >
            {children}
        </h2>
    )
}

export default injectTSFriendlyStyles<FC<H2Props>>(s, H2)