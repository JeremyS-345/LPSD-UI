import MeatPicker from "@/components/itemSelect";
import { Button, Grid, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
        setItemState(state => {
            return {
                ...state,
                bucketType: bucketType
            }
        })
    }
    const childToParentItem = (itemType: string) => {
        setItemState(state => {
            return {
                ...state,
                itemType: itemType
            }
        })
    }
    const childToParentReason = (reasonType: string) => {
        setItemState(state => {
            return {
                ...state,
                reasonType: reasonType
            }
        })
    }
    
    return (
        <div>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                        <MeatPicker choices={bucketType} callback={childToParentBucket}></MeatPicker>
                        <MeatPicker choices={itemType} callback={childToParentItem}></MeatPicker>
                        <MeatPicker choices={reasonType} callback={childToParentReason}></MeatPicker>
                    </Stack>
                    {itemState.bucketType != undefined && itemState.itemType != undefined &&
                        <Button variant="contained" onClick={() => { alert("fake submit!") }}>Submit</Button>
                    }
                </Grid>
            </Grid>
        </div >
    );
}