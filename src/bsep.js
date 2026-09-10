// Cada objeto acepta también: prefix, root, suffix, meaning y example.
// Puedes pegar aquí nuevos objetos usando exactamente el formato que enviaste.
const rows = [
['admonition / reprimand','amonestación, reprimenda','warning','praise,reward,flattery'],
['suppress / quell','suprimir, sofocar','stifle','encourage,promote,disclose'],
['hesitant / vacillate','vacilante, dudar','undecided','decisive,urgent,reckless'],
['feign / sham','fingir, farsa','pretend','verify,reveal,support'],
['plethora / throng','plétora, multitud','surplus','scarcity,dearth,shortage'],
['shrewd / canny','astuto, sagaz','clever','foolish,naive,inept'],
['bane / virulent','ruina, virulento/letal','deadly','beneficial,healthy,harmless'],
['gawk / ogle','mirar boquiabierto, mirar fijamente','stare','ignore,overlook,glance'],
['makeshift','improvisado, provisional','temporary','permanent,durable,luxurious'],
['demoralized','desmoralizado','discouraged','motivated,inspired,delighted'],
['dwindle','mermar, disminuir','decrease','expand,increase,accumulate'],
['predicament / quandary','aprieto, dilema','dilemma','solution,advantage,benefit'],
['ouster','destitución, expulsión','removal','promotion,appointment,welcome'],
['scornful','desdeñoso, despectivo','contemptuous','respectful,admiring,humble'],
['abhor','aborrecer, detestar','detest','cherish,adore,favor'],
['abode','domicilio, morada','dwelling','journey,vehicle,office'],
['abstemious','abstemio, moderado','temperate','greedy,gluttonous,reckless'],
['acquisition','adquisición, compra','purchase','loss,surrender,forfeiture'],
['adage','proverbio, adagio','proverb','fiction,blunder,deception'],
['advocate','defensor, abogar','supporter','critic,opponent,rival'],
['agile','ágil','spry','clumsy,sluggish,stiff'],
['assail','asaltar, atacar','attack','defend,protect,shelter'],
['attrition','desgaste, debilitamiento','weakening','growth,strengthening,expansion'],
['austere','austero, severo','harsh','luxurious,decorative,comfortable'],
['boast','alardear, presumir','brag','apologize,hide,cringe'],
['brawn','fuerza física, músculo','muscle','brain,fragility,wit'],
['cede','ceder, entregar','yield','conquer,retain,capture'],
['commend','elogiar, encomiar','praise','scold,censure,demote'],
['concur','coincidir, concordar','agree','disagree,debate,protest'],
['contentious','polémico, contencioso','quarrelsome','peaceful,calm,cooperative'],
['dearth','escasez, carencia','scarcity','abundance,plethora,excess'],
['decipher','descifrar','decode','encrypt,obscure,tangle'],
['decorum','decoro, etiqueta','etiquette','rudeness,impropriety,chaos'],
['depleted','agotado, mermado','exhausted','replenished,stocked,plentiful'],
['destitution','indigencia, miseria','poverty','wealth,opulence,prosperity'],
['devise','idear, inventar','invent','destroy,discard,ruin'],
['elicit','extraer, provocar','bring forth','suppress,stifle,hide'],
['embargo','embargo, prohibición comercial','prohibition','permission,approval,allowance'],
['embezzle','malversar, desfalcar','steal','donate,repay,compensate'],
['erratic','errático, impredecible','unpredictable','consistent,steady,regular'],
['erudite','erudito, culto','learned','ignorant,uneducated,crude'],
['fervor','fervor, celo','zeal','apathy,indifference,lethargy'],
['glean','recoger, recolectar datos','gather','disperse,scatter,discard'],
['hiatus','pausa, interrupción','break','continuation,flow,progression'],
['hindrance','obstáculo, impedimento','barrier','assistance,catalyst,benefit'],
['homage','homenaje, tributo','respect','insult,disrespect,scorn'],
['imminent','inminente','impending','remote,unlikely,distant'],
['impartial','imparcial, neutro','objective','biased,partial,unfair'],
['impetuous','impetuoso, impulsivo','impulsive','cautious,deliberate,prudent'],
['impromptu','improvisado','spontaneous','planned,rehearsed,scripted'],
['inquisitive','inquisitivo, curioso','curious','indifferent,apathetic,uninterested'],
['latent','latente, oculto','dormant','obvious,active,apparent'],
['livid','furioso, lívido','seething','delighted,calm,joyful'],
['nepotism','nepotismo, favoritismo','favoritism','fairness,impartiality,merit'],
['nonchalant','despreocupado, indiferente','unconcerned','panicked,anxious,alarmed'],
['plummet','desplomarse, caer en picado','plunge','soar,ascend,rise'],
['prudent','prudente, sensato','wise','reckless,foolish,rash'],
['qualm','preocupación, duda o reparo moral','worry','confidence,certainty,pride'],
['schism','cisma, ruptura','division','union,harmony,alliance'],
['tawdry','chillón, de mal gusto','gaudy','elegant,refined,tasteful'],
['terse','conciso, breve y tajante','concise','wordy,lengthy,rambling'],
['ubiquitous','ubicuo, omnipresente','pervasive','rare,scarce,uncommon'],
['unpretentious','sencillo, modesto','humble','arrogant,pompous,boastful'],
['wan','pálido, demacrado','pallid','flushed,radiant,robust'],
['wince','hacer una mueca de dolor','grimace','smile,laugh,rejoice'],
['writhe','retorcerse (de dolor o esfuerzo)','contort','straighten,freeze,relax']
 ,['flatter','halagar, adular','praise','insult,criticize,rebuke']
 ,['tantalizing','tentador, provocativo','tempting','boring,repulsive,ordinary']
 ,['omen','presagio, augurio','sign','certainty,proof,aftermath']
 ,['maroon','abandonar, dejar aislado','strand','rescue,escort,release']
 ,['precede','preceder, ir antes','come before','follow,succeed,trail']
 ,['invigorate','vigorizar, revitalizar','energize','weaken,exhaust,discourage']
 ,['boring','aburrido, tedioso','dull','exciting,lively,fascinating']
 ,['rapture','éxtasis, gran alegría','ecstasy','misery,grief,apathy']
 ,['loathing','odio, repugnancia','hatred','affection,admiration,delight']
 ,['frolic / gambol','juguetear, brincar','prance','mourn,work,rest']
 ,['canvass','sondear, encuestar','survey','ignore,conceal,avoid']
 ,['flaw','defecto, debilidad','weakness','strength,perfection,advantage']
 ,['materialize','materializarse, aparecer','appear','vanish,dissolve,disappear']
 ,['unrelenting','implacable, persistente','relentless','merciful,intermittent,gentle']
 ,['bamboozle','engañar, embaucar','deceive','inform,clarify,protect']
 ,['elusive','difícil de encontrar o capturar','evasive','obvious,accessible,certain']
 ,['allegation','alegación, acusación no probada','accusation','proof,praise,admission']
 ,['enclosure','recinto, espacio cerrado','confined area','opening,wilderness,expanse']
 ,['lewd','obsceno, indecente','indecent','decent,modest,proper']
 ,['sterile','estéril, sin vida','barren','fertile,productive,contaminated']
 ,['mope','estar abatido, deprimirse','sulk','celebrate,rejoice,energize']
 ,['tenacity','tenacidad, perseverancia','persistence','weakness,surrender,indifference']
 ,['allude','aludir, referirse indirectamente','refer','declare,deny,omit']
 ,['negligent','negligente, descuidado','careless','careful,diligent,attentive']
 ,['eclectic','ecléctico, variado','diverse','uniform,narrow,identical']
 ,['construe','interpretar, entender de cierta manera','interpret','confuse,ignore,misstate']
 ,['broach','plantear, introducir un tema','introduce','avoid,suppress,conclude']
 ,['coincidental','coincidente por casualidad','accidental','deliberate,planned,intentional']
 ,['somber','sombrío, serio','gloomy','cheerful,bright,festive']
 ,['iota','cantidad diminuta, pizca','small amount','abundance,whole,mass']
 ,['laden','cargado, agobiado por peso','loaded','empty,light,unburdened']
 ,['conviction','convicción, creencia firme','belief','doubt,uncertainty,hesitation']
 ,['finagle','conseguir mediante engaño','trick','earn,return,surrender']
 ,['tenuous','débil, poco sólido','weak','strong,substantial,certain']
 ,['stalwart','valiente, firme y leal','brave','cowardly,disloyal,fragile']
 ,['penalty','castigo, sanción','punishment','reward,benefit,praise']
 ,['procrastinate','posponer, dejar para después','postpone','hasten,complete,advance']
 ,['portly','corpulento, rechoncho','overweight','slender,lean,slight']
 ,['enigma','enigma, misterio','mystery','solution,certainty,explanation']
 ,['efficacy','eficacia, efectividad','effectiveness','failure,weakness,uselessness']
 ,['fallible','falible, capaz de equivocarse','imperfect','infallible,flawless,certain']
 ,['query','pregunta, consulta','inquiry','answer,statement,command']
 ,['disclose','revelar, divulgar','divulge','conceal,suppress,withhold']
 ,['sympathetic','compasivo, comprensivo','compassionate','cruel,indifferent,hostile']
 ,['jest','broma, ocurrencia','quip','lecture,warning,complaint']
 ,['favor','favor, acto de bondad','kindness','harm,hostility,refusal']
 ,['coroner','médico forense','medical examiner','surgeon,pharmacist,therapist']
 ,['perceptive','perceptivo, observador','observant','oblivious,unaware,insensitive']
 ,['faction','facción, grupo disidente','clique','whole,union,individual']
 ,['quarry','objetivo, presa perseguida','target','hunter,ally,protector']
 ,['lambaste','criticar o reprender duramente','censure','praise,commend,flatter']
 ,['gullibility','credulidad, facilidad para ser engañado','credulity','skepticism,wariness,wisdom']
 ,['enclose','encerrar, rodear','surround','open,release,expose']
 ,['wraith','espectro, aparición fantasmal','ghost','human,body,reality']
 ,['quirk','peculiaridad, rasgo extraño','oddity','normality,conformity,standard']
 ,['clutter','desorden, acumulación de cosas','mess','order,neatness,organization']
 ,['rambunctious','ruidoso, revoltoso e incontrolable','raucous','calm,quiet,orderly']
 ,['scrumptious','delicioso, exquisito','delicious','repugnant,tasteless,inedible']
 ,['hostel','albergue, alojamiento económico','boarding house','mansion,office,factory']
 ,['dissent','desacuerdo, oposición','disagreement','agreement,consent,approval']
 ,['ascent','ascenso, subida','upward climb','descent,fall,decline']
];

const details={
  assail:['To make a concerted, violent, or verbal attack on someone','The enemy attempted to assail the bunker from two directions.','ad- (hacia)','salire (saltar)',''],
  dearth:['A scarcity or serious lack of something essential','There was a dearth of skilled technicians in that remote outpost.','','deore (caro/precioso)','-th (condición/estado)'],
  elicit:['To evoke or draw out a response, answer, or fact from someone','The detective managed to elicit a confession from the witness.','ex- (fuera)','lacere (atraer/engatusar)',''],
  ubiquitous:['Present, appearing, or found everywhere at the same time','Smartphones have become ubiquitous in everyday modern life.','','ubique (en todas partes)','-ous (cualidad)']
};

export const bsep=rows.map(([word,spanish,correct,alts])=>{const d=details[word];return{word,spanish,correct,alternates:alts.split(','),meaning:d?.[0]||`${word} most nearly means ${correct}.`,example:d?.[1]||`Remember: ${word} means ${correct}.`,prefix:d?.[2]||'',root:d?.[3]||'',suffix:d?.[4]||''}});
export default bsep;
