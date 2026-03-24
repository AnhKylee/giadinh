"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Question, Section, FamilyTypeKey } from "@/types";
import OptionCard from "./OptionCard";
import React from "react";
import SmartImage from "@/components/ui/SmartImage";

interface Props {
  question: Question;
  section: Section;
  qIndex: number;
  total: number;
  progress: number;
  savedAnswer?: FamilyTypeKey;
  onAnswer: (index: number, value: FamilyTypeKey) => void;
}

function isGif(src: string) {
  return src.toLowerCase().endsWith(".gif");
}

export default function QuestionScreen({
  question,
  section,
  qIndex,
  total,
  progress,
  savedAnswer,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<FamilyTypeKey | null>(
    savedAnswer ?? null,
  );

  function pick(value: FamilyTypeKey) {
    setSelected(value);
    setTimeout(() => onAnswer(qIndex, value), 300);
  }

  return (
    <Box>
      {/* Sticky progress header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: "background.default",
          borderBottom: "1px solid #eedfd0",
          pt: 2,
          pb: 1.5,
          px: 3,
        }}
      >
        <Box sx={{ maxWidth: 640, mx: "auto" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Chip
              label={`${section.icon} ${section.title}`}
              size="small"
              sx={{
                bgcolor: "#fff3e8",
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.72rem",
                border: "1px solid #f5cba0",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "primary.main",
              }}
            >
              {progress}% — Câu {qIndex + 1}/{total}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 5,
              borderRadius: 10,
              bgcolor: "#f0e0d0",
              "& .MuiLinearProgress-bar": {
                bgcolor: "primary.main",
                borderRadius: 10,
              },
            }}
          />
        </Box>
      </Box>

      {/* Question body */}
      <Box sx={{ maxWidth: 640, mx: "auto", px: 3, py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: "50%",
              bgcolor: "#fff3e8",
              border: "2px solid #f5cba0",
              fontSize: 26,
              mb: 2,
            }}
          >
            {section.icon}
          </Box>
          <Typography
            sx={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "text.secondary",
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 0.5,
            }}
          >
            Câu {question.id}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.3rem", sm: "1.55rem" }, lineHeight: 1.35 }}
          >
            {question.text}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 1.5,
          }}
        >
          {question.options.map((opt) => (
            <OptionCard
              key={opt.value}
              option={opt}
              selected={selected === opt.value}
              onClick={pick}
            />
          ))}
        </Box>
        {/* ── Question image ── */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            overflow: "hidden",
            border: "1.5px solid #ede0d0",
            boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
            width: "100%",
          }}
        >
          <SmartImage
            src={question.image}
            alt={`Minh họa câu ${question.id}`}
            width={640}
            height={360}
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="(max-width: 640px) 100vw, 640px"
            priority={qIndex < 3}
          />
        </Box>
      </Box>
    </Box>
  );
}
