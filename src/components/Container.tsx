import { Children, ReactNode } from "react"
import '../styles/style.css';

type Props = {
    children: ReactNode
}

export default function Container({children} : Props) {
    return(
        <>
            <div className="container">
                {children}
            </div>
        </>
    )
}