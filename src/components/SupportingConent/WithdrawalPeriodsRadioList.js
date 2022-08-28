import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function WithdrawalPeriodsRadioList() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="1 wk"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="1 mo"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="3 mo"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="6 mo"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="1 yr"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
  );
}