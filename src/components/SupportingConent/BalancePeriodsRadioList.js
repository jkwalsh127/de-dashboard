import React from 'react';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function BalancePeriodsRadioList({ handleBalancePeriodChange }) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="balance-period-radio-list"
        name="position"
      >
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleBalancePeriodChange("1wk")}
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleBalancePeriodChange("1mo")}
        />
        <FormControlLabel
          value="3 mos"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleBalancePeriodChange("3mo")}
        />
        <FormControlLabel
          value="6 mos"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleBalancePeriodChange("6mo")}
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleBalancePeriodChange("1yr")}
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleBalancePeriodChange("All")}
        />
      </RadioGroup>
    </FormControl>
  );
}