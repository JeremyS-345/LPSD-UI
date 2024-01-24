import OptionPicker from "@/components/itemSelect";
import { Autocomplete, Button, Grid, InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ItemState } from "../pages/index";
import { useRouter } from "next/router";


let bucketType = ["loss", "process", "donation", "Shoulder Tap"];
let itemType = ["chicken", "pork", "beef"];
let reasonType = ["blemished", "unsightly", "no label", "close expiry"];



export default function SaveItem(props: { itemState: ItemState }) {
    let [itemState, setItemState] = useState<ItemState>(props.itemState)
    const router = useRouter()

    const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': null,
        'Access-Control-Allow-Origin': '*'
    }
    const postItem = async (itemState: ItemState) => {

        router.push('/')
        // const response = await axios.post("https://8e8oow3g70.execute-api.us-east-1.amazonaws.com/dev/lpds",
        //     itemState,
        //     { headers: headers });
        // if (response.status == 202) {
        //     setItemState(state => {
        //         return {
        //             id: undefined,
        //             bucketType: undefined,
        //             itemType: undefined,
        //             reasonType: undefined,
        //             weight: undefined 
        //         }
        //     })
        // }
        // return response.status;
    };

    const submitData = () => {
        postItem(itemState)
    }

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
                reason: reasonType
            }
        })
    }

    const assignSource = (source: string) => {
        setItemState(state => {
            return {
                ...state,
                source: source
            }
        })
    }

    const assignWeight = (weight: number) => {
        setItemState(state => {
            return {
                ...state,
                weight: weight
            }
        })
    }
    const farmList = [
        { label: 'Hillshire farms', year: 1994 },
        { label: 'Farmers Insurance', year: 1972 },
        { label: 'Old Country Farms', year: 1972 },
        { label: 'Farmy McFarmface', year: 1972 },
        { label: 'Farmers Insurance', year: 1972 },
    ];

    return (
        <div>
            <Grid container spacing={1} justifyContent="center" alignItems="center" marginTop={8}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Log item
                    </Typography>

                    <Stack spacing={2}>
                        <OptionPicker choices={bucketType} callback={childToParentBucket} defaultAlignment={itemState.bucketType} ></OptionPicker>
                        <OptionPicker choices={itemType} callback={childToParentItem} defaultAlignment={itemState.itemType}></OptionPicker>
                        <OptionPicker choices={reasonType} callback={childToParentReason} defaultAlignment={itemState.reason}></OptionPicker>
                        <TextField id="outlined-basic" label="weight" variant="outlined" required={true}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                            }}
                            value={itemState.weight}
                            type="number"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                assignWeight(event.target.valueAsNumber);
                            }} />
                        <Autocomplete
                            freeSolo
                            disablePortal
                            id="combo-box-demo"
                            options={farmList}
                            sx={{ width: 300 }}
                            inputValue={itemState.source}
                            onInputChange={(event, newInputValue) => {
                                assignSource(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Source" />}
                        />
                    </Stack>
                    {itemState.bucketType != undefined && itemState.itemType != undefined && itemState.weight > 0 &&
                        <Button sx={{mt: 2}} variant="contained" onClick={submitData}>Submit</Button>
                    }
                </Grid>
            </Grid>
        </div >
    );
}