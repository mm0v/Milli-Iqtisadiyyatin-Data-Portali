import ProfileButton from "@/components/ProfileButton";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React from "react";


const LanguageSwitch = () => {

  const [language, setLanguage] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h3 className="text-white text-lg mb-1">Dili dəyişin</h3>
        <FormControl fullWidth sx={{
          background: "rgba(7, 6, 24)",
          borderRadius: "8px",
          border: "1px solid rgb(166, 166, 166)",
          color: "#C6C6C6",
          width: "min-538px",
        }}>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            label="Dili seçin"
            onChange={handleChange}
            sx={{
              color: "#C6C6C6",
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
              "& .MuiSelect-icon": { color: "#C6C6C6" },
              fontSize: "16px"
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  background: "rgba(7, 6, 24)",
                  color: "#C6C6C6",
                  borderRadius: "8px",
                },
              },
            }}
          >

            <MenuItem sx={{

            }} value="az">Azərbaycan dili</MenuItem>
            <MenuItem value="en">İngilis dili</MenuItem>
            <MenuItem value="ru">Rus dili</MenuItem>
          </Select>
        </FormControl>
        <ProfileButton value="Yadda Saxla" width="w-53" />
      </div>
    </div>
  )
}

export default LanguageSwitch