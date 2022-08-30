import React from 'react';
import { Radio, RadioGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function WithdrawalPeriodsRadioList({ handleWithdrawalPeriodChange }) {
  return (
    <RadioGroup>
      <div className='radio-button-group'>
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleWithdrawalPeriodChange(1)}
          className="radio-button"
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleWithdrawalPeriodChange(4)}
          className="radio-button"
        />
        <FormControlLabel
          value="3 mos"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleWithdrawalPeriodChange(12)}
          className="radio-button"
        />
        <FormControlLabel
          value="6 mos"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleWithdrawalPeriodChange(24)}
          className="radio-button"
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleWithdrawalPeriodChange(48)}
          className="radio-button"
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" sx={{ width: "0px" }}/>}
          labelPlacement="top"
          onClick={() => handleWithdrawalPeriodChange(0)}
          className="radio-button"
        />
      </div>
    </RadioGroup>
  );
}