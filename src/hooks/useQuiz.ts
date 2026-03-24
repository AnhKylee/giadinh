import { useState, useCallback } from "react";
import { Answers, FamilyTypeKey, Screen } from "@/types";
import { ALL_QUESTIONS, TOTAL_QUESTIONS, SECTIONS } from "@/data/question";
import { FAMILY_TYPES } from "@/data/familyTypes";

export function useQuiz() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const start = useCallback(() => {
    setScreen("quiz");
    setQIndex(0);
    setAnswers({});
  }, []);

  const retry = useCallback(() => {
    setScreen("welcome");
    setQIndex(0);
    setAnswers({});
  }, []);

  const answer = useCallback(
    (index: number, value: FamilyTypeKey) => {
      const next = { ...answers, [index]: value };
      setAnswers(next);
      if (index < TOTAL_QUESTIONS - 1) {
        setQIndex(index + 1);
      } else {
        setScreen("result");
      }
    },
    [answers],
  );

  // Score calculation
  const scoreCounts = Object.values(answers).reduce<Record<string, number>>(
    (acc, v) => {
      acc[v] = (acc[v] || 0) + 1;
      return acc;
    },
    { A: 0, B: 0, C: 0, D: 0 },
  );

  const sortedScores = Object.entries(scoreCounts).sort((a, b) => b[1] - a[1]);
  const topKey = sortedScores[0]?.[0] as FamilyTypeKey;
  const topType = FAMILY_TYPES[topKey];

  // Per-section results
  const sectionResults = SECTIONS.map((s) => {
    const sc: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    const offset = SECTIONS.slice(0, s.id - 1).reduce(
      (a, x) => a + x.questions.length,
      0,
    );
    s.questions.forEach((_, i) => {
      const v = answers[offset + i];
      if (v) sc[v]++;
    });
    const best = Object.entries(sc).sort(
      (a, b) => b[1] - a[1],
    )[0][0] as FamilyTypeKey;
    return { ...s, best, bestType: FAMILY_TYPES[best], score: sc };
  });

  const progress = Math.round(((qIndex + 1) / TOTAL_QUESTIONS) * 100);
  const currentQuestion = ALL_QUESTIONS[qIndex];
  const currentSection = SECTIONS.find(
    (s) => s.id === currentQuestion?.sectionId,
  )!;

  return {
    screen,
    qIndex,
    answers,
    start,
    retry,
    answer,
    progress,
    currentQuestion,
    currentSection,
    scoreCounts,
    sortedScores,
    topKey,
    topType,
    sectionResults,
    totalQuestions: TOTAL_QUESTIONS,
  };
}
