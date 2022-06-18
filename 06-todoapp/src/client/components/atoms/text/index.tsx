import {FC, HTMLAttributes} from "react";
import {classNameFactory} from "../../../utils/classNameFactory";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css";

export type TextProps = HTMLAttributes<any>
const Text: FC<TextProps> = (props: TextProps) => {
    const {children, className} = props;
    return (
        <div className={classNameFactory(s.text, className)}>
            {children}
        </div>
    );
}

export default injectTSFriendlyStyles<FC<TextProps>>(s, Text);
