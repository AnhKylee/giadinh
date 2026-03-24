export type FamilyTypeKey = "A" | "B" | "C" | "D";

export interface Option {
  value: FamilyTypeKey;
  label: string;
  emoji: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  image?: string;
  sectionId: number;
  sectionIcon: string;
  sectionTitle: string;
}

export interface Section {
  id: number;
  icon: string;
  title: string;
  questions: Omit<Question, "sectionId" | "sectionIcon" | "sectionTitle">[];
}

export interface FamilyType {
  key: FamilyTypeKey;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  gif?: string;
  description: string;
  traits: string[];
}

export type Answers = Record<number, FamilyTypeKey>;

export type Screen = "welcome" | "quiz" | "result";
