import React from 'react';
import { Radio } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function MainContentRadioList({ handleMainContentChange }) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="balance-period-radio-list"
        name="balance-period"
      >
        <FormControlLabel
          value="trades"
          labelPlacement="top"
          label="Trades"
          control={<Radio size="small" />}
          onClick={() => handleMainContentChange("trades")}
        />
        <FormControlLabel
          value="chart"
          labelPlacement="top"
          label="Charts"
          control={<Radio size="small" />}
          onClick={() => handleMainContentChange("charts")}
        />
      </RadioGroup>
    </FormControl>
  );
}