import OptionPicker from "@/components/itemSelect";
import { Button, Grid, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {ItemState} from "./index";
import SaveForm from "@/components/SaveItem" 



export default function NewItem() {
    return <SaveForm itemState={{} as ItemState}/>
}