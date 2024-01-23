import MeatPicker from "@/components/itemSelect";
import { Button, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";



type ItemState = {
    id: number | undefined,
    bucketType: string | undefined,
    itemType: string | undefined,
    reasonType: string | undefined
}

let bucketType = ["loss", "process", "Donation", "Shoulder Tap"];

let itemType = ["chicken", "pork", "beef"];
let reasonType = ["blemished", "unsightly", "no label", "close expiry"];


export default function NewItem() {
    let [itemState, setItemState] = useState<ItemState>({
        id: undefined,
        bucketType: undefined,
        itemType: undefined,
        reasonType: undefined
    })

    const childToParentBucket = (bucketType: string) => {
        itemState.bucketType = bucketType;
        setItemState(itemState);
    }
    const childToParentItem = (itemType: string) => {
        itemState.itemType = itemType;
        setItemState(itemState);
    }
    const childToParentReason = (reasonType: string) => {
        itemState.reasonType = reasonType;
        setItemState(itemState);
    }
    // let bucketElements = bucketType.map(function(type) {
    //     return <Button variant="contained">{type}</Button>;
    // });
    // let userElements = itemType.map(function(type) {
    //     return <Button variant="contained">{type}</Button>;
    // });
    console.log(itemState)
    return (
        <div>
            <Stack spacing={2}>
                <MeatPicker choices={bucketType} callback={childToParentBucket}></MeatPicker>
                <MeatPicker choices={itemType} callback={childToParentItem}></MeatPicker>
                <MeatPicker choices={reasonType} callback={childToParentReason}></MeatPicker>
            </Stack>
            {itemState.bucketType != undefined && itemState.itemType != undefined &&
                <Button variant="contained" onClick={()=>{alert("fake submit!")}}>Submit</Button>
            }
        </div>
    );
}