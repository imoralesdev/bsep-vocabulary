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
  }
];

const division2MediaBase = 'https://raw.githubusercontent.com/imoralesdev/bsep-vocabulary/main/src/media';
const division2MediaSlugs = [
  '1-the-dollar-flu',
  '2-order-breaks-apart',
  '3-the-sleeper-agents-awaken',
  '4-the-distress-call'
];

export default divisionChapters.map((chapter, index) => ({
  ...chapter,
  audio: `${division2MediaBase}/audio/division-2/${division2MediaSlugs[index]}.mp3`,
  image: `${division2MediaBase}/images/division-2/${division2MediaSlugs[index]}.jpeg`
}));
