"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FamilyType, FamilyTypeKey } from "@/types";
import { FAMILY_TYPES } from "@/data/familyTypes";
import React from "react";
import SmartImage from "@/components/ui/SmartImage";

interface SectionResult {
  id: number;
  icon: string;
  title: string;
  best: FamilyTypeKey;
  bestType: FamilyType;
  score: Record<string, number>;
}

interface Props {
  topType: FamilyType;
  sortedScores: [string, number][];
  sectionResults: SectionResult[];
  totalQuestions: number;
  onRetry: () => void;
}

export default function ResultScreen({
  topType,
  sortedScores,
  sectionResults,
  totalQuestions,
  onRetry,
}: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 3,
        background: `linear-gradient(160deg, ${topType.bg} 0%, #fdf6ee 60%)`,
      }}
    >
      <Box sx={{ maxWidth: 640, mx: "auto", py: 4 }}>
        {/* Main result card */}
        <Paper
          elevation={0}
          sx={{
            border: `2px solid ${topType.color}44`,
            borderRadius: 4,
            overflow: "hidden",
            mb: 3,
          }}
        >
          {/* ── GIF on top */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              bgcolor: topType.bg,
            }}
          >
            <SmartImage
              src={topType.gif}
              alt={`${topType.label} gia đình`}
              width={640}
              height={360}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 640px) 100vw, 640px"
              priority
            />
          </Box>
          <Box sx={{ bgcolor: topType.color, p: 4, textAlign: "center" }}>
            <Typography sx={{ fontSize: 64, lineHeight: 1, mb: 1 }}>
              {topType.emoji}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: 0.85,
                mb: 0.5,
              }}
            >
              Loại hình gia đình của bạn
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: "white", fontSize: { xs: "1.6rem", sm: "2rem" } }}
            >
              {topType.label}
            </Typography>
          </Box>

          <Box sx={{ p: 3.5 }}>
            {/* Percentage breakdown */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 3 }}
            >
              {sortedScores.map(([key, count]) => {
                const t = FAMILY_TYPES[key as FamilyTypeKey];
                const pct = Math.round((count / totalQuestions) * 100);
                return (
                  <Box key={key} sx={{ textAlign: "center", minWidth: 56 }}>
                    <Typography sx={{ fontSize: 22, lineHeight: 1 }}>
                      {t.emoji}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: t.color,
                        lineHeight: 1.1,
                      }}
                    >
                      {pct}%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        color: "text.secondary",
                        fontWeight: 600,
                      }}
                    >
                      {t.label}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>

            <Divider sx={{ mb: 2.5, borderColor: `${topType.color}22` }} />

            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.85,
                fontSize: "0.95rem",
                mb: 2.5,
              }}
            >
              {topType.description}
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {topType.traits.map((trait) => (
                <Chip
                  key={trait}
                  label={trait}
                  sx={{
                    bgcolor: topType.bg,
                    color: topType.color,
                    fontWeight: 700,
                    border: `1.5px solid ${topType.color}44`,
                    fontSize: "0.8rem",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Paper>

        {/* Section breakdown */}
        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 1.5,
          }}
        >
          Phân tích theo chủ đề
        </Typography>
        <Stack spacing={1.5} sx={{ mb: 3 }}>
          {sectionResults.map((s) => (
            <Paper
              key={s.id}
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: `1.5px solid ${s.bestType.color}33`,
                bgcolor: s.bestType.bg,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  flexShrink: 0,
                  bgcolor: s.bestType.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                {s.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    color: "text.secondary",
                    fontWeight: 600,
                    mb: 0.2,
                  }}
                >
                  {s.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: s.bestType.color,
                  }}
                >
                  {s.bestType.emoji} {s.bestType.label}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: s.bestType.color,
                    lineHeight: 1,
                  }}
                >
                  {s.score[s.best]}/5
                </Typography>
                <Typography
                  sx={{ fontSize: "0.68rem", color: "text.secondary" }}
                >
                  câu
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>

        {/* Other types */}
        <Typography
          sx={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "text.secondary",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: 1.5,
          }}
        >
          Các loại hình khác
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1.5,
            mb: 4,
          }}
        >
          {Object.values(FAMILY_TYPES)
            .filter((t) => t.key !== topType.key)
            .map((t) => (
              <Paper
                key={t.key}
                elevation={0}
                sx={{
                  p: 2,
                  textAlign: "center",
                  borderRadius: 3,
                  bgcolor: t.bg,
                  border: `1.5px solid ${t.color}33`,
                }}
              >
                <Typography sx={{ fontSize: 28, lineHeight: 1, mb: 0.5 }}>
                  {t.emoji}
                </Typography>
                <Typography
                  sx={{ fontSize: "0.8rem", fontWeight: 700, color: t.color }}
                >
                  {t.label}
                </Typography>
              </Paper>
            ))}
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            onClick={onRetry}
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 700,
              borderWidth: 2,
              borderColor: topType.color,
              color: topType.color,
              "&:hover": {
                bgcolor: topType.bg,
                borderColor: topType.color,
                borderWidth: 2,
              },
            }}
          >
            🔄 Làm lại trắc nghiệm
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
