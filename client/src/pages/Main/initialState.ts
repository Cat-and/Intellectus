import { MAIN_VIEW_TYPES } from '../../constants';
import { Question } from '../../commonTypes';

export interface MainState {
  currentView: MAIN_VIEW_TYPES;
  token?: string;
  questions?: Question[];
  solutions?: number[];
  pointsDistribution?: number[];
  userAnswers: number[];
  resultTime?: Date;
  stepIndex: number;
}

export const initialMainState: MainState = {
  currentView: MAIN_VIEW_TYPES.intro,
  userAnswers: Array(12).fill(undefined),
  stepIndex: 0,
};
