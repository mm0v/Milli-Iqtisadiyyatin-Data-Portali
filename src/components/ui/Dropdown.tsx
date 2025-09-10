import { Autocomplete, Checkbox, TextField } from "@mui/material";

export default function Dropdown({
  placeholder,
  options,
}: {
  placeholder: string;
  options: { title: string; value: string }[];
}) {
  return (
    <Autocomplete
      multiple
      options={options}
      disableCloseOnSelect
      popupIcon={<img src="\public\report\dropdown_icon.svg" alt="dropdown" />}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={
                <img src="\public\report\unchecked_icon.svg" alt="unchecked" />
              }
              checkedIcon={
                <img src="\public\report\checked_icon.svg" alt="unchecked" />
              }
              checked={selected}
            />
            {option.title}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          sx={{
            backgroundColor: "#050412",
            borderRadius: "12px",

            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "12px",
                borderColor: "#050412",
              },
              "&.Mui-focused": {
                boxShadow: "none",
                outline: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderRadius: "12px 12px 0 0",
                boxShadow: "none",
              },

              "& input": {
                color: "#fff",
                outline: "none",
              },
              "& input::placeholder": {
                color: "#fff",
                opacity: 1,
              },

              "& .MuiSvgIcon-root": { color: "#fff" },

              "& .MuiChip-root": {
                backgroundColor: "#1a1a1a",
                color: "#fff",
                border: "1px solid #050412",
              },
            },

            "& *:focus, & *:focus-visible": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        />
      )}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "#050412",
            color: "#fff",
            border: "1px solid #050412",
            borderTop: "none",
            mt: 0,
            borderRadius: "0 0 12px 12px",
          },
        },
      }}
    />
  );
}
