import React from 'react';
import { Radio, Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function ChartPeriodsRadioList({ handleChartPeriodChange }) {
  return (
    <FormControl >
      <RadioGroup
        row
        aria-labelledby="chart-period-radio-list"
        name="chart-period"
      >
        <FormControlLabel
          value="1 wk"
          control={<Radio size="small" />}
          labelPlacement="bottom"
          label={<Typography sx={{ fontSize: 10, color: "var(--light-white)" }}>1 wk</Typography>}
          onClick={() => handleChartPeriodChange("1wk")}
        />
        <FormControlLabel
          value="1 mo"
          control={<Radio size="small" />}
          labelPlacement="bottom"
          label={<Typography sx={{ fontSize: 10, color: "var(--light-white)" }}>1 mo</Typography>}
          onClick={() => handleChartPeriodChange("1mo")}
        />
        <FormControlLabel
          value="3 mos"
          control={<Radio size="small" />}
          labelPlacement="bottom"
          label={<Typography sx={{ fontSize: 10, color: "var(--light-white)" }}>3 mos</Typography>}
          onClick={() => handleChartPeriodChange("3mo")}
        />
        <FormControlLabel
          value="6 mos"
          control={<Radio size="small" />}
          labelPlacement="bottom"
          label={<Typography sx={{ fontSize: 10, color: "var(--light-white)" }}>6 mos</Typography>}
          onClick={() => handleChartPeriodChange("6mo")}
        />
        <FormControlLabel
          value="1 yr"
          control={<Radio size="small" />}
          labelPlacement="bottom"
          label={<Typography sx={{ fontSize: 10, color: "var(--light-white)" }}>1 yr</Typography>}
          onClick={() => handleChartPeriodChange("1yr")}
        />
        <FormControlLabel
          value="All"
          control={<Radio size="small" />}
          labelPlacement="bottom"
          label={<Typography sx={{ fontSize: 10, color: "var(--light-white)" }}>All</Typography>}
          onClick={() => handleChartPeriodChange("All")}
        />
      </RadioGroup>
    </FormControl>
  );
}