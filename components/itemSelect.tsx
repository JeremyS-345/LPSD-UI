import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";

export default function MeatPicker(props:{choices:string[], callback:(s:string)=>void}) {
    const [alignment, setAlignment] = useState("");

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
        props.callback(newAlignment);
    };

    let choiceToggles = props.choices.map(function(choice) {
        return <ToggleButton value={choice}>{choice}</ToggleButton>;
    });
    return (
        <div>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Selection"
            >
                {choiceToggles}
            </ToggleButtonGroup>
        </div>
    );
}
