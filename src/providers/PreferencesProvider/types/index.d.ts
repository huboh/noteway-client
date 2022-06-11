import { User } from "../../../types";

type UserPreferences = User['preferences'];

export interface Preferences extends UserPreferences {
  updatePreferences?: (preferences: Partial<Preferences>) => void;
}