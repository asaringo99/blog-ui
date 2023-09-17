import { FormControl } from '@mui/base';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { RadioButtonContainer } from './Styles';

interface IProps {
  title?: string;
  isRow?: boolean;
  id?: string;
  defaultValue?: string;
  datas: { value: string, label: string }[];
  onChange?: (value: string) => void;
}

const RadioButton = ({ isRow = false, title, defaultValue, id, datas, ...props }: IProps) => {
  const { onChange } = props;
  const [ selectedValue, setSelectedValue ] = useState(defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(onChange !== undefined) {
      onChange(e.target.value);
    }
    setSelectedValue(e.target.value);
  }
  return (
    <RadioButtonContainer>
      <FormControl>
        <FormLabel id={id} sx={{ display: 'flex', justifyContent: 'center' }}>{title}</FormLabel>
        <RadioGroup
          row={isRow}
          aria-labelledby={id}
          defaultValue={defaultValue}
          name="radio-buttons-group"
          value={selectedValue}
          onChange={handleChange}
        >
          {datas.map((value, index) => 
            <FormControlLabel
              key={index}
              value={value.value}
              control={<Radio />}
              label={value.label}
            />
          )}
        </RadioGroup>
      </FormControl>
    </RadioButtonContainer>
  )
}

export default RadioButton;