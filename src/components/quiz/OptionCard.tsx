"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Option, FamilyTypeKey } from "@/types";
import { FAMILY_TYPES } from "@/data/familyTypes";
import React from "react";

interface Props {
  option: Option;
  selected: boolean;
  onClick: (value: FamilyTypeKey) => void;
}

export default function OptionCard({ option, selected, onClick }: Props) {
  const t = FAMILY_TYPES[option.value];

  return (
    <Card
      onClick={() => onClick(option.value)}
      elevation={0}
      sx={{
        cursor: "pointer",
        border: selected ? `2.5px solid ${t.color}` : "2px solid #ede0d0",
        bgcolor: selected ? t.bg : "background.paper",
        boxShadow: selected
          ? `0 6px 20px ${t.color}28`
          : "0 2px 6px rgba(0,0,0,0.05)",
        borderRadius: 3,
        transition:
          "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
        "&:hover": { transform: "translateY(-2px)" },
      }}
    >
      <CardContent sx={{ p: "14px 18px !important" }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              flexShrink: 0,
              bgcolor: selected ? t.color : "#f5ece0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: selected ? 16 : 20,
              color: selected ? "white" : "inherit",
              fontWeight: 800,
              transition: "all 0.2s ease",
            }}
          >
            {selected ? "✓" : option.emoji}
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: selected ? t.color : "text.secondary",
                textTransform: "uppercase",
                letterSpacing: 0.5,
                lineHeight: 1,
              }}
            >
              {option.value}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: selected ? 700 : 400,
                color: selected ? t.color : "text.primary",
                lineHeight: 1.3,
                mt: 0.3,
              }}
            >
              {option.label}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
