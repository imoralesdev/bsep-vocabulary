const division1Chapters = [
  {
    era: 'Before Black Friday — 2015',
    title: '1. Amherst and Green Poison',
    text: `Dr. Gordon Amherst was an [[erudite]] virologist whose hatred of humanity became a dangerous [[conviction]]. He began to [[devise]] Green Poison, an [[eclectic]] strain built from several diseases. Its design was [[shrewd]], but its purpose was monstrous. Amherst viewed society’s weakness with [[scornful]] contempt and believed the virus would [[precede]] a better world. His [[latent]] plan created an [[enigma]] that investigators would later struggle to [[decipher]].`,
    q: 'Who engineered Green Poison?',
    a: ['Dr. Gordon Amherst', 'Aaron Keener', 'Charles Bliss'],
    c: 0
  },
  {
    era: 'Black Friday — 2015',
    title: '2. The Dollar Flu',
    text: `Amherst contaminated banknotes before the busiest shopping day of the year. The [[virulent]] disease moved through a [[throng]] of shoppers with [[ubiquitous]] speed. What first appeared to be a seasonal illness became an [[imminent]] catastrophe. Officials were [[hesitant]] to announce the truth, allowing cases to [[plummet]] into chaos while medical supplies began to [[dwindle]]. Every new fever became an [[omen]] that the city’s defenses were failing.`,
    q: 'Why did the outbreak spread rapidly?',
    a: ['Contaminated money circulated through holiday crowds', 'The JTF released it intentionally', 'It arrived in the water supply'],
    c: 0
  },
  {
    era: 'The First Week',
    title: '3. Quarantine and Collapse',
    text: `Authorities tried to [[quell]] panic and [[suppress]] the infection, but hospitals were soon [[depleted]]. Families gathered in each [[makeshift]] [[enclosure]] with a [[dearth]] of food. Survivors looked [[wan]], [[somber]], and [[demoralized]] as sanitation and power failed. People crossed frozen streets [[laden]] with possessions, while abandoned neighborhoods fell into [[destitution]]. Constant [[attrition]] created a terrible [[quandary]]: even an [[iota]] of medicine could decide who survived, and no shelter remained truly [[sterile]].`,
    q: 'What happened as essential services failed?',
    a: ['Shortages and disorder spread across the city', 'The virus disappeared', 'Manhattan reopened immediately'],
    c: 0
  },
  {
    era: 'Directive 51',
    title: '4. The First Wave',
    text: `The government activated the Strategic Homeland Division as a last recourse. Its agents were trained to remain [[agile]], [[prudent]], and [[impartial]] during national collapse. They had to [[glean]] intelligence from damaged systems and answer every [[query]] without reliable support. Their mission was an [[austere]] test of judgment: protect civilians, preserve [[decorum]], and pay [[homage]] to the constitutional order when ordinary authority could no longer function.`,
    q: 'What was the First Wave ordered to do?',
    a: ['Help restore government continuity', 'Destroy the JTF', 'Evacuate to Washington'],
    c: 0
  },
  {
    era: 'The Dark Zone',
    title: '5. Abandoned Agents',
    text: `Inside the Dark Zone, the First Wave faced a terrible [[predicament]]. The JTF ordered an [[impromptu]] evacuation and appeared to [[cede]] Manhattan’s center to disorder. Agents left behind felt [[maroon]]ed and [[livid]]; the wounded could only [[wince]] as rescue forces withdrew. Aaron Keener used their [[loathing]] and anger to [[bamboozle]] them into abandoning the mission. Some began to [[abhor]] the government they had served; others would [[vacillate]] before following him. This [[schism]] created the first Rogue agents.`,
    q: 'Why did several First Wave agents go Rogue?',
    a: ['They felt abandoned during the Dark Zone evacuation', 'They lost every SHD watch', 'They were recruited by the Cleaners before the outbreak'],
    c: 0
  },
  {
    era: 'The Second Wave',
    title: '6. A New Agent Arrives',
    text: `A second group answered the call, but its arrival suffered a sudden [[hiatus]] when enemy fire struck the transport. Faye Lau was injured, leaving the player’s agent to [[assail]] hostile positions alone. The agent showed [[brawn]] and [[tenacity]] without becoming [[impetuous]]. At the Pennsylvania Plaza post office, every successful operation helped [[invigorate]] a fragile Base of Operations and gave civilians a new [[abode]].`,
    q: 'Where was the Base of Operations established?',
    a: ['The Pennsylvania Plaza post office', 'The Russian Consulate', 'Times Square'],
    c: 0
  },
  {
    era: 'Rebuilding the Base',
    title: '7. Medical, Security, and Technology',
    text: `The agent rescued Dr. Jessica Kandel, Captain Roy Benitez, and engineer Paul Rhodes. Kandel investigated the virus’s [[efficacy]] and tried to [[elicit]] evidence from every sample. Benitez became a [[stalwart]] [[advocate]] for the JTF. Rhodes remained [[contentious]] and rarely offered [[flatter]]y, yet his technical knowledge was invaluable. The old [[adage]] that knowledge is power guided every new [[acquisition]], upgraded the base, and allowed its staff to [[commend]] the agent’s progress.`,
    q: 'Which three wings formed the Base of Operations?',
    a: ['Medical, Security, and Technology', 'Air, Sea, and Space', 'Police, Fire, and Transit'],
    c: 0
  },
  {
    era: 'The Rioters and Cleaners',
    title: '8. Two Responses to Disaster',
    text: `Rioters used theft and raw force to survive, often stopping to [[gawk]] at anything valuable and [[boast]] about their power. The Cleaners followed Joe Ferro with fanatical [[fervor]]. Their leader was no [[abstemious]] moderate: his rhetoric encouraged [[lewd]] cruelty and fire. Their promise was a [[sham]] because indiscriminate murder could not cure infection. A [[canny]] agent could [[construe]] their propaganda as fear disguised as duty and recognize the terrible [[flaw]] in Ferro’s reasoning.`,
    q: 'What method did the Cleaners believe would stop the virus?',
    a: ['Burning contaminated people and areas', 'Developing a vaccine', 'Repairing the power grid'],
    c: 0
  },
  {
    era: 'The Rikers',
    title: '9. Larae Barrett’s Revenge',
    text: `Prisoners escaped Rikers Island and followed Larae Barrett. Their revenge became a [[bane]] to civilians and law enforcement alike. Barrett would [[allude]] to justice while ordering cruelty, and her followers treated every accusation as proof. Their [[allegation]] that all authority was corrupt became an excuse for violence. At Lexington Event Center, the agent fought through [[unrelenting]] resistance and ended Barrett’s rule, preventing the Rikers from causing the JTF’s complete [[ouster]].`,
    q: 'Who led the Rikers in Manhattan?',
    a: ['Larae Barrett', 'Joe Ferro', 'Paul Rhodes'],
    c: 0
  },
  {
    era: 'The Last Man Battalion',
    title: '10. Bliss Takes Manhattan',
    text: `The Last Man Battalion was a private military force led by Colonel Charles Bliss. Its members saw themselves as the only [[stalwart]] answer to collapse, but their discipline concealed ambition. Bliss’s [[nonchalant]] confidence and [[tantalizing]] promise of order attracted desperate recruits. His officers could [[feign]] public service while imposing an [[embargo]] on supplies and applying a brutal [[penalty]] to dissenters. Their armored strength became a serious [[hindrance]] to the Second Wave.`,
    q: 'What kind of organization was the Last Man Battalion?',
    a: ['A private military force', 'A medical research team', 'A group of escaped prisoners'],
    c: 0
  },
  {
    era: 'Tracing the Virus',
    title: '11. Amherst, Tchernenko, and the Evidence',
    text: `Kandel’s [[inquisitive]] research led the agent through Amherst’s apartment, contaminated laboratories, and the Russian Consulate. She had to [[broach]] the possibility that Amherst was already dead; a [[coroner]] could confirm that even a brilliant planner was [[fallible]]. Russian scientist Vitaly Tchernenko could [[disclose]] how Green Poison was made, but Keener remained [[elusive]]. The LMB abducted Tchernenko before the Division could secure him. This was no [[coincidental]] crime: Keener intended to [[embezzle]] the scientist’s knowledge and make a new biological weapon [[materialize]].`,
    q: 'Why was Vitaly Tchernenko important?',
    a: ['He understood Amherst’s virus research', 'He commanded the JTF', 'He created SHD watches'],
    c: 0
  },
  {
    era: 'General Assembly',
    title: '12. The Battle for the U.N.',
    text: `The Division and JTF attacked the LMB headquarters at the United Nations. A [[plethora]] of defenses forced the agent to [[canvass]] every route. Bliss delivered a [[terse]] [[admonition]] and tried to [[lambaste]] the Division as traitors, but his words could not stop the assault. The agent destroyed his helicopter and ended his command. The victory brought [[rapture]] to exhausted survivors, although the city remained far from secure.`,
    q: 'Where did the Division confront Colonel Bliss?',
    a: ['The United Nations headquarters', 'Madison Square Garden', 'Rikers Island'],
    c: 0
  },
  {
    era: 'Keener Escapes',
    title: '13. The Rogue Agent’s Message',
    text: `Evidence revealed that Keener had escaped Manhattan with Tchernenko and critical virus data. He offered no [[reprimand]] to his followers and felt no [[qualm]] about those he sacrificed. His network was [[tenuous]], yet he could [[finagle]] resources from rival groups and [[procrastinate]] until the Division looked elsewhere. A [[negligent]] response would give him time to strike. Keener’s final recording sounded almost like a [[jest]], but it warned that the hunt was only beginning.`,
    q: 'What did Keener take when he escaped?',
    a: ['Tchernenko and virus research', 'The entire Base of Operations', 'Colonel Bliss’s helicopter'],
    c: 0
  },
  {
    era: 'After the Main Campaign',
    title: '14. Manhattan Remains Contested',
    text: `Victory at the U.N. did not end the crisis. Agents entered the Underground, endured [[erratic]] threats during Survival, and fought over tactical data in Last Stand. Incursions tested whether squads could [[concur]] under pressure instead of becoming divided by [[nepotism]]. In West Side Pier, enemies and strange Hunters appeared without warning. A [[sympathetic]], [[unpretentious]] agent might offer a civilian a [[favor]], while a [[portly]] opportunist might [[ogle]] [[tawdry]] loot, [[mope]] over a loss, or treat catastrophe as a [[boring]] game. Others could [[frolic]] or [[gambol]] only in safer memories, while the injured might [[writhe]] in the snow. The city’s future remained open, and the pursuit of Keener would continue.`,
    q: 'Did the General Assembly mission end every threat in Manhattan?',
    a: ['No, new operations and threats remained', 'Yes, the city immediately returned to normal', 'Yes, Keener surrendered'],
    c: 0
  }
];

export default division1Chapters;
