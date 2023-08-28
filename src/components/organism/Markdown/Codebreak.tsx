import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

export const Codebreak = ({ children }: IProps) => <p style={{ marginBottom: "1em" }}>{children}</p>;