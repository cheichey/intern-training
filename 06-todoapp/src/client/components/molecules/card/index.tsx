import {FC, ReactNode} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import H3 from "../../atoms/h3";
import {toClassName} from "../../../utils/toClassName";

export type CardProps = {
    header: string;
    children: ReactNode;
    className?: string;
}
const Card: FC<CardProps> = (props) => {
    const {header, children, className} = props;
    return (
        <div className={toClassName(s.card, className)}>
            <div className={s["card-wrapper"]}>
                <H3 className={s["card-header"]}>{header}</H3>
                <div className={s["card-content"]}>{children}</div>
            </div>
        </div>
    )
}

export default injectTSFriendlyStyles(s, Card);