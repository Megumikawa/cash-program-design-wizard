import { QuestionType } from '../types/question-input.type';
import { TranslatableString } from '../types/translatable-string.type';
import { Tag } from './tag.enum';

export interface QuestionData {
  sectionId: string;
  sectionName: string;
  sectionLabel: string | TranslatableString;

  id: string;
  type: QuestionType;
  label: string | TranslatableString;
  tags?: string | string[] | Tag[];
}
