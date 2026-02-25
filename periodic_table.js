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
function openTrend(key) {
  const cfg = TREND_DATA[key];
  document.getElementById("trendTitle").textContent = cfg.title;
  document.getElementById("trendNote").textContent = cfg.note;

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
  openPanel("trendOverlay");
}

// ─── COMMON IONS CHART ────────────────────────────────────────────
function buildIonsChart() {
  const cations = [
    {name:"Hydrogen",      sym:"H⁺",       charge:"+1"},
    {name:"Lithium",       sym:"Li⁺",      charge:"+1"},
    {name:"Sodium",        sym:"Na⁺",      charge:"+1"},
    {name:"Potassium",     sym:"K⁺",       charge:"+1"},
    {name:"Rubidium",      sym:"Rb⁺",      charge:"+1"},
    {name:"Cesium",        sym:"Cs⁺",      charge:"+1"},
    {name:"Silver",        sym:"Ag⁺",      charge:"+1"},
    {name:"Copper(I)",     sym:"Cu⁺",      charge:"+1"},
    {name:"Mercury(I)",    sym:"Hg₂²⁺",    charge:"+1 each"},
    {name:"Ammonium",      sym:"NH₄⁺",     charge:"+1 (polyatomic)"},
    {name:"Magnesium",     sym:"Mg²⁺",     charge:"+2"},
    {name:"Calcium",       sym:"Ca²⁺",     charge:"+2"},
    {name:"Strontium",     sym:"Sr²⁺",     charge:"+2"},
    {name:"Barium",        sym:"Ba²⁺",     charge:"+2"},
    {name:"Zinc",          sym:"Zn²⁺",     charge:"+2"},
    {name:"Cadmium",       sym:"Cd²⁺",     charge:"+2"},
    {name:"Copper(II)",    sym:"Cu²⁺",     charge:"+2"},
    {name:"Iron(II)",      sym:"Fe²⁺",     charge:"+2"},
    {name:"Cobalt(II)",    sym:"Co²⁺",     charge:"+2"},
    {name:"Nickel(II)",    sym:"Ni²⁺",     charge:"+2"},
    {name:"Manganese(II)", sym:"Mn²⁺",     charge:"+2"},
    {name:"Lead(II)",      sym:"Pb²⁺",     charge:"+2"},
    {name:"Tin(II)",       sym:"Sn²⁺",     charge:"+2"},
    {name:"Mercury(II)",   sym:"Hg²⁺",     charge:"+2"},
    {name:"Aluminum",      sym:"Al³⁺",     charge:"+3"},
    {name:"Iron(III)",     sym:"Fe³⁺",     charge:"+3"},
    {name:"Chromium(III)", sym:"Cr³⁺",     charge:"+3"},
    {name:"Cobalt(III)",   sym:"Co³⁺",     charge:"+3"},
    {name:"Bismuth(III)",  sym:"Bi³⁺",     charge:"+3"},
    {name:"Titanium(IV)",  sym:"Ti⁴⁺",     charge:"+4"},
    {name:"Lead(IV)",      sym:"Pb⁴⁺",     charge:"+4"},
    {name:"Tin(IV)",       sym:"Sn⁴⁺",     charge:"+4"},
  ];
  const anions = [
    {name:"Hydride",          sym:"H⁻",        charge:"−1"},
    {name:"Fluoride",         sym:"F⁻",        charge:"−1"},
    {name:"Chloride",         sym:"Cl⁻",       charge:"−1"},
    {name:"Bromide",          sym:"Br⁻",       charge:"−1"},
    {name:"Iodide",           sym:"I⁻",        charge:"−1"},
    {name:"Hydroxide",        sym:"OH⁻",       charge:"−1 (polyatomic)"},
    {name:"Nitrate",          sym:"NO₃⁻",      charge:"−1 (polyatomic)"},
    {name:"Nitrite",          sym:"NO₂⁻",      charge:"−1 (polyatomic)"},
    {name:"Bicarbonate",      sym:"HCO₃⁻",     charge:"−1 (polyatomic)"},
    {name:"Acetate",          sym:"CH₃COO⁻",   charge:"−1 (polyatomic)"},
    {name:"Permanganate",     sym:"MnO₄⁻",     charge:"−1 (polyatomic)"},
    {name:"Cyanide",          sym:"CN⁻",       charge:"−1 (polyatomic)"},
    {name:"Chlorate",         sym:"ClO₃⁻",     charge:"−1 (polyatomic)"},
    {name:"Perchlorate",      sym:"ClO₄⁻",     charge:"−1 (polyatomic)"},
    {name:"Hypochlorite",     sym:"ClO⁻",      charge:"−1 (polyatomic)"},
    {name:"Oxide",            sym:"O²⁻",       charge:"−2"},
    {name:"Sulfide",          sym:"S²⁻",       charge:"−2"},
    {name:"Sulfate",          sym:"SO₄²⁻",     charge:"−2 (polyatomic)"},
    {name:"Sulfite",          sym:"SO₃²⁻",     charge:"−2 (polyatomic)"},
    {name:"Carbonate",        sym:"CO₃²⁻",     charge:"−2 (polyatomic)"},
    {name:"Chromate",         sym:"CrO₄²⁻",    charge:"−2 (polyatomic)"},
    {name:"Dichromate",       sym:"Cr₂O₇²⁻",   charge:"−2 (polyatomic)"},
    {name:"Oxalate",          sym:"C₂O₄²⁻",    charge:"−2 (polyatomic)"},
    {name:"Thiosulfate",      sym:"S₂O₃²⁻",    charge:"−2 (polyatomic)"},
    {name:"Nitride",          sym:"N³⁻",       charge:"−3"},
    {name:"Phosphide",        sym:"P³⁻",       charge:"−3"},
    {name:"Phosphate",        sym:"PO₄³⁻",     charge:"−3 (polyatomic)"},
    {name:"Phosphite",        sym:"PO₃³⁻",     charge:"−3 (polyatomic)"},
    {name:"Arsenate",         sym:"AsO₄³⁻",    charge:"−3 (polyatomic)"},
  ];

  const makeSection = (title, color, rows) => `
    <h3 style="color:${color};font-size:0.8rem;letter-spacing:1.5px;text-transform:uppercase;margin:14px 0 6px;font-family:'Space Mono',monospace;">${title}</h3>
    <table class="ref-table">
      <thead><tr><th>Name</th><th>Symbol</th><th>Charge</th></tr></thead>
      <tbody>${rows.map(r=>`<tr><td>${r.name}</td><td style="font-weight:700;font-size:0.9rem">${r.sym}</td><td class="${r.charge.startsWith("−")?"neg":"pos"}">${r.charge}</td></tr>`).join("")}</tbody>
    </table>`;

  document.getElementById("ionsBody").innerHTML =
    makeSection("Cations (+)", "var(--c-alkali)", cations) +
    makeSection("Anions (−)", "var(--accent)", anions);
}

// ─── SOLUBILITY CHART ─────────────────────────────────────────────
function buildSolubilityChart() {
  const cations = ["Li⁺","Na⁺","K⁺","NH₄⁺","Ag⁺","Ca²⁺","Mg²⁺","Ba²⁺","Fe²⁺","Fe³⁺","Cu²⁺","Zn²⁺","Pb²⁺","Al³⁺","Hg²⁺","Mn²⁺","Ni²⁺","Co²⁺","Sn²⁺","Cr³⁺"];
  const anions = [
    {name:"NO₃⁻",    data:{default:"S"}},
    {name:"CH₃COO⁻", data:{"Ag⁺":"SS",default:"S"}},
    {name:"Cl⁻",     data:{"Ag⁺":"I","Pb²⁺":"I","Hg²⁺":"I",default:"S"}},
    {name:"Br⁻",     data:{"Ag⁺":"I","Pb²⁺":"SS","Hg²⁺":"I",default:"S"}},
    {name:"I⁻",      data:{"Ag⁺":"I","Pb²⁺":"I","Hg²⁺":"I","Cu²⁺":"I",default:"S"}},
    {name:"SO₄²⁻",   data:{"Ba²⁺":"I","Ca²⁺":"SS","Pb²⁺":"I","Ag⁺":"SS","Hg²⁺":"SS",default:"S"}},
    {name:"CO₃²⁻",   data:{"Li⁺":"S","Na⁺":"S","K⁺":"S","NH₄⁺":"S","Ag⁺":"I","Ca²⁺":"I","Mg²⁺":"I","Ba²⁺":"I","Fe²⁺":"I","Fe³⁺":"D","Cu²⁺":"I","Zn²⁺":"I","Pb²⁺":"I","Al³⁺":"D","Hg²⁺":"I","Mn²⁺":"I","Ni²⁺":"I","Co²⁺":"I","Sn²⁺":"I","Cr³⁺":"D"}},
    {name:"PO₄³⁻",   data:{"Li⁺":"S","Na⁺":"S","K⁺":"S","NH₄⁺":"S",default:"I"}},
    {name:"OH⁻",     data:{"Li⁺":"S","Na⁺":"S","K⁺":"S","NH₄⁺":"S","Ba²⁺":"S","Ca²⁺":"SS","Ag⁺":"I","Mg²⁺":"I","Fe²⁺":"I","Fe³⁺":"I","Cu²⁺":"I","Zn²⁺":"I","Pb²⁺":"I","Al³⁺":"I","Hg²⁺":"I","Mn²⁺":"I","Ni²⁺":"I","Co²⁺":"I","Sn²⁺":"I","Cr³⁺":"I",default:"I"}},
    {name:"S²⁻",     data:{"Li⁺":"S","Na⁺":"S","K⁺":"S","NH₄⁺":"S","Ca²⁺":"S","Mg²⁺":"S","Ba²⁺":"S","Fe²⁺":"I","Fe³⁺":"D","Cu²⁺":"I","Zn²⁺":"I","Pb²⁺":"I","Ag⁺":"I","Hg²⁺":"I","Mn²⁺":"I","Ni²⁺":"I","Co²⁺":"I","Sn²⁺":"I","Cr³⁺":"D","Al³⁺":"D",default:"I"}},
    {name:"CrO₄²⁻",  data:{"Li⁺":"S","Na⁺":"S","K⁺":"S","NH₄⁺":"S","Ag⁺":"I","Ca²⁺":"SS","Ba²⁺":"I","Pb²⁺":"I","Hg²⁺":"I","Zn²⁺":"S",default:"S"}},
  ];

  const getVal = (an, cat) => an.data[cat]!==undefined ? an.data[cat] : (an.data.default||"S");

  let html=`<div class="sol-wrap"><table class="sol-table"><thead><tr><th class="row-head">Anion / Cation</th>`;
  cations.forEach(c=>{html+=`<th>${c}</th>`;});
  html+=`</tr></thead><tbody>`;
  anions.forEach(an=>{
    html+=`<tr><th class="row-head">${an.name}</th>`;
    cations.forEach(cat=>{const v=getVal(an,cat);html+=`<td class="${v}">${v}</td>`;});
    html+=`</tr>`;
  });
  html+=`</tbody></table></div>
  <div class="sol-key">
    <div class="sol-key-item"><span style="color:#22c55e;font-weight:700">S</span> — Soluble (&gt;1g/100mL)</div>
    <div class="sol-key-item"><span style="color:#eab308;font-weight:700">SS</span> — Slightly Soluble</div>
    <div class="sol-key-item"><span style="color:#ef4444;font-weight:700">I</span> — Insoluble (&lt;0.1g/100mL)</div>
    <div class="sol-key-item"><span style="color:var(--text-muted);font-weight:700">D</span> — Decomposes in water</div>
  </div>`;
  document.getElementById("solubilityBody").innerHTML=html;
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

// ─── Ka CHART ─────────────────────────────────────────────────────
function buildKaChart() {
  const acids=[
    {name:"Hydroiodic acid",         formula:"HI",           ka:"~10⁹",       pka:"~−9",    strength:"Strong"},
    {name:"Hydrobromic acid",        formula:"HBr",          ka:"~10⁹",       pka:"~−9",    strength:"Strong"},
    {name:"Perchloric acid",         formula:"HClO₄",        ka:"~10¹⁰",      pka:"~−10",   strength:"Strong"},
    {name:"Hydrochloric acid",       formula:"HCl",          ka:"~10⁷",       pka:"~−7",    strength:"Strong"},
    {name:"Sulfuric acid (1st)",     formula:"H₂SO₄",        ka:"~10³",       pka:"~−3",    strength:"Strong"},
    {name:"Nitric acid",             formula:"HNO₃",         ka:"~25",        pka:"~−1.4",  strength:"Strong"},
    {name:"Hydronium ion",           formula:"H₃O⁺",         ka:"1",          pka:"0.00",   strength:"Reference", ref:true},
    {name:"Sulfuric acid (2nd)",     formula:"HSO₄⁻",        ka:"1.2×10⁻²",  pka:"1.92",   strength:"Weak"},
    {name:"Phosphoric acid (1st)",   formula:"H₃PO₄",        ka:"7.5×10⁻³",  pka:"2.12",   strength:"Weak"},
    {name:"Hydrofluoric acid",       formula:"HF",           ka:"6.8×10⁻⁴",  pka:"3.17",   strength:"Weak"},
    {name:"Nitrous acid",            formula:"HNO₂",         ka:"4.5×10⁻⁴",  pka:"3.35",   strength:"Weak"},
    {name:"Formic acid",             formula:"HCOOH",        ka:"1.8×10⁻⁴",  pka:"3.74",   strength:"Weak"},
    {name:"Benzoic acid",            formula:"C₆H₅COOH",     ka:"6.5×10⁻⁵",  pka:"4.19",   strength:"Weak"},
    {name:"Acetic acid",             formula:"CH₃COOH",      ka:"1.8×10⁻⁵",  pka:"4.74",   strength:"Weak"},
    {name:"Carbonic acid (1st)",     formula:"H₂CO₃",        ka:"4.3×10⁻⁷",  pka:"6.37",   strength:"Weak"},
    {name:"Hydrogen sulfide (1st)",  formula:"H₂S",          ka:"9.5×10⁻⁸",  pka:"7.02",   strength:"Weak"},
    {name:"Dihydrogen phosphate",    formula:"H₂PO₄⁻",       ka:"6.2×10⁻⁸",  pka:"7.21",   strength:"Weak"},
    {name:"Hypochlorous acid",       formula:"HClO",         ka:"3.0×10⁻⁸",  pka:"7.52",   strength:"Weak"},
    {name:"Ammonium ion",            formula:"NH₄⁺",         ka:"5.6×10⁻¹⁰", pka:"9.25",   strength:"Weak"},
    {name:"Hydrocyanic acid",        formula:"HCN",          ka:"4.9×10⁻¹⁰", pka:"9.31",   strength:"Weak"},
    {name:"Boric acid",              formula:"H₃BO₃",        ka:"5.8×10⁻¹⁰", pka:"9.24",   strength:"Weak"},
    {name:"Carbonic acid (2nd)",     formula:"HCO₃⁻",        ka:"4.7×10⁻¹¹", pka:"10.33",  strength:"Weak"},
    {name:"Monohydrogen phosphate",  formula:"HPO₄²⁻",       ka:"2.2×10⁻¹³", pka:"12.66",  strength:"Weak"},
    {name:"Hydrogen sulfide (2nd)",  formula:"HS⁻",          ka:"1.2×10⁻¹⁵", pka:"14.92",  strength:"Weak"},
    {name:"Water",                   formula:"H₂O",          ka:"1.8×10⁻¹⁶", pka:"15.74",  strength:"Very Weak"},
    {name:"Phosphoric acid (3rd)",   formula:"PO₄³⁻",        ka:"~10⁻¹⁸",    pka:"~18",    strength:"Very Weak"},
  ];
  const sc=s=>{if(s==="Strong")return"#ef4444";if(s==="Reference")return"var(--accent)";if(s==="Very Weak")return"var(--text-muted)";return"#22c55e";};
  let html=`<table class="ref-table"><thead><tr><th>Acid</th><th>Formula</th><th>Ka</th><th>pKa</th><th>Type</th></tr></thead><tbody>`;
  acids.forEach(a=>{
    const rs=a.ref?`style="background:color-mix(in srgb,var(--accent) 10%,var(--surface2));font-style:italic"`:"";
    html+=`<tr ${rs}><td>${a.name}</td><td style="font-weight:700">${a.formula}</td>
      <td style="font-family:'Space Mono',monospace;font-size:0.72rem">${a.ka}</td>
      <td style="font-family:'Space Mono',monospace;font-size:0.72rem">${a.pka}</td>
      <td style="color:${sc(a.strength)};font-weight:700;font-size:0.72rem">${a.strength}</td></tr>`;
  });
  html+=`</tbody></table><p class="trend-note" style="margin-top:12px">Ka is the acid dissociation constant. Larger Ka (smaller pKa) = stronger acid. Strong acids are essentially 100% dissociated. Weak acids establish equilibrium. All values at 25°C.</p>`;
  document.getElementById("kaBody").innerHTML=html;
}

// ─── STANDARD REDUCTION POTENTIALS ────────────────────────────────
function buildRedoxChart() {
  const halfCells=[
    {half:"F₂ + 2e⁻ → 2F⁻",                        e:"+2.87"},
    {half:"S₂O₈²⁻ + 2e⁻ → 2SO₄²⁻",                 e:"+2.01"},
    {half:"H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O",               e:"+1.77"},
    {half:"MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",       e:"+1.51"},
    {half:"PbO₂ + 4H⁺ + 2e⁻ → Pb²⁺ + 2H₂O",         e:"+1.46"},
    {half:"Cl₂ + 2e⁻ → 2Cl⁻",                        e:"+1.36"},
    {half:"Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O",   e:"+1.33"},
    {half:"O₂ + 4H⁺ + 4e⁻ → 2H₂O",                  e:"+1.23"},
    {half:"Br₂ + 2e⁻ → 2Br⁻",                        e:"+1.07"},
    {half:"NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O",           e:"+0.96"},
    {half:"Hg²⁺ + 2e⁻ → Hg",                          e:"+0.85"},
    {half:"Ag⁺ + e⁻ → Ag",                             e:"+0.80"},
    {half:"Fe³⁺ + e⁻ → Fe²⁺",                         e:"+0.77"},
    {half:"O₂ + 2H⁺ + 2e⁻ → H₂O₂",                  e:"+0.68"},
    {half:"MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻",       e:"+0.59"},
    {half:"I₂ + 2e⁻ → 2I⁻",                           e:"+0.54"},
    {half:"O₂ + 2H₂O + 4e⁻ → 4OH⁻",                  e:"+0.40"},
    {half:"Cu²⁺ + 2e⁻ → Cu",                           e:"+0.34"},
    {half:"Cu²⁺ + e⁻ → Cu⁺",                           e:"+0.16"},
    {half:"Sn⁴⁺ + 2e⁻ → Sn²⁺",                        e:"+0.15"},
    {half:"S + 2H⁺ + 2e⁻ → H₂S",                      e:"+0.14"},
    {half:"2H⁺ + 2e⁻ → H₂",                           e:"0.00", ref:true},
    {half:"Pb²⁺ + 2e⁻ → Pb",                           e:"−0.13"},
    {half:"Sn²⁺ + 2e⁻ → Sn",                          e:"−0.14"},
    {half:"Ni²⁺ + 2e⁻ → Ni",                          e:"−0.26"},
    {half:"Co²⁺ + 2e⁻ → Co",                          e:"−0.28"},
    {half:"Fe²⁺ + 2e⁻ → Fe",                          e:"−0.44"},
    {half:"Cr³⁺ + 3e⁻ → Cr",                          e:"−0.74"},
    {half:"Zn²⁺ + 2e⁻ → Zn",                          e:"−0.76"},
    {half:"2H₂O + 2e⁻ → H₂ + 2OH⁻",                  e:"−0.83"},
    {half:"Mn²⁺ + 2e⁻ → Mn",                          e:"−1.18"},
    {half:"Al³⁺ + 3e⁻ → Al",                          e:"−1.66"},
    {half:"Mg²⁺ + 2e⁻ → Mg",                          e:"−2.37"},
    {half:"Na⁺ + e⁻ → Na",                             e:"−2.71"},
    {half:"Ca²⁺ + 2e⁻ → Ca",                          e:"−2.87"},
    {half:"K⁺ + e⁻ → K",                              e:"−2.93"},
    {half:"Li⁺ + e⁻ → Li",                             e:"−3.05"},
  ];
  let html=`<table class="ref-table"><thead><tr><th>Half-Cell Reaction (Reduction)</th><th>E° (V)</th></tr></thead><tbody>`;
  halfCells.forEach(hc=>{
    const val=parseFloat(hc.e);
    const cls=hc.ref?"": (val>0?"pos":"neg");
    const rs=hc.ref?`style="background:color-mix(in srgb,var(--accent) 10%,var(--surface2));font-style:italic"`:"";
    html+=`<tr ${rs}><td style="font-family:'Space Mono',monospace;font-size:0.72rem">${hc.half}</td>
      <td class="${cls}" style="font-weight:700;font-family:'Space Mono',monospace">${hc.e}</td></tr>`;
  });
  html+=`</tbody></table><p class="trend-note" style="margin-top:12px">Standard reduction potentials at 25°C, 1 atm, 1 M. E°cell = E°cathode − E°anode. Positive E°cell → spontaneous. Higher E° = stronger oxidizing agent (favors being reduced).</p>`;
  document.getElementById("redoxBody").innerHTML=html;
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
