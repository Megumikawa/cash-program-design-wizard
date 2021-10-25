import { Tag } from '../models/tag.enum';
import { Program } from '../types/program.type';
import { QuestionType } from '../types/question-input.type';

const getRandomComment = () => (Math.random() >= 0.5 ? `Lorem ipsum...` : null);

export const mockProgram: Program = {
  id: '123',
  label: '',
  sections: [
    {
      id: '3',
      name: 'people-to-help',
      order: 0,
      label: {
        en: 'The people we will help are mostly:',
      },
      questions: [
        {
          id: '300',
          name: 'pa-gender-1',
          type: QuestionType.selectN,
          label: 'PA Gender',
          tags: [Tag.people],
          options: [
            { id: '30000', label: 'N/a', value: 'n-a' },
            { id: '30001', label: 'any', value: 'any' },
            { id: '30002', label: 'Currently Unknown', value: 'unknown' },
            { id: '30003', label: 'Female', value: 'F' },
            { id: '30004', label: 'Male', value: 'M' },
            { id: '30005', label: 'Non Binary', value: 'NB' },
          ],
        },
        {
          id: '301',
          name: 'pa-age-1',
          type: QuestionType.selectN,
          label: 'PA Age',
          tags: [Tag.people],
          options: [
            { id: '30100', label: 'N/a', value: 'n-a' },
            { id: '30101', label: 'any', value: 'any' },
            { id: '30102', label: 'Currently Unknown', value: 'unknown' },
            { id: '30103', label: 'less than 5', value: 'under-5' },
            { id: '30104', label: '5y to 9y', value: '5-to-9' },
            { id: '30105', label: '9y to 17', value: '9-to-17' },
            { id: '30106', label: '18-24', value: '18-24' },
            { id: '30107', label: '25-34', value: '25-34' },
            { id: '30108', label: '35-44', value: '35-44' },
            { id: '30109', label: '45-54', value: '45-54' },
            { id: '30110', label: '55-64', value: '55-64' },
            { id: '30111', label: '65 plus', value: '65-plus' },
          ],
        },
        {
          id: '302',
          name: 'pa-status-1',
          type: QuestionType.selectN,
          label: 'PA Marital status',
          tags: [Tag.people],
          options: [
            { id: '30200', label: 'N/a', value: 'n-a' },
            { id: '30201', label: 'any', value: 'any' },
            { id: '30202', label: 'Currently Unknown', value: 'unknown' },
            { id: '30203', label: 'Single', value: 'single' },
            {
              id: '30204',
              label: 'Married with Partner',
              value: 'married-partner',
            },
            {
              id: '30205',
              label: 'Married with Estranged Partner',
              value: 'married-estranged-partner',
            },
            { id: '30206', label: 'Parent', value: 'parent' },
            { id: '30207', label: 'Parent to be', value: 'parent-to-be' },
          ],
        },
        {
          id: '303',
          name: 'pa-gender-2',
          type: QuestionType.textLong,
          label:
            'PA Gender: Is there a local culture where gender affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },
        {
          id: '304',
          name: 'pa-age-2',
          type: QuestionType.textLong,
          label:
            'PA Age: Is there a local lifestyle of this age group affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },
        {
          id: '305',
          name: 'pa-status-2',
          type: QuestionType.textLong,
          label:
            'PA Marital status: Is there a local stigma of the/these group(s) affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },
        {
          id: '306',
          name: 'pa-shelter-1',
          type: QuestionType.selectN,
          label: 'PA Shelter status',
          tags: [Tag.people],
          options: [
            { id: '30600', label: 'N/a', value: 'n-a' },
            { id: '30601', label: 'any', value: 'any' },
            { id: '30602', label: 'Currently Unknown', value: 'unknown' },
            { id: '30603', label: 'homeless', value: 'homeless' },
            { id: '30604', label: 'with home in camp', value: 'home-in-camp' },
            {
              id: '30605',
              label: 'with temporary shelter',
              value: 'temporary-shelter',
            },
            { id: '30606', label: 'with rental home', value: 'rental-home' },
            { id: '30607', label: 'with own home', value: 'own-home' },
          ],
        },
        {
          id: '307',
          name: 'pa-lives-1',
          type: QuestionType.selectN,
          label: 'PA Lives',
          tags: [Tag.people],
          options: [
            { id: '30700', label: 'N/a', value: 'n-a' },
            { id: '30701', label: 'any', value: 'any' },
            { id: '30702', label: 'Currently Unknown', value: 'unknown' },
            { id: '30703', label: 'Alone', value: 'Alone' },
            {
              id: '30704',
              label: 'In shared household',
              value: 'shared-household',
            },
            {
              id: '30705',
              label: 'In household size 3 or less',
              value: 'household-size-3-less',
            },
            {
              id: '30706',
              label: 'In household size 5 or less',
              value: 'household-size-5-less',
            },
            {
              id: '30707',
              label: 'In household size 6 or more',
              value: 'household-size-6-more',
            },
          ],
        },
        {
          id: '308',
          name: 'pa-dependants-1',
          type: QuestionType.selectN,
          label: 'PA dependants',
          tags: [Tag.people],
          options: [
            { id: '30800', label: 'N/a', value: 'n-a' },
            { id: '30801', label: 'any', value: 'any' },
            { id: '30802', label: 'Currently Unknown', value: 'unknown' },
            { id: '30803', label: 'no dependants', value: 'no-dependants' },
            {
              id: '30804',
              label: '3 or more dependants',
              value: 'dependants-3',
            },
            {
              id: '30805',
              label: '5 or more dependants',
              value: 'dependants-5',
            },
            {
              id: '30806',
              label: '6 or more dependants',
              value: 'dependants-6',
            },
          ],
        },

        {
          id: '309',
          name: 'pa-shelter-2',
          type: QuestionType.textLong,
          label:
            'PA Shelter status: Are there local regulations for the/these group(s) affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '310',
          name: 'pa-lifestyle-1',
          type: QuestionType.textLong,
          label:
            'PA Lifestyle: Is there a trend for the/these group(s) affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '311',
          name: 'pa-dependants-2',
          type: QuestionType.textLong,
          label:
            'PA Dependants: Is there a trend with the/these group(s) affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '312',
          name: 'pa-legal-1',
          type: QuestionType.selectN,
          label: 'PA legal status',
          tags: [Tag.people],
          options: [
            { id: '31200', label: 'N/a', value: 'n-a' },
            { id: '31201', label: 'any', value: 'any' },
            { id: '31202', label: 'Currently Unknown', value: 'unknown' },
            { id: '31203', label: 'Documented', value: 'documented' },
            { id: '31204', label: 'Undocumented', value: 'undocumented' },
          ],
        },
        {
          id: '313',
          name: 'pa-job-1',
          type: QuestionType.selectN,
          label: 'Job type',
          tags: [Tag.people],
          options: [
            { id: '31300', label: 'N/a', value: 'n-a' },
            { id: '31301', label: 'any', value: 'any' },
            { id: '31302', label: 'Currently Unknown', value: 'unknown' },
            { id: '31303', label: 'Farmers', value: 'farmers' },
            { id: '31304', label: 'Merchants', value: 'merchants' },
            { id: '31305', label: 'Fishing', value: 'fishing' },
            { id: '31306', label: 'Casual workers', value: 'casual-workers' },
            { id: '31307', label: 'Unemployed', value: 'unemployed' },
            { id: '31308', label: 'Ilegal workers', value: 'ilegal-workers' },
          ],
        },
        {
          id: '314',
          name: 'pa-needs-1',
          type: QuestionType.selectN,
          label: 'lack of',
          tags: [Tag.people],
          options: [
            { id: '31400', label: 'N/a', value: 'n-a' },
            { id: '31401', label: 'any', value: 'any' },
            { id: '31402', label: 'Currently Unknown', value: 'unknown' },
            { id: '31403', label: 'Health', value: 'health' },
            { id: '31404', label: 'Food security', value: 'food-security' },
            { id: '31405', label: 'Nutrtion', value: 'nutrtion' },
            { id: '31406', label: 'Protection', value: 'protection' },
            { id: '31407', label: 'Shelter', value: 'shelter' },
            { id: '31408', label: 'Water Sanitation & Hygeine', value: 'wash' },
            { id: '31409', label: 'Education', value: 'education' },
            {
              id: '31410',
              label: 'Financial Stability',
              value: 'financial-stability',
            },
          ],
        },
        {
          id: '315',
          name: 'pa-legal-2',
          type: QuestionType.textLong,
          label:
            'PA Legal Status: Is there a local law for the/these group(s) affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '316',
          name: 'pa-econ-1',
          type: QuestionType.textLong,
          label:
            'Is there an economic trend for the/these group(s) affects the efficacy of the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '317',
          name: 'pa-programs-1',
          type: QuestionType.textLong,
          label:
            'Are their other programs for the/these PAs that affect the efficacyof the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '318',
          name: 'pa-disaster-1',
          type: QuestionType.selectN,
          label: 'Disaster Type',
          tags: [Tag.people],
          options: [
            { id: '31800', label: 'N/a', value: 'n-a' },
            { id: '31801', label: 'any', value: 'any' },
            { id: '31802', label: 'Currently Unknown', value: 'unknown' },
            { id: '31803', label: 'Floods', value: 'floods' },
            {
              id: '31804',
              label: 'Typhoons/Hurricane/Cyclones',
              value: 'hurricane',
            },
            { id: '31805', label: 'EarthQuake', value: 'earthQuake' },
            { id: '31806', label: 'Tsunami', value: 'tsunami' },
            { id: '31807', label: 'Drought', value: 'drought' },
            { id: '31808', label: 'War', value: 'war' },
            { id: '31809', label: 'Civil Unrest', value: 'civil-unrest' },
            { id: '31810', label: 'Poor Economy', value: 'poor-economy' },
            { id: '31811', label: 'Epedemic', value: 'epedemic' },
            { id: '31812', label: 'Pandemic', value: 'pandemic' },
          ],
        },

        {
          id: '319',
          name: 'pa-disaster-2',
          type: QuestionType.selectN,
          label: 'Current Disaster Phase',
          tags: [Tag.people],
          options: [
            { id: '31900', label: 'Prevention', value: 'prevention' },
            { id: '31901', label: 'Mitigation', value: 'mitigation' },
            { id: '31902', label: 'Preparedness', value: 'preparedness' },
            { id: '31903', label: 'Disaster', value: 'disaster' },
            { id: '31904', label: 'Response', value: 'response' },
            { id: '31905', label: 'Recovery', value: 'recovery' },
            { id: '31906', label: 'Reconstruction', value: 'reconstruction' },
            { id: '31907', label: 'Combination', value: 'combination' },
          ],
        },
        {
          id: '320',
          name: 'pa-placeholder',
          type: QuestionType.textLong,
          label: '',
          tags: [],
          comment: getRandomComment(),
        },
        {
          id: '321',
          name: 'pa-disaster-3',
          type: QuestionType.textLong,
          label:
            'Is there potential for other combined Disasters to occur during the intended CVA program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },

        {
          id: '322',
          name: 'pa-disaster-4',
          type: QuestionType.textLong,
          label:
            'Is this disaster potentially reoccuring or in a phase efficacyof the intended CVA Program?',
          tags: [Tag.people],
          comment: getRandomComment(),
        },
      ],
      state: 'pending',
    },
    {
      id: '1',
      name: 'test1',
      order: 0,
      label: {
        en: 'Test Section 1',
        nl: 'Test Sectie 1',
      },
      questions: [
        {
          id: '100',
          name: 'test-1-text',
          type: QuestionType.text,
          label: {
            en: 'Question for Text-input',
            nl: 'Vraag met Tekst-invoer',
          },
          tags: [Tag.data],
          comment: getRandomComment(),
        },
        {
          id: '101',
          name: 'test-1-text-long',
          type: QuestionType.textLong,
          label: 'Question for Longer Text-input',
          tags: [Tag.data],
          comment: getRandomComment(),
        },
        {
          id: '102',
          name: 'test-1-numeric',
          type: QuestionType.numeric,
          label: 'Question for Numeric-input',
          tags: [Tag.people],
          comment: getRandomComment(),
        },
        {
          id: '103',
          name: 'test-1-select-1',
          type: QuestionType.select1,
          label: 'Question for Select-1 from the options',
          tags: [Tag.data],
          options: [
            { id: '1001', label: 'option A', value: 'option-a' },
            { id: '1002', label: 'option B', value: 'option-b' },
            { id: '1003', label: 'option C', value: 'option-c' },
          ],
        },
        {
          id: '104',
          name: 'test-1-select-n',
          type: QuestionType.selectN,
          label: 'Question for Select-Multiple from the options',
          tags: [Tag.data],
          options: [
            { id: '1024', label: 'option X', value: 'option-x' },
            { id: '1025', label: 'option Y', value: 'option-y' },
            { id: '1026', label: 'option Z', value: 'option-z' },
          ],
        },
      ],
      state: 'pending',
    },
    {
      id: '2',
      name: 'test2-answers-values',
      order: 0,
      label: 'Test Section 2 - Answers-Values',
      questions: [
        {
          id: '120',
          name: 'test-2-text',
          type: QuestionType.text,
          label: 'Question for Text-input with Answer',
          tags: [],
          comment: getRandomComment(),
          answer: 'test answer',
          answerUpdated: '2021-10-21T01:00:00Z',
        },
        {
          id: '121',
          name: 'test-2-text-long',
          type: QuestionType.textLong,
          label: 'Question for long Text-input with Answer',
          tags: [],
          comment: getRandomComment(),
          answer: 'Long test answer\n\nwith multiple\nlines\nof\ntext...',
          answerUpdated: '2021-10-21T01:01:00Z',
        },
      ],
      state: 'pending',
    },
    {
      id: '3',
      name: 'test3-answers-narrative',
      order: 0,
      label: 'Test Section 3 - Answers-Narrative',
      questions: [
        {
          id: '130',
          name: 'test-3-select-1',
          type: QuestionType.select1,
          label: 'Question for Select-1 from the options',
          tags: [Tag.data],
          options: [
            { id: '1001', label: 'option A', value: 'option-a' },
            { id: '1002', label: 'option B', value: 'option-b' },
            { id: '1003', label: 'option C', value: 'option-c' },
          ],
          answer: 'option-b',
        },
        {
          id: '131',
          name: 'test-3-select-2',
          type: QuestionType.select1,
          label: 'Question for Select-1 from the options',
          tags: [Tag.cash],
          options: [
            { id: '1001', label: 'option A', value: 'option-a' },
            { id: '1002', label: 'option B', value: 'option-b' },
            { id: '1003', label: 'option C', value: 'option-c' },
          ],
          answer: 'option-a',
        },
        {
          id: '132',
          name: 'test-3-select-3',
          type: QuestionType.selectN,
          label: 'Question for Select-Multiple from the options',
          tags: [Tag.data],
          options: [
            { id: '1024', label: 'option X', value: 'option-x' },
            { id: '1025', label: 'option Y', value: 'option-y' },
            { id: '1026', label: 'option Z', value: 'option-z' },
          ],
          answer: 'option-z',
        },
      ],
      reportTemplate:
        'The answers where: {{test-3-select-1}} \n\nAnd also {{test-3-select-3}} or {{test-3-select-2}}.',
      state: 'pending',
    },
  ],
};
