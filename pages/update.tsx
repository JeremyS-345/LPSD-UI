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
        weight: 0,
        source: undefined
    })
    const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': null,
        'access-control-allow-origin': '*',
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    }
    const getItem = async () => {
        try {
            // let item: ItemState = {
            //     id: "qwerty1234",
            //     bucketType: "donation",
            //     itemType: "chicken",
            //     reason: "blemished",
            //     weight: 5.5,
            //     source: "Mountaintop Farms"
            // }
            // setItemState(state => {
            //     return {
            //         ...item
            //     }
            // })
            const response = await fetch("http://localhost:8010/proxy/dev/lpds?itemID=88038fd8-fff5-4b57-8ab3-d518df0adef2",
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'access-control-allow-origin': '*',
                        // 'Access-Control-Allow-Credentials': 'true',
                        // 'Access-Control-Allow-Origin': '*',
                        // "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                        // "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                });
            const data = await response.json()
            console.log(data)
            if (response.status == 200) {
                setItemState(state => {
                    return {
                        ...data
                    }
                })
            }
            return response.status;
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