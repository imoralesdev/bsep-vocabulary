export const hardWordNames = [
  'qualm','frolic','livid','hesitant','elicit','homage','embezzle','imminent',
  'commute','tawdry','decorum','conspiracy','emphasize','dearth','tawny','impart',
  'ragged','quarterly','backlash','varied','comical','throng','hoarse','knack',
  'thrifty','mangle','aural','weep','predisposed','willowy','sanction','proverbial',
  'sequester','skirmish','warranted','hostile','defaced','affront','allure','bellow',
  'conveyed','engrossed','feasible','tenacity','canny','overture','disclose','pique',
  'mope','converge','antiquated','deportment','deranged','turmoil','countermand',
  'accrued','quartz','tart','treason','expendable','stench','commend','agile'
];

export const selectHardWords = vocabulary => hardWordNames.map(name => {
  const entry = vocabulary.find(item => item.word.toLowerCase().split('/').some(term => term.trim() === name));
  if (!entry) throw new Error(`Missing difficult word: ${name}`);
  return {...entry, quizWord:name};
});

export default hardWordNames;
