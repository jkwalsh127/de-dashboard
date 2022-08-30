import { Typography } from "@mui/material";

export default function RadioLabels() {


    return (
        <div className="radio-label-wrapper">
            <Typography sx={{ fontSize: 10 }}>
                1 wk
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
                1 mo
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
                3 mos
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
                6 mos
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
                1 yr
            </Typography>
            <Typography sx={{ fontSize: 10 }}>
                All
            </Typography>
        </div>
    )
}