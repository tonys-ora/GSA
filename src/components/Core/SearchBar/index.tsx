import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

// 1. Define types for the component Props
interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  width?: string | number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  width = "100%",
}) => {
  const [query, setQuery] = useState<string>("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      placeholder={placeholder}
      value={query}
      onChange={handleTextChange}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: query && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} size="small" edge="end">
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      sx={{
        maxWidth: width,
        "& .MuiOutlinedInput-root": {
          borderRadius: '8px', 
        },
      }}
    />
  );
};