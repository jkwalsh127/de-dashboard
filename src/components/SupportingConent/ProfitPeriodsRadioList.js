import React from 'react';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ProfitPeriodsRadioList({ handleProfitPeriodChange }) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="Profit-period-radio-list"
        name="profit-period"
      >
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange("1wk")}
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange("1mo")}
        />
        <FormControlLabel
          value="3 mos"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange("3mo")}
        />
        <FormControlLabel
          value="6 mos"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange("6mo")}
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange("1yr")}
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" />}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange("All")}
        />
      </RadioGroup>
    </FormControl>
  );
}