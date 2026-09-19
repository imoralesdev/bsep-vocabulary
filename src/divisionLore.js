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
  },
  {
    era: 'The Theater and the Campus',
    title: '9. Settlements Learn to Endure',
    text: `After Roosevelt Island, the agent strengthened the Theater and Campus settlements. Experienced survivors would [[impart]] practical knowledge through [[aural]] briefings and hands-on training. Their needs were [[varied]]: water, crops, medicine, ammunition, and power. Before the outbreak, supplies might have arrived [[quarterly]], but survival now demanded a [[thrifty]] use of every resource. As materials [[accrued]], larger projects became [[feasible]]. Even the Campus gardens, bordered by [[willowy]] young trees, became proof that Washington could recover.`,
    q: 'What allowed the settlements to become stronger?',
    a: ['Shared knowledge and careful use of resources', 'Dependence on the Hyenas', 'Abandoning food production'],
    c: 0
  },
  {
    era: 'Signals and Propaganda',
    title: '10. Messages Behind the War',
    text: `Recovered communications revealed a wider [[conspiracy]] surrounding the capital. Manny would [[emphasize]] that every intercepted message mattered because it [[conveyed]] plans, fears, and hidden alliances. Analysts became [[engrossed]] in recordings that sometimes sounded almost [[comical]], until a commander began to [[bellow]] orders for another attack. When the Division exposed those broadcasts, the factions answered with a violent [[backlash]].`,
    q: 'Why were intercepted communications valuable?',
    a: ['They revealed plans and possible alliances', 'They provided unlimited electricity', 'They cured Green Poison'],
    c: 0
  },
  {
    era: 'District Union Arena',
    title: '11. Breaking the Hyena Council',
    text: `The Hyenas occupied District Union Arena behind [[ragged]] barricades painted in [[tawny]] colors. Their [[hostile]] recruits were drawn by the [[allure]] of power, drugs, and stolen wealth. A dangerous spectacle could [[pique]] their interest, and some leaders possessed a natural [[knack]] for manipulating the crowd. They treated resistance as an [[affront]]. No council member would [[commute]] a punishment; mercy was seen as weakness. The agent advanced toward their stronghold to break that control.`,
    q: 'What attracted many recruits to the Hyenas?',
    a: ['The promise of power and stolen wealth', 'A disciplined medical program', 'Protection from the Division'],
    c: 0
  },
  {
    era: 'Outcast Territory',
    title: '12. The Cost of Revenge',
    text: `Outcast speakers grew [[hoarse]] while demanding vengeance. Families continued to [[weep]] for people lost in quarantine, but Emeline Shaw used that grief to [[mangle]] any hope of reconciliation. Government symbols were [[defaced]], camps carried the [[stench]] of disease, and some followers obeyed increasingly [[deranged]] commands. Washington remained in [[turmoil]]. Even clean water could taste [[tart]] near contaminated ground, reminding survivors that revenge solved none of the original suffering.`,
    q: 'How did Emeline Shaw use the Outcasts’ grief?',
    a: ['She transformed it into a campaign of revenge', 'She negotiated peace with every settlement', 'She dissolved the faction immediately'],
    c: 0
  },
  {
    era: 'The True Sons’ Command',
    title: '13. Orders, Loyalty, and Betrayal',
    text: `Ridgeway demanded military [[deportment]] and treated every unauthorized action as [[treason]]. Only his personal [[sanction]] could legitimize an operation. He could [[countermand]] an order without warning, and officers [[predisposed]] to obedience rarely challenged him. The True Sons considered severe retaliation [[warranted]] and viewed ordinary soldiers as [[expendable]]. Their rigid hierarchy made the faction organized, but it also created resentment the Division could exploit.`,
    q: 'What weakness existed inside the True Sons’ hierarchy?',
    a: ['Rigid control created resentment', 'They lacked all military training', 'They refused to use weapons'],
    c: 0
  },
  {
    era: 'The Strongholds',
    title: '14. A Larger Force Approaches',
    text: `The Division prepared to [[sequester]] captured leaders and attack the remaining strongholds. Small patrols would [[skirmish]] while larger teams would [[converge]] on fortified positions. Technicians repaired [[antiquated]] radios and replaced damaged [[quartz]] components to keep the network alive. The [[proverbial]] calm before the storm settled over Washington. Beyond the city’s familiar factions, an organized force was watching and waiting—but its invasion belongs to the next part of the story.`,
    q: 'What does the final warning suggest?',
    a: ['A new organized force is preparing to intervene', 'Every threat in Washington has ended', 'The Division is abandoning the capital'],
    c: 0
  }
];

const division2MediaBase = 'https://raw.githubusercontent.com/imoralesdev/bsep-vocabulary/main/src/media';
const division2MediaSlugs = [
  '1-the-dollar-flu',
  '2-order-breaks-apart',
  '3-the-sleeper-agents-awaken',
  '4-the-distress-call',
  '5-rebuilding-the-white-house',
  '6-chaos-in-the-streets',
  '7-ridgeways-harsh-order',
  '8-the-outcasts-grievance',
  '9-settlements-learn-to-endure',
  '10-messages-behind-the-war',
  '11-breaking-the-hyena-council',
  '12-the-cost-of-revenge',
  '13-orders-loyalty-and-betrayal,
  '14-a-larger-force-approaches'
];

export default divisionChapters.map((chapter, index) => {
  const slug = division2MediaSlugs[index];
  return slug ? {
    ...chapter,
    audio: `${division2MediaBase}/audio/division-2/${slug}.mp3`,
    image: `${division2MediaBase}/images/division-2/${slug}.jpeg`
  } : chapter;
});
