import { Link } from "@inertiajs/react";

export default function Attribute({children, name = "name", className=""}) {
    return (
        <div className={`flex items-center py-1` + className}>
            {children}
            <p className={`text-body-sm pl-1 text-start`}>{name}</p>
        </div>
    )
}