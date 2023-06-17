export type TRandomFact = {
  maxLength: number;
};

export type TFacts = {
  maxLength: number;
  limit: number;
};

export type TFactResult = {
  fact: string;
  length: number;
};

export type TFactData = { data: TFactResult[] };
