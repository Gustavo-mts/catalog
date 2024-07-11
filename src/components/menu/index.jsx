import { useState } from "react";
import Icone from "../icone";
import Nav from "../nav";


export default function Menu() {
    const [visible, setVisible] = useState(false);

    return (
        <nav className="absolute z-20 w-full">
            <Icone visible={ visible } setVisible={ setVisible } />
            <Nav visible={ visible } />
        </nav>
    )
}