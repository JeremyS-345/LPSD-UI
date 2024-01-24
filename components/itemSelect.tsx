import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";

export default function OptionPicker(props:{choices:string[], callback:(s:string)=>void,defaultAlignment:string|undefined}) {
    const [alignment, setAlignment] = useState(props.defaultAlignment);
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
