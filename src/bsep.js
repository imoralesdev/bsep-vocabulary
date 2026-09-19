// Cada objeto acepta también: prefix, root, suffix, meaning y example.
// Puedes pegar aquí nuevos objetos usando exactamente el formato que enviaste.
const rows = [
['admonition / reprimand','amonestación, reprimenda','warning','praise,reward,flattery'],
['suppress / quell','suprimir, sofocar','stifle','encourage,promote,disclose'],
['hesitant / vacillate','vacilante, dudar','undecided','decisive,urgent,reckless'],
['feign / sham','fingir, farsa','pretend','verify,reveal,support'],
['plethora','plétora, exceso','surplus','scarcity,dearth,shortage'],
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
 ,['thrive','prosperar, desarrollarse','flourish','fail,decline,wither']
 ,['prioritize','priorizar, ordenar por importancia','order','neglect,delay,disregard']
 ,['vehemence','vehemencia, intensidad apasionada','intensity','apathy,calm,indifference']
 ,['concoct','inventar, elaborar o crear','create','destroy,copy,discard']
 ,['relinquish / relinquished','renunciar, ceder o entregar','surrender','retain,claim,seize']
 ,['clemency','clemencia, indulgencia','leniency','severity,harshness,punishment']
 ,['staunch','firme, leal e inquebrantable','steadfast','wavering,disloyal,uncertain']
 ,['overture','introducción o propuesta inicial','introduction','conclusion,rejection,ending']
 ,['tribute','homenaje, muestra de respeto','respect','insult,scorn,disgrace']
 ,['concise','conciso, breve y directo','terse','wordy,lengthy,rambling']
 ,['kink','torcedura, nudo o giro','twist','straightness,smoothness,line']
 ,['shrivel','marchitarse o contraerse','wither','flourish,expand,grow']
 ,['skein','madeja, haz o conjunto enredado','bundle','single,fragment,separation']
 ,['haphazard','desordenado, sin planificación','random','orderly,planned,systematic']
 ,['commensurate','proporcional, correspondiente','proportionate','unequal,disproportionate,unrelated']
 ,['irascible','irascible, fácil de enfadar','irritable','calm,patient,placid']
 ,['facetious','bromista en asuntos serios','jocular','serious,sincere,solemn']
 ,['throng','multitud, muchedumbre','crowd','individual,solitude,emptiness']
 ,['commute','reducir o conmutar una sentencia','reduce','increase,extend,impose']
 ,['conspiracy','conspiración, complot','intrigue','cooperation,truth,accident']
 ,['emphasize','enfatizar, destacar','stress','minimize,ignore,conceal']
 ,['tawny','pardo, marrón amarillento','brownish','colorless,bluish,pale']
 ,['impart','impartir, comunicar o dar','give','withhold,conceal,take']
 ,['ragged','andrajoso, rasgado','torn','neat,smooth,intact']
 ,['quarterly','trimestral, cuatro veces al año','four times yearly','daily,monthly,annually']
 ,['backlash','reacción negativa, retroceso','recoil','approval,support,advance']
 ,['varied','variado, diferente','different','uniform,identical,constant']
 ,['comical','cómico, gracioso','funny','solemn,tragic,serious']
 ,['hoarse','ronco, áspero de voz','rough','melodious,smooth,clear']
 ,['knack','habilidad natural, talento','talent','weakness,confusion,inability']
 ,['thrifty','ahorrativo, cuidadoso con el dinero','frugal','wasteful,extravagant,reckless']
 ,['mangle','destrozar, mutilar','mutilate','repair,restore,protect']
 ,['aural','relativo al oído o sonido','auditory','visual,tactile,silent']
 ,['weep','llorar','cry','laugh,rejoice,smile']
 ,['predisposed','predispuesto, inclinado','inclined','neutral,unwilling,opposed']
 ,['willowy','esbelto, flexible y grácil','slender','stocky,rigid,bulky']
 ,['sanction','aprobación o autorización','approval','prohibition,rejection,denial']
 ,['proverbial','proverbial, tradicionalmente conocido','traditional','unknown,literal,novel']
 ,['sequester','aislar, recluir','seclude','release,combine,expose']
 ,['skirmish','escaramuza, pelea breve','scuffle','peace,treaty,retreat']
 ,['warranted','justificado, autorizado','justified','baseless,forbidden,unnecessary']
 ,['hostile','hostil, agresivo','aggressive','friendly,peaceful,welcoming']
 ,['defaced','desfigurado, estropeado','marred','restored,beautified,repaired']
 ,['affront','afrenta, insulto','insult','compliment,honor,apology']
 ,['allure','atraer, seducir','entice','repel,discourage,disgust']
 ,['bellow','bramar, gritar fuertemente','holler','whisper,murmur,silence']
 ,['convey / conveyed','comunicar, transmitir','communicate','conceal,withhold,confuse']
 ,['engrossed','absorto, completamente concentrado','absorbed','distracted,bored,indifferent']
 ,['feasible','factible, realizable','workable','impossible,impractical,hopeless']
 ,['pique','estimular el interés','stimulate','bore,calm,suppress']
 ,['converge','converger, encontrarse','meet','diverge,separate,scatter']
 ,['antiquated','anticuado, obsoleto','obsolete','modern,current,advanced']
 ,['deportment','comportamiento, porte','behavior','disorder,appearance,location']
 ,['deranged','trastornado, demente','insane','rational,stable,sane']
 ,['turmoil','confusión, agitación o desorden','disorder','calm,peace,stability']
 ,['countermand','revocar, anular una orden','revoke','approve,enforce,repeat']
 ,['accrue / accrued','acumularse con el tiempo','accumulate','diminish,spend,disperse']
 ,['quartz','cuarzo, mineral cristalino','mineral','animal,liquid,fabric']
 ,['tart','agrio, ácido','sour','sweet,bland,mild']
 ,['treason','traición contra el Estado','disloyalty','patriotism,loyalty,honor']
 ,['expendable','prescindible, reemplazable','disposable','essential,irreplaceable,permanent']
 ,['stench','hedor, olor muy desagradable','odor','perfume,fragrance,freshness']
];

const details={
  assail:['To make a concerted, violent, or verbal attack on someone','The enemy attempted to assail the bunker from two directions.','ad- (hacia)','salire (saltar)',''],
  dearth:['A scarcity or serious lack of something essential','There was a dearth of skilled technicians in that remote outpost.','','deore (caro/precioso)','-th (condición/estado)'],
  elicit:['To evoke or draw out a response, answer, or fact from someone','The detective managed to elicit a confession from the witness.','ex- (fuera)','lacere (atraer/engatusar)',''],
  ubiquitous:['Present, appearing, or found everywhere at the same time','Smartphones have become ubiquitous in everyday modern life.','','ubique (en todas partes)','-ous (cualidad)']
};

export const bsep=rows.map(([word,spanish,correct,alts])=>{const d=details[word];return{word,spanish,correct,alternates:alts.split(','),meaning:d?.[0]||`${word} most nearly means ${correct}.`,example:d?.[1]||`Remember: ${word} means ${correct}.`,prefix:d?.[2]||'',root:d?.[3]||'',suffix:d?.[4]||''}});
export default bsep;
