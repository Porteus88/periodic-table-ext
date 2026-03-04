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

// ─── SCALE PERIODIC TABLE TO 80% OF SCREEN ──────────────────────
// Computes the largest square cell that fits 18 cols × 9 rows
// within 80vw × 80vh (accounting for all fixed chrome).
// Sets --cell-size on :root so every element and label scales.

function scalePT() {
  const TARGET = 0.80;
  const COLS = 18, ROWS = 9, GAP = 2;
  const SIDE_W = document.querySelector('.side-panel') ? document.querySelector('.side-panel').offsetWidth : 50;

  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const header    = document.querySelector('.header');
  const legend    = document.querySelector('.legend');
  const trendsBar = document.querySelector('.trends-bar');
  const accordion = document.getElementById('toolsAccordion');

  const chromeH =
    (header    ? header.offsetHeight    : 32) +
    (legend    ? legend.offsetHeight    : 24) +
    (trendsBar ? trendsBar.offsetHeight : 36) +
    (accordion && accordion.style.display !== 'none' ? accordion.offsetHeight : 0) +
    12; // table-area top padding

  const availW = screenW * TARGET - SIDE_W - 18;
  const availH = screenH * TARGET - chromeH;

  const cellFromW = (availW - (COLS - 1) * GAP) / COLS;
  // Rows: 7 element rows + 1 section-gap (~10% cell) + 1 lan/act row = ~8.1 effective
  const cellFromH = (availH - (ROWS - 1) * GAP) / 8.1;

  const cell = Math.max(16, Math.min(cellFromW, cellFromH));
  document.documentElement.style.setProperty('--cell-size', cell.toFixed(1) + 'px');
  document.documentElement.style.setProperty('--cell-gap',  GAP + 'px');
}

// ─── INIT ────────────────────────────────────────────────────────
buildGrid();
buildIonsChart();
buildSolubilityChart();
buildActivitySeries();
buildKaChart();
buildRedoxChart();
buildKspChart();
buildIndicatorsChart();

// Scale table to 80% of screen, then re-scale on every resize
requestAnimationFrame(() => {
  scalePT();
  window.addEventListener('resize', scalePT);
});

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

// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 1: ELECTRON CONFIGURATION & ORBITAL DIAGRAMS ──────────
// ═══════════════════════════════════════════════════════════════════

const CAT_COLORS_EC = {
  "alkali":"#ef4444","alkali-earth":"#f97316","transition":"#3b82f6",
  "post-trans":"#8b5cf6","metalloid":"#14b8a6","nonmetal":"#22c55e",
  "halogen":"#eab308","noble-gas":"#ec4899","lanthanide":"#06b6d4","actinide":"#f59e0b"
};
const CAT_LABELS_EC = {
  "alkali":"Alkali Metal","alkali-earth":"Alkaline Earth","transition":"Transition Metal",
  "post-trans":"Post-Transition","metalloid":"Metalloid","nonmetal":"Nonmetal",
  "halogen":"Halogen","noble-gas":"Noble Gas","lanthanide":"Lanthanide","actinide":"Actinide"
};

// Expand noble-gas shorthand config to full spdf notation
function expandConfig(cfg) {
  const noble = {
    "[He]":"1s²",
    "[Ne]":"1s² 2s² 2p⁶",
    "[Ar]":"1s² 2s² 2p⁶ 3s² 3p⁶",
    "[Kr]":"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶",
    "[Xe]":"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",
    "[Rn]":"1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s² 6p⁶",
  };
  for (const [k,v] of Object.entries(noble)) {
    if (cfg.startsWith(k)) return v + cfg.slice(k.length);
  }
  return cfg;
}

// Parse full config string into subshell objects [{n,l,count}]
function parseConfig(cfg) {
  const full = expandConfig(cfg);
  const pattern = /(\d+)([spdf])([\d⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g;
  const superMap = {"⁰":0,"¹":1,"²":2,"³":3,"⁴":4,"⁵":5,"⁶":6,"⁷":7,"⁸":8,"⁹":9,"¹⁰":10,"¹¹":11,"¹²":12,"¹³":13,"¹⁴":14};
  const result = [];
  let m;
  while ((m = pattern.exec(full)) !== null) {
    const superStr = m[3];
    let count = 0;
    if (superStr.length === 1) count = superMap[superStr] ?? parseInt(superStr);
    else {
      // multi-char superscript like ¹⁰
      const twoChar = superStr.slice(0,2);
      if (superMap[twoChar] !== undefined) count = superMap[twoChar];
      else count = parseInt(superStr) || 0;
    }
    result.push({ n: parseInt(m[1]), l: m[2], count });
  }
  return result;
}

// Build orbital box diagram HTML for a subshell
function orbitalBoxes(l, count) {
  const capacity = {s:2, p:6, d:10, f:14};
  const numBoxes = capacity[l] / 2; // number of orbital boxes
  const boxes = [];
  // Fill by Hund's rule: first spin-up, then pair
  for (let i = 0; i < numBoxes; i++) {
    let electrons = 0;
    if (count > i) electrons++;          // spin-up
    if (count > numBoxes + i) electrons++; // spin-down (pairing)
    boxes.push(electrons);
  }
  return boxes.map(e => {
    const arrows = e === 2 ? '⇅' : e === 1 ? '↑' : '';
    return `<div class="ec-box filled-${e}" title="${e} electron(s)">${arrows}</div>`;
  }).join('');
}

let ecSelectedEl = null;

function buildElecConfigPanel() {
  const body = document.getElementById("elecConfigBody");
  if (body.children.length > 0) return;

  // Build periodic table grid
  let gridHTML = `<div class="ec-grid">`;
  const posMap = {};
  ELEMENTS.forEach(el => { posMap[`${el.row},${el.col}`] = el; });

  for (let r = 1; r <= 9; r++) {
    if (r === 8) {
      gridHTML += `<div class="ec-section-gap"></div>`;
      continue;
    }
    for (let c = 1; c <= 18; c++) {
      // Center block rows 1-3 cols 3-12
      if (r <= 3 && c >= 3 && c <= 12) {
        if (r === 1 && c === 3) {
          gridHTML += `<div class="ec-center" style="grid-row:1/4;grid-column:3/13;">
            <div class="ec-big-title">Electron Configurations</div>
            <div class="ec-sub">Click any element to see orbital diagram</div>
            <div class="ec-block-legend">
              <div class="ec-legend-item"><div class="ec-legend-dot" style="background:#ef4444;"></div><span class="ec-block-s">s block</span></div>
              <div class="ec-legend-item"><div class="ec-legend-dot" style="background:#3b82f6;"></div><span class="ec-block-p">p block</span></div>
              <div class="ec-legend-item"><div class="ec-legend-dot" style="background:#f97316;"></div><span class="ec-block-d">d block</span></div>
              <div class="ec-legend-item"><div class="ec-legend-dot" style="background:#8b5cf6;"></div><span class="ec-block-f">f block</span></div>
            </div>
          </div>`;
        }
        continue;
      }

      const el = posMap[`${r},${c}`];
      if (!el) {
        // Lanthanide/Actinide gap blocks
        if ((r === 6 || r === 7) && c >= 4 && c <= 17) {
          if (c === 4) {
            const label = r === 6 ? "Lanthanides (57–71)" : "Actinides (89–103)";
            gridHTML += `<div style="grid-row:${r};grid-column:4/18;background:transparent;
              border:1px dashed var(--border);border-radius:5px;display:flex;
              align-items:center;justify-content:center;font-size:0.38rem;
              color:var(--text-muted);font-weight:700;letter-spacing:0.5px;">${label}</div>`;
          }
          continue;
        }
        gridHTML += `<div style="grid-row:${r};grid-column:${c};aspect-ratio:1;"></div>`;
        continue;
      }

      // Determine block colour overlay
      const cfg = el.config || '';
      let blockClass = '';
      if (cfg.match(/\d+f[\d⁰-⁹]+$/)) blockClass = 'ec-block-f-bg';
      else if (cfg.match(/\d+d[\d⁰-⁹]+$/)) blockClass = 'ec-block-d-bg';
      else if (cfg.match(/\d+p[\d⁰-⁹]+$/)) blockClass = 'ec-block-p-bg';
      else blockClass = 'ec-block-s-bg';

      gridHTML += `<div class="ec-el ${el.cat}" 
        style="grid-row:${el.row};grid-column:${el.col};"
        data-z="${el.z}" title="${el.name}: ${el.config}">
        <div class="ec-z">${el.z}</div>
        <div class="ec-sym">${el.sym}</div>
        <div class="ec-cfg">${el.config}</div>
      </div>`;
    }
  }
  gridHTML += `</div>`;

  // Detail box placeholder
  gridHTML += `<div class="ec-detail-box" id="ecDetailBox">
    <div style="text-align:center;color:var(--text-muted);font-size:0.82rem;padding:20px 0;">
      Click any element above to view its electron configuration and orbital diagram.
    </div>
  </div>`;

  body.innerHTML = gridHTML;

  // Wire click events
  body.querySelectorAll('.ec-el').forEach(cell => {
    cell.addEventListener('click', () => {
      const z = parseInt(cell.dataset.z);
      const el = ELEMENTS.find(e => e.z === z);
      if (el) showEcDetail(el);
      body.querySelectorAll('.ec-el').forEach(c => c.style.outline = '');
      cell.style.outline = '3px solid var(--accent)';
    });
  });
}

function showEcDetail(el) {
  const box = document.getElementById('ecDetailBox');
  const color = CAT_COLORS_EC[el.cat] || '#94a3b8';
  const catName = CAT_LABELS_EC[el.cat] || el.cat;
  const fullCfg = expandConfig(el.config);
  const subshells = parseConfig(el.config);

  // Build orbital groups
  let orbitalHTML = '';
  const groups = [];
  subshells.forEach(sub => {
    const key = `${sub.n}${sub.l}`;
    groups.push({key, n: sub.n, l: sub.l, count: sub.count});
  });

  // ── Absolute energy positions for aufbau diagram ──────────────────
  // Each subshell gets a {x, y} position in a coordinate system where:
  //   y increases UPWARD (higher y = higher energy)
  //   x: s=0, p=1, d=2, f=3 columns (with staggering)
  //   Within each n level: s and p are at the same height;
  //   d is slightly lower than p of same n (sits between n-1 and n s levels);
  //   f is slightly lower than d of same n.
  //
  // Empirical energy ordering (aufbau):
  //   1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d
  //
  // We assign a yBase per principal level and stagger d/f downward.

  // Y positions: each n-level spaced 120 units apart.
  // Within each n: s and p are at the SAME height (base).
  // d is 25 units below p of the same n (staircase down-right).
  // f is 25 units below d of the same n (staircase continues).
  // This means 3d sits 25 below 3p, 4f sits 25 below 4d, etc.
  const nBase = n => n * 120;
  const SUBSHELL_Y = {
    '1s': nBase(1),
    '2s': nBase(2),  '2p': nBase(2),
    '3s': nBase(3),  '3p': nBase(3),  '3d': nBase(3) - 25,
    '4s': nBase(4),  '4p': nBase(4),  '4d': nBase(4) - 25,  '4f': nBase(4) - 50,
    '5s': nBase(5),  '5p': nBase(5),  '5d': nBase(5) - 25,  '5f': nBase(5) - 50,
    '6s': nBase(6),  '6p': nBase(6),  '6d': nBase(6) - 25,
    '7s': nBase(7),  '7p': nBase(7),
  };

  // X columns: s=0, p=1, d=2, f=3 — fixed pixel offsets, not proportional
  const SUBSHELL_X = { s: 0, p: 1, d: 2, f: 3 };
  const blockColor = { s:'#ef4444', p:'#3b82f6', d:'#f97316', f:'#8b5cf6' };

  // Build positioned subshell list
  const positioned = groups.map(sub => ({
    ...sub,
    y: SUBSHELL_Y[`${sub.n}${sub.l}`] ?? (sub.n * 100),
    x: SUBSHELL_X[sub.l] ?? 0,
    color: blockColor[sub.l] || '#94a3b8',
  }));

  // SVG dimensions
  const maxY = Math.max(...positioned.map(s => s.y));
  const minY = Math.min(...positioned.map(s => s.y));
  const svgH = 440;
  const svgW = 580;
  const padTop = 24, padBot = 30, padLeft = 48, padRight = 16;
  const drawH = svgH - padTop - padBot;

  // Map energy Y to SVG Y (invert: high energy = low SVG y = top of diagram)
  const yRange = maxY - minY || 100;
  const toSvgY = (energyY) => padTop + drawH - ((energyY - minY) / yRange) * drawH;

  // Fixed column centres for s, p, d, f
  // s is leftmost, each successive type steps right AND slightly down
  // The x centres are fixed; the y stagger is already encoded in SUBSHELL_Y
  const COL_CENTRES = [85, 205, 360, 510];
  const toSvgX = (col) => COL_CENTRES[col] ?? (padLeft + col * 140);

  // Box dimensions
  const BOX_W = 26, BOX_H = 26, BOX_GAP = 3;
  const LABEL_H = 14;
  const capacity = { s:2, p:6, d:10, f:14 };
  const subshellW = (l) => (capacity[l]/2) * (BOX_W + BOX_GAP) - BOX_GAP;

  let svgContent = '';

  // Draw energy axis line
  svgContent += `<line x1="${padLeft-14}" y1="${padTop}" x2="${padLeft-14}" y2="${padTop+drawH}"
    stroke="rgba(148,163,184,0.3)" stroke-width="1.5"/>`;
  svgContent += `<text x="${padLeft-16}" y="${padTop-6}" text-anchor="middle"
    font-size="10" fill="rgba(148,163,184,0.7)">↑</text>`;
  svgContent += `<text x="${padLeft-16}" y="${padTop+drawH/2}" text-anchor="middle"
    font-size="9" fill="rgba(148,163,184,0.5)"
    transform="rotate(-90,${padLeft-16},${padTop+drawH/2})">Energy</text>`;

  // Column header labels
  const colLabels = [['s','#ef4444'],['p','#3b82f6'],['d','#f97316'],['f','#8b5cf6']];
  colLabels.forEach(([lbl, clr], i) => {
    svgContent += `<text x="${COL_CENTRES[i]}" y="14" text-anchor="middle"
      font-size="12" font-weight="800" fill="${clr}" font-family="monospace">${lbl}</text>`;
  });

  // Draw each n-level horizontal dashed guide line (for s level)
  const drawnNLines = new Set();
  positioned.filter(s => s.l === 's').forEach(s => {
    if (drawnNLines.has(s.n)) return;
    drawnNLines.add(s.n);
    const sy = toSvgY(s.y);
    svgContent += `<line x1="${padLeft-8}" x2="${svgW-padRight}"
      y1="${sy + BOX_H/2 + LABEL_H}" y2="${sy + BOX_H/2 + LABEL_H}"
      stroke="rgba(148,163,184,0.12)" stroke-width="1" stroke-dasharray="3,4"/>`;
    svgContent += `<text x="${padLeft-10}" y="${sy + BOX_H/2 + LABEL_H + 4}"
      text-anchor="end" font-size="9" fill="rgba(148,163,184,0.5)"
      font-family="monospace">n=${s.n}</text>`;
  });

  // Draw each subshell
  positioned.forEach(sub => {
    const cx = toSvgX(sub.x);
    const sy = toSvgY(sub.y);
    const totalW = subshellW(sub.l);
    const startX = cx - totalW / 2;
    const numBoxes = capacity[sub.l] / 2;

    // Label above boxes
    svgContent += `<text x="${cx}" y="${sy - 3}" text-anchor="middle"
      font-size="10" fill="${sub.color}" font-weight="700" font-family="monospace">
      ${sub.n}${sub.l}`;
    // Superscript electron count — approximate with offset
    svgContent += `<tspan font-size="8" dy="-3">${sub.count}</tspan></text>`;

    // Boxes
    for (let i = 0; i < numBoxes; i++) {
      const bx = startX + i * (BOX_W + BOX_GAP);
      const by = sy;
      let electrons = 0;
      if (sub.count > i) electrons++;
      if (sub.count > numBoxes + i) electrons++;
      const fill = electrons === 2 ? `color-mix(in srgb,${sub.color} 45%,var(--surface))`
                 : electrons === 1 ? `color-mix(in srgb,${sub.color} 22%,var(--surface))`
                 : 'var(--surface)';
      const stroke = electrons > 0 ? sub.color : 'rgba(148,163,184,0.4)';
      svgContent += `<rect x="${bx}" y="${by}" width="${BOX_W}" height="${BOX_H}"
        rx="3" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
      // Arrow(s)
      if (electrons >= 1) {
        svgContent += `<text x="${bx+BOX_W/2}" y="${by+BOX_H-6}" text-anchor="middle"
          font-size="13" fill="${sub.color}">↑</text>`;
      }
      if (electrons === 2) {
        svgContent += `<text x="${bx+BOX_W/2}" y="${by+BOX_H-6}" text-anchor="middle"
          font-size="13" fill="${sub.color}" transform="rotate(180,${bx+BOX_W/2},${by+BOX_H/2})">↑</text>`;
      }
    }
  });

  orbitalHTML = `<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}"
    xmlns="http://www.w3.org/2000/svg"
    style="background:var(--surface2);border-radius:8px;border:1px solid var(--border);
      display:block;max-width:100%;overflow:visible;">${svgContent}</svg>
  <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:6px;font-size:0.68rem;">
    <span style="color:#ef4444;">■ s orbital</span>
    <span style="color:#3b82f6;">■ p orbital</span>
    <span style="color:#f97316;">■ d orbital (lower than p of same n)</span>
    <span style="color:#8b5cf6;">■ f orbital (lower than d of same n)</span>
  </div>`;

  // Anomalous configuration note
  let anomNote = '';
  const anomalous = [24,29,41,42,44,45,46,47,57,58,64,78,79,89,90,91,92,93,96];
  if (anomalous.includes(el.z)) {
    anomNote = `<div class="ec-note">⚠️ Anomalous configuration — half-filled or fully-filled subshell provides extra stability.</div>`;
  }

  box.innerHTML = `
    <div class="ec-detail-header">
      <div class="ec-detail-sbox" style="background:color-mix(in srgb,${color} 40%,var(--surface2));">
        <div class="ed-z">${el.z}</div>
        <div class="ed-sym">${el.sym}</div>
        <div class="ed-mass">${el.mass}</div>
      </div>
      <div class="ec-detail-info">
        <h3>${el.name}</h3>
        <span class="ec-cat-badge" style="background:color-mix(in srgb,${color} 80%,#000)">${catName}</span>
        <div style="font-size:0.72rem;color:var(--text-muted);margin-top:4px;">
          Period ${el.period} &nbsp;·&nbsp; Group ${el.group || '—'} &nbsp;·&nbsp; ${el.state}
        </div>
      </div>
    </div>
    <div class="ec-config-display">
      <div style="font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:1px;
        text-transform:uppercase;color:var(--text-muted);margin-bottom:4px;">Shorthand</div>
      <div class="ec-config-full">${el.config}</div>
      <div style="font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:1px;
        text-transform:uppercase;color:var(--text-muted);margin-bottom:4px;margin-top:8px;">Full configuration</div>
      <div class="ec-config-full" style="font-size:0.75rem;color:var(--text);">${fullCfg}</div>
    </div>
    <div style="font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:1px;
      text-transform:uppercase;color:var(--text-muted);margin:10px 0 6px;">Orbital box diagram</div>
    ${orbitalHTML}
    ${anomNote}`;
}

document.getElementById("btnElecConfig").addEventListener("click", () => {
  buildElecConfigPanel();
  openPanel("elecConfigOverlay");
});
document.getElementById("closeElecConfig").addEventListener("click", () => closePanel("elecConfigOverlay"));


// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 2: IONIC COMPOUND NAMING TOOL ─────────────────────────
// ═══════════════════════════════════════════════════════════════════

const NAMING_CATIONS = [
  {sym:"Al³⁺",  name:"Aluminum",               charge:3,  type:"mono"},
  {sym:"NH₄⁺",  name:"Ammonium",               charge:1,  type:"poly"},
  {sym:"Ba²⁺",  name:"Barium",                 charge:2,  type:"mono"},
  {sym:"Be²⁺",  name:"Beryllium",              charge:2,  type:"mono"},
  {sym:"Ca²⁺",  name:"Calcium",               charge:2,  type:"mono"},
  {sym:"Cs⁺",   name:"Cesium",                charge:1,  type:"mono"},
  {sym:"Cr²⁺",  name:"Chromium(II)",           charge:2,  type:"trans"},
  {sym:"Cr³⁺",  name:"Chromium(III)",          charge:3,  type:"trans"},
  {sym:"Co²⁺",  name:"Cobalt(II)",             charge:2,  type:"trans"},
  {sym:"Co³⁺",  name:"Cobalt(III)",            charge:3,  type:"trans"},
  {sym:"Cu⁺",   name:"Copper(I)",              charge:1,  type:"trans"},
  {sym:"Cu²⁺",  name:"Copper(II)",             charge:2,  type:"trans"},
  {sym:"Fe²⁺",  name:"Iron(II)",               charge:2,  type:"trans"},
  {sym:"Fe³⁺",  name:"Iron(III)",              charge:3,  type:"trans"},
  {sym:"Pb²⁺",  name:"Lead(II)",               charge:2,  type:"trans"},
  {sym:"Pb⁴⁺",  name:"Lead(IV)",               charge:4,  type:"trans"},
  {sym:"Li⁺",   name:"Lithium",                charge:1,  type:"mono"},
  {sym:"Mg²⁺",  name:"Magnesium",              charge:2,  type:"mono"},
  {sym:"Mn²⁺",  name:"Manganese(II)",          charge:2,  type:"trans"},
  {sym:"Mn⁴⁺",  name:"Manganese(IV)",          charge:4,  type:"trans"},
  {sym:"Hg₂²⁺", name:"Mercury(I)",             charge:2,  type:"trans", unitCharge:1},
  {sym:"Hg²⁺",  name:"Mercury(II)",            charge:2,  type:"trans"},
  {sym:"Ni²⁺",  name:"Nickel(II)",             charge:2,  type:"trans"},
  {sym:"K⁺",    name:"Potassium",              charge:1,  type:"mono"},
  {sym:"Ag⁺",   name:"Silver",                 charge:1,  type:"trans"},
  {sym:"Na⁺",   name:"Sodium",                 charge:1,  type:"mono"},
  {sym:"Sr²⁺",  name:"Strontium",              charge:2,  type:"mono"},
  {sym:"Sn²⁺",  name:"Tin(II)",                charge:2,  type:"trans"},
  {sym:"Sn⁴⁺",  name:"Tin(IV)",                charge:4,  type:"trans"},
  {sym:"Zn²⁺",  name:"Zinc",                   charge:2,  type:"mono"},
  {sym:"H⁺",    name:"Hydrogen",              charge:1,  type:"mono"},
];

const NAMING_ANIONS = [
  {sym:"Br⁻",      name:"Bromide",              charge:-1, type:"mono"},
  {sym:"CO₃²⁻",    name:"Carbonate",            charge:-2, type:"poly"},
  {sym:"Cl⁻",      name:"Chloride",             charge:-1, type:"mono"},
  {sym:"CrO₄²⁻",   name:"Chromate",             charge:-2, type:"poly"},
  {sym:"CN⁻",      name:"Cyanide",              charge:-1, type:"poly"},
  {sym:"Cr₂O₇²⁻",  name:"Dichromate",           charge:-2, type:"poly"},
  {sym:"F⁻",       name:"Fluoride",             charge:-1, type:"mono"},
  {sym:"H₂PO₄⁻",   name:"Dihydrogen phosphate", charge:-1, type:"poly"},
  {sym:"CH₃COO⁻",  name:"Acetate",              charge:-1, type:"poly"},
  {sym:"HCO₃⁻",    name:"Hydrogen carbonate",   charge:-1, type:"poly"},
  {sym:"HSO₄⁻",    name:"Hydrogen sulfate",     charge:-1, type:"poly"},
  {sym:"OH⁻",      name:"Hydroxide",            charge:-1, type:"poly"},
  {sym:"ClO⁻",     name:"Hypochlorite",         charge:-1, type:"poly"},
  {sym:"I⁻",       name:"Iodide",               charge:-1, type:"mono"},
  {sym:"HPO₄²⁻",   name:"Monohydrogen phosphate",charge:-2, type:"poly"},
  {sym:"NO₃⁻",     name:"Nitrate",              charge:-1, type:"poly"},
  {sym:"NO₂⁻",     name:"Nitrite",              charge:-1, type:"poly"},
  {sym:"O²⁻",      name:"Oxide",                charge:-2, type:"mono"},
  {sym:"ClO₄⁻",    name:"Perchlorate",          charge:-1, type:"poly"},
  {sym:"MnO₄⁻",    name:"Permanganate",         charge:-1, type:"poly"},
  {sym:"PO₄³⁻",    name:"Phosphate",            charge:-3, type:"poly"},
  {sym:"S²⁻",      name:"Sulfide",              charge:-2, type:"mono"},
  {sym:"SO₄²⁻",    name:"Sulfate",              charge:-2, type:"poly"},
  {sym:"SO₃²⁻",    name:"Sulfite",              charge:-2, type:"poly"},
  {sym:"SCN⁻",     name:"Thiocyanate",          charge:-1, type:"poly"},
  {sym:"N³⁻",      name:"Nitride",              charge:-3, type:"mono"},
  {sym:"C₂O₄²⁻",   name:"Oxalate",             charge:-2, type:"poly"},
];

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

function buildNamingPanel() {
  const body = document.getElementById("namingBody");
  if (body.children.length > 0) return;

  const catOptions = NAMING_CATIONS.map((c,i) =>
    `<option value="${i}">${c.sym} — ${c.name}</option>`).join('');
  const anionOptions = NAMING_ANIONS.map((a,i) =>
    `<option value="${i}">${a.sym} — ${a.name}</option>`).join('');

  body.innerHTML = `
    <div class="naming-wrap">
      <div class="naming-selects">
        <div>
          <div class="naming-select-label">Cation (positive ion)</div>
          <select class="naming-select" id="namingCat">${catOptions}</select>
        </div>
        <div class="naming-plus">+</div>
        <div>
          <div class="naming-select-label">Anion (negative ion)</div>
          <select class="naming-select" id="namingAnion">${anionOptions}</select>
        </div>
      </div>

      <div class="naming-result" id="namingResult"></div>

      <div class="naming-rules">
        <div class="naming-rules-title">📋 Ionic Naming Rules</div>
        <div class="naming-rule">1. Name the <strong>cation first</strong> (use Roman numerals for variable-charge metals).</div>
        <div class="naming-rule">2. Name the <strong>anion second</strong>: monatomic anions end in <em>-ide</em>; polyatomic anions keep their own name.</div>
        <div class="naming-rule">3. Balance charges using the <strong>criss-cross method</strong>: subscript of each ion = absolute charge of the other. Reduce to lowest ratio.</div>
        <div class="naming-rule">4. If subscript = 1, <strong>omit it</strong>. Polyatomic ions with subscript > 1 need <strong>parentheses</strong>.</div>
      </div>
    </div>`;

  const updateResult = () => {
    const cat = NAMING_CATIONS[document.getElementById('namingCat').value];
    const anion = NAMING_ANIONS[document.getElementById('namingAnion').value];
    const catCharge = cat.charge;
    const anionCharge = Math.abs(anion.charge);
    const d = gcd(catCharge, anionCharge);
    let catN = anionCharge / d;
    let anionN = catCharge / d;

    // Special case: Hg₂²⁺ is a diatomic cation
    let catFormula = cat.sym.replace(/[⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+$/, '');
    let anionFormula = anion.sym.replace(/[⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+$/, '');
    const isPolyAnion = anion.type === 'poly';
    const isPolyCat = cat.type === 'poly';

    const toSub = n => n === 1 ? '' : ['','₁','₂','₃','₄','₅','₆','₇','₈','₉'][n] || String(n);

    let formula = '';
    const catPart = isPolyCat && catN > 1 ? `(${catFormula})${toSub(catN)}` : `${catFormula}${toSub(catN)}`;
    const anionPart = isPolyAnion && anionN > 1 ? `(${anionFormula})${toSub(anionN)}` : `${anionFormula}${toSub(anionN)}`;
    formula = catPart + anionPart;

    const compound = `${cat.name} ${anion.name.toLowerCase()}`;

    const breakdown = catN === 1 && anionN === 1
      ? `1 ${cat.sym} + 1 ${anion.sym} → charges balance directly`
      : `${catN} × (${cat.sym}) + ${anionN} × (${anion.sym}) → total charge = 0`;

    document.getElementById('namingResult').innerHTML = `
      <div class="naming-result-formula">${formula}</div>
      <div class="naming-result-name">${compound}</div>
      <div class="naming-result-breakdown">${breakdown}</div>`;
  };

  updateResult();
  document.getElementById('namingCat').addEventListener('change', updateResult);
  document.getElementById('namingAnion').addEventListener('change', updateResult);
}

document.getElementById("btnNaming").addEventListener("click", () => {
  buildNamingPanel();
  openPanel("namingOverlay");
});
document.getElementById("closeNaming").addEventListener("click", () => closePanel("namingOverlay"));


// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 3: VSEPR & MOLECULAR GEOMETRY ─────────────────────────
// ═══════════════════════════════════════════════════════════════════

const VSEPR_SHAPES = [
  {
    name:"Linear", formula:"AX₂", steric:2, bonding:2, lone:0,
    angle:"180°", polarity:"nonpolar", polarityNote:"(if same atoms)",
    examples:"CO₂, BeCl₂, CS₂, HCN, C₂H₂",
    description:"Two bonding pairs, no lone pairs. All atoms in a straight line.",
    svgPath:`<line x1="20" y1="50" x2="100" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
      <circle cx="20" cy="50" r="11" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="50" r="14" fill="#94a3b8" stroke="none"/>
      <circle cx="100" cy="50" r="11" fill="#22c55e" stroke="none"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>
      <text x="20" y="54" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="100" y="54" text-anchor="middle" font-size="8" fill="white">X</text>`
  },
  {
    name:"Bent (2 lone pairs)", formula:"AX₂E₂", steric:4, bonding:2, lone:2,
    angle:"~104.5°", polarity:"polar",
    examples:"H₂O, H₂S, SCl₂, OF₂",
    description:"Tetrahedral electron geometry, 2 lone pairs compress the bond angle below 109.5°.",
    svgPath:`<line x1="60" y1="50" x2="30" y2="80" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="90" y2="80" stroke="#3b82f6" stroke-width="2.5"/>
      <circle cx="60" cy="50" r="14" fill="#94a3b8" stroke="none"/>
      <circle cx="30" cy="80" r="11" fill="#22c55e" stroke="none"/>
      <circle cx="90" cy="80" r="11" fill="#22c55e" stroke="none"/>
      <ellipse cx="44" cy="30" rx="8" ry="5" fill="#ef4444" opacity="0.7"/>
      <ellipse cx="76" cy="30" rx="8" ry="5" fill="#ef4444" opacity="0.7"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>
      <text x="30" y="84" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="90" y="84" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="44" y="34" text-anchor="middle" font-size="7" fill="#ef4444">::</text>
      <text x="76" y="34" text-anchor="middle" font-size="7" fill="#ef4444">::</text>`
  },
  {
    name:"Bent (1 lone pair)", formula:"AX₂E₁", steric:3, bonding:2, lone:1,
    angle:"~120°", polarity:"polar",
    examples:"SO₂, O₃, NO₂⁻",
    description:"Trigonal planar electron geometry, 1 lone pair reduces bond angle slightly below 120°.",
    svgPath:`<line x1="60" y1="55" x2="25" y2="85" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="55" x2="95" y2="85" stroke="#3b82f6" stroke-width="2.5"/>
      <circle cx="60" cy="55" r="14" fill="#94a3b8" stroke="none"/>
      <circle cx="25" cy="85" r="11" fill="#22c55e" stroke="none"/>
      <circle cx="95" cy="85" r="11" fill="#22c55e" stroke="none"/>
      <ellipse cx="60" cy="28" rx="9" ry="5" fill="#ef4444" opacity="0.7"/>
      <text x="60" y="59" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>
      <text x="25" y="89" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="95" y="89" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="60" y="32" text-anchor="middle" font-size="7" fill="#ef4444">::</text>`
  },
  {
    name:"Trigonal Planar", formula:"AX₃", steric:3, bonding:3, lone:0,
    angle:"120°", polarity:"nonpolar", polarityNote:"(if same atoms)",
    examples:"BF₃, AlCl₃, SO₃, NO₃⁻, CO₃²⁻",
    description:"Three bonding pairs in a flat triangle. All bond angles exactly 120°.",
    svgPath:`<line x1="60" y1="45" x2="20" y2="85" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="100" y2="85" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="60" y2="15" stroke="#3b82f6" stroke-width="2.5"/>
      <circle cx="60" cy="45" r="14" fill="#94a3b8" stroke="none"/>
      <circle cx="20" cy="85" r="10" fill="#22c55e" stroke="none"/>
      <circle cx="100" cy="85" r="10" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="15" r="10" fill="#22c55e" stroke="none"/>
      <text x="60" y="49" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>
      <text x="20" y="89" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="100" y="89" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="60" y="19" text-anchor="middle" font-size="8" fill="white">X</text>`
  },
  {
    name:"Tetrahedral", formula:"AX₄", steric:4, bonding:4, lone:0,
    angle:"109.5°", polarity:"nonpolar", polarityNote:"(if same atoms)",
    examples:"CH₄, SiH₄, CCl₄, NH₄⁺, SO₄²⁻, PO₄³⁻",
    description:"Four bonding pairs arranged to maximise separation. Classic 3D geometry.",
    svgPath:`<line x1="60" y1="45" x2="20" y2="80" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="100" y2="80" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="38" y2="20" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="60" y1="45" x2="82" y2="20" stroke="#3b82f6" stroke-width="3.5"/>
      <circle cx="60" cy="45" r="14" fill="#94a3b8" stroke="none"/>
      <circle cx="20" cy="80" r="10" fill="#22c55e" stroke="none"/>
      <circle cx="100" cy="80" r="10" fill="#22c55e" stroke="none"/>
      <circle cx="38" cy="20" r="10" fill="#22c55e" opacity="0.6" stroke="none"/>
      <circle cx="82" cy="20" r="10" fill="#22c55e" stroke="none"/>
      <text x="60" y="49" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>
      <text x="20" y="84" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="100" y="84" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="38" y="24" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="82" y="24" text-anchor="middle" font-size="8" fill="white">X</text>`
  },
  {
    name:"Trigonal Pyramidal", formula:"AX₃E₁", steric:4, bonding:3, lone:1,
    angle:"~107°", polarity:"polar",
    examples:"NH₃, PH₃, PCl₃, NF₃, SO₃²⁻",
    description:"Tetrahedral electron geometry; lone pair pushes bonding pairs down into a pyramid.",
    svgPath:`<line x1="60" y1="45" x2="20" y2="82" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="100" y2="82" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="60" y2="85" stroke="#3b82f6" stroke-width="3.5"/>
      <ellipse cx="60" cy="25" rx="9" ry="5" fill="#ef4444" opacity="0.8"/>
      <circle cx="60" cy="45" r="14" fill="#94a3b8" stroke="none"/>
      <circle cx="20" cy="82" r="10" fill="#22c55e" stroke="none"/>
      <circle cx="100" cy="82" r="10" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="85" r="10" fill="#22c55e" stroke="none"/>
      <text x="60" y="49" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>
      <text x="20" y="86" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="100" y="86" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="60" y="89" text-anchor="middle" font-size="8" fill="white">X</text>
      <text x="60" y="29" text-anchor="middle" font-size="7" fill="#ef4444">::</text>`
  },
  {
    name:"Trigonal Bipyramidal", formula:"AX₅", steric:5, bonding:5, lone:0,
    angle:"90°/120°", polarity:"nonpolar", polarityNote:"(if same atoms)",
    examples:"PCl₅, PF₅, AsF₅",
    description:"Five bonding pairs: three equatorial (120° apart) and two axial (90° to equatorial).",
    svgPath:`<line x1="60" y1="50" x2="60" y2="10" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="60" y2="92" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="15" y2="75" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="105" y2="75" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="25" y2="30" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <circle cx="60" cy="50" r="13" fill="#94a3b8" stroke="none"/>
      <circle cx="60" cy="10" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="92" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="15" cy="75" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="105" cy="75" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="25" cy="30" r="9" fill="#22c55e" opacity="0.6" stroke="none"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>`
  },
  {
    name:"Octahedral", formula:"AX₆", steric:6, bonding:6, lone:0,
    angle:"90°", polarity:"nonpolar", polarityNote:"(if same atoms)",
    examples:"SF₆, PCl₆⁻, [Co(NH₃)₆]³⁺",
    description:"Six bonding pairs symmetrically arranged along x, y, z axes. All angles 90°.",
    svgPath:`<line x1="60" y1="50" x2="60" y2="10" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="60" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="15" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="105" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="35" y2="25" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="60" y1="50" x2="85" y2="75" stroke="#3b82f6" stroke-width="3"/>
      <circle cx="60" cy="50" r="13" fill="#94a3b8" stroke="none"/>
      <circle cx="60" cy="10" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="90" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="15" cy="50" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="105" cy="50" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="35" cy="25" r="9" fill="#22c55e" opacity="0.6" stroke="none"/>
      <circle cx="85" cy="75" r="9" fill="#22c55e" stroke="none"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>`
  },
  {
    name:"See-Saw", formula:"AX₄E₁", steric:5, bonding:4, lone:1,
    angle:"~173°/102°", polarity:"polar",
    examples:"SF₄, XeO₂F₂, IF₄⁺",
    description:"Trigonal bipyramidal base; one equatorial lone pair creates an asymmetric see-saw shape.",
    svgPath:`<line x1="60" y1="50" x2="60" y2="12" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="60" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="105" y2="72" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="20" y2="35" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <ellipse cx="18" cy="68" rx="9" ry="5" fill="#ef4444" opacity="0.8"/>
      <circle cx="60" cy="50" r="13" fill="#94a3b8" stroke="none"/>
      <circle cx="60" cy="12" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="90" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="105" cy="72" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="20" cy="35" r="9" fill="#22c55e" opacity="0.6" stroke="none"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>`
  },
  {
    name:"T-Shaped", formula:"AX₃E₂", steric:5, bonding:3, lone:2,
    angle:"~87°/180°", polarity:"polar",
    examples:"ClF₃, BrF₃",
    description:"Trigonal bipyramidal base with two equatorial lone pairs; three atoms form a T.",
    svgPath:`<line x1="60" y1="50" x2="60" y2="10" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="60" y2="92" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="105" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
      <ellipse cx="18" cy="38" rx="9" ry="5" fill="#ef4444" opacity="0.8"/>
      <ellipse cx="18" cy="62" rx="9" ry="5" fill="#ef4444" opacity="0.8"/>
      <circle cx="60" cy="50" r="13" fill="#94a3b8" stroke="none"/>
      <circle cx="60" cy="10" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="92" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="105" cy="50" r="9" fill="#22c55e" stroke="none"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>`
  },
  {
    name:"Square Planar", formula:"AX₄E₂", steric:6, bonding:4, lone:2,
    angle:"90°", polarity:"nonpolar", polarityNote:"(if same atoms)",
    examples:"XeF₄, [PtCl₄]²⁻, [AuCl₄]⁻",
    description:"Octahedral base with two axial lone pairs. All four atoms in the same plane.",
    svgPath:`<line x1="60" y1="50" x2="20" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="100" y2="50" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="60" y2="12" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="50" x2="60" y2="90" stroke="#3b82f6" stroke-width="2.5"/>
      <ellipse cx="40" cy="25" rx="8" ry="5" fill="#ef4444" opacity="0.8"/>
      <ellipse cx="80" cy="75" rx="8" ry="5" fill="#ef4444" opacity="0.8"/>
      <circle cx="60" cy="50" r="13" fill="#94a3b8" stroke="none"/>
      <circle cx="20" cy="50" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="100" cy="50" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="12" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="90" r="9" fill="#22c55e" stroke="none"/>
      <text x="60" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>`
  },
  {
    name:"Square Pyramidal", formula:"AX₅E₁", steric:6, bonding:5, lone:1,
    angle:"~87°", polarity:"polar",
    examples:"BrF₅, XeOF₄, [Ni(CN)₄]³⁻",
    description:"Octahedral base with one axial lone pair; five atoms form a square pyramid.",
    svgPath:`<line x1="60" y1="45" x2="20" y2="70" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="100" y2="70" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="60" y1="45" x2="60" y2="88" stroke="#3b82f6" stroke-width="3"/>
      <line x1="60" y1="45" x2="35" y2="25" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="60" y1="45" x2="60" y2="10" stroke="#3b82f6" stroke-width="2.5"/>
      <ellipse cx="84" cy="22" rx="8" ry="5" fill="#ef4444" opacity="0.8"/>
      <circle cx="60" cy="45" r="13" fill="#94a3b8" stroke="none"/>
      <circle cx="20" cy="70" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="100" cy="70" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="60" cy="88" r="9" fill="#22c55e" stroke="none"/>
      <circle cx="35" cy="25" r="9" fill="#22c55e" opacity="0.6" stroke="none"/>
      <circle cx="60" cy="10" r="9" fill="#22c55e" stroke="none"/>
      <text x="60" y="49" text-anchor="middle" font-size="9" fill="white" font-weight="bold">A</text>`
  },
];

function buildVSEPRPanel() {
  const body = document.getElementById("vseprBody");
  if (body.children.length > 0) return;

  const cards = VSEPR_SHAPES.map(s => {
    const polClass = s.polarity === 'polar' ? 'vsepr-polar' : s.polarity === 'nonpolar' ? 'vsepr-nonpolar' : 'vsepr-may';
    const polLabel = s.polarity === 'polar' ? '⚡ Polar' : s.polarity === 'nonpolar' ? '○ Nonpolar' : '? May vary';
    const lpDots = '●'.repeat(s.lone) || '—';
    return `<div class="vsepr-card">
      <div class="vsepr-shape-name">${s.name}</div>
      <svg class="vsepr-svg" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">${s.svgPath}</svg>
      <div class="vsepr-formula">${s.formula}</div>
      <div class="vsepr-detail-row">
        <span class="vsepr-detail-label">Bonding pairs</span>
        <span class="vsepr-detail-val">${s.bonding}</span>
      </div>
      <div class="vsepr-detail-row">
        <span class="vsepr-detail-label">Lone pairs</span>
        <span class="vsepr-detail-val" style="color:#ef4444;">${s.lone}</span>
      </div>
      <div class="vsepr-detail-row">
        <span class="vsepr-detail-label">Steric number</span>
        <span class="vsepr-steric">${s.steric}</span>
      </div>
      <div class="vsepr-angle">∠ ${s.angle}</div>
      <span class="vsepr-polarity ${polClass}">${polLabel}</span>
      ${s.polarityNote ? `<div style="font-size:0.62rem;color:var(--text-muted);">${s.polarityNote}</div>` : ''}
      <div class="vsepr-examples">e.g. ${s.examples}</div>
    </div>`;
  }).join('');

  body.innerHTML = `
    <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:12px;line-height:1.6;
      background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 14px;">
      <strong style="color:var(--accent);">VSEPR Theory:</strong>
      Valence Shell Electron Pair Repulsion — electron pairs around a central atom arrange themselves
      to minimise repulsion. Lone pairs repel more strongly than bonding pairs, compressing bond angles.
      Steric number = bonding pairs + lone pairs.
    </div>
    <div class="vsepr-grid">${cards}</div>
    <div style="font-size:0.66rem;color:var(--text-muted);margin-top:14px;font-style:italic;">
      Legend: <span style="color:#94a3b8;">■</span> Central atom (A) &nbsp;
      <span style="color:#22c55e;">■</span> Bonded atoms (X) &nbsp;
      <span style="color:#ef4444;">■</span> Lone pairs (E) &nbsp;
      Dashed bond = behind plane &nbsp; Thick bond = in front of plane
    </div>`;
}

document.getElementById("btnVSEPR").addEventListener("click", () => {
  buildVSEPRPanel();
  openPanel("vseprOverlay");
});
document.getElementById("closeVSEPR").addEventListener("click", () => closePanel("vseprOverlay"));


// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 4: EQUILIBRIUM CONSTANTS REFERENCE ────────────────────
// ═══════════════════════════════════════════════════════════════════

function buildEquilibriumPanel() {
  const body = document.getElementById("equilibriumBody");
  if (body.children.length > 0) return;

  body.innerHTML = `
  <div class="keq-section">
    <div class="keq-section-title">⚖️ The Equilibrium Constant Expression</div>
    <div class="keq-card">
      <div class="keq-expression">For a reaction: &nbsp; <strong>aA + bB ⇌ cC + dD</strong></div>
      <div class="keq-formula">Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ</div>
      <div class="keq-desc" style="margin-top:8px;">
        • Products over reactants — concentrations raised to their stoichiometric coefficients.<br>
        • Pure solids and pure liquids are <strong>omitted</strong> from the expression (activity = 1).<br>
        • Temperature is the only factor that changes Kc.<br>
        • Units depend on the reaction; Kc is often reported as dimensionless.
      </div>
    </div>
  </div>

  <div class="keq-section">
    <div class="keq-section-title">📐 Key Relationships</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <div class="keq-card">
        <div class="keq-expression"><strong>Reverse reaction</strong></div>
        <div class="keq-formula">K'c = 1 / Kc</div>
        <div class="keq-desc">Reversing a reaction inverts the equilibrium constant.</div>
      </div>
      <div class="keq-card">
        <div class="keq-expression"><strong>Multiply coefficients by n</strong></div>
        <div class="keq-formula">K'c = Kc<sup>n</sup></div>
        <div class="keq-desc">Scaling all coefficients raises K to that power.</div>
      </div>
      <div class="keq-card">
        <div class="keq-expression"><strong>Add two reactions</strong></div>
        <div class="keq-formula">K'c = K₁ × K₂</div>
        <div class="keq-desc">Hess's Law equivalent for equilibrium constants.</div>
      </div>
      <div class="keq-card">
        <div class="keq-expression"><strong>Reaction Quotient Q</strong></div>
        <div class="keq-formula">Q = Kc → equilibrium</div>
        <div class="keq-desc">Q &lt; Kc: shifts right &nbsp;|&nbsp; Q &gt; Kc: shifts left</div>
      </div>
      <div class="keq-card">
        <div class="keq-expression"><strong>Relationship to ΔG°</strong></div>
        <div class="keq-formula">ΔG° = −RT ln Kc</div>
        <div class="keq-desc">R = 8.314 J/mol·K &nbsp; T in Kelvin</div>
      </div>
      <div class="keq-card">
        <div class="keq-expression"><strong>Kp from Kc (gases)</strong></div>
        <div class="keq-formula">Kp = Kc(RT)<sup>Δn</sup></div>
        <div class="keq-desc">Δn = moles gaseous products − moles gaseous reactants</div>
      </div>
    </div>
  </div>

  <div class="keq-section">
    <div class="keq-section-title">🌡️ Le Chatelier's Principle — Shift Predictions</div>
    <table class="keq-table">
      <thead><tr>
        <th>Stress Applied</th><th>System Response</th><th>Effect on Kc</th>
      </tr></thead>
      <tbody>
        <tr><td>Add reactant</td><td>Shifts toward products (right)</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Remove reactant</td><td>Shifts toward reactants (left)</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Add product</td><td>Shifts toward reactants (left)</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Remove product</td><td>Shifts toward products (right)</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Increase pressure (compress)</td><td>Shifts toward fewer moles of gas</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Decrease pressure (expand)</td><td>Shifts toward more moles of gas</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Increase temperature (endothermic)</td><td>Shifts right (toward products)</td><td class="keq-val-col" style="color:#22c55e;">Increases</td></tr>
        <tr><td>Increase temperature (exothermic)</td><td>Shifts left (toward reactants)</td><td class="keq-val-col" style="color:#ef4444;">Decreases</td></tr>
        <tr><td>Add catalyst</td><td>Equilibrium reached faster</td><td class="keq-val-col">No change</td></tr>
        <tr><td>Add inert gas (constant V)</td><td>No shift</td><td class="keq-val-col">No change</td></tr>
      </tbody>
    </table>
  </div>

  <div class="keq-section">
    <div class="keq-section-title">📊 Selected Equilibrium Constants (25°C)</div>
    <table class="keq-table">
      <thead><tr>
        <th>Reaction</th><th style="text-align:right">Kc</th><th style="text-align:right">Significance</th>
      </tr></thead>
      <tbody>
        <tr class="thermo-section-head"><td colspan="3">Gas-Phase Equilibria</td></tr>
        <tr><td class="keq-rxn">N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</td><td class="keq-val-col">3.5 × 10⁸</td><td class="keq-val-col">Haber process</td></tr>
        <tr><td class="keq-rxn">2SO₂(g) + O₂(g) ⇌ 2SO₃(g)</td><td class="keq-val-col">2.8 × 10¹²</td><td class="keq-val-col">Contact process</td></tr>
        <tr><td class="keq-rxn">H₂(g) + I₂(g) ⇌ 2HI(g)</td><td class="keq-val-col">54.3</td><td class="keq-val-col">Classic example</td></tr>
        <tr><td class="keq-rxn">N₂(g) + O₂(g) ⇌ 2NO(g)</td><td class="keq-val-col">4.8 × 10⁻³¹</td><td class="keq-val-col">Smog formation</td></tr>
        <tr><td class="keq-rxn">2NO₂(g) ⇌ N₂O₄(g)</td><td class="keq-val-col">8.8</td><td class="keq-val-col">Brown/colourless demo</td></tr>
        <tr class="thermo-section-head"><td colspan="3">Aqueous Acid-Base Equilibria</td></tr>
        <tr><td class="keq-rxn">H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)</td><td class="keq-val-col">Kw = 1.0 × 10⁻¹⁴</td><td class="keq-val-col">Water autoionisation</td></tr>
        <tr><td class="keq-rxn">CH₃COOH ⇌ H⁺ + CH₃COO⁻</td><td class="keq-val-col">Ka = 1.8 × 10⁻⁵</td><td class="keq-val-col">Acetic acid</td></tr>
        <tr><td class="keq-rxn">NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</td><td class="keq-val-col">Kb = 1.8 × 10⁻⁵</td><td class="keq-val-col">Ammonia (base)</td></tr>
        <tr class="thermo-section-head"><td colspan="3">Interpreting Kc Values</td></tr>
        <tr><td>Kc ≫ 1 (e.g. &gt; 10³)</td><td class="keq-val-col" style="color:#22c55e;">Products favoured</td><td class="keq-val-col">Near-complete reaction</td></tr>
        <tr><td>Kc ≈ 1</td><td class="keq-val-col" style="color:#eab308;">Neither favoured</td><td class="keq-val-col">Significant both sides</td></tr>
        <tr><td>Kc ≪ 1 (e.g. &lt; 10⁻³)</td><td class="keq-val-col" style="color:#ef4444;">Reactants favoured</td><td class="keq-val-col">Barely proceeds</td></tr>
      </tbody>
    </table>
  </div>`;
}

document.getElementById("btnEquilibrium").addEventListener("click", () => {
  buildEquilibriumPanel();
  openPanel("equilibriumOverlay");
});
document.getElementById("closeEquilibrium").addEventListener("click", () => closePanel("equilibriumOverlay"));


// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 5: ELECTROCHEMICAL CELLS REFERENCE ────────────────────
// ═══════════════════════════════════════════════════════════════════

function buildElectrochemPanel() {
  const body = document.getElementById("electrochemBody");
  if (body.children.length > 0) return;

  body.innerHTML = `
  <div class="ec2-section">
    <div class="ec2-section-title">⚡ Core Formulas</div>
    <div class="ec2-formula-grid">
      <div class="ec2-formula-card">
        <div class="ef-label">Cell Voltage (Standard)</div>
        <div class="ef-eq">E°cell = E°cathode − E°anode</div>
        <div class="ef-desc">Use standard reduction potentials from the E° table.
          Cathode = reduction (more positive E°). Anode = oxidation (more negative E°).</div>
      </div>
      <div class="ec2-formula-card">
        <div class="ef-label">Relationship to Free Energy</div>
        <div class="ef-eq">ΔG° = −nFE°cell</div>
        <div class="ef-desc">n = moles of electrons transferred<br>
          F = 96 485 C/mol (Faraday's constant)<br>
          ΔG° negative → spontaneous (galvanic)</div>
      </div>
      <div class="ec2-formula-card">
        <div class="ef-label">Relationship to Equilibrium</div>
        <div class="ef-eq">ln K = nFE°cell / RT</div>
        <div class="ef-desc">At 25°C: log K = nE°cell / 0.0592<br>
          Large positive E°cell → large K → spontaneous</div>
      </div>
      <div class="ec2-formula-card">
        <div class="ef-label">Nernst Equation (non-standard)</div>
        <div class="ef-eq">E = E° − (RT/nF) ln Q</div>
        <div class="ef-desc">At 25°C: E = E° − (0.0592/n) log Q<br>
          Q = reaction quotient at actual concentrations</div>
      </div>
      <div class="ec2-formula-card">
        <div class="ef-label">Faraday's Law (electrolysis)</div>
        <div class="ef-eq">m = (M × I × t) / (n × F)</div>
        <div class="ef-desc">m = mass deposited (g), M = molar mass,<br>
          I = current (A), t = time (s), n = electrons</div>
      </div>
      <div class="ec2-formula-card">
        <div class="ef-label">Charge &amp; Current</div>
        <div class="ef-eq">Q = I × t &nbsp;|&nbsp; P = IV</div>
        <div class="ef-desc">Q = charge (coulombs), I = current (amps),<br>t = time (seconds)</div>
      </div>
    </div>
  </div>

  <div class="ec2-section">
    <div class="ec2-section-title">🔋 Galvanic vs Electrolytic Cells</div>
    <div class="ec2-cell-diagram">
      <div class="ec2-cell-box">
        <div class="ec2-cell-title">⚡ Galvanic (Voltaic) Cell</div>
        <svg class="ec2-cell-svg" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Beakers -->
          <rect x="20" y="60" width="90" height="110" rx="4" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
          <rect x="170" y="60" width="90" height="110" rx="4" fill="none" stroke="#22c55e" stroke-width="1.5"/>
          <!-- Solution fill -->
          <rect x="21" y="100" width="88" height="69" rx="2" fill="rgba(59,130,246,0.1)"/>
          <rect x="171" y="100" width="88" height="69" rx="2" fill="rgba(34,197,94,0.1)"/>
          <!-- Salt bridge -->
          <rect x="105" y="75" width="70" height="20" rx="10" fill="none" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4,2"/>
          <text x="140" y="89" text-anchor="middle" font-size="8" fill="#eab308">Salt Bridge</text>
          <!-- Electrodes -->
          <rect x="55" y="55" width="10" height="80" rx="2" fill="#ef4444"/>
          <rect x="215" y="55" width="10" height="80" rx="2" fill="#22c55e"/>
          <!-- Wire -->
          <line x1="60" y1="55" x2="60" y2="30" stroke="#94a3b8" stroke-width="2"/>
          <line x1="60" y1="30" x2="220" y2="30" stroke="#94a3b8" stroke-width="2"/>
          <line x1="220" y1="30" x2="220" y2="55" stroke="#94a3b8" stroke-width="2"/>
          <!-- Voltmeter -->
          <circle cx="140" cy="30" r="14" fill="var(--surface2)" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="140" y="34" text-anchor="middle" font-size="9" fill="var(--text)" font-weight="bold">V</text>
          <!-- Electron flow arrow -->
          <text x="100" y="25" text-anchor="middle" font-size="8" fill="#94a3b8">e⁻ →</text>
          <!-- Labels -->
          <text x="60" y="48" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="bold">Anode (−)</text>
          <text x="220" y="48" text-anchor="middle" font-size="9" fill="#22c55e" font-weight="bold">Cathode (+)</text>
          <text x="65" y="125" text-anchor="middle" font-size="8" fill="#3b82f6">oxidation</text>
          <text x="215" y="125" text-anchor="middle" font-size="8" fill="#22c55e">reduction</text>
        </svg>
        <div class="ec2-half-reactions">
          <div class="ec2-half anode">Anode: Metal → Metal²⁺ + 2e⁻ (oxidation)</div>
          <div class="ec2-half cathode">Cathode: Metal²⁺ + 2e⁻ → Metal (reduction)</div>
        </div>
        <div class="ec2-cell-desc">
          Spontaneous reaction (ΔG° &lt; 0, E°cell &gt; 0). Converts chemical energy → electrical energy.
          Electrons flow from anode to cathode through external circuit.
        </div>
      </div>

      <div class="ec2-cell-box">
        <div class="ec2-cell-title">🔌 Electrolytic Cell</div>
        <svg class="ec2-cell-svg" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Single beaker -->
          <rect x="60" y="60" width="160" height="120" rx="4" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
          <rect x="61" y="110" width="158" height="69" rx="2" fill="rgba(139,92,246,0.1)"/>
          <!-- Battery -->
          <rect x="100" y="15" width="80" height="25" rx="4" fill="var(--surface2)" stroke="#eab308" stroke-width="1.5"/>
          <text x="140" y="31" text-anchor="middle" font-size="9" fill="#eab308" font-weight="bold">Battery (+) (−)</text>
          <!-- Electrodes -->
          <rect x="90" y="55" width="10" height="85" rx="2" fill="#ef4444"/>
          <rect x="180" y="55" width="10" height="85" rx="2" fill="#22c55e"/>
          <!-- Wires -->
          <line x1="95" y1="55" x2="95" y2="40" stroke="#ef4444" stroke-width="2"/>
          <line x1="95" y1="40" x2="100" y2="40" stroke="#ef4444" stroke-width="2"/>
          <line x1="185" y1="55" x2="185" y2="40" stroke="#22c55e" stroke-width="2"/>
          <line x1="185" y1="40" x2="180" y2="40" stroke="#22c55e" stroke-width="2"/>
          <!-- Electron flow (opposite!) -->
          <text x="140" y="10" text-anchor="middle" font-size="8" fill="#94a3b8">← e⁻</text>
          <!-- Labels -->
          <text x="95" y="48" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="bold">Anode (+)</text>
          <text x="185" y="48" text-anchor="middle" font-size="9" fill="#22c55e" font-weight="bold">Cathode (−)</text>
          <text x="95" y="130" text-anchor="middle" font-size="8" fill="#ef4444">oxidation</text>
          <text x="185" y="130" text-anchor="middle" font-size="8" fill="#22c55e">reduction</text>
          <text x="140" y="155" text-anchor="middle" font-size="8" fill="#8b5cf6">electrolyte solution</text>
        </svg>
        <div class="ec2-half-reactions">
          <div class="ec2-half anode">Anode (+): Anions → oxidised product + e⁻</div>
          <div class="ec2-half cathode">Cathode (−): Cations + e⁻ → reduced product</div>
        </div>
        <div class="ec2-cell-desc">
          Non-spontaneous (ΔG° &gt; 0, E°cell &lt; 0). External power drives the reaction.
          Used in electroplating, Hall–Héroult process (Al), chlor-alkali process (Cl₂/NaOH).
        </div>
      </div>
    </div>
  </div>

  <div class="ec2-section">
    <div class="ec2-section-title">📋 Key Comparison: Galvanic vs Electrolytic</div>
    <table class="keq-table">
      <thead><tr><th>Feature</th><th>Galvanic Cell</th><th>Electrolytic Cell</th></tr></thead>
      <tbody>
        <tr><td>Spontaneity</td><td>Spontaneous (ΔG° &lt; 0)</td><td>Non-spontaneous (ΔG° &gt; 0)</td></tr>
        <tr><td>E°cell</td><td style="color:#22c55e;">Positive (&gt; 0)</td><td style="color:#ef4444;">Negative (&lt; 0)</td></tr>
        <tr><td>Anode sign</td><td>Negative (−)</td><td>Positive (+)</td></tr>
        <tr><td>Cathode sign</td><td>Positive (+)</td><td>Negative (−)</td></tr>
        <tr><td>Energy conversion</td><td>Chemical → Electrical</td><td>Electrical → Chemical</td></tr>
        <tr><td>Electron flow</td><td>Anode → Cathode (ext.)</td><td>Cathode → Anode (ext.)</td></tr>
        <tr><td>Common examples</td><td>Batteries, fuel cells</td><td>Electroplating, refining</td></tr>
      </tbody>
    </table>
  </div>

  <div class="ec2-sign-convention">
    <strong>🔑 Memory Aid:</strong> &nbsp;
    <strong>AN OX / RED CAT</strong> — <em>An</em>ode = <em>Ox</em>idation, <em>Red</em>uction at <em>Cat</em>hode (both cell types). &nbsp;|&nbsp;
    <strong>Galvanic:</strong> anode (−), cathode (+). &nbsp;
    <strong>Electrolytic:</strong> anode (+), cathode (−).
  </div>`;
}

document.getElementById("btnElectrochem").addEventListener("click", () => {
  buildElectrochemPanel();
  openPanel("electrochemOverlay");
});
document.getElementById("closeElectrochem").addEventListener("click", () => closePanel("electrochemOverlay"));


// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 6: ORGANIC FUNCTIONAL GROUPS ──────────────────────────
// ═══════════════════════════════════════════════════════════════════
//
// SVG conventions used throughout:
//   viewBox="0 0 260 110"  – landscape card format
//   Atoms drawn as text labels at bond endpoints (skeletal-style)
//   C–C single bonds: plain lines at ~109.5° tetrahedral angles (zigzag)
//   C=C double bond: two parallel lines, bond length ~1.34 Å represented wider
//   C≡C triple bond: three parallel lines
//   C=O carbonyl: double bond drawn upward from carbon
//   Bond colours: carbon skeleton #94a3b8, functional group highlighted
//   Atom labels: H atoms shown explicitly where needed for clarity
//   Lone pairs shown on O and N where pedagogically useful

const C  = '#94a3b8';   // carbon skeleton
const BG = 'transparent';

// ── Reusable SVG helpers ──────────────────────────────────────────
// atom(x,y,label,color,size) — centred text atom label
const atom = (x,y,lbl,col,sz=11) =>
  `<text x="${x}" y="${y+4}" text-anchor="middle" dominant-baseline="middle"
   font-family="'Space Mono',monospace" font-size="${sz}" font-weight="700"
   fill="${col}">${lbl}</text>`;

// bond(x1,y1,x2,y2,col,w=2) — single bond line
const bond = (x1,y1,x2,y2,col=C,w=2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
   stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;

// dbond(x1,y1,x2,y2,col) — double bond (two parallel lines offset perpendicular)
function dbond(x1,y1,x2,y2,col=C) {
  const dx=x2-x1, dy=y2-y1;
  const len=Math.sqrt(dx*dx+dy*dy)||1;
  const ox=(-dy/len)*2.8, oy=(dx/len)*2.8;
  return bond(x1+ox,y1+oy,x2+ox,y2+oy,col,2)
       + bond(x1-ox,y1-oy,x2-ox,y2-oy,col,2);
}

// tbond(x1,y1,x2,y2,col) — triple bond
function tbond(x1,y1,x2,y2,col=C) {
  const dx=x2-x1, dy=y2-y1;
  const len=Math.sqrt(dx*dx+dy*dy)||1;
  const ox=(-dy/len)*3.5, oy=(dx/len)*3.5;
  return bond(x1+ox,y1+oy,x2+ox,y2+oy,col,1.8)
       + bond(x1,y1,x2,y2,col,1.8)
       + bond(x1-ox,y1-oy,x2-ox,y2-oy,col,1.8);
}

// lonepair(x,y,angle_deg,col) — two dots representing a lone pair
function lonepair(x,y,angle,col) {
  const r=Math.PI*angle/180;
  const d=6;
  const x1=x+d*Math.cos(r-0.3), y1=y+d*Math.sin(r-0.3);
  const x2=x+d*Math.cos(r+0.3), y2=y+d*Math.sin(r+0.3);
  return `<circle cx="${x1}" cy="${y1}" r="1.6" fill="${col}"/>
          <circle cx="${x2}" cy="${y2}" r="1.6" fill="${col}"/>`;
}

// ── Per-group SVG diagrams ────────────────────────────────────────
// Style matches reference: R groups as plain labels, functional core
// only, correct bond angles, grey lone-pair dots, coloured heteroatoms.
// viewBox="0 0 200 120" — square-ish cards, generous whitespace.
// Lone pairs: two small grey circles (r=1.8) placed ~8px from atom centre.
// O = red (#ef4444), N = blue (#3b82f6), C-skeleton = dark (#1e293b light / #e2e8f0 dark)
// All bond angles geometrically accurate: sp3=109.5°, sp2=120°, sp=180°

const OC = '#ef4444';  // oxygen colour
const NC = '#3b82f6';  // nitrogen colour
const RC = '#1e293b';  // R group label (dark theme override via CSS)
const BC = '#475569';  // bond colour
const LP = '#94a3b8';  // lone pair dot colour

// lone pair: two dots at angle 'deg' from atom (x,y), spread ±18°
function lp(x, y, deg) {
  const a1 = (deg - 18) * Math.PI / 180;
  const a2 = (deg + 18) * Math.PI / 180;
  const d = 9;
  return `<circle cx="${(x + d*Math.cos(a1)).toFixed(1)}" cy="${(y + d*Math.sin(a1)).toFixed(1)}" r="1.8" fill="${LP}"/>
<circle cx="${(x + d*Math.cos(a2)).toFixed(1)}" cy="${(y + d*Math.sin(a2)).toFixed(1)}" r="1.8" fill="${LP}"/>`;
}

// label: bold text label for atom
const L = (x, y, text, col, sz=14, anchor='middle') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central"
   font-family="'Atkinson Hyperlegible','Inter',sans-serif" font-size="${sz}"
   font-weight="700" fill="${col}">${text}</text>`;

// Rgroup: italic R label
const R = (x, y, text='R', anchor='middle') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="central"
   font-family="'Atkinson Hyperlegible','Inter',sans-serif" font-size="15"
   font-weight="700" font-style="italic" fill="var(--text)">${text}</text>`;

// single bond line
const b = (x1,y1,x2,y2,col=BC,w=2.2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
   stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;

// double bond: two parallel lines (offset perpendicular by 3px)
function db(x1,y1,x2,y2,col=BC) {
  const dx=x2-x1, dy=y2-y1, len=Math.hypot(dx,dy)||1;
  const ox=(-dy/len)*3, oy=(dx/len)*3;
  return b(x1+ox,y1+oy,x2+ox,y2+oy,col,1.9) + b(x1-ox,y1-oy,x2-ox,y2-oy,col,1.9);
}

// triple bond
function tb(x1,y1,x2,y2,col=BC) {
  const dx=x2-x1, dy=y2-y1, len=Math.hypot(dx,dy)||1;
  const ox=(-dy/len)*3.8, oy=(dx/len)*3.8;
  return b(x1+ox,y1+oy,x2+ox,y2+oy,col,1.7)
       + b(x1,y1,x2,y2,col,1.7)
       + b(x1-ox,y1-oy,x2-ox,y2-oy,col,1.7);
}

// ── Alkane: C–C–C zigzag, no heteroatoms ────────────────────────
// Show propane: CH₃–CH₂–CH₃ in classic zigzag, angle=109.5°
// C1(38,72) C2(100,44) C3(162,72)
const svgAlkane = (() => {
  const [c1x,c1y]=[38,72],[c2x,c2y]=[100,46],[c3x,c3y]=[162,72];
  return b(c1x,c1y,c2x,c2y) + b(c2x,c2y,c3x,c3y)
    + L(c1x,c1y,'CH₃',BC,12) + L(c2x,c2y,'CH₂',BC,12) + L(c3x,c3y,'CH₃',BC,12)
    + `<text x="100" y="104" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">propane — sp³ carbon, ~109.5°</text>`;
})();

// ── Alkene: R–CH=CH–R showing planar sp2, explicit H atoms ────────
// C=C horizontal centre, H above left C, H below right C (120° geometry)
// Left C at (72,60), right C at (128,60)
const svgAlkene = (() => {
  const [lx,ly]=[72,60],[rx,ry]=[128,60];
  // R groups: upper-left and lower-right for E/Z clarity
  const rllx=30, rlly=36;   // R upper-left  (same side as H on right → Z reference)
  const rrlx=170, rrly=84;  // R lower-right
  const hlx=30, hly=84;     // H lower-left
  const hrx=170, hry=36;    // H upper-right
  return db(lx,ly,rx,ry,'#22c55e')
    + b(lx,ly,rllx,rlly) + b(lx,ly,hlx,hly)
    + b(rx,ry,rrlx,rrly) + b(rx,ry,hrx,hry)
    + R(rllx,rlly) + L(hlx,hly,'H',BC,13) + R(rrlx,rrly) + L(hrx,hry,'H',BC,13)
    + L(lx,ly,'C','#22c55e',15) + L(rx,ry,'C','#22c55e',15)
    + `<text x="100" y="108" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">sp² carbon — planar, 120°</text>`;
})();

// ── Alkyne: R–C≡C–R linear ────────────────────────────────────────
const svgAlkyne = (() => {
  const [lx,ly]=[65,60],[rx,ry]=[135,60];
  return tb(lx,ly,rx,ry,'#3b82f6')
    + b(30,60,lx,60) + b(rx,60,170,60)
    + R(22,60,'R','end') + R(178,60,'R','start')
    + L(lx,ly,'C','#3b82f6',15) + L(rx,ry,'C','#3b82f6',15)
    + `<text x="100" y="104" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">sp carbon — linear, 180°</text>`;
})();

// ── Alcohol: R–O–H  (bond angle ~109.5°, 2 lone pairs on O) ───────
// Mirror the reference exactly: R on left, O centre, H upper-right,
// lone pairs top and bottom of O
const svgAlcohol = (() => {
  const [ox,oy]=[110,62];
  const rx=42, ry=62;      // R left
  const hx=158, hy=36;     // H upper-right (109.5° from R-O)
  return b(rx,ry,ox,oy) + b(ox,oy,hx,hy,OC,2)
    + lp(ox,oy,-70)   // lone pair upper-left
    + lp(ox,oy,250)   // lone pair lower-left (bottom)
    + R(rx,ry,'R','middle') + L(ox,oy,'O',OC,16) + L(hx,hy,'H',OC,14)
    + `<text x="100" y="104" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">hydroxyl group −OH</text>`;
})();

// ── Aldehyde: R–C(=O)–H  (C=O up, H to lower-right, R to left) ───
// Match reference: C centre, =O straight up, R left, H lower-right in blue
const svgAldehyde = (() => {
  const [cx,cy]=[105,70];
  const ox=105, oy=24;    // O above
  const rx=42,  ry=70;    // R left
  const hx=158, hy=95;    // H lower-right
  return db(cx,cy,ox,oy,OC) + b(rx,ry,cx,cy) + b(cx,cy,hx,hy,'#3b82f6',2)
    + lp(ox,oy,-60) + lp(ox,oy,240)
    + R(rx,ry) + L(cx,cy,'C',BC,15) + L(ox,oy,'O',OC,16) + L(hx,hy,'H','#3b82f6',14)
    + `<text x="100" y="112" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">carbonyl at chain end</text>`;
})();

// ── Ketone: R–C(=O)–R  (C=O up, two R groups each side) ──────────
// Match reference: C centre, =O up, R left and R right, angled down
const svgKetone = (() => {
  const [cx,cy]=[100,70];
  const ox=100, oy=24;
  const r1x=38, r1y=96;   // R lower-left
  const r2x=162, r2y=96;  // R lower-right
  return db(cx,cy,ox,oy,OC) + b(cx,cy,r1x,r1y) + b(cx,cy,r2x,r2y)
    + lp(ox,oy,-60) + lp(ox,oy,240)
    + R(r1x,r1y) + L(cx,cy,'C',BC,15) + L(ox,oy,'O',OC,16) + R(r2x,r2y)
    + `<text x="100" y="112" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">carbonyl flanked by two C groups</text>`;
})();

// ── Carboxylic Acid: R–C(=O)–O–H ─────────────────────────────────
// Match reference: C centre, =O up, single-bond O lower-right then H,
// lone pairs on both oxygens
const svgCarboxylicAcid = (() => {
  const [cx,cy]=[88,68];
  const o1x=88,  o1y=24;   // =O double bond up
  const o2x=144, o2y=90;   // –OH single bond lower-right
  const hx=184,  hy=70;    // H off the O
  const rx=30,   ry=68;    // R left
  return db(cx,cy,o1x,o1y,OC) + b(cx,cy,o2x,o2y,OC) + b(o2x,o2y,hx,hy,OC,2) + b(rx,ry,cx,cy)
    + lp(o1x,o1y,-55) + lp(o1x,o1y,235)
    + lp(o2x,o2y,200) + lp(o2x,o2y,320)
    + R(rx,ry) + L(cx,cy,'C',BC,15)
    + L(o1x,o1y,'O',OC,16) + L(o2x,o2y,'O',OC,16) + L(hx,hy,'H',OC,13)
    + `<text x="100" y="112" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">carboxyl group −COOH</text>`;
})();

// ── Amine: R–N(–R)(–R)  tertiary shown (3 R groups + lone pair) ──
// Match reference exactly: N centre, lone pair top, 3 R groups radiating
// at ~120° intervals downward
const svgAmine = (() => {
  const [nx,ny]=[100,62];
  const r1x=36,  r1y=46;   // R upper-left
  const r2x=164, r2y=46;   // R upper-right
  const r3x=100, r3y=108;  // R below
  return b(nx,ny,r1x,r1y,NC) + b(nx,ny,r2x,r2y,NC) + b(nx,ny,r3x,r3y,NC)
    + lp(nx,ny,-90)   // lone pair top centre
    + R(r1x,r1y) + R(r2x,r2y) + R(r3x,r3y)
    + L(nx,ny,'N',NC,17)
    + `<text x="100" y="6" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">tertiary amine R₃N</text>`;
})();

// ── Ester: R–C(=O)–O–R  ──────────────────────────────────────────
// C centre, =O up, bridging O to right then R′, chain R to left
const svgEster = (() => {
  const [cx,cy]=[82,68];
  const o1x=82,  o1y=24;   // =O up
  const o2x=138, o2y=90;   // bridging O lower-right
  const r2x=186, r2y=70;   // R′ off bridging O
  const r1x=26,  r1y=68;   // R left
  return db(cx,cy,o1x,o1y,OC) + b(cx,cy,o2x,o2y,OC) + b(o2x,o2y,r2x,r2y) + b(r1x,r1y,cx,cy)
    + lp(o1x,o1y,-55) + lp(o1x,o1y,235)
    + lp(o2x,o2y,200)
    + R(r1x,r1y) + L(cx,cy,'C',BC,15)
    + L(o1x,o1y,'O',OC,16) + L(o2x,o2y,'O',OC,16) + R(r2x,r2y)
    + `<text x="100" y="112" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">ester linkage −COO−</text>`;
})();

// ── Ether: R–O–R  (bond angle ~111°, 2 lone pairs on O) ──────────
// Match reference: O centre, R upper-left, R upper-right, lone pairs lower
const svgEther = (() => {
  const [ox,oy]=[100,68];
  const r1x=38, r1y=44;   // R upper-left
  const r2x=162, r2y=44;  // R upper-right
  return b(ox,oy,r1x,r1y) + b(ox,oy,r2x,r2y)
    + lp(ox,oy,270)   // lone pair bottom-left
    + lp(ox,oy,350)   // lone pair bottom-right
    + R(r1x,r1y) + R(r2x,r2y) + L(ox,oy,'O',OC,17)
    + `<text x="100" y="108" text-anchor="middle" dominant-baseline="central"
       font-size="10" font-style="italic" fill="${LP}" font-family="'Inter',sans-serif">R−O−R, ~111° bond angle</text>`;
})();



const ORGANIC_GROUPS = [
  { name:"Alkane",          suffix:"-ane",       formula:"CₙH₂ₙ₊₂",  functional:"C−C single bonds only",
    badge:"Saturated",      badgeColor:"#94a3b8", svg:svgAlkane,
    description:"Fully saturated hydrocarbons. Nonpolar, low reactivity. Combust in O₂.",
    examples:"methane (CH₄), ethane (C₂H₆), propane (C₃H₈), butane (C₄H₁₀)",
    namingTip:"Count carbons: 1=meth, 2=eth, 3=prop, 4=but, 5=pent, 6=hex + -ane" },

  { name:"Alkene",          suffix:"-ene",       formula:"CₙH₂ₙ",     functional:"C=C double bond",
    badge:"Unsaturated",    badgeColor:"#22c55e", svg:svgAlkene,
    description:"C=C double bond. Planar geometry around double bond (sp² hybridisation, 120°). Addition reactions with H₂, HX, X₂, H₂O.",
    examples:"ethene (CH₂=CH₂), propene, but-1-ene, (E)-but-2-ene, (Z)-but-2-ene",
    namingTip:"Number chain from end nearest double bond; indicate position: but-2-ene",
    extraBtns: true },

  { name:"Alkyne",          suffix:"-yne",       formula:"CₙH₂ₙ₋₂",  functional:"C≡C triple bond",
    badge:"Unsaturated",    badgeColor:"#3b82f6", svg:svgAlkyne,
    description:"C≡C triple bond. Linear geometry (sp hybridisation, 180°). Very reactive — two sequential addition reactions possible.",
    examples:"ethyne/acetylene (HC≡CH), propyne, but-1-yne",
    namingTip:"Longest chain containing triple bond; lowest possible position number" },

  { name:"Alcohol",         suffix:"-ol",        formula:"R−OH",      functional:"−OH (hydroxyl)",
    badge:"Oxygen group",   badgeColor:"#ef4444", svg:svgAlcohol,
    description:"−OH group. Polar; O lone pairs accept/donate H-bonds → higher bp than alkanes. Miscible with water for shorter chains.",
    examples:"methanol (CH₃OH), ethanol (C₂H₅OH), propan-1-ol, propan-2-ol",
    namingTip:"Number chain so −OH gets lowest number; add -ol suffix" },

  { name:"Aldehyde",        suffix:"-al",        formula:"R−CHO",     functional:"−CHO (carbonyl at chain end)",
    badge:"Carbonyl",       badgeColor:"#f97316", svg:svgAldehyde,
    description:"Carbonyl C at chain end bearing one H. Polar. Readily oxidised to carboxylic acid; reduced to primary alcohol.",
    examples:"methanal/formaldehyde (HCHO), ethanal (CH₃CHO), propanal",
    namingTip:"Always at C-1; use -al suffix — no position number needed" },

  { name:"Ketone",          suffix:"-one",       formula:"R−CO−R′",   functional:"C=O carbonyl in chain",
    badge:"Carbonyl",       badgeColor:"#f97316", svg:svgKetone,
    description:"Carbonyl C flanked by two carbon groups. Not easily oxidised further (no α-H on carbonyl C). Reduced to secondary alcohol.",
    examples:"propanone/acetone (CH₃COCH₃), butanone (MEK), pentan-3-one",
    namingTip:"Number chain; give C=O lowest possible number: pentan-2-one" },

  { name:"Carboxylic Acid", suffix:"-oic acid",  formula:"R−COOH",    functional:"−COOH (carboxyl)",
    badge:"Acidic",         badgeColor:"#ef4444", svg:svgCarboxylicAcid,
    description:"Acidic −COOH group (pKa ~4-5). Strong H-bonding → very high bp; dimerise in solution. Forms esters with alcohols; amides with amines.",
    examples:"methanoic acid (HCOOH), ethanoic/acetic acid (CH₃COOH), propanoic acid",
    namingTip:"Always at C-1; chain includes the COOH carbon: propanoic acid = 3C total" },

  { name:"Amine",           suffix:"-amine",     formula:"R−NH₂",     functional:"−NH₂ (amino group)",
    badge:"Basic/N group",  badgeColor:"#8b5cf6", svg:svgAmine,
    description:"Basic — lone pair on N accepts protons. Lower bp than alcohols but higher than alkanes of same MW. Primary (RNH₂), secondary (R₂NH), tertiary (R₃N).",
    examples:"methylamine (CH₃NH₂), ethylamine, aniline (C₆H₅NH₂)",
    namingTip:"Primary: alkyl + amine. Secondary/tertiary: N-methyl prefix. Aromatic: aniline" },

  { name:"Ester",           suffix:"-oate",      formula:"R−COO−R′",  functional:"−COO− (ester linkage)",
    badge:"Ether-like",     badgeColor:"#14b8a6", svg:svgEster,
    description:"Formed by esterification (acid + alcohol, −H₂O). Fruity aromas. Hydrolysable by acid or base (saponification). No H-bond donor → lower bp than acids.",
    examples:"methyl ethanoate (CH₃COOCH₃), ethyl ethanoate (nail polish remover)",
    namingTip:"Alkyl (from alcohol) + acid root as -oate: ethyl ethanoate = ethanol + ethanoic acid" },

  { name:"Ether",           suffix:"–",          formula:"R−O−R′",    functional:"C−O−C linkage",
    badge:"Weakly polar",   badgeColor:"#eab308", svg:svgEther,
    description:"O bond angle ~111°. Low reactivity (no reactive H). Good organic solvent; immiscible with water for longer chains. Diethyl ether: historic anaesthetic.",
    examples:"methoxymethane (dimethyl ether), ethoxyethane (diethyl ether, Et₂O)",
    namingTip:"IUPAC: alkoxy- prefix on longest chain. Common name: list both alkyl groups + ether" },
];

// ── E-Z and cis/trans modal windows ─────────────────────────────

function showEZModal() {
  let m = document.getElementById('ezModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'ezModal';
    m.className = 'panel-overlay';
    m.innerHTML = `
    <div class="panel-box" style="width:760px">
      <div class="panel-header">
        <h2>🔀 E-Z Naming (IUPAC)</h2>
        <button class="panel-close" id="closeEZ">✕</button>
      </div>
      <div class="panel-body">
        <div class="keq-section">
          <div class="keq-section-title">📐 The Rule</div>
          <div class="keq-card">
            <div class="keq-desc" style="font-size:0.82rem;line-height:1.8;">
              For each carbon of the C=C double bond, assign <strong>priority</strong> to the two substituents
              using the <strong>Cahn–Ingold–Prelog (CIP) rules</strong> — higher atomic number = higher priority.
              If both higher-priority groups are on the <em>same</em> side → <strong>Z</strong> (from German <em>zusammen</em>, together).
              If they are on <em>opposite</em> sides → <strong>E</strong> (from German <em>entgegen</em>, opposite).
            </div>
          </div>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">📊 CIP Priority Rules (summary)</div>
          <table class="keq-table">
            <thead><tr><th>Rule</th><th>Detail</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td>1. Atomic number</td><td>Higher Z = higher priority</td><td>Br &gt; Cl &gt; O &gt; N &gt; C &gt; H</td></tr>
              <tr><td>2. Tie? Go to next atom</td><td>Compare atoms one bond further out, largest first</td><td>–CH₂Br vs –CH₂Cl: Br wins at second atom</td></tr>
              <tr><td>3. Double/triple bonds</td><td>Phantom atoms: C=O counts as C bonded to (O,O); O=C bonded to (C,C)</td><td>–CHO phantom: C has O,O,H attached</td></tr>
              <tr><td>4. Isotopes</td><td>Higher mass isotope = higher priority</td><td>D (²H) &gt; H (¹H)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">🎨 Visual Examples</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <div class="keq-card" style="text-align:center;">
              <div style="font-weight:700;color:#22c55e;margin-bottom:8px;">(Z)-but-2-ene</div>
              <svg viewBox="0 0 200 120" width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <!-- Double bond -->
                <line x1="80" y1="58" x2="120" y2="58" stroke="#22c55e" stroke-width="2"/>
                <line x1="80" y1="64" x2="120" y2="64" stroke="#22c55e" stroke-width="2"/>
                <!-- Left carbon -->
                <text x="80" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#22c55e" font-family="monospace">C</text>
                <!-- Right carbon -->
                <text x="120" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#22c55e" font-family="monospace">C</text>
                <!-- Left carbon: CH₃ up-left (high priority), H down-left (low priority) -->
                <line x1="80" y1="58" x2="45" y2="35" stroke="#94a3b8" stroke-width="2"/>
                <line x1="80" y1="64" x2="45" y2="87" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="36" y="34" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700" font-family="monospace">CH₃</text>
                <text x="36" y="92" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <text x="56" y="28" font-size="9" fill="#ef4444">① high</text>
                <!-- Right carbon: CH₃ up-right (high priority), H down-right (low priority) -->
                <line x1="120" y1="58" x2="155" y2="35" stroke="#94a3b8" stroke-width="2"/>
                <line x1="120" y1="64" x2="155" y2="87" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="164" y="34" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700" font-family="monospace">CH₃</text>
                <text x="164" y="92" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <text x="134" y="28" font-size="9" fill="#ef4444">① high</text>
                <!-- Z arrow showing same side -->
                <path d="M 60 100 Q 100 112 140 100" stroke="#22c55e" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
                <text x="100" y="118" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="700">both ① on SAME side → Z</text>
              </svg>
            </div>
            <div class="keq-card" style="text-align:center;">
              <div style="font-weight:700;color:#3b82f6;margin-bottom:8px;">(E)-but-2-ene</div>
              <svg viewBox="0 0 200 120" width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                <line x1="80" y1="58" x2="120" y2="58" stroke="#3b82f6" stroke-width="2"/>
                <line x1="80" y1="64" x2="120" y2="64" stroke="#3b82f6" stroke-width="2"/>
                <text x="80" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">C</text>
                <text x="120" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">C</text>
                <!-- Left carbon: CH₃ up-left (high priority), H down-left (low priority) -->
                <line x1="80" y1="58" x2="45" y2="35" stroke="#94a3b8" stroke-width="2"/>
                <line x1="80" y1="64" x2="45" y2="87" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="36" y="34" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700" font-family="monospace">CH₃</text>
                <text x="36" y="92" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <text x="56" y="28" font-size="9" fill="#ef4444">① high</text>
                <!-- Right carbon: H up-right (low priority), CH₃ down-right (high priority) -->
                <line x1="120" y1="58" x2="155" y2="35" stroke="#94a3b8" stroke-width="1.5"/>
                <line x1="120" y1="64" x2="155" y2="87" stroke="#94a3b8" stroke-width="2"/>
                <text x="164" y="34" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <text x="164" y="92" text-anchor="middle" font-size="11" fill="#ef4444" font-weight="700" font-family="monospace">CH₃</text>
                <text x="134" y="28" font-size="9" fill="#94a3b8">② low</text>
                <text x="134" y="100" font-size="9" fill="#ef4444">① high</text>
                <!-- E arrows showing opposite sides -->
                <line x1="56" y1="32" x2="144" y2="96" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3"/>
                <text x="100" y="118" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="700">both ① on OPPOSITE sides → E</text>
              </svg>
            </div>
          </div>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">✅ Pros &amp; Cons of E-Z</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="keq-card" style="border-color:#22c55e;">
              <div style="color:#22c55e;font-weight:700;margin-bottom:6px;">✅ Advantages</div>
              <div class="keq-desc" style="line-height:1.8;">
                • Works for <strong>all</strong> alkenes — including those where cis/trans fails<br>
                • Unambiguous when substituents are all different<br>
                • Applies to C=N, C=C=C and other systems<br>
                • IUPAC preferred — universal in modern literature<br>
                • Handles isotope differences (H vs D)
              </div>
            </div>
            <div class="keq-card" style="border-color:#ef4444;">
              <div style="color:#ef4444;font-weight:700;margin-bottom:6px;">❌ Disadvantages</div>
              <div class="keq-desc" style="line-height:1.8;">
                • Requires learning CIP priority rules<br>
                • Priority can be counter-intuitive (–CHO outranks –CH₂OH)<br>
                • "Z" does not always correspond to "cis" visually<br>
                • More complex to apply quickly in the field<br>
                • Older literature uses cis/trans — must translate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.body.appendChild(m);
    document.getElementById('closeEZ').addEventListener('click', () => m.style.display='none');
    m.addEventListener('click', e => { if(e.target===m) m.style.display='none'; });
  }
  m.style.display = 'flex';
}

function showCisTransModal() {
  let m = document.getElementById('cisTransModal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'cisTransModal';
    m.className = 'panel-overlay';
    m.innerHTML = `
    <div class="panel-box" style="width:720px">
      <div class="panel-header">
        <h2>↔️ Cis/Trans Naming (Traditional)</h2>
        <button class="panel-close" id="closeCisTrans">✕</button>
      </div>
      <div class="panel-body">
        <div class="keq-section">
          <div class="keq-section-title">📐 The Rule</div>
          <div class="keq-card">
            <div class="keq-desc" style="font-size:0.82rem;line-height:1.8;">
              Used when <strong>each</strong> carbon of the C=C bond carries <strong>one identical group</strong>
              (or at least one H on each carbon).
              If the identical groups are on the <em>same</em> side → <strong>cis</strong> (Latin: on this side).
              If they are on <em>opposite</em> sides → <strong>trans</strong> (Latin: across).
              The reference group is usually the longest chain or the H atom.
            </div>
          </div>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">🎨 Visual Examples</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
            <div class="keq-card" style="text-align:center;">
              <div style="font-weight:700;color:#22c55e;margin-bottom:8px;">cis-but-2-ene</div>
              <svg viewBox="0 0 200 110" width="200" height="110" xmlns="http://www.w3.org/2000/svg">
                <line x1="80" y1="53" x2="120" y2="53" stroke="#22c55e" stroke-width="2"/>
                <line x1="80" y1="59" x2="120" y2="59" stroke="#22c55e" stroke-width="2"/>
                <text x="80" y="59" text-anchor="middle" font-size="13" font-weight="700" fill="#22c55e" font-family="monospace">C</text>
                <text x="120" y="59" text-anchor="middle" font-size="13" font-weight="700" fill="#22c55e" font-family="monospace">C</text>
                <line x1="80" y1="53" x2="48" y2="30" stroke="#94a3b8" stroke-width="2"/>
                <line x1="80" y1="59" x2="48" y2="82" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="38" y="30" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="700" font-family="monospace">CH₃</text>
                <text x="38" y="87" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <line x1="120" y1="53" x2="152" y2="30" stroke="#94a3b8" stroke-width="2"/>
                <line x1="120" y1="59" x2="152" y2="82" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="162" y="30" text-anchor="middle" font-size="11" fill="#22c55e" font-weight="700" font-family="monospace">CH₃</text>
                <text x="162" y="87" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <text x="100" y="105" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="700">CH₃ groups SAME side → cis</text>
              </svg>
            </div>
            <div class="keq-card" style="text-align:center;">
              <div style="font-weight:700;color:#3b82f6;margin-bottom:8px;">trans-but-2-ene</div>
              <svg viewBox="0 0 200 110" width="200" height="110" xmlns="http://www.w3.org/2000/svg">
                <line x1="80" y1="53" x2="120" y2="53" stroke="#3b82f6" stroke-width="2"/>
                <line x1="80" y1="59" x2="120" y2="59" stroke="#3b82f6" stroke-width="2"/>
                <text x="80" y="59" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">C</text>
                <text x="120" y="59" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">C</text>
                <line x1="80" y1="53" x2="48" y2="30" stroke="#94a3b8" stroke-width="2"/>
                <line x1="80" y1="59" x2="48" y2="82" stroke="#94a3b8" stroke-width="1.5"/>
                <text x="38" y="30" text-anchor="middle" font-size="11" fill="#3b82f6" font-weight="700" font-family="monospace">CH₃</text>
                <text x="38" y="87" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <line x1="120" y1="53" x2="152" y2="30" stroke="#94a3b8" stroke-width="1.5"/>
                <line x1="120" y1="59" x2="152" y2="82" stroke="#94a3b8" stroke-width="2"/>
                <text x="162" y="30" text-anchor="middle" font-size="11" fill="#94a3b8" font-family="monospace">H</text>
                <text x="162" y="87" text-anchor="middle" font-size="11" fill="#3b82f6" font-weight="700" font-family="monospace">CH₃</text>
                <text x="100" y="105" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="700">CH₃ groups OPPOSITE sides → trans</text>
              </svg>
            </div>
          </div>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">⚠️ When Cis/Trans Fails</div>
          <div class="keq-card" style="border-color:#eab308;">
            <div class="keq-desc" style="line-height:1.8;">
              Cis/trans is <strong>undefined</strong> when one carbon of the double bond has <strong>two identical substituents</strong>
              (e.g. CH₂= on one end). It is also ambiguous when all four substituents are different
              (which group do you call "cis" to which?).
              For example: <span style="font-family:'Space Mono',monospace;color:#eab308;">CH₃CH=CClBr</span> —
              there is no obvious "cis" or "trans" reference group.
              This is exactly the situation that motivated the E-Z system.
            </div>
          </div>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">✅ Pros &amp; Cons of Cis/Trans</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="keq-card" style="border-color:#22c55e;">
              <div style="color:#22c55e;font-weight:700;margin-bottom:6px;">✅ Advantages</div>
              <div class="keq-desc" style="line-height:1.8;">
                • Instantly intuitive — "same side" vs "opposite side"<br>
                • No priority rules required<br>
                • Very fast to apply for simple symmetric alkenes<br>
                • Universal in everyday language and older texts<br>
                • Applies to cyclic systems (cis/trans ring substituents)
              </div>
            </div>
            <div class="keq-card" style="border-color:#ef4444;">
              <div style="color:#ef4444;font-weight:700;margin-bottom:6px;">❌ Disadvantages</div>
              <div class="keq-desc" style="line-height:1.8;">
                • Fails when all four substituents differ<br>
                • Fails when one end has two identical groups (no isomerism)<br>
                • Ambiguous: which group is the reference?<br>
                • Not used in modern IUPAC nomenclature for alkenes<br>
                • Cannot handle cumulated dienes, C=N, imines, etc.
              </div>
            </div>
          </div>
        </div>

        <div class="keq-section">
          <div class="keq-section-title">🔄 Correspondence Between Systems</div>
          <table class="keq-table">
            <thead><tr><th>Compound</th><th>Cis/Trans</th><th>E-Z</th><th>Note</th></tr></thead>
            <tbody>
              <tr><td style="font-family:'Space Mono',monospace">but-2-ene (CH₃ same side)</td>
                  <td style="color:#22c55e;font-weight:700;">cis</td>
                  <td style="color:#22c55e;font-weight:700;">Z</td>
                  <td>Same here — CH₃ &gt; H, same side</td></tr>
              <tr><td style="font-family:'Space Mono',monospace">but-2-ene (CH₃ opposite)</td>
                  <td style="color:#3b82f6;font-weight:700;">trans</td>
                  <td style="color:#3b82f6;font-weight:700;">E</td>
                  <td>Same here — CH₃ opposite</td></tr>
              <tr><td style="font-family:'Space Mono',monospace">1-bromo-2-chloroethene</td>
                  <td style="color:#94a3b8;">cis (Br/Cl same side)</td>
                  <td style="color:#22c55e;font-weight:700;">Z</td>
                  <td>Br &gt; Cl, same side → Z</td></tr>
              <tr><td style="font-family:'Space Mono',monospace">(Z)-1-bromo-1-fluoroethene</td>
                  <td style="color:#ef4444;">undefined</td>
                  <td style="color:#22c55e;font-weight:700;">Z</td>
                  <td>Cis/trans fails; E-Z needed</td></tr>
              <tr><td style="font-family:'Space Mono',monospace">cis-2-butene vs Z-2-butene</td>
                  <td style="color:#22c55e;font-weight:700;">cis</td>
                  <td style="color:#22c55e;font-weight:700;">Z</td>
                  <td>Coincide for symmetric cases</td></tr>
            </tbody>
          </table>
          <div style="font-size:0.7rem;color:var(--text-muted);margin-top:8px;font-style:italic;">
            ⚠️ cis ≠ Z in all cases. For unsymmetric alkenes, always use E-Z.
          </div>
        </div>
      </div>
    </div>`;
    document.body.appendChild(m);
    document.getElementById('closeCisTrans').addEventListener('click', () => m.style.display='none');
    m.addEventListener('click', e => { if(e.target===m) m.style.display='none'; });
  }
  m.style.display = 'flex';
}

function buildOrganicPanel() {
  const body = document.getElementById("organicBody");
  if (body.children.length > 0) return;

  const cards = ORGANIC_GROUPS.map(g => {
    const extraBtns = g.extraBtns ? `
      <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
        <button class="org-extra-btn" id="btnEZ" style="border-color:#22c55e;color:#22c55e;">
          🔀 E-Z Naming
        </button>
        <button class="org-extra-btn" id="btnCisTrans" style="border-color:#3b82f6;color:#3b82f6;">
          ↔️ Cis/Trans Naming
        </button>
      </div>` : '';
    return `<div class="org-card">
      <div class="org-card-header">
        <div class="org-class-name">${g.name}</div>
        <span class="org-badge" style="background:color-mix(in srgb,${g.badgeColor} 20%,var(--surface2));
          color:${g.badgeColor};border:1px solid ${g.badgeColor};">${g.badge}</span>
      </div>
      <svg class="org-svg" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">${g.svg}</svg>
      <div class="org-formula">Formula: ${g.formula} &nbsp;|&nbsp; Suffix: ${g.suffix}</div>
      <div class="org-name-rules"><strong>Functional group:</strong> ${g.functional}</div>
      <div class="org-name-rules" style="margin-top:3px;"><strong>Naming:</strong> ${g.namingTip}</div>
      <div class="org-example">e.g. ${g.examples}</div>
      <div style="font-size:0.7rem;color:var(--text-muted);margin-top:4px;">${g.description}</div>
      ${extraBtns}
    </div>`;
  }).join('');

  const alkanes = [
    {n:1,name:"Methane",  f:"CH₄"},  {n:2,name:"Ethane",   f:"C₂H₆"},
    {n:3,name:"Propane",  f:"C₃H₈"}, {n:4,name:"Butane",   f:"C₄H₁₀"},
    {n:5,name:"Pentane",  f:"C₅H₁₂"},{n:6,name:"Hexane",   f:"C₆H₁₄"},
    {n:7,name:"Heptane",  f:"C₇H₁₆"},{n:8,name:"Octane",   f:"C₈H₁₈"},
  ];
  const alkaneRows = alkanes.map(a =>
    `<tr><td>${a.n}</td><td>${a.name}</td><td style="font-family:'Space Mono',monospace">${a.f}</td></tr>`).join('');
  const prefixes = [["1","meth-"],["2","eth-"],["3","prop-"],["4","but-"],
    ["5","pent-"],["6","hex-"],["7","hept-"],["8","oct-"],["9","non-"],["10","dec-"]];
  const prefixRows = prefixes.map(([n,p]) =>
    `<tr><td>${n}</td><td style="font-family:'Space Mono',monospace;color:var(--accent)">${p}</td></tr>`).join('');

  body.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 180px;gap:14px;align-items:start;">
      <div class="org-grid">${cards}</div>
      <div>
        <div class="org-homologous">
          <div class="org-homo-title">Carbon Prefixes</div>
          <table class="org-homo-table">
            <thead><tr><th>C atoms</th><th>Prefix</th></tr></thead>
            <tbody>${prefixRows}</tbody>
          </table>
        </div>
        <div class="org-homologous" style="margin-top:14px;">
          <div class="org-homo-title">Alkane Series</div>
          <table class="org-homo-table">
            <thead><tr><th>n</th><th>Name</th><th>Formula</th></tr></thead>
            <tbody>${alkaneRows}</tbody>
          </table>
        </div>
      </div>
    </div>`;

  // Wire extra buttons (they exist now in DOM)
  const btnEZ = document.getElementById('btnEZ');
  const btnCT = document.getElementById('btnCisTrans');
  if (btnEZ) btnEZ.addEventListener('click', showEZModal);
  if (btnCT) btnCT.addEventListener('click', showCisTransModal);
}

document.getElementById("btnOrganic").addEventListener("click", () => {
  buildOrganicPanel();
  openPanel("organicOverlay");
});
document.getElementById("closeOrganic").addEventListener("click", () => closePanel("organicOverlay"));



// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 7: MOLAR MASS CALCULATOR ──────────────────────────────
// ═══════════════════════════════════════════════════════════════════

let mmFormula = [];   // [{sym, mass, count}]
let mmHistory = [];

function buildMolarMassPanel() {
  const body = document.getElementById("molarMassBody");
  if (body.children.length > 0) return;

  // Build compact periodic table grid
  const posMap = {};
  ELEMENTS.forEach(el => { posMap[`${el.row},${el.col}`] = el; });

  let ptHTML = `<div class="mm-pt-grid">`;
  for (let r = 1; r <= 9; r++) {
    if (r === 8) {
      ptHTML += `<div style="grid-column:1/-1;height:3px;"></div>`;
      continue;
    }
    for (let c = 1; c <= 18; c++) {
      if ((r === 6 || r === 7) && c >= 4 && c <= 17) {
        if (c === 4) {
          ptHTML += `<div style="grid-row:${r};grid-column:4/18;border:1px dashed var(--border);
            border-radius:3px;display:flex;align-items:center;justify-content:center;
            font-size:0.32rem;color:var(--text-muted);font-weight:700;">
            ${r===6?"Lanthanides":"Actinides"}</div>`;
        }
        continue;
      }
      const el = posMap[`${r},${c}`];
      if (!el) {
        ptHTML += `<div style="grid-row:${r};grid-column:${c};aspect-ratio:1;"></div>`;
        continue;
      }
      ptHTML += `<div class="mm-el ${el.cat}" 
        style="grid-row:${el.row};grid-column:${el.col};"
        data-sym="${el.sym}" data-mass="${el.mass}" title="${el.name} (${el.mass} g/mol)">
        <div class="mm-z">${el.z}</div>
        <div class="mm-sym">${el.sym}</div>
      </div>`;
    }
  }
  ptHTML += `</div>`;

  body.innerHTML = `
    <div class="mm-layout">
      <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;">
        Click elements on the periodic table to build a compound formula. Click an element multiple times to add more atoms.
      </div>
      ${ptHTML}
      <div class="mm-display">
        <div class="mm-formula-row">
          <div class="mm-formula-display" id="mmFormulaDisplay">—</div>
          <div class="mm-result">
            <div class="mm-result-value" id="mmResultValue">0.000</div>
            <div class="mm-result-unit">g/mol</div>
          </div>
        </div>
        <div class="mm-controls">
          <button class="mm-btn" id="mmUndo">↩ Undo</button>
          <button class="mm-btn danger" id="mmClear">✕ Clear</button>
          <button class="mm-btn" id="mmSave">💾 Save to History</button>
        </div>
        <div class="mm-breakdown" id="mmBreakdown"></div>
      </div>
      <div class="mm-history" id="mmHistorySection" style="display:none;">
        <div class="mm-history-title">📋 Calculation History (click to reload)</div>
        <div id="mmHistoryList"></div>
      </div>
    </div>`;

  // Wire element clicks
  body.querySelectorAll('.mm-el').forEach(cell => {
    cell.addEventListener('click', () => {
      const sym = cell.dataset.sym;
      const mass = parseFloat(cell.dataset.mass);
      const existing = mmFormula.find(e => e.sym === sym);
      if (existing) existing.count++;
      else mmFormula.push({sym, mass, count:1});
      updateMMDisplay();
    });
  });

  document.getElementById('mmUndo').addEventListener('click', () => {
    if (mmFormula.length === 0) return;
    const last = mmFormula[mmFormula.length - 1];
    if (last.count > 1) last.count--;
    else mmFormula.pop();
    updateMMDisplay();
  });

  document.getElementById('mmClear').addEventListener('click', () => {
    mmFormula = [];
    updateMMDisplay();
  });

  document.getElementById('mmSave').addEventListener('click', () => {
    if (mmFormula.length === 0) return;
    const formulaStr = buildFormulaString();
    const total = mmFormula.reduce((s,e) => s + e.mass * e.count, 0);
    mmHistory.unshift({formula: formulaStr, mass: total.toFixed(3), items: [...mmFormula.map(e=>({...e}))]});
    if (mmHistory.length > 10) mmHistory.pop();
    updateMMHistory();
  });
}

function buildFormulaString() {
  return mmFormula.map(e => {
    const sub = ['','','₂','₃','₄','₅','₆','₇','₈','₉','₁₀'];
    return e.sym + (e.count > 1 ? (sub[e.count] || e.count.toString()) : '');
  }).join('');
}

function updateMMDisplay() {
  const formulaStr = mmFormula.length > 0 ? buildFormulaString() : '—';
  const total = mmFormula.reduce((s,e) => s + e.mass * e.count, 0);

  document.getElementById('mmFormulaDisplay').textContent = formulaStr;
  document.getElementById('mmResultValue').textContent = total > 0 ? total.toFixed(3) : '0.000';

  const breakdown = document.getElementById('mmBreakdown');
  if (mmFormula.length === 0) {
    breakdown.innerHTML = '';
    return;
  }
  breakdown.innerHTML = mmFormula.map(e => {
    const sub = ['','','₂','₃','₄','₅','₆','₇','₈','₉','₁₀'];
    const subScript = e.count > 1 ? (sub[e.count] || `×${e.count}`) : '';
    const contrib = (e.mass * e.count).toFixed(3);
    return `<div class="mm-breakdown-item">
      <span class="mm-breakdown-sym">${e.sym}${subScript}</span>
      <span class="mm-breakdown-math">${e.count} × ${e.mass.toFixed(3)}</span>
      <span class="mm-breakdown-mass">${contrib} g/mol</span>
    </div>`;
  }).join('') + (mmFormula.length > 1 ? `<div class="mm-breakdown-item" style="font-weight:700;border-top:2px solid var(--border);margin-top:3px;">
    <span class="mm-breakdown-sym" style="color:var(--accent)">Total</span>
    <span></span>
    <span class="mm-breakdown-mass" style="color:var(--accent);font-size:0.85rem;">${total.toFixed(3)} g/mol</span>
  </div>` : '');
}

function updateMMHistory() {
  const section = document.getElementById('mmHistorySection');
  const list = document.getElementById('mmHistoryList');
  if (mmHistory.length === 0) { section.style.display = 'none'; return; }
  section.style.display = '';
  list.innerHTML = mmHistory.map((h,i) =>
    `<div class="mm-history-item" data-idx="${i}">
      <span style="font-family:'Space Mono',monospace;font-weight:700;">${h.formula}</span>
      <span style="color:var(--accent);font-family:'Space Mono',monospace;">${h.mass} g/mol</span>
    </div>`).join('');
  list.querySelectorAll('.mm-history-item').forEach(item => {
    item.addEventListener('click', () => {
      const entry = mmHistory[parseInt(item.dataset.idx)];
      mmFormula = entry.items.map(e=>({...e}));
      updateMMDisplay();
    });
  });
}

document.getElementById("btnMolarMass").addEventListener("click", () => {
  buildMolarMassPanel();
  openPanel("molarMassOverlay");
});
document.getElementById("closeMolarMass").addEventListener("click", () => closePanel("molarMassOverlay"));


// ═══════════════════════════════════════════════════════════════════
// ── FEATURE 8: THERMOCHEMICAL DATA ────────────────────────────────
// ═══════════════════════════════════════════════════════════════════
// ΔHf° in kJ/mol, S° in J/mol·K, ΔGf° in kJ/mol at 25°C, 1 atm
// Source: NIST WebBook / Atkins Physical Chemistry 10th ed.

const THERMO_DATA = [
  // Elements (reference state: ΔHf° = 0, ΔGf° = 0)
  {cat:"Elements (reference state — all values = 0)",name:"",formula:"",hf:null,s:null,gf:null,header:true},
  {name:"Hydrogen gas",      formula:"H₂(g)",     hf:0,    s:130.7, gf:0},
  {name:"Oxygen gas",        formula:"O₂(g)",     hf:0,    s:205.2, gf:0},
  {name:"Nitrogen gas",      formula:"N₂(g)",     hf:0,    s:191.6, gf:0},
  {name:"Carbon (graphite)", formula:"C(graphite)",hf:0,    s:5.7,   gf:0},
  {name:"Carbon (diamond)",  formula:"C(diamond)", hf:1.9,  s:2.4,   gf:2.9},
  {name:"Sulfur (rhombic)",  formula:"S(s)",       hf:0,    s:32.1,  gf:0},
  {name:"Chlorine gas",      formula:"Cl₂(g)",     hf:0,    s:223.1, gf:0},
  {name:"Bromine liquid",    formula:"Br₂(l)",     hf:0,    s:152.2, gf:0},
  {name:"Iodine solid",      formula:"I₂(s)",      hf:0,    s:116.1, gf:0},
  {name:"Iron",              formula:"Fe(s)",      hf:0,    s:27.3,  gf:0},
  {name:"Copper",            formula:"Cu(s)",      hf:0,    s:33.2,  gf:0},
  {name:"Zinc",              formula:"Zn(s)",      hf:0,    s:41.6,  gf:0},
  {name:"Sodium",            formula:"Na(s)",      hf:0,    s:51.2,  gf:0},
  {name:"Calcium",           formula:"Ca(s)",      hf:0,    s:41.6,  gf:0},
  {name:"Aluminium",         formula:"Al(s)",      hf:0,    s:28.3,  gf:0},
  {name:"Mercury liquid",    formula:"Hg(l)",      hf:0,    s:76.0,  gf:0},

  // Inorganic compounds
  {cat:"Inorganic Compounds",name:"",formula:"",hf:null,s:null,gf:null,header:true},
  {name:"Water (liquid)",    formula:"H₂O(l)",     hf:-285.8, s:70.0,  gf:-237.1},
  {name:"Water (gas)",       formula:"H₂O(g)",     hf:-241.8, s:188.7, gf:-228.6},
  {name:"Hydrogen peroxide", formula:"H₂O₂(l)",    hf:-187.8, s:109.6, gf:-120.4},
  {name:"Ammonia",           formula:"NH₃(g)",     hf:-46.1,  s:192.5, gf:-16.5},
  {name:"Nitrogen monoxide", formula:"NO(g)",      hf:90.3,   s:210.8, gf:86.6},
  {name:"Nitrogen dioxide",  formula:"NO₂(g)",     hf:33.2,   s:240.1, gf:51.3},
  {name:"Dinitrogen oxide",  formula:"N₂O(g)",     hf:82.1,   s:219.9, gf:104.2},
  {name:"Sulfur dioxide",    formula:"SO₂(g)",     hf:-296.8, s:248.2, gf:-300.2},
  {name:"Sulfur trioxide",   formula:"SO₃(g)",     hf:-395.7, s:256.8, gf:-371.1},
  {name:"Hydrogen sulfide",  formula:"H₂S(g)",     hf:-20.6,  s:205.8, gf:-33.4},
  {name:"Carbon monoxide",   formula:"CO(g)",      hf:-110.5, s:197.7, gf:-137.2},
  {name:"Carbon dioxide",    formula:"CO₂(g)",     hf:-393.5, s:213.8, gf:-394.4},
  {name:"Hydrogen chloride", formula:"HCl(g)",     hf:-92.3,  s:186.9, gf:-95.3},
  {name:"Hydrogen fluoride", formula:"HF(g)",      hf:-271.1, s:173.8, gf:-273.2},
  {name:"Hydrogen bromide",  formula:"HBr(g)",     hf:-36.3,  s:198.7, gf:-53.4},
  {name:"Ozone",             formula:"O₃(g)",      hf:142.7,  s:238.9, gf:163.2},
  {name:"Silicon dioxide",   formula:"SiO₂(s)",    hf:-910.7, s:41.5,  gf:-856.3},

  // Metal oxides & salts
  {cat:"Metal Oxides & Salts",name:"",formula:"",hf:null,s:null,gf:null,header:true},
  {name:"Calcium oxide",       formula:"CaO(s)",    hf:-635.1, s:38.2,  gf:-603.5},
  {name:"Calcium carbonate",   formula:"CaCO₃(s)",  hf:-1206.9,s:92.9,  gf:-1128.8},
  {name:"Calcium hydroxide",   formula:"Ca(OH)₂(s)",hf:-986.1, s:83.4,  gf:-898.4},
  {name:"Iron(III) oxide",     formula:"Fe₂O₃(s)",  hf:-824.2, s:87.4,  gf:-742.2},
  {name:"Iron(II,III) oxide",  formula:"Fe₃O₄(s)",  hf:-1118.4,s:146.4, gf:-1015.4},
  {name:"Aluminium oxide",     formula:"Al₂O₃(s)",  hf:-1675.7,s:50.9,  gf:-1582.3},
  {name:"Copper(II) oxide",    formula:"CuO(s)",    hf:-157.3, s:42.6,  gf:-129.7},
  {name:"Zinc oxide",          formula:"ZnO(s)",    hf:-350.5, s:43.7,  gf:-320.5},
  {name:"Sodium hydroxide",    formula:"NaOH(s)",   hf:-425.6, s:64.5,  gf:-379.7},
  {name:"Sodium chloride",     formula:"NaCl(s)",   hf:-411.2, s:72.1,  gf:-384.2},
  {name:"Potassium chloride",  formula:"KCl(s)",    hf:-436.7, s:82.6,  gf:-408.8},
  {name:"Magnesium oxide",     formula:"MgO(s)",    hf:-601.6, s:27.0,  gf:-569.3},
  {name:"Mercury(II) oxide",   formula:"HgO(s)",    hf:-90.8,  s:70.3,  gf:-58.5},

  // Aqueous ions
  {cat:"Aqueous Ions (ΔHf° of formation at 1 mol/L)",name:"",formula:"",hf:null,s:null,gf:null,header:true},
  {name:"Hydrogen ion",       formula:"H⁺(aq)",    hf:0,    s:0,    gf:0},
  {name:"Hydroxide ion",      formula:"OH⁻(aq)",   hf:-230.0,s:-10.8,gf:-157.3},
  {name:"Chloride ion",       formula:"Cl⁻(aq)",   hf:-167.2,s:56.5, gf:-131.2},
  {name:"Sodium ion",         formula:"Na⁺(aq)",   hf:-240.1,s:59.0, gf:-261.9},
  {name:"Calcium ion",        formula:"Ca²⁺(aq)",  hf:-542.8,s:-53.1,gf:-553.6},
  {name:"Sulfate ion",        formula:"SO₄²⁻(aq)", hf:-909.3,s:20.1, gf:-744.5},

  // Organic compounds
  {cat:"Organic Compounds (combustion energies)",name:"",formula:"",hf:null,s:null,gf:null,header:true},
  {name:"Methane",            formula:"CH₄(g)",     hf:-74.8,  s:186.3, gf:-50.7},
  {name:"Ethane",             formula:"C₂H₆(g)",   hf:-84.7,  s:229.5, gf:-32.8},
  {name:"Propane",            formula:"C₃H₈(g)",   hf:-103.8, s:269.9, gf:-23.4},
  {name:"Butane",             formula:"C₄H₁₀(g)",  hf:-126.2, s:310.1, gf:-17.0},
  {name:"Ethene (ethylene)",  formula:"C₂H₄(g)",   hf:52.5,   s:219.6, gf:68.4},
  {name:"Ethyne (acetylene)", formula:"C₂H₂(g)",   hf:226.7,  s:200.9, gf:209.2},
  {name:"Benzene (liquid)",   formula:"C₆H₆(l)",   hf:49.1,   s:173.4, gf:124.5},
  {name:"Benzene (gas)",      formula:"C₆H₆(g)",   hf:82.9,   s:269.2, gf:129.7},
  {name:"Methanol",           formula:"CH₃OH(l)",   hf:-238.7, s:126.8, gf:-166.3},
  {name:"Ethanol",            formula:"C₂H₅OH(l)",  hf:-277.7, s:160.7, gf:-174.8},
  {name:"Acetic acid",        formula:"CH₃COOH(l)", hf:-484.3, s:159.8, gf:-389.9},
  {name:"Glucose",            formula:"C₆H₁₂O₆(s)",hf:-1274.5,s:212.1, gf:-910.4},
  {name:"Sucrose",            formula:"C₁₂H₂₂O₁₁(s)",hf:-2222.1,s:360.2,gf:-1543.1},
  {name:"Urea",               formula:"(NH₂)₂CO(s)",hf:-333.1, s:104.6, gf:-197.4},
];

function buildThermoPanel() {
  const body = document.getElementById("thermoBody");
  if (body.children.length > 0) return;

  const fmtVal = (v, colorPos) => {
    if (v === null || v === undefined) return '<td class="t-val">—</td>';
    const cls = v > 0 ? (colorPos ? 't-pos' : 't-neg') : v < 0 ? (colorPos ? 't-neg' : 't-pos') : 't-zero';
    const sign = v > 0 ? '+' : '';
    return `<td class="t-val ${cls}">${sign}${v.toFixed(1)}</td>`;
  };

  const buildRows = (data) => data.map(d => {
    if (d.header) return `<tr class="thermo-section-head"><td colspan="5">${d.cat}</td></tr>`;
    return `<tr>
      <td>${d.name}</td>
      <td class="t-formula">${d.formula}</td>
      ${fmtVal(d.hf, false)}
      ${fmtVal(d.s, true)}
      ${fmtVal(d.gf, false)}
    </tr>`;
  }).join('');

  body.innerHTML = `
    <div class="thermo-wrap">
      <div class="thermo-title">
        <h3>Standard Thermochemical Data (298 K, 1 atm)</h3>
        <p>ΔH°f = standard enthalpy of formation &nbsp;|&nbsp; S° = standard molar entropy &nbsp;|&nbsp; ΔG°f = standard free energy of formation</p>
      </div>
      <input class="thermo-search" id="thermoSearch" type="text" placeholder="🔍  Search by name or formula...">
      <div style="font-size:0.68rem;color:var(--text-muted);margin-bottom:8px;line-height:1.6;">
        <strong>Key formulas:</strong> &nbsp;
        ΔH°rxn = Σ ΔH°f(products) − Σ ΔH°f(reactants) &nbsp;|&nbsp;
        ΔS°rxn = Σ S°(products) − Σ S°(reactants) &nbsp;|&nbsp;
        ΔG°rxn = ΔH°rxn − TΔS°rxn &nbsp;|&nbsp;
        <span style="color:#22c55e;">Green</span> = more thermodynamically stable direction &nbsp;|&nbsp;
        <span style="color:#ef4444;">Red</span> = less stable
      </div>
      <div style="overflow-y:auto;max-height:480px;">
        <table class="thermo-table" id="thermoTable">
          <thead><tr>
            <th>Name</th>
            <th>Formula</th>
            <th style="text-align:right">ΔH°f (kJ/mol)</th>
            <th style="text-align:right">S° (J/mol·K)</th>
            <th style="text-align:right">ΔG°f (kJ/mol)</th>
          </tr></thead>
          <tbody id="thermoBody2">${buildRows(THERMO_DATA)}</tbody>
        </table>
      </div>
      <div style="font-size:0.62rem;color:var(--text-muted);margin-top:8px;font-style:italic;">
        Source: NIST WebBook; Atkins &amp; de Paula, Physical Chemistry, 10th ed. (2014).
        Values at 298.15 K, 100 kPa (IUPAC standard). Minor rounding applied.
      </div>
    </div>`;

  document.getElementById('thermoSearch').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    const filtered = q.length < 2 ? THERMO_DATA : THERMO_DATA.filter(d =>
      d.header || d.name.toLowerCase().includes(q) || d.formula.toLowerCase().includes(q)
    );
    // Always show headers for context
    document.getElementById('thermoBody2').innerHTML = buildRows(filtered);
  });
}

document.getElementById("btnThermo").addEventListener("click", () => {
  buildThermoPanel();
  openPanel("thermoOverlay");
});
document.getElementById("closeThermo").addEventListener("click", () => closePanel("thermoOverlay"));


// ── TOOLS ACCORDION ──────────────────────────────────────────────
const toolsAccordion = document.getElementById('toolsAccordion');

document.getElementById('btnTools').addEventListener('click', () => {
  const open = toolsAccordion.style.display !== 'none';
  toolsAccordion.style.display = open ? 'none' : 'block';
  document.getElementById('btnTools').style.outline =
    open ? '' : '2px solid var(--accent2)';
});

document.getElementById('toolsAccordionClose').addEventListener('click', () => {
  toolsAccordion.style.display = 'none';
  document.getElementById('btnTools').style.outline = '';
});

// Close accordion when any tool inside it is clicked
toolsAccordion.querySelectorAll('.tools-acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    toolsAccordion.style.display = 'none';
    document.getElementById('btnTools').style.outline = '';
  });
});


// ═══════════════════════════════════════════════════════════════════
// ── EXTRA INFO — Physical Properties (Z=1–30) ─────────────────────
// ═══════════════════════════════════════════════════════════════════

// Data embedded from elements_cards_v3.json / elements_hover_v3.json
const EI_DATA = {"1":{"z":1,"sym":"H","mp":-259.16,"bp":-252.879,"dens":8.988e-5,"state":"gas","group":1,"period":1,"block":"s"},"2":{"z":2,"sym":"He","mp":null,"bp":-268.928,"dens":1.785e-4,"state":"gas","group":18,"period":1,"block":"s"},"3":{"z":3,"sym":"Li","mp":180.5,"bp":1342,"dens":0.534,"state":"solid","group":1,"period":2,"block":"s"},"4":{"z":4,"sym":"Be","mp":1287,"bp":2742,"dens":1.85,"state":"solid","group":2,"period":2,"block":"s"},"5":{"z":5,"sym":"B","mp":2076,"bp":4200,"dens":2.34,"state":"solid","group":13,"period":2,"block":"p"},"6":{"z":6,"sym":"C","mp":null,"bp":4300,"dens":2.267,"state":"solid","group":14,"period":2,"block":"p"},"7":{"z":7,"sym":"N","mp":-210.0,"bp":-195.795,"dens":1.2506e-3,"state":"gas","group":15,"period":2,"block":"p"},"8":{"z":8,"sym":"O","mp":-218.79,"bp":-182.962,"dens":1.429e-3,"state":"gas","group":16,"period":2,"block":"p"},"9":{"z":9,"sym":"F","mp":-219.67,"bp":-188.12,"dens":1.696e-3,"state":"gas","group":17,"period":2,"block":"p"},"10":{"z":10,"sym":"Ne","mp":-248.59,"bp":-246.046,"dens":9.002e-4,"state":"gas","group":18,"period":2,"block":"p"},"11":{"z":11,"sym":"Na","mp":97.794,"bp":882.94,"dens":0.968,"state":"solid","group":1,"period":3,"block":"s"},"12":{"z":12,"sym":"Mg","mp":650,"bp":1090,"dens":1.738,"state":"solid","group":2,"period":3,"block":"s"},"13":{"z":13,"sym":"Al","mp":660.32,"bp":2519,"dens":2.7,"state":"solid","group":13,"period":3,"block":"p"},"14":{"z":14,"sym":"Si","mp":1414,"bp":3265,"dens":2.329,"state":"solid","group":14,"period":3,"block":"p"},"15":{"z":15,"sym":"P","mp":44.15,"bp":280,"dens":1.823,"state":"solid","group":15,"period":3,"block":"p"},"16":{"z":16,"sym":"S","mp":115,"bp":444.6,"dens":2.07,"state":"solid","group":16,"period":3,"block":"p"},"17":{"z":17,"sym":"Cl","mp":-102,"bp":-34.04,"dens":3.214e-3,"state":"gas","group":17,"period":3,"block":"p"},"18":{"z":18,"sym":"Ar","mp":-189,"bp":-186,"dens":1.784e-3,"state":"gas","group":18,"period":3,"block":"p"},"19":{"z":19,"sym":"K","mp":63.65,"bp":760,"dens":0.89,"state":"solid","group":1,"period":4,"block":"s"},"20":{"z":20,"sym":"Ca","mp":842,"bp":1484,"dens":1.55,"state":"solid","group":2,"period":4,"block":"s"},"21":{"z":21,"sym":"Sc","mp":1541,"bp":2836,"dens":2.99,"state":"solid","group":3,"period":4,"block":"d"},"22":{"z":22,"sym":"Ti","mp":1668,"bp":3287,"dens":4.506,"state":"solid","group":4,"period":4,"block":"d"},"23":{"z":23,"sym":"V","mp":1910,"bp":3407,"dens":6.11,"state":"solid","group":5,"period":4,"block":"d"},"24":{"z":24,"sym":"Cr","mp":1907,"bp":2671,"dens":7.19,"state":"solid","group":6,"period":4,"block":"d"},"25":{"z":25,"sym":"Mn","mp":1246,"bp":2061,"dens":7.21,"state":"solid","group":7,"period":4,"block":"d"},"26":{"z":26,"sym":"Fe","mp":1538,"bp":2862,"dens":7.874,"state":"solid","group":8,"period":4,"block":"d"},"27":{"z":27,"sym":"Co","mp":1495,"bp":2927,"dens":8.9,"state":"solid","group":9,"period":4,"block":"d"},"28":{"z":28,"sym":"Ni","mp":1455,"bp":2913,"dens":8.908,"state":"solid","group":10,"period":4,"block":"d"},"29":{"z":29,"sym":"Cu","mp":1084.62,"bp":2562,"dens":8.96,"state":"solid","group":11,"period":4,"block":"d"},"30":{"z":30,"sym":"Zn","mp":419.53,"bp":907,"dens":7.134,"state":"solid","group":12,"period":4,"block":"d"}};

// Map ELEMENTS array into a quick lookup by Z for name + category colour
const EI_ELMAP = {};
ELEMENTS.forEach(e => { EI_ELMAP[e.z] = e; });

// State → colour
const EI_STATE_COL = { solid:'#22c55e', gas:'#38bdf8', liquid:'#f97316', unknown:'#94a3b8' };

// Block → background tint (matches main table category colours approximately)
const EI_BLOCK_BG = { s:'rgba(239,68,68,0.28)', p:'rgba(34,197,94,0.22)', d:'rgba(59,130,246,0.22)', f:'rgba(139,92,246,0.22)' };

function eiFmt(val, unit='', decimals=2) {
  if (val === null || val === undefined) return '—';
  const n = Number(val);
  if (Math.abs(n) < 0.01 && n !== 0) return n.toExponential(2) + (unit ? ' ' + unit : '');
  return n.toFixed(decimals) + (unit ? ' ' + unit : '');
}

// ── Build EI grid ────────────────────────────────────────────────
let eiBuilt = false;
let eiSelected = null;

function buildEIGrid() {
  if (eiBuilt) return;
  eiBuilt = true;

  const grid = document.getElementById('eiGrid');
  grid.innerHTML = '';

  // Same layout as main table: 18 cols × 9 rows
  // Row 8 = section gap, rows 8-9 = lan/act series (cols 4-18)
  // We only have data for periods 1-4 (rows 1-4) so rows 5-7 are dimmed empties

  // Build position map from ELEMENTS
  const posMap = {};
  ELEMENTS.forEach(e => { posMap[`${e.row},${e.col}`] = e; });

  for (let r = 1; r <= 9; r++) {
    // Section gap row
    if (r === 8) {
      const gap = document.createElement('div');
      gap.className = 'ei-sect-gap';
      grid.appendChild(gap);
      continue;
    }

    for (let c = 1; c <= 18; c++) {
      const mainEl = posMap[`${r},${c}`];

      // Lanthanide/Actinide placeholder rows (rows 6-7, cols 4-17 in main table are gaps)
      // In our layout row 8=lan row, row 9=act row
      if ((r === 8 || r === 9) && c === 1) {
        // series label cell (cols 1-3)
        const lbl = document.createElement('div');
        lbl.className = 'ei-series-label';
        lbl.style.gridColumn = '1 / 4';
        lbl.style.gridRow = String(r + 1); // shift for gap row
        lbl.textContent = r === 8 ? '* Lan' : '** Act';
        grid.appendChild(lbl);
        // fill cols 4-18 with dim empties
        for (let cc = 4; cc <= 18; cc++) {
          const em = document.createElement('div');
          em.className = 'ei-cell no-data';
          em.style.background = 'var(--surface2)';
          grid.appendChild(em);
        }
        break; // inner loop done for this row
      }

      if (!mainEl) {
        // Empty grid position (lanthanide/actinide gap in rows 6-7)
        const em = document.createElement('div');
        if (r >= 6 && c >= 4 && c <= 17) {
          em.className = 'ei-cell no-data gap-block';
          em.style.fontSize = '0.38em';
          em.textContent = r === 6 ? '* Lan' : '** Act';
        } else {
          em.className = 'ei-gap';
        }
        grid.appendChild(em);
        continue;
      }

      const z = mainEl.z;
      const ei = EI_DATA[z];
      const hasData = !!ei;
      const stateDot = hasData ? EI_STATE_COL[ei.state] || '#94a3b8' : 'transparent';
      const bgColor = hasData ? (EI_BLOCK_BG[ei.block] || 'var(--surface2)') : 'var(--surface2)';

      const cell = document.createElement('div');
      cell.className = 'ei-cell ' + (hasData ? 'has-data' : 'no-data');
      cell.style.background = bgColor;
      cell.style.gridRow = r <= 7 ? r : r + 1; // shift for gap row
      cell.dataset.z = z;

      // State dot
      const dot = document.createElement('div');
      dot.className = 'ei-state-dot';
      dot.style.background = stateDot;
      cell.appendChild(dot);

      // Atomic number
      const zEl = document.createElement('div');
      zEl.className = 'ei-z';
      zEl.textContent = z;
      cell.appendChild(zEl);

      // Symbol
      const sym = document.createElement('div');
      sym.className = 'ei-sym';
      sym.textContent = mainEl.sym;
      cell.appendChild(sym);

      if (hasData) {
        // Melting point
        const mp = document.createElement('div');
        mp.className = 'ei-mp';
        mp.textContent = ei.mp !== null ? ei.mp + '°' : '—';
        cell.appendChild(mp);

        // Boiling point
        const bp = document.createElement('div');
        bp.className = 'ei-bp';
        bp.textContent = ei.bp + '°';
        cell.appendChild(bp);

        // Density
        const dn = document.createElement('div');
        dn.className = 'ei-dens';
        const densVal = ei.dens < 0.01 ? ei.dens.toExponential(1) : ei.dens.toFixed(ei.dens < 1 ? 3 : 2);
        dn.textContent = densVal;
        cell.appendChild(dn);

        cell.addEventListener('click', () => showEIDetail(z));
      }

      grid.appendChild(cell);
    }
  }
}

// ── Detail panel ─────────────────────────────────────────────────
function showEIDetail(z) {
  const ei = EI_DATA[z];
  const mainEl = EI_ELMAP[z];
  if (!ei || !mainEl) return;

  // Highlight selected cell
  document.querySelectorAll('.ei-cell.selected').forEach(c => c.classList.remove('selected'));
  const sel = document.querySelector(`.ei-cell[data-z="${z}"]`);
  if (sel) sel.classList.add('selected');
  eiSelected = z;

  document.getElementById('eiDetailEmpty').style.display = 'none';
  const content = document.getElementById('eiDetailContent');
  content.style.display = 'block';

  const stateCol = EI_STATE_COL[ei.state] || '#94a3b8';
  const blockCol = {s:'#ef4444', p:'#22c55e', d:'#3b82f6', f:'#8b5cf6'}[ei.block] || '#94a3b8';
  const symColor = `color-mix(in srgb,${stateCol} 60%,var(--text))`;

  const mpStr  = ei.mp !== null ? ei.mp + ' °C' : '— (sublimes/decomposes)';
  const bpStr  = ei.bp + ' °C';
  const densStr = ei.dens < 0.01
    ? ei.dens.toExponential(3) + ' g/cm³'
    : ei.dens.toFixed(ei.dens < 1 ? 4 : 3) + ' g/cm³';

  // Fahrenheit conversions
  const toF = c => c !== null ? ((c * 9/5) + 32).toFixed(1) + ' °F' : '—';
  const mpF = toF(ei.mp);
  const bpF = toF(ei.bp);

  content.innerHTML = `
    <div class="ei-detail-hero">
      <div class="ei-detail-sym" style="color:${symColor};">${mainEl.sym}</div>
      <div class="ei-detail-meta">
        <div class="ei-detail-name">${mainEl.name}</div>
        <div class="ei-detail-z">Z = ${z} &nbsp;·&nbsp; ${mainEl.mass}</div>
        <div class="ei-detail-badges" style="margin-top:5px;">
          <span class="ei-badge" style="color:${stateCol};border-color:${stateCol};
            background:color-mix(in srgb,${stateCol} 15%,var(--surface2));">
            ${ei.state}
          </span>
          <span class="ei-badge" style="color:${blockCol};border-color:${blockCol};
            background:color-mix(in srgb,${blockCol} 15%,var(--surface2));">
            ${ei.block}-block
          </span>
          <span class="ei-badge" style="color:var(--text-muted);border-color:var(--border);
            background:var(--surface2);">
            Grp ${ei.group} · Per ${ei.period}
          </span>
        </div>
      </div>
    </div>

    <div class="ei-prop-grid">
      <div class="ei-prop" style="border-left:3px solid #f97316;grid-column:1/-1;">
        <div class="ei-prop-label" style="color:#f97316;">🌡 Melting Point</div>
        <div class="ei-prop-val">${mpStr}</div>
        <div class="ei-prop-unit">${mpF}</div>
      </div>
      <div class="ei-prop" style="border-left:3px solid #38bdf8;grid-column:1/-1;">
        <div class="ei-prop-label" style="color:#38bdf8;">💧 Boiling Point</div>
        <div class="ei-prop-val">${bpStr}</div>
        <div class="ei-prop-unit">${bpF}</div>
      </div>
      <div class="ei-prop" style="border-left:3px solid #a78bfa;grid-column:1/-1;">
        <div class="ei-prop-label" style="color:#a78bfa;">⚖ Density (STP)</div>
        <div class="ei-prop-val">${densStr}</div>
        <div class="ei-prop-unit">${ei.state === 'gas' ? 'at 0°C, 1 atm' : 'at room temp'}</div>
      </div>
    </div>

    <div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px;">
      <div style="font-family:'Space Mono',monospace;font-size:0.52rem;color:var(--text-muted);
        letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;">⚡ Quick Facts</div>
      <div style="font-size:0.72rem;line-height:1.8;color:var(--text);">
        <div>Block: <strong style="color:${blockCol};">${ei.block.toUpperCase()}-block</strong></div>
        <div>Standard state: <strong style="color:${stateCol};">${ei.state.charAt(0).toUpperCase()+ei.state.slice(1)}</strong> at 25°C</div>
        ${ei.mp !== null && ei.bp !== null
          ? `<div>Liquid range: <strong>${(ei.bp - ei.mp).toFixed(1)} °C</strong></div>`
          : ''}
        <div>Group: <strong>${ei.group}</strong> &nbsp; Period: <strong>${ei.period}</strong></div>
        <div>Config: <strong style="font-family:'Space Mono',monospace;font-size:0.65em;">${mainEl.config}</strong></div>
      </div>
    </div>

    <div class="ei-caption">
      Source: NIST WebBook / elements_cards_v3.json
    </div>
  `;
}

// ── Open / Close wiring ──────────────────────────────────────────
document.getElementById('btnExtraInfo').addEventListener('click', () => {
  buildEIGrid();
  document.getElementById('eiOverlay').classList.add('open');
});

document.getElementById('eiClose').addEventListener('click', () => {
  document.getElementById('eiOverlay').classList.remove('open');
});

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('eiOverlay').classList.remove('open');
  }
});

