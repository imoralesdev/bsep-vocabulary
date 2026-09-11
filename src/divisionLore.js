const divisionChapters = [
  {
    era: 'Black Friday — 2015',
    title: '1. The Dollar Flu',
    text: `On Black Friday, infected banknotes carried a weaponized smallpox strain called Green Poison through New York City. A [[perceptive]] doctor might have noticed the unusual symptoms, but crowded stores and public [[gullibility]] helped the virus spread before officials understood the danger. Authorities tried to [[enclose]] contaminated zones, while frightened travelers became trapped inside every apartment, hospital, and [[hostel]]. Within days, abandoned supplies and urban [[clutter]] filled streets that had once seemed ordinary.`,
    q: 'How did Green Poison spread so quickly?',
    a: ['Through infected banknotes and holiday crowds', 'Through contaminated rain', 'Through SHD technology'],
    c: 0
  },
  {
    era: 'The Collapse of New York',
    title: '2. Order Breaks Apart',
    text: `As services failed, each armed [[faction]] imposed its own vision of survival. The Rioters became [[rambunctious]] and violent, while the Cleaners burned anyone they believed could carry the disease. Rikers escaped confinement and sought revenge. Even a once [[scrumptious]] holiday meal became an impossible luxury as food disappeared. Public [[dissent]] grew because desperate citizens no longer trusted the authorities or one another.`,
    q: 'What emerged as civil order collapsed?',
    a: ['Hostile factions with different goals', 'A fully restored government', 'A cure distributed to everyone'],
    c: 0
  },
  {
    era: 'Directive 51',
    title: '3. The Sleeper Agents Awaken',
    text: `The Strategic Homeland Division activated sleeper agents when ordinary institutions could no longer function. Each agent followed a digital trail like a hunter pursuing a [[quarry]]. To civilians, an agent could appear and disappear like a [[wraith]]. Their watches contained a useful [[quirk]]: the orange ring illuminated only when the national emergency protocol became active. Every dangerous [[ascent]] through a ruined building tested whether an agent could restore stability without becoming another warlord.`,
    q: 'Why were Division agents activated?',
    a: ['To restore continuity during the national emergency', 'To join the hostile factions', 'To evacuate the virus from a laboratory'],
    c: 0
  },
  {
    era: 'Seven months later — Washington, D.C.',
    title: '4. The Distress Call',
    text: `Seven months after the outbreak, a Division agent received an emergency signal from Washington, D.C. The capital was close to collapse, and survivors could [[lambaste]] leaders for every failed defense. The agent answered the call and approached the White House, where the next struggle would begin. The True Sons, Hyenas, Outcasts, Black Tusk, and the deeper conspiracy behind the crisis remain for the next chapters.`,
    q: 'What brings the agent to Washington, D.C.?',
    a: ['An emergency distress signal', 'A holiday celebration', 'An order from the Cleaners'],
    c: 0
  },
  {
    era: 'Washington, D.C. — Summer',
    title: '5. Rebuilding the White House',
    text: `The White House became the Division’s Base of Operations, but a settlement cannot [[thrive]] on courage alone. The agent had to [[prioritize]] water, medicine, communications, and defenses while helping civilian communities. Manny Ortega remained a [[staunch]] coordinator of SHD operations. Each mission was an [[overture]] to cooperation between isolated settlements, and every restored service became a [[tribute]] to those who had protected the capital during its darkest months.`,
    q: 'Why did the agent help settlements around Washington?',
    a: ['To restore essential services and cooperation', 'To recruit the Hyenas', 'To abandon the White House'],
    c: 0
  },
  {
    era: 'The Hyena Council',
    title: '6. Chaos in the Streets',
    text: `The Hyenas ruled through drugs, intimidation, and [[vehemence]]. Their leaders would [[concoct]] reckless plans without concern for civilians. Patrols moved in a [[haphazard]] fashion, yet their unpredictability made them dangerous. An [[irascible]] council member could order violence over a minor insult, while another might make a [[facetious]] joke during a deadly attack. The Division began dismantling their control one district at a time.`,
    q: 'What made the Hyenas dangerous despite their poor organization?',
    a: ['Their violent unpredictability', 'Their medical expertise', 'Their alliance with the JTF'],
    c: 0
  },
  {
    era: 'The True Sons',
    title: '7. Ridgeway’s Harsh Order',
    text: `General Antwon Ridgeway formed the True Sons after he never [[relinquished]] military control during the crisis. He believed punishment should be [[commensurate]] with disobedience, but his idea of justice allowed almost no [[clemency]]. His commands were [[concise]] and absolute: obey, contribute, or suffer. The faction’s discipline gave it weapons and territory, placing the settlements under growing pressure.`,
    q: 'How did Ridgeway maintain control?',
    a: ['Through military discipline and harsh punishment', 'Through elections and clemency', 'By surrendering his weapons'],
    c: 0
  },
  {
    era: 'Roosevelt Island',
    title: '8. The Outcasts’ Grievance',
    text: `The Outcasts emerged from survivors abandoned inside the Roosevelt Island quarantine. Their history formed a tangled [[skein]] of grief, disease, and revenge. Across the ruined camp, hoses and cables lay in bundles; a single [[kink]] could interrupt fuel or medical equipment. Hope seemed to [[shrivel]] as Emeline Shaw transformed suffering into hatred. The Division moved toward the island, but the struggle for Washington—and the forces waiting beyond its factions—was far from over.`,
    q: 'What motivated the Outcasts?',
    a: ['Revenge for abandonment in quarantine', 'Loyalty to the True Sons', 'A desire to rebuild the JTF'],
    c: 0
  }
];

const division2MediaBase = 'https://raw.githubusercontent.com/imoralesdev/bsep-vocabulary/main/src/media';
const division2MediaSlugs = [
  '1-the-dollar-flu',
  '2-order-breaks-apart',
  '3-the-sleeper-agents-awaken',
  '4-the-distress-call'
];

export default divisionChapters.map((chapter, index) => {
  const slug = division2MediaSlugs[index];
  return slug ? {
    ...chapter,
    audio: `${division2MediaBase}/audio/division-2/${slug}.mp3`,
    image: `${division2MediaBase}/images/division-2/${slug}.jpeg`
  } : chapter;
});
