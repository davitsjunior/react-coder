import { cloneElement } from "react"

export default props => {
    return (
        <div>
            {
                props.children.map((children, i) => {
                    return cloneElement(children, { ...props, key: i})
                })
            }
        </div>
    )
}