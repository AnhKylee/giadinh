"use client";

import { useQuiz } from "@/hooks/useQuiz";
import WelcomeScreen from "@/components/quiz/WelcomeScreen";
import QuestionScreen from "@/components/quiz/QuestionScreen";
import ResultScreen from "@/components/quiz/ResultScreen";
import React from "react";

export default function Home() {
  const quiz = useQuiz();

  return (
    <>
      {quiz.screen === "welcome" && <WelcomeScreen onStart={quiz.start} />}
      {quiz.screen === "quiz" &&
        quiz.currentQuestion &&
        quiz.currentSection && (
          <QuestionScreen
            key={quiz.qIndex}
            question={quiz.currentQuestion}
            section={quiz.currentSection}
            qIndex={quiz.qIndex}
            total={quiz.totalQuestions}
            progress={quiz.progress}
            savedAnswer={quiz.answers[quiz.qIndex]}
            onAnswer={quiz.answer}
          />
        )}
      {quiz.screen === "result" && (
        <ResultScreen
          topType={quiz.topType}
          sortedScores={quiz.sortedScores}
          sectionResults={quiz.sectionResults}
          totalQuestions={quiz.totalQuestions}
          onRetry={quiz.retry}
        />
      )}
    </>
  );
}
