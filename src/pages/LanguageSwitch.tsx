import React, { useState } from "react";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ProfileButton from "@/components/ProfileButton";
import { useTranslation } from "react-i18next";

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language || "az");

  const handleChange = (event: SelectChangeEvent) => {
    const lang = event.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const languages = [
    { code: "az", label: "Azərbaycan dili" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h3 className="text-white text-lg mb-1">Dili dəyişin</h3>
        <FormControl
          fullWidth
          sx={{
            background: "rgba(7, 6, 24)",
            borderRadius: "8px",
            border: "1px solid rgb(166, 166, 166)",
            color: "#C6C6C6",
            minWidth: 538,
          }}
        >
          <Select
            value={language}
            onChange={handleChange}
            renderValue={() => languages.find(l => l.code === language)?.label}
           MenuProps={{ PaperProps: { sx: { background: "rgba(7, 6, 24)", color: "#C6C6C6", borderRadius: "8px", }, }, }}
           sx={{ color: "#C6C6C6", ".MuiOutlinedInput-notchedOutline": { border: "none" }, "& .MuiSelect-icon": { color: "#C6C6C6" }, fontSize: "16px" }}
          >
            {languages.map((l) => (
              <MenuItem key={l.code} value={l.code}>
                {l.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ProfileButton value="Yadda Saxla" width="w-53" />
      </div>
    </div>
  );
};

export default LanguageSwitch;
