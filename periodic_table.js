// ─── ELEMENT DATA ──────────────────────────────────────────────────
const ELEMENTS = [
  {z:1,  sym:"H",  name:"Hydrogen",     mass:1.008,   cat:"nonmetal",    row:1, col:1,  melt:"-259.16°C", boil:"-252.88°C", eneg:"2.20", radius:"53 pm",  config:"1s¹",                  state:"Gas",    year:"1766",    group:"1",  period:"1", ions:["H⁺","H⁻"],            ie:"1312",  ir:"—"},
  {z:2,  sym:"He", name:"Helium",       mass:4.003,   cat:"noble-gas",   row:1, col:18, melt:"—",         boil:"-268.93°C", eneg:"—",    radius:"31 pm",  config:"1s²",                  state:"Gas",    year:"1868",    group:"18", period:"1", ions:[],                      ie:"2372",  ir:"—"},
  {z:3,  sym:"Li", name:"Lithium",      mass:6.941,   cat:"alkali",      row:2, col:1,  melt:"180.54°C",  boil:"1342°C",    eneg:"0.98", radius:"167 pm", config:"[He] 2s¹",             state:"Solid",  year:"1817",    group:"1",  period:"2", ions:["Li⁺"],                 ie:"520",   ir:"76 pm"},
  {z:4,  sym:"Be", name:"Beryllium",    mass:9.012,   cat:"alkali-earth",row:2, col:2,  melt:"1287°C",    boil:"2469°C",    eneg:"1.57", radius:"112 pm", config:"[He] 2s²",             state:"Solid",  year:"1798",    group:"2",  period:"2", ions:["Be²⁺"],                ie:"900",   ir:"45 pm"},
  {z:5,  sym:"B",  name:"Boron",        mass:10.811,  cat:"metalloid",   row:2, col:13, melt:"2076°C",    boil:"3927°C",    eneg:"2.04", radius:"87 pm",  config:"[He] 2s² 2p¹",        state:"Solid",  year:"1808",    group:"13", period:"2", ions:["B³⁺"],                 ie:"801",   ir:"27 pm"},
  {z:6,  sym:"C",  name:"Carbon",       mass:12.011,  cat:"nonmetal",    row:2, col:14, melt:"3642°C",    boil:"3642°C",    eneg:"2.55", radius:"67 pm",  config:"[He] 2s² 2p²",        state:"Solid",  year:"ancient", group:"14", period:"2", ions:["C⁴⁺","C⁴⁻"],          ie:"1086",  ir:"—"},
  {z:7,  sym:"N",  name:"Nitrogen",     mass:14.007,  cat:"nonmetal",    row:2, col:15, melt:"-210.01°C", boil:"-195.79°C", eneg:"3.04", radius:"56 pm",  config:"[He] 2s² 2p³",        state:"Gas",    year:"1772",    group:"15", period:"2", ions:["N³⁻"],                 ie:"1402",  ir:"146 pm"},
  {z:8,  sym:"O",  name:"Oxygen",       mass:15.999,  cat:"nonmetal",    row:2, col:16, melt:"-218.79°C", boil:"-182.96°C", eneg:"3.44", radius:"48 pm",  config:"[He] 2s² 2p⁴",        state:"Gas",    year:"1774",    group:"16", period:"2", ions:["O²⁻"],                 ie:"1314",  ir:"140 pm"},
  {z:9,  sym:"F",  name:"Fluorine",     mass:18.998,  cat:"halogen",     row:2, col:17, melt:"-219.67°C", boil:"-188.11°C", eneg:"3.98", radius:"42 pm",  config:"[He] 2s² 2p⁵",        state:"Gas",    year:"1886",    group:"17", period:"2", ions:["F⁻"],                  ie:"1681",  ir:"133 pm"},
  {z:10, sym:"Ne", name:"Neon",         mass:20.18,   cat:"noble-gas",   row:2, col:18, melt:"-248.59°C", boil:"-246.05°C", eneg:"—",    radius:"38 pm",  config:"[He] 2s² 2p⁶",        state:"Gas",    year:"1898",    group:"18", period:"2", ions:[],                      ie:"2081",  ir:"—"},
  {z:11, sym:"Na", name:"Sodium",       mass:22.990,  cat:"alkali",      row:3, col:1,  melt:"97.72°C",   boil:"883°C",     eneg:"0.93", radius:"190 pm", config:"[Ne] 3s¹",             state:"Solid",  year:"1807",    group:"1",  period:"3", ions:["Na⁺"],                 ie:"496",   ir:"102 pm"},
  {z:12, sym:"Mg", name:"Magnesium",    mass:24.305,  cat:"alkali-earth",row:3, col:2,  melt:"650°C",     boil:"1090°C",    eneg:"1.31", radius:"145 pm", config:"[Ne] 3s²",             state:"Solid",  year:"1755",    group:"2",  period:"3", ions:["Mg²⁺"],                ie:"738",   ir:"72 pm"},
  {z:13, sym:"Al", name:"Aluminum",     mass:26.982,  cat:"post-trans",  row:3, col:13, melt:"660.32°C",  boil:"2519°C",    eneg:"1.61", radius:"118 pm", config:"[Ne] 3s² 3p¹",        state:"Solid",  year:"1825",    group:"13", period:"3", ions:["Al³⁺"],                ie:"578",   ir:"53.5 pm"},
  {z:14, sym:"Si", name:"Silicon",      mass:28.086,  cat:"metalloid",   row:3, col:14, melt:"1414°C",    boil:"3265°C",    eneg:"1.90", radius:"111 pm", config:"[Ne] 3s² 3p²",        state:"Solid",  year:"1824",    group:"14", period:"3", ions:["Si⁴⁺","Si⁴⁻"],        ie:"786",   ir:"40 pm"},
  {z:15, sym:"P",  name:"Phosphorus",   mass:30.974,  cat:"nonmetal",    row:3, col:15, melt:"44.15°C",   boil:"280.5°C",   eneg:"2.19", radius:"98 pm",  config:"[Ne] 3s² 3p³",        state:"Solid",  year:"1669",    group:"15", period:"3", ions:["P³⁻","P⁵⁺"],          ie:"1012",  ir:"212 pm"},
  {z:16, sym:"S",  name:"Sulfur",       mass:32.06,   cat:"nonmetal",    row:3, col:16, melt:"115.21°C",  boil:"444.72°C",  eneg:"2.58", radius:"88 pm",  config:"[Ne] 3s² 3p⁴",        state:"Solid",  year:"ancient", group:"16", period:"3", ions:["S²⁻","S⁶⁺"],          ie:"1000",  ir:"184 pm"},
  {z:17, sym:"Cl", name:"Chlorine",     mass:35.45,   cat:"halogen",     row:3, col:17, melt:"-101.5°C",  boil:"-34.04°C",  eneg:"3.16", radius:"79 pm",  config:"[Ne] 3s² 3p⁵",        state:"Gas",    year:"1774",    group:"17", period:"3", ions:["Cl⁻","Cl⁷⁺"],         ie:"1251",  ir:"181 pm"},
  {z:18, sym:"Ar", name:"Argon",        mass:39.948,  cat:"noble-gas",   row:3, col:18, melt:"-189.35°C", boil:"-185.85°C", eneg:"—",    radius:"71 pm",  config:"[Ne] 3s² 3p⁶",        state:"Gas",    year:"1894",    group:"18", period:"3", ions:[],                      ie:"1521",  ir:"—"},
  {z:19, sym:"K",  name:"Potassium",    mass:39.098,  cat:"alkali",      row:4, col:1,  melt:"63.38°C",   boil:"759°C",     eneg:"0.82", radius:"243 pm", config:"[Ar] 4s¹",             state:"Solid",  year:"1807",    group:"1",  period:"4", ions:["K⁺"],                  ie:"419",   ir:"138 pm"},
  {z:20, sym:"Ca", name:"Calcium",      mass:40.078,  cat:"alkali-earth",row:4, col:2,  melt:"842°C",     boil:"1484°C",    eneg:"1.00", radius:"194 pm", config:"[Ar] 4s²",             state:"Solid",  year:"1808",    group:"2",  period:"4", ions:["Ca²⁺"],                ie:"590",   ir:"100 pm"},
  {z:21, sym:"Sc", name:"Scandium",     mass:44.956,  cat:"transition",  row:4, col:3,  melt:"1541°C",    boil:"2836°C",    eneg:"1.36", radius:"184 pm", config:"[Ar] 3d¹ 4s²",        state:"Solid",  year:"1879",    group:"3",  period:"4", ions:["Sc³⁺"],                ie:"633",   ir:"74.5 pm"},
  {z:22, sym:"Ti", name:"Titanium",     mass:47.867,  cat:"transition",  row:4, col:4,  melt:"1668°C",    boil:"3287°C",    eneg:"1.54", radius:"176 pm", config:"[Ar] 3d² 4s²",        state:"Solid",  year:"1791",    group:"4",  period:"4", ions:["Ti²⁺","Ti⁴⁺"],        ie:"659",   ir:"86 pm"},
  {z:23, sym:"V",  name:"Vanadium",     mass:50.942,  cat:"transition",  row:4, col:5,  melt:"1910°C",    boil:"3407°C",    eneg:"1.63", radius:"171 pm", config:"[Ar] 3d³ 4s²",        state:"Solid",  year:"1801",    group:"5",  period:"4", ions:["V²⁺","V⁵⁺"],          ie:"651",   ir:"79 pm"},
  {z:24, sym:"Cr", name:"Chromium",     mass:51.996,  cat:"transition",  row:4, col:6,  melt:"1907°C",    boil:"2671°C",    eneg:"1.66", radius:"166 pm", config:"[Ar] 3d⁵ 4s¹",        state:"Solid",  year:"1798",    group:"6",  period:"4", ions:["Cr²⁺","Cr³⁺"],        ie:"653",   ir:"73 pm"},
  {z:25, sym:"Mn", name:"Manganese",    mass:54.938,  cat:"transition",  row:4, col:7,  melt:"1246°C",    boil:"2061°C",    eneg:"1.55", radius:"161 pm", config:"[Ar] 3d⁵ 4s²",        state:"Solid",  year:"1774",    group:"7",  period:"4", ions:["Mn²⁺","Mn⁷⁺"],        ie:"717",   ir:"83 pm"},
  {z:26, sym:"Fe", name:"Iron",         mass:55.845,  cat:"transition",  row:4, col:8,  melt:"1538°C",    boil:"2861°C",    eneg:"1.83", radius:"156 pm", config:"[Ar] 3d⁶ 4s²",        state:"Solid",  year:"ancient", group:"8",  period:"4", ions:["Fe²⁺","Fe³⁺"],        ie:"763",   ir:"78 pm"},
  {z:27, sym:"Co", name:"Cobalt",       mass:58.933,  cat:"transition",  row:4, col:9,  melt:"1495°C",    boil:"2927°C",    eneg:"1.88", radius:"152 pm", config:"[Ar] 3d⁷ 4s²",        state:"Solid",  year:"1735",    group:"9",  period:"4", ions:["Co²⁺","Co³⁺"],        ie:"760",   ir:"74.5 pm"},
  {z:28, sym:"Ni", name:"Nickel",       mass:58.693,  cat:"transition",  row:4, col:10, melt:"1455°C",    boil:"2913°C",    eneg:"1.91", radius:"149 pm", config:"[Ar] 3d⁸ 4s²",        state:"Solid",  year:"1751",    group:"10", period:"4", ions:["Ni²⁺"],                ie:"737",   ir:"69 pm"},
  {z:29, sym:"Cu", name:"Copper",       mass:63.546,  cat:"transition",  row:4, col:11, melt:"1084.62°C", boil:"2562°C",    eneg:"1.90", radius:"145 pm", config:"[Ar] 3d¹⁰ 4s¹",       state:"Solid",  year:"ancient", group:"11", period:"4", ions:["Cu⁺","Cu²⁺"],         ie:"745",   ir:"73 pm"},
  {z:30, sym:"Zn", name:"Zinc",         mass:65.38,   cat:"transition",  row:4, col:12, melt:"419.53°C",  boil:"907°C",     eneg:"1.65", radius:"142 pm", config:"[Ar] 3d¹⁰ 4s²",       state:"Solid",  year:"ancient", group:"12", period:"4", ions:["Zn²⁺"],                ie:"906",   ir:"74 pm"},
  {z:31, sym:"Ga", name:"Gallium",      mass:69.723,  cat:"post-trans",  row:4, col:13, melt:"29.76°C",   boil:"2204°C",    eneg:"1.81", radius:"136 pm", config:"[Ar] 3d¹⁰ 4s² 4p¹",  state:"Solid",  year:"1875",    group:"13", period:"4", ions:["Ga³⁺"],                ie:"579",   ir:"62 pm"},
  {z:32, sym:"Ge", name:"Germanium",    mass:72.63,   cat:"metalloid",   row:4, col:14, melt:"938.25°C",  boil:"2833°C",    eneg:"2.01", radius:"125 pm", config:"[Ar] 3d¹⁰ 4s² 4p²",  state:"Solid",  year:"1886",    group:"14", period:"4", ions:["Ge²⁺","Ge⁴⁺"],        ie:"762",   ir:"73 pm"},
  {z:33, sym:"As", name:"Arsenic",      mass:74.922,  cat:"metalloid",   row:4, col:15, melt:"816.8°C",   boil:"614°C",     eneg:"2.18", radius:"114 pm", config:"[Ar] 3d¹⁰ 4s² 4p³",  state:"Solid",  year:"ancient", group:"15", period:"4", ions:["As³⁻","As⁵⁺"],        ie:"947",   ir:"58 pm"},
  {z:34, sym:"Se", name:"Selenium",     mass:78.971,  cat:"nonmetal",    row:4, col:16, melt:"220.8°C",   boil:"685°C",     eneg:"2.55", radius:"103 pm", config:"[Ar] 3d¹⁰ 4s² 4p⁴",  state:"Solid",  year:"1817",    group:"16", period:"4", ions:["Se²⁻","Se⁶⁺"],        ie:"941",   ir:"198 pm"},
  {z:35, sym:"Br", name:"Bromine",      mass:79.904,  cat:"halogen",     row:4, col:17, melt:"-7.2°C",    boil:"58.8°C",    eneg:"2.96", radius:"94 pm",  config:"[Ar] 3d¹⁰ 4s² 4p⁵",  state:"Liquid", year:"1826",    group:"17", period:"4", ions:["Br⁻","Br⁵⁺"],         ie:"1140",  ir:"196 pm"},
  {z:36, sym:"Kr", name:"Krypton",      mass:83.798,  cat:"noble-gas",   row:4, col:18, melt:"-157.38°C", boil:"-153.22°C", eneg:"3.00", radius:"88 pm",  config:"[Ar] 3d¹⁰ 4s² 4p⁶",  state:"Gas",    year:"1898",    group:"18", period:"4", ions:[],                      ie:"1351",  ir:"—"},
  {z:37, sym:"Rb", name:"Rubidium",     mass:85.468,  cat:"alkali",      row:5, col:1,  melt:"39.31°C",   boil:"688°C",     eneg:"0.82", radius:"265 pm", config:"[Kr] 5s¹",             state:"Solid",  year:"1861",    group:"1",  period:"5", ions:["Rb⁺"],                 ie:"403",   ir:"152 pm"},
  {z:38, sym:"Sr", name:"Strontium",    mass:87.62,   cat:"alkali-earth",row:5, col:2,  melt:"777°C",     boil:"1382°C",    eneg:"0.95", radius:"219 pm", config:"[Kr] 5s²",             state:"Solid",  year:"1790",    group:"2",  period:"5", ions:["Sr²⁺"],                ie:"550",   ir:"118 pm"},
  {z:39, sym:"Y",  name:"Yttrium",      mass:88.906,  cat:"transition",  row:5, col:3,  melt:"1522°C",    boil:"3338°C",    eneg:"1.22", radius:"212 pm", config:"[Kr] 4d¹ 5s²",        state:"Solid",  year:"1794",    group:"3",  period:"5", ions:["Y³⁺"],                 ie:"600",   ir:"90 pm"},
  {z:40, sym:"Zr", name:"Zirconium",    mass:91.224,  cat:"transition",  row:5, col:4,  melt:"1855°C",    boil:"4409°C",    eneg:"1.33", radius:"206 pm", config:"[Kr] 4d² 5s²",        state:"Solid",  year:"1789",    group:"4",  period:"5", ions:["Zr⁴⁺"],                ie:"640",   ir:"72 pm"},
  {z:41, sym:"Nb", name:"Niobium",      mass:92.906,  cat:"transition",  row:5, col:5,  melt:"2477°C",    boil:"4744°C",    eneg:"1.6",  radius:"198 pm", config:"[Kr] 4d⁴ 5s¹",        state:"Solid",  year:"1801",    group:"5",  period:"5", ions:["Nb³⁺","Nb⁵⁺"],        ie:"652",   ir:"72 pm"},
  {z:42, sym:"Mo", name:"Molybdenum",   mass:95.96,   cat:"transition",  row:5, col:6,  melt:"2623°C",    boil:"4639°C",    eneg:"2.16", radius:"190 pm", config:"[Kr] 4d⁵ 5s¹",        state:"Solid",  year:"1778",    group:"6",  period:"5", ions:["Mo³⁺","Mo⁶⁺"],        ie:"684",   ir:"69 pm"},
  {z:43, sym:"Tc", name:"Technetium",   mass:98,      cat:"transition",  row:5, col:7,  melt:"2157°C",    boil:"4265°C",    eneg:"1.9",  radius:"183 pm", config:"[Kr] 4d⁵ 5s²",        state:"Solid",  year:"1937",    group:"7",  period:"5", ions:["Tc⁴⁺","Tc⁷⁺"],        ie:"702",   ir:"—"},
  {z:44, sym:"Ru", name:"Ruthenium",    mass:101.07,  cat:"transition",  row:5, col:8,  melt:"2334°C",    boil:"4150°C",    eneg:"2.2",  radius:"178 pm", config:"[Kr] 4d⁷ 5s¹",        state:"Solid",  year:"1844",    group:"8",  period:"5", ions:["Ru²⁺","Ru³⁺"],        ie:"710",   ir:"68 pm"},
  {z:45, sym:"Rh", name:"Rhodium",      mass:102.906, cat:"transition",  row:5, col:9,  melt:"1964°C",    boil:"3695°C",    eneg:"2.28", radius:"173 pm", config:"[Kr] 4d⁸ 5s¹",        state:"Solid",  year:"1803",    group:"9",  period:"5", ions:["Rh³⁺"],                ie:"720",   ir:"66.5 pm"},
  {z:46, sym:"Pd", name:"Palladium",    mass:106.42,  cat:"transition",  row:5, col:10, melt:"1554.9°C",  boil:"2963°C",    eneg:"2.20", radius:"169 pm", config:"[Kr] 4d¹⁰",           state:"Solid",  year:"1803",    group:"10", period:"5", ions:["Pd²⁺"],                ie:"805",   ir:"86 pm"},
  {z:47, sym:"Ag", name:"Silver",       mass:107.868, cat:"transition",  row:5, col:11, melt:"961.78°C",  boil:"2162°C",    eneg:"1.93", radius:"165 pm", config:"[Kr] 4d¹⁰ 5s¹",       state:"Solid",  year:"ancient", group:"11", period:"5", ions:["Ag⁺"],                 ie:"731",   ir:"115 pm"},
  {z:48, sym:"Cd", name:"Cadmium",      mass:112.411, cat:"transition",  row:5, col:12, melt:"321.07°C",  boil:"767°C",     eneg:"1.69", radius:"161 pm", config:"[Kr] 4d¹⁰ 5s²",       state:"Solid",  year:"1817",    group:"12", period:"5", ions:["Cd²⁺"],                ie:"868",   ir:"95 pm"},
  {z:49, sym:"In", name:"Indium",       mass:114.818, cat:"post-trans",  row:5, col:13, melt:"156.6°C",   boil:"2072°C",    eneg:"1.78", radius:"156 pm", config:"[Kr] 4d¹⁰ 5s² 5p¹",  state:"Solid",  year:"1863",    group:"13", period:"5", ions:["In³⁺"],                ie:"558",   ir:"80 pm"},
  {z:50, sym:"Sn", name:"Tin",          mass:118.71,  cat:"post-trans",  row:5, col:14, melt:"231.93°C",  boil:"2602°C",    eneg:"1.96", radius:"145 pm", config:"[Kr] 4d¹⁰ 5s² 5p²",  state:"Solid",  year:"ancient", group:"14", period:"5", ions:["Sn²⁺","Sn⁴⁺"],        ie:"709",   ir:"118 pm"},
  {z:51, sym:"Sb", name:"Antimony",     mass:121.76,  cat:"metalloid",   row:5, col:15, melt:"630.63°C",  boil:"1587°C",    eneg:"2.05", radius:"133 pm", config:"[Kr] 4d¹⁰ 5s² 5p³",  state:"Solid",  year:"ancient", group:"15", period:"5", ions:["Sb³⁺","Sb⁵⁺"],        ie:"834",   ir:"76 pm"},
  {z:52, sym:"Te", name:"Tellurium",    mass:127.6,   cat:"metalloid",   row:5, col:16, melt:"449.51°C",  boil:"988°C",     eneg:"2.1",  radius:"123 pm", config:"[Kr] 4d¹⁰ 5s² 5p⁴",  state:"Solid",  year:"1782",    group:"16", period:"5", ions:["Te²⁻","Te⁶⁺"],        ie:"869",   ir:"221 pm"},
  {z:53, sym:"I",  name:"Iodine",       mass:126.904, cat:"halogen",     row:5, col:17, melt:"113.7°C",   boil:"184.3°C",   eneg:"2.66", radius:"115 pm", config:"[Kr] 4d¹⁰ 5s² 5p⁵",  state:"Solid",  year:"1811",    group:"17", period:"5", ions:["I⁻","I⁷⁺"],           ie:"1008",  ir:"220 pm"},
  {z:54, sym:"Xe", name:"Xenon",        mass:131.293, cat:"noble-gas",   row:5, col:18, melt:"-111.75°C", boil:"-108.12°C", eneg:"2.60", radius:"108 pm", config:"[Kr] 4d¹⁰ 5s² 5p⁶",  state:"Gas",    year:"1898",    group:"18", period:"5", ions:[],                      ie:"1170",  ir:"—"},
  {z:55, sym:"Cs", name:"Cesium",       mass:132.905, cat:"alkali",      row:6, col:1,  melt:"28.44°C",   boil:"671°C",     eneg:"0.79", radius:"298 pm", config:"[Xe] 6s¹",             state:"Solid",  year:"1860",    group:"1",  period:"6", ions:["Cs⁺"],                 ie:"376",   ir:"167 pm"},
  {z:56, sym:"Ba", name:"Barium",       mass:137.327, cat:"alkali-earth",row:6, col:2,  melt:"727°C",     boil:"1897°C",    eneg:"0.89", radius:"253 pm", config:"[Xe] 6s²",             state:"Solid",  year:"1808",    group:"2",  period:"6", ions:["Ba²⁺"],                ie:"503",   ir:"135 pm"},
  {z:57, sym:"La", name:"Lanthanum",    mass:138.905, cat:"lanthanide",  row:6, col:3,  melt:"920°C",     boil:"3464°C",    eneg:"1.10", radius:"195 pm", config:"[Xe] 5d¹ 6s²",        state:"Solid",  year:"1839",    group:"3",  period:"6", ions:["La³⁺"],                ie:"538",   ir:"103.2 pm"},
  {z:58, sym:"Ce", name:"Cerium",       mass:140.116, cat:"lanthanide",  row:8, col:4,  melt:"798°C",     boil:"3443°C",    eneg:"1.12", radius:"185 pm", config:"[Xe] 4f¹ 5d¹ 6s²",    state:"Solid",  year:"1803",    group:"—",  period:"6", ions:["Ce³⁺","Ce⁴⁺"],        ie:"528",   ir:"101 pm"},
  {z:59, sym:"Pr", name:"Praseodymium", mass:140.908, cat:"lanthanide",  row:8, col:5,  melt:"931°C",     boil:"3520°C",    eneg:"1.13", radius:"185 pm", config:"[Xe] 4f³ 6s²",        state:"Solid",  year:"1885",    group:"—",  period:"6", ions:["Pr³⁺"],                ie:"523",   ir:"99 pm"},
  {z:60, sym:"Nd", name:"Neodymium",    mass:144.242, cat:"lanthanide",  row:8, col:6,  melt:"1021°C",    boil:"3074°C",    eneg:"1.14", radius:"185 pm", config:"[Xe] 4f⁴ 6s²",        state:"Solid",  year:"1885",    group:"—",  period:"6", ions:["Nd³⁺"],                ie:"530",   ir:"98.3 pm"},
  {z:61, sym:"Pm", name:"Promethium",   mass:145,     cat:"lanthanide",  row:8, col:7,  melt:"1042°C",    boil:"3000°C",    eneg:"1.13", radius:"185 pm", config:"[Xe] 4f⁵ 6s²",        state:"Solid",  year:"1945",    group:"—",  period:"6", ions:["Pm³⁺"],                ie:"536",   ir:"97 pm"},
  {z:62, sym:"Sm", name:"Samarium",     mass:150.36,  cat:"lanthanide",  row:8, col:8,  melt:"1072°C",    boil:"1900°C",    eneg:"1.17", radius:"185 pm", config:"[Xe] 4f⁶ 6s²",        state:"Solid",  year:"1879",    group:"—",  period:"6", ions:["Sm³⁺"],                ie:"543",   ir:"95.8 pm"},
  {z:63, sym:"Eu", name:"Europium",     mass:151.964, cat:"lanthanide",  row:8, col:9,  melt:"822°C",     boil:"1596°C",    eneg:"1.2",  radius:"185 pm", config:"[Xe] 4f⁷ 6s²",        state:"Solid",  year:"1901",    group:"—",  period:"6", ions:["Eu²⁺","Eu³⁺"],        ie:"547",   ir:"94.7 pm"},
  {z:64, sym:"Gd", name:"Gadolinium",   mass:157.25,  cat:"lanthanide",  row:8, col:10, melt:"1313°C",    boil:"3273°C",    eneg:"1.20", radius:"180 pm", config:"[Xe] 4f⁷ 5d¹ 6s²",    state:"Solid",  year:"1880",    group:"—",  period:"6", ions:["Gd³⁺"],                ie:"593",   ir:"93.8 pm"},
  {z:65, sym:"Tb", name:"Terbium",      mass:158.925, cat:"lanthanide",  row:8, col:11, melt:"1356°C",    boil:"3230°C",    eneg:"1.2",  radius:"175 pm", config:"[Xe] 4f⁹ 6s²",        state:"Solid",  year:"1843",    group:"—",  period:"6", ions:["Tb³⁺"],                ie:"566",   ir:"92.3 pm"},
  {z:66, sym:"Dy", name:"Dysprosium",   mass:162.5,   cat:"lanthanide",  row:8, col:12, melt:"1412°C",    boil:"2567°C",    eneg:"1.22", radius:"175 pm", config:"[Xe] 4f¹⁰ 6s²",       state:"Solid",  year:"1886",    group:"—",  period:"6", ions:["Dy³⁺"],                ie:"573",   ir:"91.2 pm"},
  {z:67, sym:"Ho", name:"Holmium",      mass:164.930, cat:"lanthanide",  row:8, col:13, melt:"1474°C",    boil:"2700°C",    eneg:"1.23", radius:"175 pm", config:"[Xe] 4f¹¹ 6s²",       state:"Solid",  year:"1878",    group:"—",  period:"6", ions:["Ho³⁺"],                ie:"581",   ir:"90.1 pm"},
  {z:68, sym:"Er", name:"Erbium",       mass:167.259, cat:"lanthanide",  row:8, col:14, melt:"1529°C",    boil:"2868°C",    eneg:"1.24", radius:"175 pm", config:"[Xe] 4f¹² 6s²",       state:"Solid",  year:"1843",    group:"—",  period:"6", ions:["Er³⁺"],                ie:"589",   ir:"89 pm"},
  {z:69, sym:"Tm", name:"Thulium",      mass:168.934, cat:"lanthanide",  row:8, col:15, melt:"1545°C",    boil:"1950°C",    eneg:"1.25", radius:"175 pm", config:"[Xe] 4f¹³ 6s²",       state:"Solid",  year:"1879",    group:"—",  period:"6", ions:["Tm³⁺"],                ie:"597",   ir:"88 pm"},
  {z:70, sym:"Yb", name:"Ytterbium",    mass:173.054, cat:"lanthanide",  row:8, col:16, melt:"819°C",     boil:"1196°C",    eneg:"1.1",  radius:"175 pm", config:"[Xe] 4f¹⁴ 6s²",       state:"Solid",  year:"1878",    group:"—",  period:"6", ions:["Yb²⁺","Yb³⁺"],        ie:"603",   ir:"86 pm"},
  {z:71, sym:"Lu", name:"Lutetium",     mass:174.967, cat:"lanthanide",  row:8, col:17, melt:"1663°C",    boil:"3402°C",    eneg:"1.27", radius:"175 pm", config:"[Xe] 4f¹⁴ 5d¹ 6s²",   state:"Solid",  year:"1907",    group:"3",  period:"6", ions:["Lu³⁺"],                ie:"524",   ir:"86.1 pm"},
  {z:72, sym:"Hf", name:"Hafnium",      mass:178.49,  cat:"transition",  row:6, col:4,  melt:"2233°C",    boil:"4603°C",    eneg:"1.3",  radius:"187 pm", config:"[Xe] 4f¹⁴ 5d² 6s²",   state:"Solid",  year:"1923",    group:"4",  period:"6", ions:["Hf⁴⁺"],                ie:"659",   ir:"71 pm"},
  {z:73, sym:"Ta", name:"Tantalum",     mass:180.948, cat:"transition",  row:6, col:5,  melt:"3017°C",    boil:"5458°C",    eneg:"1.5",  radius:"170 pm", config:"[Xe] 4f¹⁴ 5d³ 6s²",   state:"Solid",  year:"1802",    group:"5",  period:"6", ions:["Ta⁵⁺"],                ie:"761",   ir:"72 pm"},
  {z:74, sym:"W",  name:"Tungsten",     mass:183.84,  cat:"transition",  row:6, col:6,  melt:"3422°C",    boil:"5555°C",    eneg:"2.36", radius:"162 pm", config:"[Xe] 4f¹⁴ 5d⁴ 6s²",   state:"Solid",  year:"1783",    group:"6",  period:"6", ions:["W⁴⁺","W⁶⁺"],          ie:"770",   ir:"66 pm"},
  {z:75, sym:"Re", name:"Rhenium",      mass:186.207, cat:"transition",  row:6, col:7,  melt:"3186°C",    boil:"5596°C",    eneg:"1.9",  radius:"151 pm", config:"[Xe] 4f¹⁴ 5d⁵ 6s²",   state:"Solid",  year:"1925",    group:"7",  period:"6", ions:["Re³⁺","Re⁷⁺"],        ie:"760",   ir:"63 pm"},
  {z:76, sym:"Os", name:"Osmium",       mass:190.23,  cat:"transition",  row:6, col:8,  melt:"3033°C",    boil:"5012°C",    eneg:"2.2",  radius:"144 pm", config:"[Xe] 4f¹⁴ 5d⁶ 6s²",   state:"Solid",  year:"1803",    group:"8",  period:"6", ions:["Os²⁺","Os⁴⁺"],        ie:"840",   ir:"63 pm"},
  {z:77, sym:"Ir", name:"Iridium",      mass:192.217, cat:"transition",  row:6, col:9,  melt:"2446°C",    boil:"4428°C",    eneg:"2.20", radius:"141 pm", config:"[Xe] 4f¹⁴ 5d⁷ 6s²",   state:"Solid",  year:"1803",    group:"9",  period:"6", ions:["Ir³⁺"],                ie:"880",   ir:"68 pm"},
  {z:78, sym:"Pt", name:"Platinum",     mass:195.084, cat:"transition",  row:6, col:10, melt:"1768.3°C",  boil:"3825°C",    eneg:"2.28", radius:"135 pm", config:"[Xe] 4f¹⁴ 5d⁹ 6s¹",   state:"Solid",  year:"1735",    group:"10", period:"6", ions:["Pt²⁺","Pt⁴⁺"],        ie:"870",   ir:"80 pm"},
  {z:79, sym:"Au", name:"Gold",         mass:196.967, cat:"transition",  row:6, col:11, melt:"1064.18°C", boil:"2856°C",    eneg:"2.54", radius:"135 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",  state:"Solid",  year:"ancient", group:"11", period:"6", ions:["Au⁺","Au³⁺"],         ie:"890",   ir:"137 pm"},
  {z:80, sym:"Hg", name:"Mercury",      mass:200.592, cat:"transition",  row:6, col:12, melt:"-38.83°C",  boil:"356.73°C",  eneg:"2.00", radius:"150 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",  state:"Liquid", year:"ancient", group:"12", period:"6", ions:["Hg⁺","Hg²⁺"],         ie:"1007",  ir:"119 pm"},
  {z:81, sym:"Tl", name:"Thallium",     mass:204.383, cat:"post-trans",  row:6, col:13, melt:"304°C",     boil:"1473°C",    eneg:"1.62", radius:"190 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", state:"Solid", year:"1861",  group:"13", period:"6", ions:["Tl⁺","Tl³⁺"],         ie:"589",   ir:"150 pm"},
  {z:82, sym:"Pb", name:"Lead",         mass:207.2,   cat:"post-trans",  row:6, col:14, melt:"327.46°C",  boil:"1749°C",    eneg:"2.33", radius:"180 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", state:"Solid", year:"ancient",group:"14", period:"6", ions:["Pb²⁺","Pb⁴⁺"],        ie:"716",   ir:"119 pm"},
  {z:83, sym:"Bi", name:"Bismuth",      mass:208.98,  cat:"post-trans",  row:6, col:15, melt:"271.5°C",   boil:"1564°C",    eneg:"2.02", radius:"160 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", state:"Solid", year:"ancient",group:"15", period:"6", ions:["Bi³⁺"],                ie:"703",   ir:"103 pm"},
  {z:84, sym:"Po", name:"Polonium",     mass:209,     cat:"post-trans",  row:6, col:16, melt:"254°C",     boil:"962°C",     eneg:"2.0",  radius:"190 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", state:"Solid", year:"1898",  group:"16", period:"6", ions:["Po²⁻","Po⁴⁺"],        ie:"812",   ir:"—"},
  {z:85, sym:"At", name:"Astatine",     mass:210,     cat:"halogen",     row:6, col:17, melt:"302°C",     boil:"337°C",     eneg:"2.2",  radius:"127 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", state:"Solid", year:"1940",  group:"17", period:"6", ions:["At⁻"],                 ie:"920",   ir:"—"},
  {z:86, sym:"Rn", name:"Radon",        mass:222,     cat:"noble-gas",   row:6, col:18, melt:"-71°C",     boil:"-61.7°C",   eneg:"2.2",  radius:"120 pm", config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", state:"Gas",   year:"1900",  group:"18", period:"6", ions:[],                      ie:"1037",  ir:"—"},
  {z:87, sym:"Fr", name:"Francium",     mass:223,     cat:"alkali",      row:7, col:1,  melt:"27°C",      boil:"677°C",     eneg:"0.7",  radius:"348 pm", config:"[Rn] 7s¹",             state:"Solid",  year:"1939",    group:"1",  period:"7", ions:["Fr⁺"],                 ie:"380",   ir:"—"},
  {z:88, sym:"Ra", name:"Radium",       mass:226,     cat:"alkali-earth",row:7, col:2,  melt:"696°C",     boil:"1737°C",    eneg:"0.9",  radius:"283 pm", config:"[Rn] 7s²",             state:"Solid",  year:"1898",    group:"2",  period:"7", ions:["Ra²⁺"],                ie:"509",   ir:"148 pm"},
  {z:89, sym:"Ac", name:"Actinium",     mass:227,     cat:"actinide",    row:7, col:3,  melt:"1051°C",    boil:"3198°C",    eneg:"1.1",  radius:"195 pm", config:"[Rn] 6d¹ 7s²",        state:"Solid",  year:"1899",    group:"3",  period:"7", ions:["Ac³⁺"],                ie:"499",   ir:"112 pm"},
  {z:90, sym:"Th", name:"Thorium",      mass:232.038, cat:"actinide",    row:9, col:4,  melt:"1750°C",    boil:"4788°C",    eneg:"1.3",  radius:"180 pm", config:"[Rn] 6d² 7s²",        state:"Solid",  year:"1829",    group:"—",  period:"7", ions:["Th⁴⁺"],                ie:"587",   ir:"94 pm"},
  {z:91, sym:"Pa", name:"Protactinium", mass:231.036, cat:"actinide",    row:9, col:5,  melt:"1572°C",    boil:"4000°C",    eneg:"1.5",  radius:"163 pm", config:"[Rn] 5f² 6d¹ 7s²",    state:"Solid",  year:"1913",    group:"—",  period:"7", ions:["Pa⁵⁺"],                ie:"568",   ir:"90 pm"},
  {z:92, sym:"U",  name:"Uranium",      mass:238.029, cat:"actinide",    row:9, col:6,  melt:"1135°C",    boil:"4131°C",    eneg:"1.38", radius:"156 pm", config:"[Rn] 5f³ 6d¹ 7s²",    state:"Solid",  year:"1789",    group:"—",  period:"7", ions:["U⁴⁺","U⁶⁺"],          ie:"598",   ir:"102.5 pm"},
  {z:93, sym:"Np", name:"Neptunium",    mass:237,     cat:"actinide",    row:9, col:7,  melt:"644°C",     boil:"4000°C",    eneg:"1.36", radius:"155 pm", config:"[Rn] 5f⁴ 6d¹ 7s²",    state:"Solid",  year:"1940",    group:"—",  period:"7", ions:["Np⁵⁺"],                ie:"605",   ir:"101 pm"},
  {z:94, sym:"Pu", name:"Plutonium",    mass:244,     cat:"actinide",    row:9, col:8,  melt:"639.4°C",   boil:"3228°C",    eneg:"1.28", radius:"159 pm", config:"[Rn] 5f⁶ 7s²",        state:"Solid",  year:"1940",    group:"—",  period:"7", ions:["Pu³⁺","Pu⁴⁺"],        ie:"585",   ir:"100 pm"},
  {z:95, sym:"Am", name:"Americium",    mass:243,     cat:"actinide",    row:9, col:9,  melt:"1176°C",    boil:"2607°C",    eneg:"1.3",  radius:"173 pm", config:"[Rn] 5f⁷ 7s²",        state:"Solid",  year:"1944",    group:"—",  period:"7", ions:["Am³⁺"],                ie:"578",   ir:"97.5 pm"},
  {z:96, sym:"Cm", name:"Curium",       mass:247,     cat:"actinide",    row:9, col:10, melt:"1345°C",    boil:"3110°C",    eneg:"1.3",  radius:"174 pm", config:"[Rn] 5f⁷ 6d¹ 7s²",    state:"Solid",  year:"1944",    group:"—",  period:"7", ions:["Cm³⁺"],                ie:"581",   ir:"97 pm"},
  {z:97, sym:"Bk", name:"Berkelium",    mass:247,     cat:"actinide",    row:9, col:11, melt:"1050°C",    boil:"—",         eneg:"1.3",  radius:"170 pm", config:"[Rn] 5f⁹ 7s²",        state:"Solid",  year:"1949",    group:"—",  period:"7", ions:["Bk³⁺"],                ie:"601",   ir:"—"},
  {z:98, sym:"Cf", name:"Californium",  mass:251,     cat:"actinide",    row:9, col:12, melt:"900°C",     boil:"—",         eneg:"1.3",  radius:"168 pm", config:"[Rn] 5f¹⁰ 7s²",       state:"Solid",  year:"1950",    group:"—",  period:"7", ions:["Cf³⁺"],                ie:"608",   ir:"—"},
  {z:99, sym:"Es", name:"Einsteinium",  mass:252,     cat:"actinide",    row:9, col:13, melt:"860°C",     boil:"—",         eneg:"1.3",  radius:"165 pm", config:"[Rn] 5f¹¹ 7s²",       state:"Solid",  year:"1952",    group:"—",  period:"7", ions:["Es³⁺"],                ie:"619",   ir:"—"},
  {z:100,sym:"Fm", name:"Fermium",      mass:257,     cat:"actinide",    row:9, col:14, melt:"1527°C",    boil:"—",         eneg:"1.3",  radius:"—",      config:"[Rn] 5f¹² 7s²",       state:"Solid",  year:"1952",    group:"—",  period:"7", ions:["Fm³⁺"],                ie:"627",   ir:"—"},
  {z:101,sym:"Md", name:"Mendelevium",  mass:258,     cat:"actinide",    row:9, col:15, melt:"827°C",     boil:"—",         eneg:"1.3",  radius:"—",      config:"[Rn] 5f¹³ 7s²",       state:"Solid",  year:"1955",    group:"—",  period:"7", ions:["Md³⁺"],                ie:"635",   ir:"—"},
  {z:102,sym:"No", name:"Nobelium",     mass:259,     cat:"actinide",    row:9, col:16, melt:"827°C",     boil:"—",         eneg:"1.3",  radius:"—",      config:"[Rn] 5f¹⁴ 7s²",       state:"Solid",  year:"1958",    group:"—",  period:"7", ions:["No²⁺"],                ie:"642",   ir:"—"},
  {z:103,sym:"Lr", name:"Lawrencium",   mass:262,     cat:"actinide",    row:9, col:17, melt:"1627°C",    boil:"—",         eneg:"1.3",  radius:"—",      config:"[Rn] 5f¹⁴ 7s² 7p¹",  state:"Solid",  year:"1961",    group:"3",  period:"7", ions:["Lr³⁺"],                ie:"—",     ir:"—"},
  {z:104,sym:"Rf", name:"Rutherfordium",mass:267,     cat:"transition",  row:7, col:4,  melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d² 7s²",  state:"Solid",  year:"1969",    group:"4",  period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:105,sym:"Db", name:"Dubnium",      mass:268,     cat:"transition",  row:7, col:5,  melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d³ 7s²",  state:"Solid",  year:"1970",    group:"5",  period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:106,sym:"Sg", name:"Seaborgium",   mass:271,     cat:"transition",  row:7, col:6,  melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d⁴ 7s²",  state:"Solid",  year:"1974",    group:"6",  period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:107,sym:"Bh", name:"Bohrium",      mass:272,     cat:"transition",  row:7, col:7,  melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d⁵ 7s²",  state:"Solid",  year:"1981",    group:"7",  period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:108,sym:"Hs", name:"Hassium",      mass:270,     cat:"transition",  row:7, col:8,  melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d⁶ 7s²",  state:"Solid",  year:"1984",    group:"8",  period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:109,sym:"Mt", name:"Meitnerium",   mass:276,     cat:"transition",  row:7, col:9,  melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d⁷ 7s²",  state:"Solid",  year:"1982",    group:"9",  period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:110,sym:"Ds", name:"Darmstadtium", mass:281,     cat:"transition",  row:7, col:10, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d⁸ 7s²",  state:"Solid",  year:"1994",    group:"10", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:111,sym:"Rg", name:"Roentgenium",  mass:282,     cat:"transition",  row:7, col:11, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d⁹ 7s²",  state:"Solid",  year:"1994",    group:"11", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:112,sym:"Cn", name:"Copernicium",  mass:285,     cat:"transition",  row:7, col:12, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s²", state:"Gas",    year:"1996",    group:"12", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:113,sym:"Nh", name:"Nihonium",     mass:286,     cat:"post-trans",  row:7, col:13, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", state:"Solid", year:"2004", group:"13", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:114,sym:"Fl", name:"Flerovium",    mass:289,     cat:"post-trans",  row:7, col:14, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", state:"Solid", year:"1999", group:"14", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:115,sym:"Mc", name:"Moscovium",    mass:290,     cat:"post-trans",  row:7, col:15, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", state:"Solid", year:"2003", group:"15", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:116,sym:"Lv", name:"Livermorium",  mass:293,     cat:"post-trans",  row:7, col:16, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", state:"Solid", year:"2000", group:"16", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:117,sym:"Ts", name:"Tennessine",   mass:294,     cat:"halogen",     row:7, col:17, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", state:"Solid", year:"2010", group:"17", period:"7", ions:[],                      ie:"—",     ir:"—"},
  {z:118,sym:"Og", name:"Oganesson",    mass:294,     cat:"noble-gas",   row:7, col:18, melt:"—",         boil:"—",         eneg:"—",    radius:"—",      config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", state:"Solid", year:"2002", group:"18", period:"7", ions:[],                      ie:"—",     ir:"—"},
];

const CAT_COLORS = {
  "alkali":"var(--c-alkali)","alkali-earth":"var(--c-alkali-earth)",
  "transition":"var(--c-transition)","post-trans":"var(--c-post)",
  "metalloid":"var(--c-metalloid)","nonmetal":"var(--c-nonmetal)",
  "halogen":"var(--c-halogen)","noble-gas":"var(--c-noble)",
  "lanthanide":"var(--c-lanthanide)","actinide":"var(--c-actinide)",
};
const CAT_LABELS = {
  "alkali":"Alkali Metal","alkali-earth":"Alkaline Earth Metal",
  "transition":"Transition Metal","post-trans":"Post-Transition Metal",
  "metalloid":"Metalloid","nonmetal":"Nonmetal","halogen":"Halogen",
  "noble-gas":"Noble Gas","lanthanide":"Lanthanide","actinide":"Actinide",
};

// ─── TREND CONFIG ─────────────────────────────────────────────────
const TREND_DATA = {
  electronegativity: {
    title:"Electronegativity (Pauling Scale)", unit:"",
    note:"Electronegativity increases across a period (left→right) as nuclear charge increases with little added shielding. It decreases down a group as valence electrons are farther from the nucleus and more shielded. Fluorine (3.98) is the most electronegative element; cesium and francium are the least.",
    getValue: el => el.eneg==="—" ? null : parseFloat(el.eneg),
    display: el => el.eneg==="—" ? "" : el.eneg,
  },
  ionization: {
    title:"First Ionization Energy (kJ/mol)", unit:"kJ/mol",
    note:"First ionization energy (IE₁) is the energy needed to remove the outermost electron from a gaseous neutral atom. It generally increases across a period and decreases down a group. Noble gases have the highest IE₁; alkali metals have the lowest.",
    getValue: el => el.ie==="—" ? null : parseFloat(el.ie),
    display: el => el.ie==="—" ? "" : el.ie,
  },
  "atomic-radius": {
    title:"Atomic Radius (pm)", unit:"pm",
    note:"Atomic radius decreases across a period as increasing nuclear charge pulls electrons closer with little additional shielding. It increases down a group as electrons occupy higher principal energy levels farther from the nucleus.",
    getValue: el => (!el.radius||el.radius==="—") ? null : parseFloat(el.radius),
    display: el => el.radius==="—" ? "" : el.radius,
  },
  "ionic-radius": {
    title:"Ionic Radius – most common ion (pm)", unit:"pm",
    note:"Ionic radius reflects the size of the most stable ion. Cations are smaller than their parent atoms (fewer electrons, same or higher nuclear charge). Anions are larger than their parent atoms (more electrons, decreased effective nuclear pull per electron).",
    getValue: el => (!el.ir||el.ir==="—") ? null : parseFloat(el.ir),
    display: el => el.ir==="—" ? "" : el.ir,
  },
  // Combined radii entry — routing handled in openTrend()
  "radii": {
    title:"Atomic Radius (pm)", unit:"pm",
    note:"",
    getValue: el => (!el.radius||el.radius==="—") ? null : parseFloat(el.radius),
    display: el => el.radius==="—" ? "" : el.radius,
  },
};

// ─── BUILD GRID ───────────────────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById("ptGrid");
  ELEMENTS.forEach(el => {
    const cell = document.createElement("div");
    cell.className = `el ${el.cat}`;
    cell.style.gridRow = el.row;
    cell.style.gridColumn = el.col;
    const ionLabel = el.ions.length ? el.ions.slice(0,2).join(" ") : "";
    cell.innerHTML = `
      <div class="atomic-num">${el.z}</div>
      <div class="symbol">${el.sym}</div>
      <div class="mass">${el.mass}</div>
      ${ionLabel ? `<div class="ion-charge">${ionLabel}</div>` : ""}
    `;
    cell.addEventListener("click", () => openModal(el));
    grid.appendChild(cell);
  });

  const lanGap = document.createElement("div");
  lanGap.style.gridRow=6; lanGap.style.gridColumn="4 / 18";
  lanGap.className="gap-block";
  lanGap.textContent="* Lanthanides (57–71) — see below";
  grid.appendChild(lanGap);

  const actGap = document.createElement("div");
  actGap.style.gridRow=7; actGap.style.gridColumn="4 / 18";
  actGap.className="gap-block";
  actGap.textContent="** Actinides (89–103) — see below";
  grid.appendChild(actGap);

  const sectionGap = document.createElement("div");
  sectionGap.className="section-gap"; sectionGap.style.gridRow=8;
  grid.appendChild(sectionGap);

  const lanLabel = document.createElement("div");
  lanLabel.style.gridRow=8; lanLabel.style.gridColumn="1 / 4";
  lanLabel.className="series-label";
  lanLabel.innerHTML=`<span style="color:var(--c-lanthanide);font-weight:800">* Lanthanides</span>`;
  grid.appendChild(lanLabel);

  const actLabel = document.createElement("div");
  actLabel.style.gridRow=9; actLabel.style.gridColumn="1 / 4";
  actLabel.className="series-label";
  actLabel.innerHTML=`<span style="color:var(--c-actinide);font-weight:800">** Actinides</span>`;
  grid.appendChild(actLabel);

  const centerInfo = document.createElement("div");
  centerInfo.style.gridRow="1 / 4"; centerInfo.style.gridColumn="2 / 13";
  centerInfo.className="center-info";
  centerInfo.innerHTML=`
    <div class="big-title">Periodic Table<br>of Elements</div>
    <div class="sub">Click any element for details</div>
  `;
  grid.appendChild(centerInfo);
}

// ─── MODAL ────────────────────────────────────────────────────────
function openModal(el) {
  const overlay = document.getElementById("modalOverlay");
  const color = CAT_COLORS[el.cat];
  document.getElementById("mBox").style.background =
    `color-mix(in srgb, ${color} 40%, var(--surface2))`;
  document.getElementById("mNum").textContent = el.z;
  document.getElementById("mSym").textContent = el.sym;
  document.getElementById("mMass").textContent = el.mass;
  document.getElementById("mName").textContent = el.name;
  const catBadge = document.getElementById("mCat");
  catBadge.textContent = CAT_LABELS[el.cat] || el.cat;
  catBadge.style.background = `color-mix(in srgb, ${color} 80%, #000)`;

  const ionContainer = document.getElementById("mIons");
  if (el.ions.length) {
    ionContainer.innerHTML = el.ions.map(i => `<span class="ion-tag">${i}</span>`).join("");
  } else {
    ionContainer.innerHTML = `<span style="color:var(--text-muted);font-size:0.82rem">No common ions${el.cat==="noble-gas" ? " (noble gas)" : ""}</span>`;
  }

  document.getElementById("mMelt").textContent = el.melt;
  document.getElementById("mBoil").textContent = el.boil;
  document.getElementById("mElectroneg").textContent =
    el.eneg==="—" ? "Not applicable" : `${el.eneg} (Pauling)`;
  document.getElementById("mRadius").textContent =
    el.radius==="—" ? "Unknown" : el.radius;
  document.getElementById("mIE").textContent =
    el.ie==="—" ? "Unknown" : `${el.ie} kJ/mol`;
  document.getElementById("mIonicR").textContent =
    el.ir==="—" ? "Unknown" : el.ir;
  document.getElementById("mConfig").textContent = el.config;
  document.getElementById("mExtra").textContent =
    `${el.state} at room temperature  ·  Discovered: ${el.year}  ·  Group ${el.group}, Period ${el.period}`;
  overlay.classList.add("open");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target===e.currentTarget) closeModal();
});

// ─── PANEL HELPERS ────────────────────────────────────────────────
function openPanel(id) { document.getElementById(id).classList.add("open"); }
function closePanel(id) { document.getElementById(id).classList.remove("open"); }
document.querySelectorAll(".panel-overlay").forEach(p => {
  p.addEventListener("click", e => { if (e.target===p) p.classList.remove("open"); });
});

// ─── TREND VISUALIZER ─────────────────────────────────────────────
let currentTrendKey = null;

function buildHeatmap(key) {
  const cfg = TREND_DATA[key];
  const values = ELEMENTS.map(el => cfg.getValue(el)).filter(v => v!==null);
  const min = Math.min(...values);
  const max = Math.max(...values);

  function getColor(val) {
    if (val===null) return "rgba(255,255,255,0.05)";
    const t = (val-min)/(max-min);
    if (t < 0.33) {
      const s = t/0.33;
      return `rgb(${Math.round(26+s*12)},${Math.round(58+s*127)},${Math.round(111+s*37)})`;
    } else if (t < 0.66) {
      const s = (t-0.33)/0.33;
      return `rgb(${Math.round(38+s*211)},${Math.round(185-s*36)},${Math.round(148-s*90)})`;
    } else {
      const s = (t-0.66)/0.34;
      return `rgb(${Math.round(249-s*10)},${Math.round(149-s*81)},58)`;
    }
  }

  const grid = document.getElementById("trendGrid");
  grid.innerHTML = "";
  const posMap = {};
  ELEMENTS.forEach(el => { posMap[`${el.row},${el.col}`] = el; });

  for (let r=1; r<=9; r++) {
    if (r===8) {
      const gap = document.createElement("div");
      gap.style.cssText="grid-column:1/-1;height:4px;";
      grid.appendChild(gap);
      continue;
    }
    for (let c=1; c<=18; c++) {
      const el = posMap[`${r},${c}`];
      if (!el) {
        const empty = document.createElement("div");
        empty.className="trend-empty";
        grid.appendChild(empty);
        continue;
      }
      const val = cfg.getValue(el);
      const cell = document.createElement("div");
      cell.className="trend-cell";
      cell.style.background = getColor(val);
      cell.innerHTML=`<div class="tc-sym">${el.sym}</div><div class="tc-val">${cfg.display(el)}</div>`;
      cell.title=`${el.name}: ${cfg.display(el)||"—"} ${cfg.unit}`;
      grid.appendChild(cell);
    }
  }

  document.getElementById("trendLow").textContent=`Low (${min} ${cfg.unit})`;
  document.getElementById("trendHigh").textContent=`High (${max} ${cfg.unit})`;
}

function buildIEGraph() {
  const svg = document.getElementById("ieGraphSvg");
  const W = 860, H = 320, padL = 52, padR = 20, padT = 20, padB = 40;
  const plotW = W - padL - padR, plotH = H - padT - padB;

  const data = ELEMENTS
    .filter(el => el.ie !== "—" && !isNaN(parseFloat(el.ie)))
    .map(el => ({z: el.z, sym: el.sym, val: parseFloat(el.ie), cat: el.cat}));

  const maxVal = Math.max(...data.map(d => d.val));
  const minVal = 0;

  const xScale = z => padL + ((z-1) / 117) * plotW;
  const yScale = v => padT + plotH - ((v - minVal) / (maxVal - minVal)) * plotH;

  const CAT_COLORS_SVG = {
    "alkali":"#ef4444","alkali-earth":"#f97316","transition":"#3b82f6",
    "post-trans":"#8b5cf6","metalloid":"#14b8a6","nonmetal":"#22c55e",
    "halogen":"#eab308","noble-gas":"#ec4899","lanthanide":"#06b6d4","actinide":"#f59e0b"
  };

  // Build path
  let pathD = "";
  data.forEach((d, i) => {
    const x = xScale(d.z), y = yScale(d.val);
    pathD += (i===0 ? `M${x},${y}` : ` L${x},${y}`);
  });

  // Y grid lines
  let gridLines = "";
  for (let v=0; v<=maxVal; v+=500) {
    const y = yScale(v);
    gridLines += `<line x1="${padL}" y1="${y}" x2="${padL+plotW}" y2="${y}" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>`;
    gridLines += `<text x="${padL-5}" y="${y+4}" text-anchor="end" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">${v}</text>`;
  }

  // Period dividers (Z values at start of each period)
  const periodStarts = [1,3,11,19,37,55,87];
  let periodLines = "";
  periodStarts.forEach((z,i) => {
    const x = xScale(z);
    const label = i===0?"P1":`P${i+1}`;
    periodLines += `<line x1="${x}" y1="${padT}" x2="${x}" y2="${padT+plotH}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="3,3"/>`;
    periodLines += `<text x="${x+3}" y="${padT+plotH+14}" fill="rgba(255,255,255,0.35)" font-size="8" font-family="monospace">${label}</text>`;
  });

  // Dots
  let dots = "";
  data.forEach(d => {
    const x = xScale(d.z), y = yScale(d.val);
    const col = CAT_COLORS_SVG[d.cat] || "#94a3b8";
    dots += `<circle cx="${x}" cy="${y}" r="3" fill="${col}" stroke="rgba(0,0,0,0.5)" stroke-width="0.5">
      <title>${d.sym} (Z=${d.z}): ${d.val} kJ/mol</title>
    </circle>`;
  });

  // Notable labels (noble gases + H, Na, K peaks)
  const labelZ = [2,10,18,36,54,86,1];
  let labels = "";
  labelZ.forEach(z => {
    const d = data.find(x=>x.z===z);
    if (!d) return;
    const x = xScale(d.z), y = yScale(d.val);
    labels += `<text x="${x}" y="${y-6}" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="8.5" font-family="sans-serif" font-weight="700">${d.sym}</text>`;
  });

  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("width", W);
  svg.setAttribute("height", H);
  svg.innerHTML = `
    <rect width="${W}" height="${H}" fill="transparent"/>
    ${gridLines}
    ${periodLines}
    <path d="${pathD}" fill="none" stroke="rgba(56,189,248,0.5)" stroke-width="1.2"/>
    ${dots}
    ${labels}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT+plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <line x1="${padL}" y1="${padT+plotH}" x2="${padL+plotW}" y2="${padT+plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <text x="${padL+plotW/2}" y="${H-2}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="10" font-family="monospace">Atomic Number (Z)</text>
    <text x="12" y="${padT+plotH/2}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="10" font-family="monospace" transform="rotate(-90,12,${padT+plotH/2})">IE₁ (kJ/mol)</text>
  `;
}

function openTrend(key) {
  currentTrendKey = key;
  const cfg = TREND_DATA[key];
  document.getElementById("trendTitle").textContent = cfg.title;
  document.getElementById("trendNote").textContent = cfg.note;

  const isIE = key === "ionization";
  const isRadii = key === "radii";

  // Show/hide toggles
  document.getElementById("ieToggle").style.display = isIE ? "flex" : "none";
  document.getElementById("radiiTabs").style.display = isRadii ? "flex" : "none";

  // Reset to heatmap view for all
  document.getElementById("trendHeatmapView").style.display = "";
  document.getElementById("trendGraphView").style.display = "none";
  document.getElementById("radiiCompareView").style.display = "none";

  if (isIE) {
    document.getElementById("btnViewHeatmap").classList.add("active");
    document.getElementById("btnViewGraph").classList.remove("active");
  }
  if (isRadii) {
    document.getElementById("btnRadiiAtomic").classList.add("active");
    document.getElementById("btnRadiiIonic").classList.remove("active");
    document.getElementById("btnRadiiCompare").classList.remove("active");
    // Default to atomic radius heatmap
    buildHeatmap("atomic-radius");
    document.getElementById("trendTitle").textContent = TREND_DATA["atomic-radius"].title;
    document.getElementById("trendNote").textContent = TREND_DATA["atomic-radius"].note;
  } else {
    buildHeatmap(key);
  }

  openPanel("trendOverlay");
}


// ─── IE GRAPH TOGGLE ─────────────────────────────────────────────
document.getElementById("btnViewHeatmap").addEventListener("click", () => {
  document.getElementById("trendHeatmapView").style.display = "";
  document.getElementById("trendGraphView").style.display = "none";
  document.getElementById("btnViewHeatmap").classList.add("active");
  document.getElementById("btnViewGraph").classList.remove("active");
});
document.getElementById("btnViewGraph").addEventListener("click", () => {
  document.getElementById("trendHeatmapView").style.display = "none";
  document.getElementById("trendGraphView").style.display = "";
  document.getElementById("btnViewHeatmap").classList.remove("active");
  document.getElementById("btnViewGraph").classList.add("active");
  buildIEGraph();
});

// ─── RADII TAB LISTENERS ─────────────────────────────────────────
document.getElementById("btnRadiiAtomic").addEventListener("click", () => {
  document.getElementById("trendHeatmapView").style.display = "";
  document.getElementById("radiiCompareView").style.display = "none";
  document.getElementById("btnRadiiAtomic").classList.add("active");
  document.getElementById("btnRadiiIonic").classList.remove("active");
  document.getElementById("btnRadiiCompare").classList.remove("active");
  buildHeatmap("atomic-radius");
  document.getElementById("trendTitle").textContent = TREND_DATA["atomic-radius"].title;
  document.getElementById("trendNote").textContent = TREND_DATA["atomic-radius"].note;
});
document.getElementById("btnRadiiIonic").addEventListener("click", () => {
  document.getElementById("trendHeatmapView").style.display = "";
  document.getElementById("radiiCompareView").style.display = "none";
  document.getElementById("btnRadiiAtomic").classList.remove("active");
  document.getElementById("btnRadiiIonic").classList.add("active");
  document.getElementById("btnRadiiCompare").classList.remove("active");
  buildHeatmap("ionic-radius");
  document.getElementById("trendTitle").textContent = TREND_DATA["ionic-radius"].title;
  document.getElementById("trendNote").textContent = TREND_DATA["ionic-radius"].note;
});
document.getElementById("btnRadiiCompare").addEventListener("click", () => {
  document.getElementById("trendHeatmapView").style.display = "none";
  document.getElementById("radiiCompareView").style.display = "";
  document.getElementById("btnRadiiAtomic").classList.remove("active");
  document.getElementById("btnRadiiIonic").classList.remove("active");
  document.getElementById("btnRadiiCompare").classList.add("active");
  document.getElementById("trendTitle").textContent = "Atomic vs Ionic Radii (pm)";
  document.getElementById("trendNote").textContent = "";
  buildRadiiCompare();
});

// ─── COMMON IONS CHART ────────────────────────────────────────────
function buildIonsChart() {
  // Cations: left column / right column pairs (matching data booklet two-col layout)
  const cationPairs = [
    [{sym:"Al³⁺", name:"Aluminum"},            {sym:"Pb⁴⁺", name:"Lead(IV), plumbic"}],
    [{sym:"NH₄⁺", name:"Ammonium"},             {sym:"Li⁺",  name:"Lithium"}],
    [{sym:"Ba²⁺", name:"Barium"},               {sym:"Mg²⁺", name:"Magnesium"}],
    [{sym:"Ca²⁺", name:"Calcium"},              {sym:"Mn²⁺", name:"Manganese(II), manganous"}],
    [{sym:"Cr²⁺", name:"Chromium(II), chromous"},{sym:"Mn⁴⁺", name:"Manganese(IV)"}],
    [{sym:"Cr³⁺", name:"Chromium(III), chromic"},{sym:"Hg₂²⁺",name:"Mercury(I)*, mercurous"}],
    [{sym:"Cu⁺",  name:"Copper(I)*, cuprous"},  {sym:"Hg²⁺", name:"Mercury(II), mercuric"}],
    [{sym:"Cu²⁺", name:"Copper(II), cupric"},   {sym:"K⁺",   name:"Potassium"}],
    [{sym:"H⁺",   name:"Hydrogen"},             {sym:"Ag⁺",  name:"Silver"}],
    [{sym:"H₃O⁺", name:"Hydronium"},            {sym:"Na⁺",  name:"Sodium"}],
    [{sym:"Fe²⁺", name:"Iron(II)*, ferrous"},   {sym:"Sn²⁺", name:"Tin(II)*, stannous"}],
    [{sym:"Fe³⁺", name:"Iron(III), ferric"},    {sym:"Sn⁴⁺", name:"Tin(IV), stannic"}],
    [{sym:"Pb²⁺", name:"Lead(II), plumbous"},   {sym:"Zn²⁺", name:"Zinc"}],
  ];

  // Anions: left column / right column pairs
  const anionPairs = [
    [{sym:"Br⁻",      name:"Bromide"},                  {sym:"OH⁻",     name:"Hydroxide"}],
    [{sym:"CO₃²⁻",    name:"Carbonate"},                {sym:"ClO⁻",    name:"Hypochlorite"}],
    [{sym:"ClO₃⁻",    name:"Chlorate"},                 {sym:"I⁻",      name:"Iodide"}],
    [{sym:"Cl⁻",      name:"Chloride"},                 {sym:"HPO₄²⁻",  name:"Monohydrogen phosphate"}],
    [{sym:"ClO₂⁻",    name:"Chlorite"},                 {sym:"NO₃⁻",    name:"Nitrate"}],
    [{sym:"CrO₄²⁻",   name:"Chromate"},                 {sym:"NO₂⁻",    name:"Nitrite"}],
    [{sym:"CN⁻",      name:"Cyanide"},                  {sym:"C₂O₄²⁻",  name:"Oxalate"}],
    [{sym:"Cr₂O₇²⁻",  name:"Dichromate"},               {sym:"O²⁻",     name:"Oxide**"}],
    [{sym:"H₂PO₄⁻",   name:"Dihydrogen phosphate"},     {sym:"ClO₄⁻",   name:"Perchlorate"}],
    [{sym:"CH₃COO⁻",  name:"Ethanoate, acetate"},        {sym:"MnO₄⁻",   name:"Permanganate"}],
    [{sym:"F⁻",       name:"Fluoride"},                 {sym:"PO₄³⁻",   name:"Phosphate"}],
    [{sym:"HCO₃⁻",    name:"Hydrogen carbonate, bicarbonate"},{sym:"SO₄²⁻", name:"Sulphate"}],
    [{sym:"HC₂O₄⁻",   name:"Hydrogen oxalate, binoxalate"},{sym:"S²⁻",  name:"Sulphide"}],
    [{sym:"HSO₄⁻",    name:"Hydrogen sulphate, bisulphate"},{sym:"SO₃²⁻",name:"Sulphite"}],
    [{sym:"HS⁻",      name:"Hydrogen sulphide, bisulphide"},{sym:"SCN⁻", name:"Thiocyanate"}],
    [{sym:"HSO₃⁻",    name:"Hydrogen sulphite, bisulphite"},{sym:"",     name:""}],
  ];

  const makeEntry = (item, cls) => item.sym
    ? `<div class="ions-entry">
        <span class="ions-sym ${cls}">${item.sym}</span>
        <span class="ions-name">${item.name}</span>
       </div>`
    : `<div class="ions-entry" style="visibility:hidden"><span class="ions-sym">&nbsp;</span></div>`;

  const makeTwoCol = (pairs, cls) => {
    let left="", right="";
    pairs.forEach(p=>{
      left  += makeEntry(p[0], cls);
      right += makeEntry(p[1]||{}, cls);
    });
    return `<div class="ions-two-col"><div class="ions-col">${left}</div><div class="ions-col">${right}</div></div>`;
  };

  document.getElementById("ionsBody").innerHTML = `
    <div class="ions-title">
      <h3>Names, Formulae, and Charges of Some Common Ions</h3>
      <div class="ions-note">* Aqueous solutions are readily oxidized by air. &nbsp; ** Not stable in aqueous solutions.</div>
    </div>
    <div class="ions-section-header">Positive Ions (Cations)</div>
    ${makeTwoCol(cationPairs, "pos-ion")}
    <div class="ions-section-header" style="margin-top:18px;">Negative Ions (Anions)</div>
    ${makeTwoCol(anionPairs, "neg-ion")}
  `;
}

// ─── SOLUBILITY CHART (booklet rules style) ───────────────────────
function buildSolubilityChart() {
  // Data matches BC Chem 12 data booklet page 4 - rules format
  const rules = [
    {
      anions: ["All"],
      rows: [
        {cations: "Alkali ions: Li⁺, Na⁺, K⁺, Rb⁺, Cs⁺, Fr⁺", solubility: "Soluble", cls:"sol-soluble"},
      ]
    },
    {
      anions: ["All"],
      rows: [
        {cations: "Hydrogen ion: H⁺", solubility: "Soluble", cls:"sol-soluble"},
      ]
    },
    {
      anions: ["All"],
      rows: [
        {cations: "Ammonium ion: NH₄⁺", solubility: "Soluble", cls:"sol-soluble"},
      ]
    },
    {
      anions: ["Nitrate, NO₃⁻"],
      rows: [
        {cations: "All", solubility: "Soluble", cls:"sol-soluble"},
      ]
    },
    {
      anions: ["Chloride, Cl⁻", "or Bromide, Br⁻", "or Iodide, I⁻"],
      rows: [
        {cations: "All others", solubility: "Soluble", cls:"sol-soluble"},
        {cations: "Ag⁺, Pb²⁺, Cu⁺", solubility: "Low Solubility", cls:"sol-low"},
      ]
    },
    {
      anions: ["Sulphate, SO₄²⁻"],
      rows: [
        {cations: "All others", solubility: "Soluble", cls:"sol-soluble"},
        {cations: "Ag⁺, Ca²⁺, Sr²⁺, Ba²⁺, Pb²⁺", solubility: "Low Solubility", cls:"sol-low"},
      ]
    },
    {
      anions: ["Sulphide, S²⁻"],
      rows: [
        {cations: "Alkali ions, H⁺, NH₄⁺, Be²⁺, Mg²⁺, Ca²⁺, Sr²⁺, Ba²⁺", solubility: "Soluble", cls:"sol-soluble"},
        {cations: "All others", solubility: "Low Solubility", cls:"sol-low"},
      ]
    },
    {
      anions: ["Hydroxide, OH⁻"],
      rows: [
        {cations: "Alkali ions, H⁺, NH₄⁺, Sr²⁺", solubility: "Soluble", cls:"sol-soluble"},
        {cations: "All others", solubility: "Low Solubility", cls:"sol-low"},
      ]
    },
    {
      anions: ["Phosphate, PO₄³⁻", "or Carbonate, CO₃²⁻", "or Sulphite, SO₃²⁻"],
      rows: [
        {cations: "Alkali ions, H⁺, NH₄⁺", solubility: "Soluble", cls:"sol-soluble"},
        {cations: "All others", solubility: "Low Solubility", cls:"sol-low"},
      ]
    },
  ];

  let rows = "";
  rules.forEach((rule, ri) => {
    const anionCell = rule.anions.map((a, ai) =>
      `<span class="sol-anion">${a.startsWith("or") ? '<span class="sol-or">'+a+'</span>' : a}</span>`
    ).join("<br>");

    rule.rows.forEach((r, rowIdx) => {
      const isFirst = rowIdx === 0;
      const isDashed = rule.rows.length > 1 && rowIdx > 0;
      const borderStyle = isDashed ? "border-top:1px dashed rgba(100,116,139,0.4);" : "";
      const topBorder = (ri > 0 && rowIdx === 0) ? "border-top:2px solid var(--border);" : "";

      if (isFirst) {
        rows += `<tr class="sol-rule-row">
          <td rowspan="${rule.rows.length}" style="${topBorder}">${anionCell}</td>
          <td style="${borderStyle}">${r.cations}</td>
          <td class="${r.cls}" style="${borderStyle} text-align:right;">${r.solubility}</td>
        </tr>`;
      } else {
        rows += `<tr class="sol-sub-row">
          <td style="${borderStyle}">${r.cations}</td>
          <td class="${r.cls}" style="${borderStyle} text-align:right;">${r.solubility}</td>
        </tr>`;
      }
    });
  });

  document.getElementById("solubilityBody").innerHTML = `
    <div class="solrules-wrap">
      <div class="solrules-title">
        <h3>Solubility of Common Compounds in Water</h3>
        <p>The term <em>soluble</em> here means &gt; 0.1 mol/L at 25°C.</p>
      </div>
      <table class="solrules-table">
        <thead>
          <tr>
            <th style="width:200px">Negative Ions (Anions)</th>
            <th>Positive Ions (Cations)</th>
            <th style="width:130px;text-align:right">Solubility of Compounds</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ─── ACTIVITY SERIES ──────────────────────────────────────────────
function buildActivitySeries() {
  const metals=[
    {name:"Lithium",   sym:"Li",  note:"Most reactive — reacts vigorously with water"},
    {name:"Potassium", sym:"K",   note:"Reacts explosively with cold water"},
    {name:"Barium",    sym:"Ba",  note:"Reacts rapidly with cold water"},
    {name:"Calcium",   sym:"Ca",  note:"Reacts readily with cold water"},
    {name:"Sodium",    sym:"Na",  note:"Reacts vigorously with cold water"},
    {name:"Magnesium", sym:"Mg",  note:"Reacts slowly with cold water; rapidly with steam"},
    {name:"Aluminum",  sym:"Al",  note:"Reacts with steam and dilute acids"},
    {name:"Zinc",      sym:"Zn",  note:"Reacts with steam and dilute acids"},
    {name:"Iron",      sym:"Fe",  note:"Reacts with steam and dilute acids"},
    {name:"Nickel",    sym:"Ni",  note:"Reacts slowly with dilute acids"},
    {name:"Tin",       sym:"Sn",  note:"Reacts slowly with dilute acids"},
    {name:"Lead",      sym:"Pb",  note:"Reacts very slowly with dilute acids"},
    {name:"Hydrogen",  sym:"H₂",  note:"Reference — not a metal", ref:true},
    {name:"Copper",    sym:"Cu",  note:"Does not react with dilute acids; reacts with HNO₃"},
    {name:"Silver",    sym:"Ag",  note:"Does not react with dilute acids"},
    {name:"Platinum",  sym:"Pt",  note:"Very unreactive; dissolves only in aqua regia"},
    {name:"Gold",      sym:"Au",  note:"Least reactive — dissolves only in aqua regia"},
  ];
  let html=`<table class="ref-table">
    <thead><tr><th>#</th><th>Element</th><th>Symbol</th><th>Reactivity Notes</th></tr></thead><tbody>`;
  metals.forEach((m,i)=>{
    const rs=m.ref?`style="background:color-mix(in srgb,var(--accent) 10%,var(--surface2));font-style:italic"`:"";
    html+=`<tr ${rs}><td style="color:var(--text-muted);font-family:'Space Mono',monospace;font-size:0.7rem">${i+1}</td>
      <td>${m.name}</td><td style="font-weight:700;font-size:0.95rem">${m.sym}</td>
      <td style="font-size:0.75rem;color:var(--text-muted)">${m.note}</td></tr>`;
  });
  html+=`</tbody></table>
  <p class="trend-note" style="margin-top:12px">A metal higher in the series displaces a lower metal from its salt solution. Metals above H₂ react with dilute acids to produce hydrogen gas. Used to predict single-replacement reactions.</p>`;
  document.getElementById("activityBody").innerHTML=html;
}

// ─── Ka CHART (exact booklet data) ───────────────────────────────
function buildKaChart() {
  const acids=[
    {name:"Perchloric",                    acid:"HClO₄",           arrow:"→", base:"H⁺ + ClO₄⁻",                    ka:"very large", strong:true},
    {name:"Hydriodic",                     acid:"HI",              arrow:"→", base:"H⁺ + I⁻",                       ka:"very large", strong:true},
    {name:"Hydrobromic",                   acid:"HBr",             arrow:"→", base:"H⁺ + Br⁻",                      ka:"very large", strong:true},
    {name:"Hydrochloric",                  acid:"HCl",             arrow:"→", base:"H⁺ + Cl⁻",                      ka:"very large", strong:true},
    {name:"Nitric",                        acid:"HNO₃",            arrow:"→", base:"H⁺ + NO₃⁻",                     ka:"very large", strong:true},
    {name:"Sulphuric",                     acid:"H₂SO₄",           arrow:"→", base:"H⁺ + HSO₄⁻",                    ka:"very large", strong:true},
    {name:"Hydronium Ion",                 acid:"H₃O⁺",            arrow:"⇌", base:"H⁺ + H₂O",                      ka:"1.0",        ref:true},
    {name:"Iodic",                         acid:"HIO₃",            arrow:"⇌", base:"H⁺ + IO₃⁻",                     ka:"1.7×10⁻¹"},
    {name:"Oxalic",                        acid:"H₂C₂O₄",          arrow:"⇌", base:"H⁺ + HC₂O₄⁻",                   ka:"5.9×10⁻²"},
    {name:"Sulphurous (SO₂+H₂O)",          acid:"H₂SO₃",           arrow:"⇌", base:"H⁺ + HSO₃⁻",                    ka:"1.5×10⁻²"},
    {name:"Hydrogen sulphate ion",         acid:"HSO₄⁻",           arrow:"⇌", base:"H⁺ + SO₄²⁻",                    ka:"1.2×10⁻²"},
    {name:"Phosphoric",                    acid:"H₃PO₄",           arrow:"⇌", base:"H⁺ + H₂PO₄⁻",                   ka:"7.5×10⁻³"},
    {name:"Hexaaquoiron ion, iron(III) ion",acid:"Fe(H₂O)₆³⁺",    arrow:"⇌", base:"H⁺ + Fe(H₂O)₅(OH)²⁺",           ka:"6.0×10⁻³"},
    {name:"Citric",                        acid:"H₃C₆H₅O₇",        arrow:"⇌", base:"H⁺ + H₂C₆H₅O₇⁻",               ka:"7.1×10⁻⁴"},
    {name:"Nitrous",                       acid:"HNO₂",            arrow:"⇌", base:"H⁺ + NO₂⁻",                     ka:"4.6×10⁻⁴"},
    {name:"Hydrofluoric",                  acid:"HF",              arrow:"⇌", base:"H⁺ + F⁻",                       ka:"3.5×10⁻⁴"},
    {name:"Methanoic, formic",             acid:"HCOOH",           arrow:"⇌", base:"H⁺ + HCOO⁻",                    ka:"1.8×10⁻⁴"},
    {name:"Hexaaquochromium ion, chromium(III) ion",acid:"Cr(H₂O)₆³⁺",arrow:"⇌",base:"H⁺ + Cr(H₂O)₅(OH)²⁺",      ka:"1.5×10⁻⁵"},
    {name:"Benzoic",                       acid:"C₆H₅COOH",        arrow:"⇌", base:"H⁺ + C₆H₅COO⁻",                ka:"6.5×10⁻⁵"},
    {name:"Hydrogen oxalate ion",          acid:"HC₂O₄⁻",          arrow:"⇌", base:"H⁺ + C₂O₄²⁻",                   ka:"6.4×10⁻⁵"},
    {name:"Ethanoic, acetic",              acid:"CH₃COOH",         arrow:"⇌", base:"H⁺ + CH₃COO⁻",                  ka:"1.8×10⁻⁵"},
    {name:"Dihydrogen citrate ion",        acid:"H₂C₆H₅O₇⁻",       arrow:"⇌", base:"H⁺ + HC₆H₅O₇²⁻",               ka:"1.7×10⁻⁵"},
    {name:"Hexaaquoaluminum ion, aluminum ion",acid:"Al(H₂O)₆³⁺",  arrow:"⇌", base:"H⁺ + Al(H₂O)₅(OH)²⁺",          ka:"1.4×10⁻⁵"},
    {name:"Carbonic (CO₂+H₂O)",            acid:"H₂CO₃",           arrow:"⇌", base:"H⁺ + HCO₃⁻",                    ka:"4.3×10⁻⁷"},
    {name:"Monohydrogen citrate ion",      acid:"HC₆H₅O₇²⁻",       arrow:"⇌", base:"H⁺ + C₆H₅O₇³⁻",                ka:"4.1×10⁻⁷"},
    {name:"Hydrogen sulphite ion",         acid:"HSO₃⁻",           arrow:"⇌", base:"H⁺ + SO₃²⁻",                    ka:"1.0×10⁻⁷"},
    {name:"Hydrogen sulphide",             acid:"H₂S",             arrow:"⇌", base:"H⁺ + HS⁻",                      ka:"9.1×10⁻⁸"},
    {name:"Dihydrogen phosphate ion",      acid:"H₂PO₄⁻",          arrow:"⇌", base:"H⁺ + HPO₄²⁻",                   ka:"6.2×10⁻⁸"},
    {name:"Boric",                         acid:"H₃BO₃",           arrow:"⇌", base:"H⁺ + H₂BO₃⁻",                   ka:"7.3×10⁻¹⁰"},
    {name:"Ammonium ion",                  acid:"NH₄⁺",            arrow:"⇌", base:"H⁺ + NH₃",                      ka:"5.6×10⁻¹⁰"},
    {name:"Hydrocyanic",                   acid:"HCN",             arrow:"⇌", base:"H⁺ + CN⁻",                      ka:"4.9×10⁻¹⁰"},
    {name:"Phenol",                        acid:"C₆H₅OH",          arrow:"⇌", base:"H⁺ + C₆H₅O⁻",                   ka:"1.3×10⁻¹⁰"},
    {name:"Hydrogen carbonate ion",        acid:"HCO₃⁻",           arrow:"⇌", base:"H⁺ + CO₃²⁻",                    ka:"5.6×10⁻¹¹"},
    {name:"Hydrogen peroxide",             acid:"H₂O₂",            arrow:"⇌", base:"H⁺ + HO₂⁻",                     ka:"2.4×10⁻¹²"},
    {name:"Monohydrogen phosphate ion",    acid:"HPO₄²⁻",          arrow:"⇌", base:"H⁺ + PO₄³⁻",                    ka:"2.2×10⁻¹³"},
    {name:"Water",                         acid:"H₂O",             arrow:"⇌", base:"H⁺ + OH⁻",                      ka:"1.0×10⁻¹⁴"},
    {name:"Hydroxide ion",                 acid:"OH⁻",             arrow:"←", base:"H⁺ + O²⁻",                      ka:"very small", vweak:true},
    {name:"Ammonia",                       acid:"NH₃",             arrow:"←", base:"H⁺ + NH₂⁻",                     ka:"very small", vweak:true},
  ];

  let rows="";
  acids.forEach(a=>{
    let rowCls="";
    if(a.strong){rowCls=' class="ka-strong-row"';}
    if(a.ref){rowCls=' class="ka-ref-row"';}
    if(a.vweak){rowCls=' class="ka-strong-row" style="opacity:0.7"';}
    rows+=`<tr${rowCls}>
      <td class="ka-name">${a.name}</td>
      <td class="ka-acid">${a.acid}</td>
      <td class="ka-arrow">${a.arrow}</td>
      <td class="ka-base">${a.base}</td>
      <td class="ka-val">${a.ka}</td>
    </tr>`;
  });

  document.getElementById("kaBody").innerHTML=`
    <div class="ka-title">
      <h3>Relative Strengths of Brønsted-Lowry Acids and Bases</h3>
      <p>in aqueous solution at room temperature</p>
    </div>
    <div class="ka-wrap">
      <div class="ka-strength-bar left">
        <span class="ka-bar-arrow">▲</span>
        <div class="ka-bar-label">STRONG</div>
        <div class="ka-bar-line"></div>
        <div class="ka-bar-label">STRENGTH OF ACID</div>
        <div class="ka-bar-line"></div>
        <div class="ka-bar-label">WEAK</div>
        <span class="ka-bar-arrow">▼</span>
      </div>
      <div class="ka-strength-bar right">
        <span class="ka-bar-arrow">▼</span>
        <div class="ka-bar-label">WEAK</div>
        <div class="ka-bar-line"></div>
        <div class="ka-bar-label">STRENGTH OF BASE</div>
        <div class="ka-bar-line"></div>
        <div class="ka-bar-label">STRONG</div>
        <span class="ka-bar-arrow">▲</span>
      </div>
      <table class="ka-table">
        <thead>
          <tr>
            <th>Name of Acid</th>
            <th>Acid</th>
            <th style="text-align:center;width:30px"></th>
            <th>Base</th>
            <th class="ka-th-ka">K<sub>a</sub></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ─── STANDARD REDUCTION POTENTIALS ────────────────────────────────
function buildRedoxChart() {
  // Format matching data booklet: Oxidizing Agent + ne⁻ ⇌ Reducing Agent  E°
  const halfCells=[
    {ox:"F₂(g) + 2e⁻",            red:"2F⁻",                   e:"+2.87"},
    {ox:"S₂O₈²⁻ + 2e⁻",           red:"2SO₄²⁻",                e:"+2.01"},
    {ox:"H₂O₂ + 2H⁺ + 2e⁻",       red:"2H₂O",                  e:"+1.78"},
    {ox:"MnO₄⁻ + 8H⁺ + 5e⁻",      red:"Mn²⁺ + 4H₂O",           e:"+1.51"},
    {ox:"Au³⁺ + 3e⁻",              red:"Au(s)",                  e:"+1.50"},
    {ox:"BrO₃⁻ + 6H⁺ + 5e⁻",      red:"½Br₂(l) + 3H₂O",       e:"+1.48"},
    {ox:"ClO₄⁻ + 8H⁺ + 8e⁻",      red:"Cl⁻ + 4H₂O",            e:"+1.39"},
    {ox:"Cl₂(g) + 2e⁻",           red:"2Cl⁻",                   e:"+1.36"},
    {ox:"Cr₂O₇²⁻ + 14H⁺ + 6e⁻",   red:"2Cr³⁺ + 7H₂O",          e:"+1.23"},
    {ox:"½O₂(g) + 2H⁺ + 2e⁻",     red:"H₂O",                   e:"+1.23"},
    {ox:"MnO₂(s) + 4H⁺ + 2e⁻",    red:"Mn²⁺ + 2H₂O",           e:"+1.22"},
    {ox:"IO₃⁻ + 6H⁺ + 5e⁻",       red:"½I₂(s) + 3H₂O",         e:"+1.20"},
    {ox:"Br₂(l) + 2e⁻",           red:"2Br⁻",                   e:"+1.09"},
    {ox:"AuCl₄⁻ + 3e⁻",           red:"Au(s) + 4Cl⁻",           e:"+1.00"},
    {ox:"NO₃⁻ + 4H⁺ + 3e⁻",       red:"NO(g) + 2H₂O",          e:"+0.96"},
    {ox:"Hg₂²⁺ + 2e⁻",            red:"Hg(l)",                  e:"+0.85"},
    {ox:"Ag⁺ + e⁻",               red:"Ag(s)",                  e:"+0.80"},
    {ox:"½Hg₂²⁺ + e⁻",            red:"Hg(l)",                  e:"+0.80"},
    {ox:"Fe³⁺ + e⁻",              red:"Fe²⁺",                   e:"+0.77"},
    {ox:"O₂(g) + 2H⁺ + 2e⁻",      red:"H₂O₂",                  e:"+0.70"},
    {ox:"MnO₄⁻ + 2H₂O + 3e⁻",     red:"MnO₂ + 4OH⁻",           e:"+0.60"},
    {ox:"I₂(s) + 2e⁻",            red:"2I⁻",                    e:"+0.54"},
    {ox:"Cu⁺ + e⁻",               red:"Cu(s)",                  e:"+0.52"},
    {ox:"H₂SO₃ + 4H⁺ + 4e⁻",      red:"S(s) + 3H₂O",           e:"+0.45"},
    {ox:"Cu²⁺ + 2e⁻",             red:"Cu(s)",                  e:"+0.34"},
    {ox:"SO₄²⁻ + 4H⁺ + 2e⁻",      red:"H₂SO₃ + H₂O",           e:"+0.17"},
    {ox:"Cu²⁺ + e⁻",              red:"Cu⁺",                    e:"+0.15"},
    {ox:"Sn⁴⁺ + 2e⁻",             red:"Sn²⁺",                   e:"+0.15"},
    {ox:"S(s) + 2H⁺ + 2e⁻",       red:"H₂S(g)",                 e:"+0.14"},
    {ox:"2H⁺ + 2e⁻",              red:"H₂(g)",                  e:"0.00",  ref:true},
    {ox:"Pb²⁺ + 2e⁻",             red:"Pb(s)",                  e:"−0.13"},
    {ox:"Sn²⁺ + 2e⁻",             red:"Sn(s)",                  e:"−0.14"},
    {ox:"Ni²⁺ + 2e⁻",             red:"Ni(s)",                  e:"−0.26"},
    {ox:"Co²⁺ + 2e⁻",             red:"Co(s)",                  e:"−0.28"},
    {ox:"Fe²⁺ + 2e⁻",             red:"Fe(s)",                  e:"−0.45"},
    {ox:"Ag₂S(s) + 2e⁻",          red:"2Ag(s) + S²⁻",           e:"−0.69"},
    {ox:"Cr³⁺ + 3e⁻",             red:"Cr(s)",                  e:"−0.74"},
    {ox:"Zn²⁺ + 2e⁻",             red:"Zn(s)",                  e:"−0.76"},
    {ox:"2H₂O + 2e⁻",             red:"H₂(g) + 2OH⁻",           e:"−0.83"},
    {ox:"Mn²⁺ + 2e⁻",             red:"Mn(s)",                  e:"−1.19"},
    {ox:"Al³⁺ + 3e⁻",             red:"Al(s)",                  e:"−1.66"},
    {ox:"Mg²⁺ + 2e⁻",             red:"Mg(s)",                  e:"−2.37"},
    {ox:"Na⁺ + e⁻",               red:"Na(s)",                  e:"−2.71"},
    {ox:"Ca²⁺ + 2e⁻",             red:"Ca(s)",                  e:"−2.87"},
    {ox:"Sr²⁺ + 2e⁻",             red:"Sr(s)",                  e:"−2.89"},
    {ox:"Ba²⁺ + 2e⁻",             red:"Ba(s)",                  e:"−2.91"},
    {ox:"K⁺ + e⁻",                red:"K(s)",                   e:"−2.93"},
    {ox:"Rb⁺ + e⁻",               red:"Rb(s)",                  e:"−2.98"},
    {ox:"Cs⁺ + e⁻",               red:"Cs(s)",                  e:"−3.03"},
    {ox:"Li⁺ + e⁻",               red:"Li(s)",                  e:"−3.04"},
  ];

  let rows="";
  halfCells.forEach(hc=>{
    const val=parseFloat(hc.e);
    let eCls = hc.ref ? "rd-ref" : (val>0 ? "rd-pos" : "rd-neg");
    let trCls = hc.ref ? " class=\"rd-ref-row\"" : "";
    rows+=`<tr${trCls}>
      <td class="rd-ox">${hc.ox}</td>
      <td class="rd-arrow">⇌</td>
      <td class="rd-red">${hc.red}</td>
      <td class="rd-e ${eCls}">${hc.e}</td>
    </tr>`;
  });

  document.getElementById("redoxBody").innerHTML=`
    <div class="redox-title">
      <h3>Standard Reduction Potentials of Half-Cells</h3>
      <p>Ionic concentrations are at 1M in water at 25°C</p>
    </div>
    <div class="redox-wrap">
      <div class="redox-strength-bar left">
        <span class="redox-bar-arrow">▲</span>
        <div class="redox-bar-label">STRONG</div>
        <div class="redox-bar-line"></div>
        <div class="redox-bar-label">STRENGTH OF OXIDIZING AGENT</div>
        <div class="redox-bar-line"></div>
        <div class="redox-bar-label">WEAK</div>
        <span class="redox-bar-arrow">▼</span>
      </div>
      <div class="redox-strength-bar right">
        <span class="redox-bar-arrow">▼</span>
        <div class="redox-bar-label">WEAK</div>
        <div class="redox-bar-line"></div>
        <div class="redox-bar-label">STRENGTH OF REDUCING AGENT</div>
        <div class="redox-bar-line"></div>
        <div class="redox-bar-label">STRONG</div>
        <span class="redox-bar-arrow">▲</span>
      </div>
      <table class="redox-table">
        <thead>
          <tr>
            <th style="text-align:right">Oxidizing Agents</th>
            <th style="text-align:center;width:30px"></th>
            <th>Reducing Agents</th>
            <th style="text-align:right">E° (Volts)</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p class="trend-note" style="margin-top:10px">E°cell = E°cathode − E°anode. Positive E°cell → spontaneous reaction. Species with higher E° are stronger oxidizing agents.</p>
  `;
}

// ─── RADII COMPARISON VIEW ───────────────────────────────────────
function buildRadiiCompare() {
  // Shannon (1976) ionic radii for most common oxidation state (6-coord where applicable)
  // Atomic radii from element data; ionic radii matched to image data
  // Data verified against: Shannon, R.D. (1976) Acta Crystallographica Section A, 32(5), 751–767.
  // DOI: 10.1107/S0567739476001551
  //
  // ionCharge: ion label shown on figure, ionR: ionic radius in pm
  // Elements without well-defined ionic radii in the s/p/d blocks shown in image are omitted
  const ionicData = {
    // Period 2
    3:  {ion:"Li⁺",  ionR:76},
    4:  {ion:"Be²⁺", ionR:45},
    // B, C skip (covalent, no ionic in table)
    7:  {ion:"N³⁻",  ionR:146},
    8:  {ion:"O²⁻",  ionR:140},
    9:  {ion:"F⁻",   ionR:133},
    // Period 3
    11: {ion:"Na⁺",  ionR:102},
    12: {ion:"Mg²⁺", ionR:72},
    13: {ion:"Al³⁺", ionR:53.5},
    14: {ion:"Si⁴⁺", ionR:40},
    15: {ion:"P³⁻",  ionR:212},
    16: {ion:"S²⁻",  ionR:184},
    17: {ion:"Cl⁻",  ionR:181},
    // Period 4
    19: {ion:"K⁺",   ionR:138},
    20: {ion:"Ca²⁺", ionR:100},
    21: {ion:"Sc³⁺", ionR:74.5},
    22: {ion:"Ti³⁺", ionR:67},
    23: {ion:"V²⁺",  ionR:79},
    24: {ion:"Cr²⁺", ionR:80},
    25: {ion:"Mn²⁺", ionR:83},
    26: {ion:"Fe²⁺", ionR:78},
    27: {ion:"Co²⁺", ionR:74.5},
    28: {ion:"Ni²⁺", ionR:69},
    29: {ion:"Cu²⁺", ionR:73},
    30: {ion:"Zn²⁺", ionR:74},
    31: {ion:"Ga³⁺", ionR:62},
    32: {ion:"Ge⁴⁺", ionR:53},
    33: {ion:"As³⁺", ionR:58},
    34: {ion:"Se²⁻", ionR:198},
    35: {ion:"Br⁻",  ionR:196},
    // Period 5
    37: {ion:"Rb⁺",  ionR:152},
    38: {ion:"Sr²⁺", ionR:118},
    39: {ion:"Y³⁺",  ionR:90},
    40: {ion:"Zr⁴⁺", ionR:72},
    41: {ion:"Nb³⁺", ionR:72},
    42: {ion:"Mo⁴⁺", ionR:65},
    43: {ion:"Tc⁴⁺", ionR:64.5},
    44: {ion:"Ru³⁺", ionR:68},
    45: {ion:"Rh³⁺", ionR:66.5},
    46: {ion:"Pd²⁺", ionR:86},
    47: {ion:"Ag⁺",  ionR:115},
    48: {ion:"Cd²⁺", ionR:95},
    49: {ion:"In³⁺", ionR:80},
    50: {ion:"Sn⁴⁺", ionR:69},
    51: {ion:"Sb³⁺", ionR:76},
    52: {ion:"Te²⁻", ionR:221},
    53: {ion:"I⁻",   ionR:220},
    // Period 6
    55: {ion:"Cs⁺",  ionR:167},
    56: {ion:"Ba²⁺", ionR:135},
    57: {ion:"La³⁺", ionR:103},
    72: {ion:"Hf⁴⁺", ionR:71},
    73: {ion:"Ta⁵⁺", ionR:72},
    74: {ion:"W⁴⁺",  ionR:66},
    75: {ion:"Re⁴⁺", ionR:63},
    76: {ion:"Os⁴⁺", ionR:63},
    77: {ion:"Ir³⁺", ionR:68},
    78: {ion:"Pt²⁺", ionR:80},
    79: {ion:"Au⁺",  ionR:137},
    80: {ion:"Hg²⁺", ionR:102},
    81: {ion:"Tl³⁺", ionR:88.5},
    82: {ion:"Pb⁴⁺", ionR:77.5},
    83: {ion:"Bi³⁺", ionR:103},
  };

  // Category colors matching main table
  const CAT_COLORS_HEX = {
    "alkali":"#ef4444","alkali-earth":"#f97316","transition":"#3b82f6",
    "post-trans":"#8b5cf6","metalloid":"#14b8a6","nonmetal":"#22c55e",
    "halogen":"#eab308","noble-gas":"#ec4899","lanthanide":"#06b6d4","actinide":"#f59e0b"
  };

  // Get all valid atomic radii to scale circles
  const allAtomic = ELEMENTS.map(e => e.radius && e.radius!=="—" ? parseFloat(e.radius) : null).filter(Boolean);
  const allIonic = Object.values(ionicData).map(d => d.ionR);
  const maxR = Math.max(...allAtomic, ...allIonic);
  // Max pixel diameter for largest circle (fits in cell min-height 52px)
  const maxPx = 46;
  const scale = r => Math.max(6, (r / maxR) * maxPx);

  const posMap = {};
  ELEMENTS.forEach(el => { posMap[`${el.row},${el.col}`] = el; });

  let cells = "";
  for (let r = 1; r <= 9; r++) {
    if (r === 8) {
      cells += `<div style="grid-column:1/-1;height:5px;"></div>`;
      continue;
    }
    for (let c = 1; c <= 18; c++) {
      const el = posMap[`${r},${c}`];
      if (!el) { cells += `<div class="radii-cell"></div>`; continue; }

      const atomR = el.radius && el.radius !== "—" ? parseFloat(el.radius) : null;
      const iData = ionicData[el.z];
      const catColor = CAT_COLORS_HEX[el.cat] || "#94a3b8";

      const atomDiam = atomR ? scale(atomR) : 0;
      const ionDiam  = iData  ? scale(iData.ionR)  : 0;

      // Circles: atom behind (coloured, transparent), ion in front (grey)
      const atomCircle = atomR ? `<div class="radii-atom-circle" style="
        width:${atomDiam}px;height:${atomDiam}px;
        background:${catColor};
        bottom:0;"></div>` : "";

      const ionCircle = iData ? `<div class="radii-ion-circle" style="
        width:${ionDiam}px;height:${ionDiam}px;
        bottom:0;"></div>` : "";

      const atomLabel = atomR ? `<span class="radii-val">${Math.round(atomR)}</span>` : "";
      const ionLabel  = iData  ? `<span class="radii-val radii-ion-val">${iData.ionR}</span>` : "";
      const ionCharge = iData ? `<span style="font-family:'Space Mono',monospace;font-size:0.36rem;
        color:rgba(148,213,255,0.8);line-height:1;">${iData.ion}</span>` : "";

      const circleHeight = Math.max(atomDiam, ionDiam, 10);

      cells += `<div class="radii-cell" title="${el.name}: atom ${atomR||'?'}pm${iData?', ion '+iData.ionR+'pm':''}">
        <div class="radii-cell-inner">
          ${ionCharge}
          <div class="radii-circles" style="height:${circleHeight}px;">
            ${atomCircle}
            ${ionCircle}
          </div>
          <span class="radii-sym">${el.sym}</span>
          <div style="display:flex;gap:2px;flex-wrap:wrap;justify-content:center;">
            ${atomLabel}
            ${iData && atomR ? `<span class="radii-val" style="color:rgba(100,116,139,0.5)">|</span>` : ""}
            ${ionLabel}
          </div>
        </div>
      </div>`;
    }
  }

  // Series labels
  const seriesLabel = (text, col, row) =>
    `<div style="grid-row:${row};grid-column:${col};display:flex;align-items:center;
      justify-content:flex-end;padding-right:4px;font-size:0.5rem;font-weight:700;
      text-transform:uppercase;color:var(--text-muted);">${text}</div>`;

  document.getElementById("radiiCompareContent").innerHTML = `
    <div class="radii-legend">
      <div class="radii-legend-item">
        <div class="radii-legend-atom" style="background:#3b82f6;width:14px;height:14px;border-radius:50%;opacity:0.7;"></div>
        <span>Coloured circle = atomic radius (colour matches element category)</span>
      </div>
      <div class="radii-legend-item">
        <div class="radii-legend-ion"></div>
        <span>Grey circle = ionic radius (most common oxidation state, 6-coord.)</span>
      </div>
      <div class="radii-legend-item" style="margin-left:14px;font-size:0.7rem;">
        <span style="color:var(--text)">Values in pm &nbsp;|&nbsp; </span>
        <span style="color:var(--text)">Atom radius / </span>
        <span style="color:rgba(148,213,255,0.8)">Ion radius</span>
      </div>
    </div>
    <div class="radii-grid" style="overflow-x:auto;">${cells}</div>
    <div class="radii-source">
      Ionic radius data: Shannon, R.D. (1976). Revised effective ionic radii and systematic studies
      of interatomic distances in halides and chalcogenides.
      <em>Acta Crystallographica Section A</em>, <strong>32</strong>(5), 751–767.
      DOI: <a href="https://doi.org/10.1107/S0567739476001551" target="_blank"
        style="color:var(--accent)">10.1107/S0567739476001551</a>.
      Atomic radii: calculated values from Slater (1964) as compiled in the element dataset.
    </div>
  `;
}

// ─── Ksp TABLE ────────────────────────────────────────────────────
function buildKspChart() {
  const compounds = [
    {name:"Barium carbonate",     formula:"BaCO₃",       ksp:"2.6 × 10⁻⁹"},
    {name:"Barium chromate",      formula:"BaCrO₄",      ksp:"1.2 × 10⁻¹⁰"},
    {name:"Barium sulphate",      formula:"BaSO₄",       ksp:"1.1 × 10⁻¹⁰"},
    {name:"Calcium carbonate",    formula:"CaCO₃",       ksp:"5.0 × 10⁻⁹"},
    {name:"Calcium oxalate",      formula:"CaC₂O₄",      ksp:"2.3 × 10⁻⁹"},
    {name:"Calcium sulphate",     formula:"CaSO₄",       ksp:"7.1 × 10⁻⁵"},
    {name:"Copper(I) iodide",     formula:"CuI",         ksp:"1.3 × 10⁻¹²"},
    {name:"Copper(II) iodate",    formula:"Cu(IO₃)₂",    ksp:"6.9 × 10⁻⁸"},
    {name:"Copper(II) sulphide",  formula:"CuS",         ksp:"6.0 × 10⁻³⁷"},
    {name:"Iron(II) hydroxide",   formula:"Fe(OH)₂",     ksp:"4.9 × 10⁻¹⁷"},
    {name:"Iron(II) sulphide",    formula:"FeS",         ksp:"6.0 × 10⁻¹⁹"},
    {name:"Iron(III) hydroxide",  formula:"Fe(OH)₃",     ksp:"2.6 × 10⁻³⁹"},
    {name:"Lead(II) bromide",     formula:"PbBr₂",       ksp:"6.6 × 10⁻⁶"},
    {name:"Lead(II) chloride",    formula:"PbCl₂",       ksp:"1.2 × 10⁻⁵"},
    {name:"Lead(II) iodate",      formula:"Pb(IO₃)₂",    ksp:"3.7 × 10⁻¹³"},
    {name:"Lead(II) iodide",      formula:"PbI₂",        ksp:"8.5 × 10⁻⁹"},
    {name:"Lead(II) sulphate",    formula:"PbSO₄",       ksp:"1.8 × 10⁻⁸"},
    {name:"Magnesium carbonate",  formula:"MgCO₃",       ksp:"6.8 × 10⁻⁶"},
    {name:"Magnesium hydroxide",  formula:"Mg(OH)₂",     ksp:"5.6 × 10⁻¹²"},
    {name:"Silver bromate",       formula:"AgBrO₃",      ksp:"5.3 × 10⁻⁵"},
    {name:"Silver bromide",       formula:"AgBr",        ksp:"5.4 × 10⁻¹³"},
    {name:"Silver carbonate",     formula:"Ag₂CO₃",      ksp:"8.5 × 10⁻¹²"},
    {name:"Silver chloride",      formula:"AgCl",        ksp:"1.8 × 10⁻¹⁰"},
    {name:"Silver chromate",      formula:"Ag₂CrO₄",     ksp:"1.1 × 10⁻¹²"},
    {name:"Silver iodate",        formula:"AgIO₃",       ksp:"3.2 × 10⁻⁸"},
    {name:"Silver iodide",        formula:"AgI",         ksp:"8.5 × 10⁻¹⁷"},
    {name:"Strontium carbonate",  formula:"SrCO₃",       ksp:"5.6 × 10⁻¹⁰"},
    {name:"Strontium fluoride",   formula:"SrF₂",        ksp:"4.3 × 10⁻⁹"},
    {name:"Strontium sulphate",   formula:"SrSO₄",       ksp:"3.4 × 10⁻⁷"},
    {name:"Zinc sulphide",        formula:"ZnS",         ksp:"2.0 × 10⁻²⁵"},
  ];

  const rows = compounds.map(c => `
    <tr>
      <td class="ksp-name">${c.name}</td>
      <td class="ksp-formula">${c.formula}</td>
      <td class="ksp-val">${c.ksp}</td>
    </tr>`).join("");

  document.getElementById("kspBody").innerHTML = `
    <div class="ksp-wrap">
      <div class="ksp-title">
        <h3>Solubility Product Constants at 25°C</h3>
      </div>
      <table class="ksp-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Formula</th>
            <th class="ksp-val-h">K<sub>sp</sub></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ─── ACID-BASE INDICATORS ──────────────────────────────────────────
function buildIndicatorsChart() {
  // Data from BC Chem 12 data booklet page 7
  // Groups separated by dividers as in booklet
  const indicators = [
    {name:"Methyl violet",   range:"0.0 – 1.6",  change:"yellow to blue",       from:[255,235,59],  to:[103,58,183], group:1},
    {name:"Thymol blue",     range:"1.2 – 2.8",  change:"red to yellow",        from:[244,67,54],   to:[255,235,59], group:1},
    {name:"Orange IV",       range:"1.4 – 2.8",  change:"red to yellow",        from:[244,67,54],   to:[255,235,59], group:1},
    {name:"Methyl orange",   range:"3.2 – 4.4",  change:"red to yellow",        from:[244,67,54],   to:[255,235,59], group:2},
    {name:"Bromcresol green",range:"3.8 – 5.4",  change:"yellow to blue",       from:[255,235,59],  to:[33,150,243], group:2},
    {name:"Methyl red",      range:"4.8 – 6.0",  change:"red to yellow",        from:[244,67,54],   to:[255,235,59], group:2},
    {name:"Chlorophenol red",range:"5.2 – 6.8",  change:"yellow to red",        from:[255,235,59],  to:[244,67,54], group:3},
    {name:"Bromthymol blue", range:"6.0 – 7.6",  change:"yellow to blue",       from:[255,235,59],  to:[33,150,243], group:3},
    {name:"Phenol red",      range:"6.6 – 8.0",  change:"yellow to red",        from:[255,235,59],  to:[244,67,54], group:3},
    {name:"Neutral red",     range:"6.8 – 8.0",  change:"red to amber",         from:[244,67,54],   to:[255,152,0], group:4},
    {name:"Thymol blue",     range:"8.0 – 9.6",  change:"yellow to blue",       from:[255,235,59],  to:[33,150,243], group:4},
    {name:"Phenolphthalein", range:"8.2 – 10.0", change:"colourless to pink",   from:[240,240,240], to:[233,30,99], group:4},
    {name:"Thymolphthalein", range:"9.4 – 10.6", change:"colourless to blue",   from:[240,240,240], to:[33,150,243], group:5},
    {name:"Alizarin yellow", range:"10.1 – 12.0",change:"yellow to red",        from:[255,235,59],  to:[244,67,54], group:5},
    {name:"Indigo carmine",  range:"11.4 – 13.0",change:"blue to yellow",       from:[33,150,243],  to:[255,235,59], group:5},
  ];

  // pH scale bar: indicator range on 0-14 axis
  const makePHBar = (range, from, to) => {
    const parts = range.split("–").map(s => parseFloat(s.trim()));
    const lo = parts[0], hi = parts[1];
    const leftPct = (lo/14*100).toFixed(1);
    const widthPct = ((hi-lo)/14*100).toFixed(1);
    const fromColor = `rgb(${from[0]},${from[1]},${from[2]})`;
    const toColor = `rgb(${to[0]},${to[1]},${to[2]})`;
    return `<div style="position:relative;height:14px;background:rgba(255,255,255,0.07);border-radius:3px;width:100%;">
      <div style="position:absolute;left:${leftPct}%;width:${widthPct}%;height:100%;
        background:linear-gradient(to right,${fromColor},${toColor});border-radius:3px;
        border:1px solid rgba(255,255,255,0.15);"></div>
      <div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:space-between;padding:0 2px;">
        ${[0,2,4,6,7,8,10,12,14].map(v=>`<span style="font-size:7px;color:rgba(255,255,255,0.3);line-height:14px;">${v}</span>`).join("")}
      </div>
    </div>`;
  };

  let prevGroup = 0;
  const rows = indicators.map(ind => {
    const divClass = ind.group !== prevGroup && prevGroup !== 0 ? ' class="ind-group-div"' : '';
    prevGroup = ind.group;
    return `<tr${divClass}>
      <td class="ind-name">${ind.name}</td>
      <td class="ind-range">${ind.range}</td>
      <td class="ind-change">${ind.change}</td>
      <td class="ind-bar-cell">${makePHBar(ind.range, ind.from, ind.to)}</td>
    </tr>`;
  }).join("");

  document.getElementById("indicatorsBody").innerHTML = `
    <div class="ind-wrap">
      <div class="ind-title">
        <h3>Acid-Base Indicators</h3>
      </div>
      <table class="ind-table">
        <thead>
          <tr>
            <th>Indicator</th>
            <th style="text-align:center">pH Range for<br>Colour Change</th>
            <th>Colour Change<br>as pH Increases</th>
            <th style="width:180px">pH Scale (0–14)</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

// ─── THEME ────────────────────────────────────────────────────────
let isDark=true;
document.getElementById("themeToggle").addEventListener("click",()=>{
  isDark=!isDark;
  document.body.classList.toggle("light",!isDark);
  document.getElementById("themeToggle").textContent=isDark?"🌙 Dark Mode":"☀️ Light Mode";
});

// ─── CLOSE WINDOW ────────────────────────────────────────────────
document.getElementById("closeBtn").addEventListener("click",()=>{ window.close(); });

// ─── INIT ────────────────────────────────────────────────────────
buildGrid();
buildIonsChart();
buildSolubilityChart();
buildActivitySeries();
buildKaChart();
buildRedoxChart();
buildKspChart();
buildIndicatorsChart();

// Side chart buttons
document.getElementById("btnIons").addEventListener("click", () => openPanel("ionsOverlay"));
document.getElementById("btnSolubility").addEventListener("click", () => openPanel("solubilityOverlay"));
document.getElementById("btnKsp").addEventListener("click", () => openPanel("kspOverlay"));
document.getElementById("btnActivity").addEventListener("click", () => openPanel("activityOverlay"));
document.getElementById("btnKa").addEventListener("click", () => openPanel("kaOverlay"));
document.getElementById("btnIndicators").addEventListener("click", () => openPanel("indicatorsOverlay"));
document.getElementById("btnRedox").addEventListener("click", () => openPanel("redoxOverlay"));

// Trend buttons
document.getElementById("btnTrendEneg").addEventListener("click", () => openTrend("electronegativity"));
document.getElementById("btnTrendIE").addEventListener("click", () => openTrend("ionization"));
document.getElementById("btnTrendRadii").addEventListener("click", () => openTrend("radii"));

// Panel close buttons
document.getElementById("closeTrend").addEventListener("click", () => closePanel("trendOverlay"));
document.getElementById("closeIons").addEventListener("click", () => closePanel("ionsOverlay"));
document.getElementById("closeSolubility").addEventListener("click", () => closePanel("solubilityOverlay"));
document.getElementById("closeActivity").addEventListener("click", () => closePanel("activityOverlay"));
document.getElementById("closeKa").addEventListener("click", () => closePanel("kaOverlay"));
document.getElementById("closeRedox").addEventListener("click", () => closePanel("redoxOverlay"));
document.getElementById("closeKsp").addEventListener("click", () => closePanel("kspOverlay"));
document.getElementById("closeIndicators").addEventListener("click", () => closePanel("indicatorsOverlay"));

// ─── ISOTOPE DATA ─────────────────────────────────────────────────
// Common naturally-occurring isotopes with atomic mass and natural abundance (%)
// Synthetic-only elements listed with their most stable isotope, abundance: null
// Sources: IUPAC 2021 atomic weights; NUBASE2020; NNDC
const ISOTOPE_DATA = {
  1:  {isotopes:[{name:"H-1 (Protium)",  mass:"1.00782503",  pct:99.9885},{name:"H-2 (Deuterium)",mass:"2.01410178",pct:0.0115},{name:"H-3 (Tritium)",mass:"3.01604927",pct:null,note:"trace/radioactive"}]},
  2:  {isotopes:[{name:"He-3",mass:"3.01602932",pct:0.000134},{name:"He-4",mass:"4.00260325",pct:99.999866}]},
  3:  {isotopes:[{name:"Li-6",mass:"6.01512289",pct:7.59},{name:"Li-7",mass:"7.01600344",pct:92.41}]},
  4:  {isotopes:[{name:"Be-9",mass:"9.01218307",pct:100}]},
  5:  {isotopes:[{name:"B-10",mass:"10.01293695",pct:19.9},{name:"B-11",mass:"11.00930536",pct:80.1}]},
  6:  {isotopes:[{name:"C-12",mass:"12.00000000",pct:98.93},{name:"C-13",mass:"13.00335484",pct:1.07},{name:"C-14",mass:"14.00324199",pct:null,note:"trace/radioactive"}]},
  7:  {isotopes:[{name:"N-14",mass:"14.00307401",pct:99.636},{name:"N-15",mass:"15.00010890",pct:0.364}]},
  8:  {isotopes:[{name:"O-16",mass:"15.99491462",pct:99.757},{name:"O-17",mass:"16.99913170",pct:0.038},{name:"O-18",mass:"17.99915961",pct:0.205}]},
  9:  {isotopes:[{name:"F-19",mass:"18.99840322",pct:100}]},
  10: {isotopes:[{name:"Ne-20",mass:"19.99244018",pct:90.48},{name:"Ne-21",mass:"20.99338853",pct:0.27},{name:"Ne-22",mass:"21.99138511",pct:9.25}]},
  11: {isotopes:[{name:"Na-23",mass:"22.98976928",pct:100}]},
  12: {isotopes:[{name:"Mg-24",mass:"23.98504170",pct:78.99},{name:"Mg-25",mass:"24.98583698",pct:10.00},{name:"Mg-26",mass:"25.98259297",pct:11.01}]},
  13: {isotopes:[{name:"Al-27",mass:"26.98153853",pct:100}]},
  14: {isotopes:[{name:"Si-28",mass:"27.97692653",pct:92.223},{name:"Si-29",mass:"28.97649467",pct:4.685},{name:"Si-30",mass:"29.97377015",pct:3.092}]},
  15: {isotopes:[{name:"P-31",mass:"30.97376163",pct:100}]},
  16: {isotopes:[{name:"S-32",mass:"31.97207101",pct:94.99},{name:"S-33",mass:"32.97145891",pct:0.75},{name:"S-34",mass:"33.96786701",pct:4.25},{name:"S-36",mass:"35.96708071",pct:0.01}]},
  17: {isotopes:[{name:"Cl-35",mass:"34.96885268",pct:75.76},{name:"Cl-37",mass:"36.96590260",pct:24.24}]},
  18: {isotopes:[{name:"Ar-36",mass:"35.96754510",pct:0.3336},{name:"Ar-38",mass:"37.96273211",pct:0.0629},{name:"Ar-40",mass:"39.96238312",pct:99.6035}]},
  19: {isotopes:[{name:"K-39",mass:"38.96370668",pct:93.2581},{name:"K-40",mass:"39.96399848",pct:0.0117,note:"radioactive"},{name:"K-41",mass:"40.96182526",pct:6.7302}]},
  20: {isotopes:[{name:"Ca-40",mass:"39.96259098",pct:96.941},{name:"Ca-42",mass:"41.95861783",pct:0.647},{name:"Ca-43",mass:"42.95876644",pct:0.135},{name:"Ca-44",mass:"43.95548156",pct:2.086},{name:"Ca-46",mass:"45.95368977",pct:0.004},{name:"Ca-48",mass:"47.95252277",pct:0.187}]},
  21: {isotopes:[{name:"Sc-45",mass:"44.95590828",pct:100}]},
  22: {isotopes:[{name:"Ti-46",mass:"45.95262772",pct:8.25},{name:"Ti-47",mass:"46.95175879",pct:7.44},{name:"Ti-48",mass:"47.94794198",pct:73.72},{name:"Ti-49",mass:"48.94786568",pct:5.41},{name:"Ti-50",mass:"49.94478689",pct:5.18}]},
  23: {isotopes:[{name:"V-50",mass:"49.94715601",pct:0.250},{name:"V-51",mass:"50.94395704",pct:99.750}]},
  24: {isotopes:[{name:"Cr-50",mass:"49.94604183",pct:4.345},{name:"Cr-52",mass:"51.94050623",pct:83.789},{name:"Cr-53",mass:"52.94064815",pct:9.501},{name:"Cr-54",mass:"53.93887916",pct:2.365}]},
  25: {isotopes:[{name:"Mn-55",mass:"54.93804391",pct:100}]},
  26: {isotopes:[{name:"Fe-54",mass:"53.93960899",pct:5.845},{name:"Fe-56",mass:"55.93493633",pct:91.754},{name:"Fe-57",mass:"56.93539284",pct:2.119},{name:"Fe-58",mass:"57.93327443",pct:0.282}]},
  27: {isotopes:[{name:"Co-59",mass:"58.93319429",pct:100}]},
  28: {isotopes:[{name:"Ni-58",mass:"57.93534241",pct:68.077},{name:"Ni-60",mass:"59.93078588",pct:26.223},{name:"Ni-61",mass:"60.93105557",pct:1.140},{name:"Ni-62",mass:"61.92834537",pct:3.634},{name:"Ni-64",mass:"63.92796682",pct:0.926}]},
  29: {isotopes:[{name:"Cu-63",mass:"62.92959772",pct:69.15},{name:"Cu-65",mass:"64.92778970",pct:30.85}]},
  30: {isotopes:[{name:"Zn-64",mass:"63.92914201",pct:48.6},{name:"Zn-66",mass:"65.92603381",pct:27.9},{name:"Zn-67",mass:"66.92712775",pct:4.1},{name:"Zn-68",mass:"67.92484455",pct:18.8},{name:"Zn-70",mass:"69.92531974",pct:0.6}]},
  31: {isotopes:[{name:"Ga-69",mass:"68.92557350",pct:60.108},{name:"Ga-71",mass:"70.92470258",pct:39.892}]},
  32: {isotopes:[{name:"Ge-70",mass:"69.92424876",pct:20.57},{name:"Ge-72",mass:"71.92207583",pct:27.45},{name:"Ge-73",mass:"72.92345896",pct:7.75},{name:"Ge-74",mass:"73.92117776",pct:36.50},{name:"Ge-76",mass:"75.92140273",pct:7.73}]},
  33: {isotopes:[{name:"As-75",mass:"74.92159457",pct:100}]},
  34: {isotopes:[{name:"Se-74",mass:"73.92247593",pct:0.89},{name:"Se-76",mass:"75.91921370",pct:9.37},{name:"Se-77",mass:"76.91991415",pct:7.63},{name:"Se-78",mass:"77.91730928",pct:23.77},{name:"Se-80",mass:"79.91652177",pct:49.61},{name:"Se-82",mass:"81.91669940",pct:8.73}]},
  35: {isotopes:[{name:"Br-79",mass:"78.91833710",pct:50.69},{name:"Br-81",mass:"80.91628960",pct:49.31}]},
  36: {isotopes:[{name:"Kr-78",mass:"77.92036494",pct:0.355},{name:"Kr-80",mass:"79.91637808",pct:2.286},{name:"Kr-82",mass:"81.91348273",pct:11.593},{name:"Kr-83",mass:"82.91412716",pct:11.500},{name:"Kr-84",mass:"83.91149773",pct:56.987},{name:"Kr-86",mass:"85.91061063",pct:17.279}]},
  37: {isotopes:[{name:"Rb-85",mass:"84.91178974",pct:72.17},{name:"Rb-87",mass:"86.90918053",pct:27.83,note:"radioactive (t½=49 Gy)"}]},
  38: {isotopes:[{name:"Sr-84",mass:"83.91342196",pct:0.56},{name:"Sr-86",mass:"85.90926073",pct:9.86},{name:"Sr-87",mass:"86.90887750",pct:7.00},{name:"Sr-88",mass:"87.90561226",pct:82.58}]},
  39: {isotopes:[{name:"Y-89",mass:"88.90584403",pct:100}]},
  40: {isotopes:[{name:"Zr-90",mass:"89.90470447",pct:51.45},{name:"Zr-91",mass:"90.90564648",pct:11.22},{name:"Zr-92",mass:"91.90503536",pct:17.15},{name:"Zr-94",mass:"93.90631609",pct:17.38},{name:"Zr-96",mass:"95.90827762",pct:2.80}]},
  41: {isotopes:[{name:"Nb-93",mass:"92.90637809",pct:100}]},
  42: {isotopes:[{name:"Mo-92",mass:"91.90680796",pct:14.53},{name:"Mo-94",mass:"93.90508490",pct:9.15},{name:"Mo-95",mass:"94.90583877",pct:15.84},{name:"Mo-96",mass:"95.90467612",pct:16.67},{name:"Mo-97",mass:"96.90601812",pct:9.60},{name:"Mo-98",mass:"97.90540482",pct:24.39},{name:"Mo-100",mass:"99.90747177",pct:9.82}]},
  43: {synthetic:true, isotopes:[{name:"Tc-98 (most stable)",mass:"97.9072124",pct:null}]},
  44: {isotopes:[{name:"Ru-96",mass:"95.90759025",pct:5.54},{name:"Ru-98",mass:"97.90528987",pct:1.87},{name:"Ru-99",mass:"98.90593393",pct:12.76},{name:"Ru-100",mass:"99.90421445",pct:12.60},{name:"Ru-101",mass:"100.90557645",pct:17.06},{name:"Ru-102",mass:"101.90434930",pct:31.55},{name:"Ru-104",mass:"103.90543490",pct:18.62}]},
  45: {isotopes:[{name:"Rh-103",mass:"102.90549800",pct:100}]},
  46: {isotopes:[{name:"Pd-102",mass:"101.90563440",pct:1.02},{name:"Pd-104",mass:"103.90403054",pct:11.14},{name:"Pd-105",mass:"104.90507849",pct:22.33},{name:"Pd-106",mass:"105.90348340",pct:27.33},{name:"Pd-108",mass:"107.90389164",pct:26.46},{name:"Pd-110",mass:"109.90517220",pct:11.72}]},
  47: {isotopes:[{name:"Ag-107",mass:"106.90509682",pct:51.839},{name:"Ag-109",mass:"108.90475641",pct:48.161}]},
  48: {isotopes:[{name:"Cd-106",mass:"105.90645938",pct:1.25},{name:"Cd-108",mass:"107.90418346",pct:0.89},{name:"Cd-110",mass:"109.90300661",pct:12.47},{name:"Cd-111",mass:"110.90418287",pct:12.80},{name:"Cd-112",mass:"111.90276287",pct:24.11},{name:"Cd-113",mass:"112.90440813",pct:12.22},{name:"Cd-114",mass:"113.90336509",pct:28.73},{name:"Cd-116",mass:"115.90476315",pct:7.53}]},
  49: {isotopes:[{name:"In-113",mass:"112.90406184",pct:4.29},{name:"In-115",mass:"114.90387877",pct:95.71,note:"radioactive (t½=441 Ty)"}]},
  50: {isotopes:[{name:"Sn-112",mass:"111.90482387",pct:0.97},{name:"Sn-114",mass:"113.90278006",pct:0.66},{name:"Sn-115",mass:"114.90334469",pct:0.34},{name:"Sn-116",mass:"115.90174280",pct:14.54},{name:"Sn-117",mass:"116.90295398",pct:7.68},{name:"Sn-118",mass:"117.90160660",pct:24.22},{name:"Sn-119",mass:"118.90331117",pct:8.59},{name:"Sn-120",mass:"119.90220163",pct:32.58},{name:"Sn-122",mass:"121.90344357",pct:4.63},{name:"Sn-124",mass:"123.90527660",pct:5.79}]},
  51: {isotopes:[{name:"Sb-121",mass:"120.90381570",pct:57.21},{name:"Sb-123",mass:"122.90421570",pct:42.79}]},
  52: {isotopes:[{name:"Te-120",mass:"119.90405938",pct:0.09},{name:"Te-122",mass:"121.90304343",pct:2.55},{name:"Te-123",mass:"122.90426965",pct:0.89},{name:"Te-124",mass:"123.90281865",pct:4.74},{name:"Te-125",mass:"124.90442499",pct:7.07},{name:"Te-126",mass:"125.90331108",pct:18.84},{name:"Te-128",mass:"127.90446128",pct:31.74},{name:"Te-130",mass:"129.90622275",pct:34.08}]},
  53: {isotopes:[{name:"I-127",mass:"126.90447879",pct:100}]},
  54: {isotopes:[{name:"Xe-124",mass:"123.90589190",pct:0.0952},{name:"Xe-126",mass:"125.90430300",pct:0.0890},{name:"Xe-128",mass:"127.90353100",pct:1.9102},{name:"Xe-129",mass:"128.90478086",pct:26.4006},{name:"Xe-130",mass:"129.90350935",pct:4.0710},{name:"Xe-131",mass:"130.90508406",pct:21.2324},{name:"Xe-132",mass:"131.90415509",pct:26.9086},{name:"Xe-134",mass:"133.90539466",pct:10.4357},{name:"Xe-136",mass:"135.90721448",pct:8.8573}]},
  55: {isotopes:[{name:"Cs-133",mass:"132.90545196",pct:100}]},
  56: {isotopes:[{name:"Ba-130",mass:"129.90632073",pct:0.106},{name:"Ba-132",mass:"131.90506121",pct:0.101},{name:"Ba-134",mass:"133.90449780",pct:2.417},{name:"Ba-135",mass:"134.90568838",pct:6.592},{name:"Ba-136",mass:"135.90457573",pct:7.854},{name:"Ba-137",mass:"136.90582714",pct:11.232},{name:"Ba-138",mass:"137.90524700",pct:71.698}]},
  57: {isotopes:[{name:"La-138",mass:"137.90712016",pct:0.0888,note:"radioactive (t½=1.05×10¹¹ y)"},{name:"La-139",mass:"138.90635473",pct:99.9112}]},
  58: {isotopes:[{name:"Ce-136",mass:"135.90712921",pct:0.185},{name:"Ce-138",mass:"137.90599089",pct:0.251},{name:"Ce-140",mass:"139.90544113",pct:88.450},{name:"Ce-142",mass:"141.90924780",pct:11.114}]},
  59: {isotopes:[{name:"Pr-141",mass:"140.90765760",pct:100}]},
  60: {isotopes:[{name:"Nd-142",mass:"141.90773190",pct:27.152},{name:"Nd-143",mass:"142.90982070",pct:12.174},{name:"Nd-144",mass:"143.91008700",pct:23.798},{name:"Nd-145",mass:"144.91257560",pct:8.293},{name:"Nd-146",mass:"145.91312250",pct:17.189},{name:"Nd-148",mass:"147.91689980",pct:5.756},{name:"Nd-150",mass:"149.92090220",pct:5.638}]},
  61: {synthetic:true, isotopes:[{name:"Pm-145 (most stable)",mass:"144.9127559",pct:null}]},
  62: {isotopes:[{name:"Sm-144",mass:"143.91200700",pct:3.08},{name:"Sm-147",mass:"146.91489790",pct:14.99},{name:"Sm-148",mass:"147.91482780",pct:11.24},{name:"Sm-149",mass:"148.91718920",pct:13.82},{name:"Sm-150",mass:"149.91727510",pct:7.38},{name:"Sm-152",mass:"151.91973790",pct:26.75},{name:"Sm-154",mass:"153.92221730",pct:22.74}]},
  63: {isotopes:[{name:"Eu-151",mass:"150.91985693",pct:47.81},{name:"Eu-153",mass:"152.92123717",pct:52.19}]},
  64: {isotopes:[{name:"Gd-152",mass:"151.91979780",pct:0.20},{name:"Gd-154",mass:"153.92086930",pct:2.18},{name:"Gd-155",mass:"154.92262070",pct:14.80},{name:"Gd-156",mass:"155.92212780",pct:20.47},{name:"Gd-157",mass:"156.92396740",pct:15.65},{name:"Gd-158",mass:"157.92410530",pct:24.84},{name:"Gd-160",mass:"159.92705710",pct:21.86}]},
  65: {isotopes:[{name:"Tb-159",mass:"158.92534750",pct:100}]},
  66: {isotopes:[{name:"Dy-156",mass:"155.92428350",pct:0.056},{name:"Dy-158",mass:"157.92441280",pct:0.095},{name:"Dy-160",mass:"159.92519750",pct:2.329},{name:"Dy-161",mass:"160.92693450",pct:18.889},{name:"Dy-162",mass:"161.92680460",pct:25.475},{name:"Dy-163",mass:"162.92873750",pct:24.896},{name:"Dy-164",mass:"163.92917920",pct:28.260}]},
  67: {isotopes:[{name:"Ho-165",mass:"164.93032880",pct:100}]},
  68: {isotopes:[{name:"Er-162",mass:"161.92879050",pct:0.139},{name:"Er-164",mass:"163.92920780",pct:1.601},{name:"Er-166",mass:"165.93029880",pct:33.503},{name:"Er-167",mass:"166.93204880",pct:22.869},{name:"Er-168",mass:"167.93237620",pct:26.978},{name:"Er-170",mass:"169.93547090",pct:14.910}]},
  69: {isotopes:[{name:"Tm-169",mass:"168.93421860",pct:100}]},
  70: {isotopes:[{name:"Yb-168",mass:"167.93389100",pct:0.126},{name:"Yb-170",mass:"169.93476790",pct:3.023},{name:"Yb-171",mass:"170.93633310",pct:14.216},{name:"Yb-172",mass:"171.93638660",pct:21.754},{name:"Yb-173",mass:"172.93821490",pct:16.098},{name:"Yb-174",mass:"173.93886840",pct:31.896},{name:"Yb-176",mass:"175.94257600",pct:12.887}]},
  71: {isotopes:[{name:"Lu-175",mass:"174.94077840",pct:97.401},{name:"Lu-176",mass:"175.94268630",pct:2.599,note:"radioactive (t½=37.6 Gy)"}]},
  72: {isotopes:[{name:"Hf-174",mass:"173.94004610",pct:0.16},{name:"Hf-176",mass:"175.94140760",pct:5.26},{name:"Hf-177",mass:"176.94322820",pct:18.60},{name:"Hf-178",mass:"177.94370660",pct:27.28},{name:"Hf-179",mass:"178.94581890",pct:13.62},{name:"Hf-180",mass:"179.94655610",pct:35.08}]},
  73: {isotopes:[{name:"Ta-180m",mass:"179.94746610",pct:0.01201,note:"isomer, radioactive"},{name:"Ta-181",mass:"180.94799580",pct:99.98799}]},
  74: {isotopes:[{name:"W-180",mass:"179.94670800",pct:0.12},{name:"W-182",mass:"181.94820394",pct:26.50},{name:"W-183",mass:"182.95022750",pct:14.31},{name:"W-184",mass:"183.95093093",pct:30.64},{name:"W-186",mass:"185.95436442",pct:28.43}]},
  75: {isotopes:[{name:"Re-185",mass:"184.95295790",pct:37.40},{name:"Re-187",mass:"186.95575160",pct:62.60,note:"radioactive (t½=41.2 Gy)"}]},
  76: {isotopes:[{name:"Os-184",mass:"183.95248486",pct:0.02},{name:"Os-186",mass:"185.95383820",pct:1.59},{name:"Os-187",mass:"186.95574820",pct:1.96},{name:"Os-188",mass:"187.95583520",pct:13.24},{name:"Os-189",mass:"188.95814770",pct:16.15},{name:"Os-190",mass:"189.95844620",pct:26.26},{name:"Os-192",mass:"191.96147930",pct:40.78}]},
  77: {isotopes:[{name:"Ir-191",mass:"190.96059320",pct:37.3},{name:"Ir-193",mass:"192.96292640",pct:62.7}]},
  78: {isotopes:[{name:"Pt-190",mass:"189.95993490",pct:0.012},{name:"Pt-192",mass:"191.96103490",pct:0.782},{name:"Pt-194",mass:"193.96268200",pct:32.864},{name:"Pt-195",mass:"194.96479230",pct:33.775},{name:"Pt-196",mass:"195.96495240",pct:25.211},{name:"Pt-198",mass:"197.96789650",pct:7.356}]},
  79: {isotopes:[{name:"Au-197",mass:"196.96656879",pct:100}]},
  80: {isotopes:[{name:"Hg-196",mass:"195.96582960",pct:0.15},{name:"Hg-198",mass:"197.96676860",pct:9.97},{name:"Hg-199",mass:"198.96827973",pct:16.87},{name:"Hg-200",mass:"199.96832659",pct:23.10},{name:"Hg-201",mass:"200.97030280",pct:13.18},{name:"Hg-202",mass:"201.97064340",pct:29.86},{name:"Hg-204",mass:"203.97349398",pct:6.87}]},
  81: {isotopes:[{name:"Tl-203",mass:"202.97234340",pct:29.52},{name:"Tl-205",mass:"204.97442780",pct:70.48}]},
  82: {isotopes:[{name:"Pb-204",mass:"203.97303936",pct:1.4},{name:"Pb-206",mass:"205.97446570",pct:24.1},{name:"Pb-207",mass:"206.97589730",pct:22.1},{name:"Pb-208",mass:"207.97666530",pct:52.4}]},
  83: {isotopes:[{name:"Bi-209",mass:"208.98039910",pct:100,note:"primordial radioactive (t½=1.9×10¹⁹ y)"}]},
  84: {synthetic:true, isotopes:[{name:"Po-209 (longest-lived)",mass:"208.9824308",pct:null}]},
  85: {synthetic:true, isotopes:[{name:"At-210 (longest natural)",mass:"209.9871479",pct:null}]},
  86: {synthetic:true, isotopes:[{name:"Rn-222 (most common)",mass:"222.0175782",pct:null,note:"from U-238 decay chain"}]},
  87: {synthetic:true, isotopes:[{name:"Fr-223 (most stable natural)",mass:"223.0197360",pct:null}]},
  88: {synthetic:true, isotopes:[{name:"Ra-226 (most stable)",mass:"226.0254103",pct:null,note:"t½=1600 y"}]},
  89: {synthetic:true, isotopes:[{name:"Ac-227",mass:"227.0277523",pct:null,note:"t½=21.8 y"}]},
  90: {isotopes:[{name:"Th-230",mass:"230.0331340",pct:0.0002,note:"trace"},{name:"Th-232",mass:"232.0380558",pct:99.9998,note:"radioactive (t½=14 Gy)"}]},
  91: {synthetic:true, isotopes:[{name:"Pa-231",mass:"231.0358842",pct:null,note:"t½=32760 y"}]},
  92: {isotopes:[{name:"U-234",mass:"234.0409523",pct:0.0054,note:"radioactive"},{name:"U-235",mass:"235.0439301",pct:0.7204,note:"radioactive (t½=704 My)"},{name:"U-238",mass:"238.0507884",pct:99.2742,note:"radioactive (t½=4.47 Gy)"}]},
  93: {synthetic:true, isotopes:[{name:"Np-237",mass:"237.0481736",pct:null,note:"t½=2.14 My"}]},
  94: {synthetic:true, isotopes:[{name:"Pu-244 (longest-lived)",mass:"244.0642044",pct:null,note:"t½=80.8 My"}]},
  95: {synthetic:true, isotopes:[{name:"Am-243",mass:"243.0613813",pct:null,note:"t½=7370 y"}]},
  96: {synthetic:true, isotopes:[{name:"Cm-247",mass:"247.0703541",pct:null,note:"t½=15.6 My"}]},
  97: {synthetic:true, isotopes:[{name:"Bk-247",mass:"247.0703073",pct:null,note:"t½=1380 y"}]},
  98: {synthetic:true, isotopes:[{name:"Cf-251",mass:"251.0795886",pct:null,note:"t½=898 y"}]},
  99: {synthetic:true, isotopes:[{name:"Es-252",mass:"252.0829800",pct:null,note:"t½=471.7 d"}]},
  100:{synthetic:true, isotopes:[{name:"Fm-257",mass:"257.0951061",pct:null,note:"t½=100.5 d"}]},
  101:{synthetic:true, isotopes:[{name:"Md-258",mass:"258.0984315",pct:null,note:"t½=51.5 d"}]},
  102:{synthetic:true, isotopes:[{name:"No-259",mass:"259.1010290",pct:null,note:"t½=58 min"}]},
  103:{synthetic:true, isotopes:[{name:"Lr-266",mass:"266.1198",pct:null,note:"t½=~11 h"}]},
  104:{synthetic:true, isotopes:[{name:"Rf-267",mass:"267.1218",pct:null,note:"t½=~1.3 h"}]},
  105:{synthetic:true, isotopes:[{name:"Db-268",mass:"268.1257",pct:null,note:"t½=~16 h"}]},
  106:{synthetic:true, isotopes:[{name:"Sg-271",mass:"271.1339",pct:null,note:"t½=~2 min"}]},
  107:{synthetic:true, isotopes:[{name:"Bh-272",mass:"272.1383",pct:null,note:"t½=~10 s"}]},
  108:{synthetic:true, isotopes:[{name:"Hs-270",mass:"270.1343",pct:null,note:"t½=~10 s"}]},
  109:{synthetic:true, isotopes:[{name:"Mt-276",mass:"276.1516",pct:null,note:"t½=~0.7 s"}]},
  110:{synthetic:true, isotopes:[{name:"Ds-281",mass:"281.1645",pct:null,note:"t½=~14 s"}]},
  111:{synthetic:true, isotopes:[{name:"Rg-280",mass:"280.1645",pct:null,note:"t½=~4 s"}]},
  112:{synthetic:true, isotopes:[{name:"Cn-285",mass:"285.1772",pct:null,note:"t½=~28 s"}]},
  113:{synthetic:true, isotopes:[{name:"Nh-286",mass:"286.1822",pct:null,note:"t½=~10 s"}]},
  114:{synthetic:true, isotopes:[{name:"Fl-289",mass:"289.1904",pct:null,note:"t½=~2.1 s"}]},
  115:{synthetic:true, isotopes:[{name:"Mc-290",mass:"290.1960",pct:null,note:"t½=~0.65 s"}]},
  116:{synthetic:true, isotopes:[{name:"Lv-293",mass:"293.2045",pct:null,note:"t½=~60 ms"}]},
  117:{synthetic:true, isotopes:[{name:"Ts-294",mass:"294.2104",pct:null,note:"t½=~51 ms"}]},
  118:{synthetic:true, isotopes:[{name:"Og-294",mass:"294.2139",pct:null,note:"t½=~0.9 ms"}]},
};

// ─── ISOTOPE PERIODIC TABLE ───────────────────────────────────────
function buildIsotopeTable() {
  const CAT_COLORS_HEX = {
    "alkali":"#ef4444","alkali-earth":"#f97316","transition":"#3b82f6",
    "post-trans":"#8b5cf6","metalloid":"#14b8a6","nonmetal":"#22c55e",
    "halogen":"#eab308","noble-gas":"#ec4899","lanthanide":"#06b6d4","actinide":"#f59e0b"
  };
  const CAT_LABELS_MAP = {
    "alkali":"Alkali Metal","alkali-earth":"Alkaline Earth Metal",
    "transition":"Transition Metal","post-trans":"Post-Transition Metal",
    "metalloid":"Metalloid","nonmetal":"Nonmetal","halogen":"Halogen",
    "noble-gas":"Noble Gas","lanthanide":"Lanthanide","actinide":"Actinide"
  };

  const grid = document.getElementById("isotopePtGrid");
  if (!grid || grid.children.length > 0) return; // already built

  // Use explicit grid placement for every element (mirrors buildGrid approach)
  ELEMENTS.forEach(el => {
    const cell = document.createElement("div");
    cell.className = `iso-el ${el.cat}`;
    cell.style.gridRow = el.row;
    cell.style.gridColumn = el.col;
    cell.innerHTML = `
      <div class="iso-z">${el.z}</div>
      <div class="iso-sym">${el.sym}</div>
      <div class="iso-mass">${el.mass}</div>`;
    cell.addEventListener("mouseenter", (e) => showIsotopePopup(e, el, CAT_COLORS_HEX, CAT_LABELS_MAP));
    cell.addEventListener("mousemove",  (e) => positionIsotopePopup(e));
    cell.addEventListener("mouseleave", () => hideIsotopePopup());
    grid.appendChild(cell);
  });

  // Center info block spanning rows 1-3, cols 3-12 (avoids H and He columns)
  const ci = document.createElement("div");
  ci.className = "iso-center";
  ci.style.cssText = "grid-row:1/4;grid-column:3/13;pointer-events:none;";
  ci.innerHTML = `
    <div class="iso-big-title">Isotope Reference Table</div>
    <div class="iso-sub">Hover any element for isotope data</div>
    <div style="font-size:0.6rem;color:var(--text-muted);font-style:italic;
      text-align:center;line-height:1.7;max-width:300px;margin-top:5px;">
      Natural abundances from IUPAC 2021.<br>
      Atomic masses from AME2020 / NUBASE2020.<br>
      Synthetic elements show most stable isotope.
    </div>`;
  grid.appendChild(ci);

  // Lanthanide gap label (row 6, cols 4-17 gap block)
  const lanGap = document.createElement("div");
  lanGap.style.cssText = "grid-row:6;grid-column:4/18;";
  lanGap.className = "iso-gap-block";
  lanGap.textContent = "* Lanthanides (57–71)";
  grid.appendChild(lanGap);

  // Actinide gap label (row 7, cols 4-17 gap block)
  const actGap = document.createElement("div");
  actGap.style.cssText = "grid-row:7;grid-column:4/18;";
  actGap.className = "iso-gap-block";
  actGap.textContent = "** Actinides (89–103)";
  grid.appendChild(actGap);

  // Series row gap
  const sectionGap = document.createElement("div");
  sectionGap.style.cssText = "grid-row:8;grid-column:1/-1;height:5px;";
  grid.appendChild(sectionGap);

  // Lanthanide / Actinide series labels (col 1-3, rows 8-9)
  const lanLabel = document.createElement("div");
  lanLabel.style.cssText = "grid-row:8;grid-column:1/4;";
  lanLabel.className = "iso-series-label";
  lanLabel.innerHTML = `<span style="color:var(--c-lanthanide);font-size:0.46rem;font-weight:800">* Lanthanides</span>`;
  grid.appendChild(lanLabel);

  const actLabel = document.createElement("div");
  actLabel.style.cssText = "grid-row:9;grid-column:1/4;";
  actLabel.className = "iso-series-label";
  actLabel.innerHTML = `<span style="color:var(--c-actinide);font-size:0.46rem;font-weight:800">** Actinides</span>`;
  grid.appendChild(actLabel);
}

function showIsotopePopup(e, el, catColors, catLabels) {
  const popup = document.getElementById("isotopePopup");
  const iData = ISOTOPE_DATA[el.z];
  const color = catColors[el.cat] || "#94a3b8";
  const catName = catLabels[el.cat] || el.cat;

  let bodyHTML = "";
  if (!iData) {
    bodyHTML = `<div class="iso-synthetic">No isotope data available.</div>`;
  } else if (iData.synthetic) {
    const iso = iData.isotopes[0];
    bodyHTML = `
      <div class="iso-synthetic">⚠️ Synthetic element — no stable isotopes</div>
      <table class="iso-table">
        <thead><tr>
          <th>Most Stable Isotope</th>
          <th class="iso-th-r">Mass (u)</th>
        </tr></thead>
        <tbody>
          <tr>
            <td class="iso-name">${iso.name}</td>
            <td>${iso.mass}</td>
          </tr>
          ${iso.note ? `<tr><td colspan="2" style="font-size:0.62rem;color:var(--text-muted);font-style:italic;">${iso.note}</td></tr>` : ""}
        </tbody>
      </table>`;
  } else {
    const rows = iData.isotopes.map(iso => {
      const pctDisplay = iso.pct !== null ? iso.pct.toFixed(iso.pct < 0.01 ? 4 : iso.pct < 1 ? 3 : 2) + "%" : "—";
      const barWidth = iso.pct !== null ? Math.max(3, iso.pct) : 0;
      const isTrace = iso.pct === null;
      const noteCell = iso.note ? `<div style="font-size:0.58rem;color:var(--text-muted);font-style:italic;">${iso.note}</div>` : "";
      return `<tr>
        <td class="iso-name">${iso.name}${noteCell}</td>
        <td style="font-family:'Space Mono',monospace;font-size:0.68rem;">${iso.mass}</td>
        <td class="iso-pct" style="color:${isTrace ? 'var(--text-muted)' : color}">
          ${pctDisplay}
          ${iso.pct !== null ? `<div class="iso-pct-bar" style="width:${Math.min(100,barWidth)}%;background:${color};"></div>` : ""}
        </td>
      </tr>`;
    }).join("");

    bodyHTML = `
      <table class="iso-table">
        <thead><tr>
          <th>Isotope</th>
          <th class="iso-th-r">Mass (u)</th>
          <th class="iso-th-r">Abundance</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  popup.innerHTML = `
    <div class="iso-popup-header">
      <div class="iso-popup-box" style="background:color-mix(in srgb,${color} 40%,var(--surface2));">
        <div class="ip-z">${el.z}</div>
        <div class="ip-sym">${el.sym}</div>
        <div class="ip-mass">${el.mass}</div>
      </div>
      <div class="iso-popup-name">
        <h3>${el.name}</h3>
        <span class="ip-cat" style="background:color-mix(in srgb,${color} 80%,#000)">${catName}</span>
      </div>
    </div>
    ${bodyHTML}
    <div class="iso-note">Sources: IUPAC 2021 atomic weights; AME2020/NUBASE2020 (Wang et al., 2021)</div>`;

  popup.style.display = "block";
  positionIsotopePopup(e);
}

function positionIsotopePopup(e) {
  const popup = document.getElementById("isotopePopup");
  if (popup.style.display === "none") return;
  const pw = popup.offsetWidth || 300;
  const ph = popup.offsetHeight || 200;
  const vw = window.innerWidth, vh = window.innerHeight;
  let x = e.clientX + 14;
  let y = e.clientY + 14;
  if (x + pw > vw - 10) x = e.clientX - pw - 14;
  if (y + ph > vh - 10) y = e.clientY - ph - 14;
  popup.style.left = x + "px";
  popup.style.top  = y + "px";
}

function hideIsotopePopup() {
  document.getElementById("isotopePopup").style.display = "none";
}

// ─── ISOTOPE BUTTON WIRING ────────────────────────────────────────
document.getElementById("btnIsotopes").addEventListener("click", () => {
  buildIsotopeTable();
  openPanel("isotopesOverlay");
});
document.getElementById("closeIsotopes").addEventListener("click", () => {
  hideIsotopePopup();
  closePanel("isotopesOverlay");
});
// Hide popup when panel closes via backdrop click
document.getElementById("isotopesOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("isotopesOverlay")) {
    hideIsotopePopup();
  }
});
