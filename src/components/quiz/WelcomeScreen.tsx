"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { FAMILY_TYPES } from "@/data/familyTypes";
import { SECTIONS } from "@/data/question";
import React from "react";

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #fdf6ee 0%, #fce8d4 100%)",
        p: 3,
      }}
    >
      <Box sx={{ maxWidth: 520, textAlign: "center" }}>
        <Typography sx={{ fontSize: 72, lineHeight: 1, mb: 2 }}>🏠</Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.6rem" },
            mb: 1.5,
            lineHeight: 1.2,
          }}
        >
          Bài Trắc Nghiệm
          <br />
          <Box component="span" sx={{ color: "primary.main" }}>
            Loại Hình Gia Đình
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.98rem",
            mb: 3.5,
            lineHeight: 1.8,
          }}
        >
          Khám phá mối quan hệ trong gia đình bạn qua{" "}
          <strong>25 câu hỏi</strong> — chia thành 5 chủ đề
        </Typography>

        {/* Family type cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1.5,
            mb: 3.5,
          }}
        >
          {Object.values(FAMILY_TYPES).map((t) => (
            <Paper
              key={t.key}
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 3,
                bgcolor: t.bg,
                textAlign: "center",
                border: `1.5px solid ${t.color}33`,
              }}
            >
              <Typography sx={{ fontSize: 30, lineHeight: 1, mb: 0.5 }}>
                {t.emoji}
              </Typography>
              <Typography
                sx={{ fontSize: "0.88rem", fontWeight: 700, color: t.color }}
              >
                {t.label}
              </Typography>
            </Paper>
          ))}
        </Box>

        {/* Section chips */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {SECTIONS.map((s) => (
            <Chip
              key={s.id}
              label={`${s.icon} ${s.title}`}
              size="small"
              sx={{
                bgcolor: "#fff",
                border: "1.5px solid #e8d8c8",
                color: "text.secondary",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={onStart}
          sx={{
            px: 6,
            py: 1.8,
            fontSize: "1.05rem",
            fontWeight: 700,
            borderRadius: 50,
            bgcolor: "primary.main",
            boxShadow: "0 8px 24px rgba(224,123,79,0.35)",
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: "primary.dark",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 32px rgba(224,123,79,0.4)",
            },
          }}
        >
          Bắt Đầu Khám Phá →
        </Button>

        <Typography
          sx={{ mt: 1.5, color: "text.secondary", fontSize: "0.78rem" }}
        >
          ⏱ Khoảng 5 phút • 25 câu hỏi
        </Typography>
      </Box>
    </Box>
  );
}
