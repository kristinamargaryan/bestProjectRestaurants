import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RestInfoPart from "./RestInfoPart";

function SelectedRestaurant(props) {
    

    return (
        <div>
            <div>
                <RestInfoPart  />
            </div>
        </div>
    );
}

export default SelectedRestaurant;
