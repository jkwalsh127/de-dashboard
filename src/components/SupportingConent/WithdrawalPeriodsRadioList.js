import React from 'react';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function WithdrawalPeriodsRadioList({ handlewithdrawalPeriodChange }) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="withdrawal-period-radio-list"
        name="withdrawal-period"
      >
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handlewithdrawalPeriodChange("1wk")}
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handlewithdrawalPeriodChange("1mo")}
        />
        <FormControlLabel
          value="3 mos"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handlewithdrawalPeriodChange("3mo")}
        />
        <FormControlLabel
          value="6 mos"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handlewithdrawalPeriodChange("6mo")}
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handlewithdrawalPeriodChange("1yr")}
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handlewithdrawalPeriodChange("All")}
        />
      </RadioGroup>
    </FormControl>
  );
}