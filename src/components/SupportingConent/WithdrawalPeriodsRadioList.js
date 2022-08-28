import React from 'react';
import { Radio, Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function WithdrawalPeriodsRadioList() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="withdrawal-period-radio-list"
        name="position"
      >
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" />}
          label={<Typography sx={{ color: "var(--light-white)", fontSize: 10 }}>1 wk</Typography>}
          labelPlacement="top"
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" />}
          label={<Typography sx={{ color: "var(--light-white)", fontSize: 10 }}>1 mo</Typography>}
          labelPlacement="top"
        />
        <FormControlLabel
          value="3 mo"
          control={<Radio size="small" />}
          label={<Typography sx={{ color: "var(--light-white)", fontSize: 10 }}>3 mo</Typography>}
          labelPlacement="top"
        />
        <FormControlLabel
          value="6 mo"
          control={<Radio size="small" />}
          label={<Typography sx={{ color: "var(--light-white)", fontSize: 10 }}>6 mo</Typography>}
          labelPlacement="top"
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" />}
          label={<Typography sx={{ color: "var(--light-white)", fontSize: 10 }}>1 yr</Typography>}
          labelPlacement="top"
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" />}
          label={<Typography sx={{ color: "var(--light-white)", fontSize: 10 }}>All</Typography>}
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}