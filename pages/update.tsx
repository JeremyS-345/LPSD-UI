import OptionPicker from "@/components/itemSelect";
import { Button, Grid, Stack, ToggleButton, ToggleButtonGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { ItemState } from "./index";
import SaveForm from "@/components/SaveItem"



export default function UpdateItem() {
    const [name, setName] = useState('');
    let [itemState, setItemState] = useState<ItemState>({
        id: undefined,
        bucketType: undefined,
        itemType: undefined,
        reason: undefined,
        weight: 0
    })
    const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': null,
        'access-control-allow-origin': '*'
    }
    const getItem = async () => {
        try {
            let item: ItemState = {
                id: "qwerty1234",
                bucketType: "donation",
                itemType: "chicken",
                reason: "blemished",
                weight: 5.5
            }
            setItemState(state => {
                return {
                    ...item
                }
            })
            // const response = await axios.get("https://8e8oow3g70.execute-api.us-east-1.amazonaws.com/dev/lpds&"+name,
            //     {headers: headers});
            // if (response.status == 202) {
            //     setItemState(state => {
            // return {
            //     ...response.data
            // }

            // })
            // }
            // return response.status;
        } catch {

        }
    };

    return (
        <div>
            {itemState.bucketType == undefined ? (
                <Grid container spacing={1} justifyContent="center" alignItems="center" marginTop={8}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Typography variant="button" display="block" gutterBottom>
                                Update existing item by code
                            </Typography>
                            <TextField id="outlined-basic" label="Item ID" variant="outlined" required={true} helperText="the ID of the item to update"
                                value={name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setName(event.target.value);
                                }} />
                            <Button variant="contained" onClick={getItem}>Submit</Button>
                        </Stack>
                    </Grid>
                </Grid>
            ) : (
                <SaveForm itemState={itemState} />
            )}
        </div >
    );
}