import React from 'react';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ProfitPeriodsRadioList({ handleProfitPeriodChange }) {
  return (
    <RadioGroup defaultValue="1 wk">
      <div className='radio-button-group'>
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange(1)}
          className="radio-button"
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange(4)}
          className="radio-button"
        />
        <FormControlLabel
          value="3 mos"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange(12)}
          className="radio-button"
        />
        <FormControlLabel
          value="6 mos"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange(24)}
          className="radio-button"
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange(48)}
          className="radio-button"
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleProfitPeriodChange(0)}
          className="radio-button"
        />
      </div>
    </RadioGroup>
  );
}