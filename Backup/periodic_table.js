// ─── ELEMENT DATA ──────────────────────────────────────────────────
const ELEMENTS = [
  {z:1, sym:"H", name:"Hydrogen", mass:1.008, cat:"nonmetal", row:1, col:1,
   melt:"-259.16°C", boil:"-252.88°C", eneg:"2.20", radius:"53 pm",
   config:"1s¹", state:"Gas", year:"1766", group:"1", period:"1"},
  {z:2, sym:"He", name:"Helium", mass:4.003, cat:"noble-gas", row:1, col:18,
   melt:"—", boil:"-268.93°C", eneg:"—", radius:"31 pm",
   config:"1s²", state:"Gas", year:"1868", group:"18", period:"1"},
  {z:3, sym:"Li", name:"Lithium", mass:6.941, cat:"alkali", row:2, col:1,
   melt:"180.54°C", boil:"1342°C", eneg:"0.98", radius:"167 pm",
   config:"[He] 2s¹", state:"Solid", year:"1817", group:"1", period:"2"},
  {z:4, sym:"Be", name:"Beryllium", mass:9.012, cat:"alkali-earth", row:2, col:2,
   melt:"1287°C", boil:"2469°C", eneg:"1.57", radius:"112 pm",
   config:"[He] 2s²", state:"Solid", year:"1798", group:"2", period:"2"},
  {z:5, sym:"B", name:"Boron", mass:10.811, cat:"metalloid", row:2, col:13,
   melt:"2076°C", boil:"3927°C", eneg:"2.04", radius:"87 pm",
   config:"[He] 2s² 2p¹", state:"Solid", year:"1808", group:"13", period:"2"},
  {z:6, sym:"C", name:"Carbon", mass:12.011, cat:"nonmetal", row:2, col:14,
   melt:"3642°C", boil:"3642°C", eneg:"2.55", radius:"67 pm",
   config:"[He] 2s² 2p²", state:"Solid", year:"ancient", group:"14", period:"2"},
  {z:7, sym:"N", name:"Nitrogen", mass:14.007, cat:"nonmetal", row:2, col:15,
   melt:"-210.01°C", boil:"-195.79°C", eneg:"3.04", radius:"56 pm",
   config:"[He] 2s² 2p³", state:"Gas", year:"1772", group:"15", period:"2"},
  {z:8, sym:"O", name:"Oxygen", mass:15.999, cat:"nonmetal", row:2, col:16,
   melt:"-218.79°C", boil:"-182.96°C", eneg:"3.44", radius:"48 pm",
   config:"[He] 2s² 2p⁴", state:"Gas", year:"1774", group:"16", period:"2"},
  {z:9, sym:"F", name:"Fluorine", mass:18.998, cat:"halogen", row:2, col:17,
   melt:"-219.67°C", boil:"-188.11°C", eneg:"3.98", radius:"42 pm",
   config:"[He] 2s² 2p⁵", state:"Gas", year:"1886", group:"17", period:"2"},
  {z:10, sym:"Ne", name:"Neon", mass:20.18, cat:"noble-gas", row:2, col:18,
   melt:"-248.59°C", boil:"-246.05°C", eneg:"—", radius:"38 pm",
   config:"[He] 2s² 2p⁶", state:"Gas", year:"1898", group:"18", period:"2"},
  {z:11, sym:"Na", name:"Sodium", mass:22.99, cat:"alkali", row:3, col:1,
   melt:"97.72°C", boil:"883°C", eneg:"0.93", radius:"190 pm",
   config:"[Ne] 3s¹", state:"Solid", year:"1807", group:"1", period:"3"},
  {z:12, sym:"Mg", name:"Magnesium", mass:24.305, cat:"alkali-earth", row:3, col:2,
   melt:"650°C", boil:"1090°C", eneg:"1.31", radius:"145 pm",
   config:"[Ne] 3s²", state:"Solid", year:"1755", group:"2", period:"3"},
  {z:13, sym:"Al", name:"Aluminum", mass:26.982, cat:"post-trans", row:3, col:13,
   melt:"660.32°C", boil:"2519°C", eneg:"1.61", radius:"118 pm",
   config:"[Ne] 3s² 3p¹", state:"Solid", year:"1825", group:"13", period:"3"},
  {z:14, sym:"Si", name:"Silicon", mass:28.086, cat:"metalloid", row:3, col:14,
   melt:"1414°C", boil:"3265°C", eneg:"1.90", radius:"111 pm",
   config:"[Ne] 3s² 3p²", state:"Solid", year:"1824", group:"14", period:"3"},
  {z:15, sym:"P", name:"Phosphorus", mass:30.974, cat:"nonmetal", row:3, col:15,
   melt:"44.15°C", boil:"280.5°C", eneg:"2.19", radius:"98 pm",
   config:"[Ne] 3s² 3p³", state:"Solid", year:"1669", group:"15", period:"3"},
  {z:16, sym:"S", name:"Sulfur", mass:32.06, cat:"nonmetal", row:3, col:16,
   melt:"115.21°C", boil:"444.72°C", eneg:"2.58", radius:"88 pm",
   config:"[Ne] 3s² 3p⁴", state:"Solid", year:"ancient", group:"16", period:"3"},
  {z:17, sym:"Cl", name:"Chlorine", mass:35.45, cat:"halogen", row:3, col:17,
   melt:"-101.5°C", boil:"-34.04°C", eneg:"3.16", radius:"79 pm",
   config:"[Ne] 3s² 3p⁵", state:"Gas", year:"1774", group:"17", period:"3"},
  {z:18, sym:"Ar", name:"Argon", mass:39.948, cat:"noble-gas", row:3, col:18,
   melt:"-189.35°C", boil:"-185.85°C", eneg:"—", radius:"71 pm",
   config:"[Ne] 3s² 3p⁶", state:"Gas", year:"1894", group:"18", period:"3"},
  {z:19, sym:"K", name:"Potassium", mass:39.098, cat:"alkali", row:4, col:1,
   melt:"63.38°C", boil:"759°C", eneg:"0.82", radius:"243 pm",
   config:"[Ar] 4s¹", state:"Solid", year:"1807", group:"1", period:"4"},
  {z:20, sym:"Ca", name:"Calcium", mass:40.078, cat:"alkali-earth", row:4, col:2,
   melt:"842°C", boil:"1484°C", eneg:"1.00", radius:"194 pm",
   config:"[Ar] 4s²", state:"Solid", year:"1808", group:"2", period:"4"},
  {z:21, sym:"Sc", name:"Scandium", mass:44.956, cat:"transition", row:4, col:3,
   melt:"1541°C", boil:"2836°C", eneg:"1.36", radius:"184 pm",
   config:"[Ar] 3d¹ 4s²", state:"Solid", year:"1879", group:"3", period:"4"},
  {z:22, sym:"Ti", name:"Titanium", mass:47.867, cat:"transition", row:4, col:4,
   melt:"1668°C", boil:"3287°C", eneg:"1.54", radius:"176 pm",
   config:"[Ar] 3d² 4s²", state:"Solid", year:"1791", group:"4", period:"4"},
  {z:23, sym:"V", name:"Vanadium", mass:50.942, cat:"transition", row:4, col:5,
   melt:"1910°C", boil:"3407°C", eneg:"1.63", radius:"171 pm",
   config:"[Ar] 3d³ 4s²", state:"Solid", year:"1801", group:"5", period:"4"},
  {z:24, sym:"Cr", name:"Chromium", mass:51.996, cat:"transition", row:4, col:6,
   melt:"1907°C", boil:"2671°C", eneg:"1.66", radius:"166 pm",
   config:"[Ar] 3d⁵ 4s¹", state:"Solid", year:"1798", group:"6", period:"4"},
  {z:25, sym:"Mn", name:"Manganese", mass:54.938, cat:"transition", row:4, col:7,
   melt:"1246°C", boil:"2061°C", eneg:"1.55", radius:"161 pm",
   config:"[Ar] 3d⁵ 4s²", state:"Solid", year:"1774", group:"7", period:"4"},
  {z:26, sym:"Fe", name:"Iron", mass:55.845, cat:"transition", row:4, col:8,
   melt:"1538°C", boil:"2861°C", eneg:"1.83", radius:"156 pm",
   config:"[Ar] 3d⁶ 4s²", state:"Solid", year:"ancient", group:"8", period:"4"},
  {z:27, sym:"Co", name:"Cobalt", mass:58.933, cat:"transition", row:4, col:9,
   melt:"1495°C", boil:"2927°C", eneg:"1.88", radius:"152 pm",
   config:"[Ar] 3d⁷ 4s²", state:"Solid", year:"1735", group:"9", period:"4"},
  {z:28, sym:"Ni", name:"Nickel", mass:58.693, cat:"transition", row:4, col:10,
   melt:"1455°C", boil:"2913°C", eneg:"1.91", radius:"149 pm",
   config:"[Ar] 3d⁸ 4s²", state:"Solid", year:"1751", group:"10", period:"4"},
  {z:29, sym:"Cu", name:"Copper", mass:63.546, cat:"transition", row:4, col:11,
   melt:"1084.62°C", boil:"2562°C", eneg:"1.90", radius:"145 pm",
   config:"[Ar] 3d¹⁰ 4s¹", state:"Solid", year:"ancient", group:"11", period:"4"},
  {z:30, sym:"Zn", name:"Zinc", mass:65.38, cat:"transition", row:4, col:12,
   melt:"419.53°C", boil:"907°C", eneg:"1.65", radius:"142 pm",
   config:"[Ar] 3d¹⁰ 4s²", state:"Solid", year:"ancient", group:"12", period:"4"},
  {z:31, sym:"Ga", name:"Gallium", mass:69.723, cat:"post-trans", row:4, col:13,
   melt:"29.76°C", boil:"2204°C", eneg:"1.81", radius:"136 pm",
   config:"[Ar] 3d¹⁰ 4s² 4p¹", state:"Solid", year:"1875", group:"13", period:"4"},
  {z:32, sym:"Ge", name:"Germanium", mass:72.63, cat:"metalloid", row:4, col:14,
   melt:"938.25°C", boil:"2833°C", eneg:"2.01", radius:"125 pm",
   config:"[Ar] 3d¹⁰ 4s² 4p²", state:"Solid", year:"1886", group:"14", period:"4"},
  {z:33, sym:"As", name:"Arsenic", mass:74.922, cat:"metalloid", row:4, col:15,
   melt:"816.8°C", boil:"614°C", eneg:"2.18", radius:"114 pm",
   config:"[Ar] 3d¹⁰ 4s² 4p³", state:"Solid", year:"ancient", group:"15", period:"4"},
  {z:34, sym:"Se", name:"Selenium", mass:78.971, cat:"nonmetal", row:4, col:16,
   melt:"220.8°C", boil:"685°C", eneg:"2.55", radius:"103 pm",
   config:"[Ar] 3d¹⁰ 4s² 4p⁴", state:"Solid", year:"1817", group:"16", period:"4"},
  {z:35, sym:"Br", name:"Bromine", mass:79.904, cat:"halogen", row:4, col:17,
   melt:"-7.2°C", boil:"58.8°C", eneg:"2.96", radius:"94 pm",
   config:"[Ar] 3d¹⁰ 4s² 4p⁵", state:"Liquid", year:"1826", group:"17", period:"4"},
  {z:36, sym:"Kr", name:"Krypton", mass:83.798, cat:"noble-gas", row:4, col:18,
   melt:"-157.38°C", boil:"-153.22°C", eneg:"3.00", radius:"88 pm",
   config:"[Ar] 3d¹⁰ 4s² 4p⁶", state:"Gas", year:"1898", group:"18", period:"4"},
  {z:37, sym:"Rb", name:"Rubidium", mass:85.468, cat:"alkali", row:5, col:1,
   melt:"39.31°C", boil:"688°C", eneg:"0.82", radius:"265 pm",
   config:"[Kr] 5s¹", state:"Solid", year:"1861", group:"1", period:"5"},
  {z:38, sym:"Sr", name:"Strontium", mass:87.62, cat:"alkali-earth", row:5, col:2,
   melt:"777°C", boil:"1382°C", eneg:"0.95", radius:"219 pm",
   config:"[Kr] 5s²", state:"Solid", year:"1790", group:"2", period:"5"},
  {z:39, sym:"Y", name:"Yttrium", mass:88.906, cat:"transition", row:5, col:3,
   melt:"1522°C", boil:"3338°C", eneg:"1.22", radius:"212 pm",
   config:"[Kr] 4d¹ 5s²", state:"Solid", year:"1794", group:"3", period:"5"},
  {z:40, sym:"Zr", name:"Zirconium", mass:91.224, cat:"transition", row:5, col:4,
   melt:"1855°C", boil:"4409°C", eneg:"1.33", radius:"206 pm",
   config:"[Kr] 4d² 5s²", state:"Solid", year:"1789", group:"4", period:"5"},
  {z:41, sym:"Nb", name:"Niobium", mass:92.906, cat:"transition", row:5, col:5,
   melt:"2477°C", boil:"4744°C", eneg:"1.6", radius:"198 pm",
   config:"[Kr] 4d⁴ 5s¹", state:"Solid", year:"1801", group:"5", period:"5"},
  {z:42, sym:"Mo", name:"Molybdenum", mass:95.96, cat:"transition", row:5, col:6,
   melt:"2623°C", boil:"4639°C", eneg:"2.16", radius:"190 pm",
   config:"[Kr] 4d⁵ 5s¹", state:"Solid", year:"1778", group:"6", period:"5"},
  {z:43, sym:"Tc", name:"Technetium", mass:98, cat:"transition", row:5, col:7,
   melt:"2157°C", boil:"4265°C", eneg:"1.9", radius:"183 pm",
   config:"[Kr] 4d⁵ 5s²", state:"Solid", year:"1937", group:"7", period:"5"},
  {z:44, sym:"Ru", name:"Ruthenium", mass:101.07, cat:"transition", row:5, col:8,
   melt:"2334°C", boil:"4150°C", eneg:"2.2", radius:"178 pm",
   config:"[Kr] 4d⁷ 5s¹", state:"Solid", year:"1844", group:"8", period:"5"},
  {z:45, sym:"Rh", name:"Rhodium", mass:102.906, cat:"transition", row:5, col:9,
   melt:"1964°C", boil:"3695°C", eneg:"2.28", radius:"173 pm",
   config:"[Kr] 4d⁸ 5s¹", state:"Solid", year:"1803", group:"9", period:"5"},
  {z:46, sym:"Pd", name:"Palladium", mass:106.42, cat:"transition", row:5, col:10,
   melt:"1554.9°C", boil:"2963°C", eneg:"2.20", radius:"169 pm",
   config:"[Kr] 4d¹⁰", state:"Solid", year:"1803", group:"10", period:"5"},
  {z:47, sym:"Ag", name:"Silver", mass:107.868, cat:"transition", row:5, col:11,
   melt:"961.78°C", boil:"2162°C", eneg:"1.93", radius:"165 pm",
   config:"[Kr] 4d¹⁰ 5s¹", state:"Solid", year:"ancient", group:"11", period:"5"},
  {z:48, sym:"Cd", name:"Cadmium", mass:112.411, cat:"transition", row:5, col:12,
   melt:"321.07°C", boil:"767°C", eneg:"1.69", radius:"161 pm",
   config:"[Kr] 4d¹⁰ 5s²", state:"Solid", year:"1817", group:"12", period:"5"},
  {z:49, sym:"In", name:"Indium", mass:114.818, cat:"post-trans", row:5, col:13,
   melt:"156.6°C", boil:"2072°C", eneg:"1.78", radius:"156 pm",
   config:"[Kr] 4d¹⁰ 5s² 5p¹", state:"Solid", year:"1863", group:"13", period:"5"},
  {z:50, sym:"Sn", name:"Tin", mass:118.71, cat:"post-trans", row:5, col:14,
   melt:"231.93°C", boil:"2602°C", eneg:"1.96", radius:"145 pm",
   config:"[Kr] 4d¹⁰ 5s² 5p²", state:"Solid", year:"ancient", group:"14", period:"5"},
  {z:51, sym:"Sb", name:"Antimony", mass:121.76, cat:"metalloid", row:5, col:15,
   melt:"630.63°C", boil:"1587°C", eneg:"2.05", radius:"133 pm",
   config:"[Kr] 4d¹⁰ 5s² 5p³", state:"Solid", year:"ancient", group:"15", period:"5"},
  {z:52, sym:"Te", name:"Tellurium", mass:127.6, cat:"metalloid", row:5, col:16,
   melt:"449.51°C", boil:"988°C", eneg:"2.1", radius:"123 pm",
   config:"[Kr] 4d¹⁰ 5s² 5p⁴", state:"Solid", year:"1782", group:"16", period:"5"},
  {z:53, sym:"I", name:"Iodine", mass:126.904, cat:"halogen", row:5, col:17,
   melt:"113.7°C", boil:"184.3°C", eneg:"2.66", radius:"115 pm",
   config:"[Kr] 4d¹⁰ 5s² 5p⁵", state:"Solid", year:"1811", group:"17", period:"5"},
  {z:54, sym:"Xe", name:"Xenon", mass:131.293, cat:"noble-gas", row:5, col:18,
   melt:"-111.75°C", boil:"-108.12°C", eneg:"2.60", radius:"108 pm",
   config:"[Kr] 4d¹⁰ 5s² 5p⁶", state:"Gas", year:"1898", group:"18", period:"5"},
  {z:55, sym:"Cs", name:"Cesium", mass:132.905, cat:"alkali", row:6, col:1,
   melt:"28.44°C", boil:"671°C", eneg:"0.79", radius:"298 pm",
   config:"[Xe] 6s¹", state:"Solid", year:"1860", group:"1", period:"6"},
  {z:56, sym:"Ba", name:"Barium", mass:137.327, cat:"alkali-earth", row:6, col:2,
   melt:"727°C", boil:"1897°C", eneg:"0.89", radius:"253 pm",
   config:"[Xe] 6s²", state:"Solid", year:"1808", group:"2", period:"6"},
  {z:57, sym:"La", name:"Lanthanum", mass:138.905, cat:"lanthanide", row:6, col:3,
   melt:"920°C", boil:"3464°C", eneg:"1.10", radius:"195 pm",
   config:"[Xe] 5d¹ 6s²", state:"Solid", year:"1839", group:"3", period:"6"},
  {z:58, sym:"Ce", name:"Cerium", mass:140.116, cat:"lanthanide", row:8, col:4,
   melt:"798°C", boil:"3443°C", eneg:"1.12", radius:"185 pm",
   config:"[Xe] 4f¹ 5d¹ 6s²", state:"Solid", year:"1803", group:"—", period:"6"},
  {z:59, sym:"Pr", name:"Praseodymium", mass:140.908, cat:"lanthanide", row:8, col:5,
   melt:"931°C", boil:"3520°C", eneg:"1.13", radius:"185 pm",
   config:"[Xe] 4f³ 6s²", state:"Solid", year:"1885", group:"—", period:"6"},
  {z:60, sym:"Nd", name:"Neodymium", mass:144.242, cat:"lanthanide", row:8, col:6,
   melt:"1021°C", boil:"3074°C", eneg:"1.14", radius:"185 pm",
   config:"[Xe] 4f⁴ 6s²", state:"Solid", year:"1885", group:"—", period:"6"},
  {z:61, sym:"Pm", name:"Promethium", mass:145, cat:"lanthanide", row:8, col:7,
   melt:"1042°C", boil:"3000°C", eneg:"1.13", radius:"185 pm",
   config:"[Xe] 4f⁵ 6s²", state:"Solid", year:"1945", group:"—", period:"6"},
  {z:62, sym:"Sm", name:"Samarium", mass:150.36, cat:"lanthanide", row:8, col:8,
   melt:"1072°C", boil:"1900°C", eneg:"1.17", radius:"185 pm",
   config:"[Xe] 4f⁶ 6s²", state:"Solid", year:"1879", group:"—", period:"6"},
  {z:63, sym:"Eu", name:"Europium", mass:151.964, cat:"lanthanide", row:8, col:9,
   melt:"822°C", boil:"1596°C", eneg:"1.2", radius:"185 pm",
   config:"[Xe] 4f⁷ 6s²", state:"Solid", year:"1901", group:"—", period:"6"},
  {z:64, sym:"Gd", name:"Gadolinium", mass:157.25, cat:"lanthanide", row:8, col:10,
   melt:"1313°C", boil:"3273°C", eneg:"1.20", radius:"180 pm",
   config:"[Xe] 4f⁷ 5d¹ 6s²", state:"Solid", year:"1880", group:"—", period:"6"},
  {z:65, sym:"Tb", name:"Terbium", mass:158.925, cat:"lanthanide", row:8, col:11,
   melt:"1356°C", boil:"3230°C", eneg:"1.2", radius:"175 pm",
   config:"[Xe] 4f⁹ 6s²", state:"Solid", year:"1843", group:"—", period:"6"},
  {z:66, sym:"Dy", name:"Dysprosium", mass:162.5, cat:"lanthanide", row:8, col:12,
   melt:"1412°C", boil:"2567°C", eneg:"1.22", radius:"175 pm",
   config:"[Xe] 4f¹⁰ 6s²", state:"Solid", year:"1886", group:"—", period:"6"},
  {z:67, sym:"Ho", name:"Holmium", mass:164.93, cat:"lanthanide", row:8, col:13,
   melt:"1474°C", boil:"2700°C", eneg:"1.23", radius:"175 pm",
   config:"[Xe] 4f¹¹ 6s²", state:"Solid", year:"1878", group:"—", period:"6"},
  {z:68, sym:"Er", name:"Erbium", mass:167.259, cat:"lanthanide", row:8, col:14,
   melt:"1529°C", boil:"2868°C", eneg:"1.24", radius:"175 pm",
   config:"[Xe] 4f¹² 6s²", state:"Solid", year:"1843", group:"—", period:"6"},
  {z:69, sym:"Tm", name:"Thulium", mass:168.934, cat:"lanthanide", row:8, col:15,
   melt:"1545°C", boil:"1950°C", eneg:"1.25", radius:"175 pm",
   config:"[Xe] 4f¹³ 6s²", state:"Solid", year:"1879", group:"—", period:"6"},
  {z:70, sym:"Yb", name:"Ytterbium", mass:173.054, cat:"lanthanide", row:8, col:16,
   melt:"819°C", boil:"1196°C", eneg:"1.1", radius:"175 pm",
   config:"[Xe] 4f¹⁴ 6s²", state:"Solid", year:"1878", group:"—", period:"6"},
  {z:71, sym:"Lu", name:"Lutetium", mass:174.967, cat:"lanthanide", row:8, col:17,
   melt:"1663°C", boil:"3402°C", eneg:"1.27", radius:"175 pm",
   config:"[Xe] 4f¹⁴ 5d¹ 6s²", state:"Solid", year:"1907", group:"3", period:"6"},
  {z:72, sym:"Hf", name:"Hafnium", mass:178.49, cat:"transition", row:6, col:4,
   melt:"2233°C", boil:"4603°C", eneg:"1.3", radius:"187 pm",
   config:"[Xe] 4f¹⁴ 5d² 6s²", state:"Solid", year:"1923", group:"4", period:"6"},
  {z:73, sym:"Ta", name:"Tantalum", mass:180.948, cat:"transition", row:6, col:5,
   melt:"3017°C", boil:"5458°C", eneg:"1.5", radius:"170 pm",
   config:"[Xe] 4f¹⁴ 5d³ 6s²", state:"Solid", year:"1802", group:"5", period:"6"},
  {z:74, sym:"W", name:"Tungsten", mass:183.84, cat:"transition", row:6, col:6,
   melt:"3422°C", boil:"5555°C", eneg:"2.36", radius:"162 pm",
   config:"[Xe] 4f¹⁴ 5d⁴ 6s²", state:"Solid", year:"1783", group:"6", period:"6"},
  {z:75, sym:"Re", name:"Rhenium", mass:186.207, cat:"transition", row:6, col:7,
   melt:"3186°C", boil:"5596°C", eneg:"1.9", radius:"151 pm",
   config:"[Xe] 4f¹⁴ 5d⁵ 6s²", state:"Solid", year:"1925", group:"7", period:"6"},
  {z:76, sym:"Os", name:"Osmium", mass:190.23, cat:"transition", row:6, col:8,
   melt:"3033°C", boil:"5012°C", eneg:"2.2", radius:"144 pm",
   config:"[Xe] 4f¹⁴ 5d⁶ 6s²", state:"Solid", year:"1803", group:"8", period:"6"},
  {z:77, sym:"Ir", name:"Iridium", mass:192.217, cat:"transition", row:6, col:9,
   melt:"2446°C", boil:"4428°C", eneg:"2.20", radius:"141 pm",
   config:"[Xe] 4f¹⁴ 5d⁷ 6s²", state:"Solid", year:"1803", group:"9", period:"6"},
  {z:78, sym:"Pt", name:"Platinum", mass:195.084, cat:"transition", row:6, col:10,
   melt:"1768.3°C", boil:"3825°C", eneg:"2.28", radius:"135 pm",
   config:"[Xe] 4f¹⁴ 5d⁹ 6s¹", state:"Solid", year:"1735", group:"10", period:"6"},
  {z:79, sym:"Au", name:"Gold", mass:196.967, cat:"transition", row:6, col:11,
   melt:"1064.18°C", boil:"2856°C", eneg:"2.54", radius:"135 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹", state:"Solid", year:"ancient", group:"11", period:"6"},
  {z:80, sym:"Hg", name:"Mercury", mass:200.592, cat:"transition", row:6, col:12,
   melt:"-38.83°C", boil:"356.73°C", eneg:"2.00", radius:"150 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²", state:"Liquid", year:"ancient", group:"12", period:"6"},
  {z:81, sym:"Tl", name:"Thallium", mass:204.383, cat:"post-trans", row:6, col:13,
   melt:"304°C", boil:"1473°C", eneg:"1.62", radius:"190 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", state:"Solid", year:"1861", group:"13", period:"6"},
  {z:82, sym:"Pb", name:"Lead", mass:207.2, cat:"post-trans", row:6, col:14,
   melt:"327.46°C", boil:"1749°C", eneg:"2.33", radius:"180 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", state:"Solid", year:"ancient", group:"14", period:"6"},
  {z:83, sym:"Bi", name:"Bismuth", mass:208.98, cat:"post-trans", row:6, col:15,
   melt:"271.5°C", boil:"1564°C", eneg:"2.02", radius:"160 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", state:"Solid", year:"ancient", group:"15", period:"6"},
  {z:84, sym:"Po", name:"Polonium", mass:209, cat:"post-trans", row:6, col:16,
   melt:"254°C", boil:"962°C", eneg:"2.0", radius:"190 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", state:"Solid", year:"1898", group:"16", period:"6"},
  {z:85, sym:"At", name:"Astatine", mass:210, cat:"halogen", row:6, col:17,
   melt:"302°C", boil:"337°C", eneg:"2.2", radius:"127 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", state:"Solid", year:"1940", group:"17", period:"6"},
  {z:86, sym:"Rn", name:"Radon", mass:222, cat:"noble-gas", row:6, col:18,
   melt:"-71°C", boil:"-61.7°C", eneg:"2.2", radius:"120 pm",
   config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", state:"Gas", year:"1900", group:"18", period:"6"},
  {z:87, sym:"Fr", name:"Francium", mass:223, cat:"alkali", row:7, col:1,
   melt:"27°C", boil:"677°C", eneg:"0.7", radius:"348 pm",
   config:"[Rn] 7s¹", state:"Solid", year:"1939", group:"1", period:"7"},
  {z:88, sym:"Ra", name:"Radium", mass:226, cat:"alkali-earth", row:7, col:2,
   melt:"696°C", boil:"1737°C", eneg:"0.9", radius:"283 pm",
   config:"[Rn] 7s²", state:"Solid", year:"1898", group:"2", period:"7"},
  {z:89, sym:"Ac", name:"Actinium", mass:227, cat:"actinide", row:7, col:3,
   melt:"1051°C", boil:"3198°C", eneg:"1.1", radius:"195 pm",
   config:"[Rn] 6d¹ 7s²", state:"Solid", year:"1899", group:"3", period:"7"},
  {z:90, sym:"Th", name:"Thorium", mass:232.038, cat:"actinide", row:9, col:4,
   melt:"1750°C", boil:"4788°C", eneg:"1.3", radius:"180 pm",
   config:"[Rn] 6d² 7s²", state:"Solid", year:"1829", group:"—", period:"7"},
  {z:91, sym:"Pa", name:"Protactinium", mass:231.036, cat:"actinide", row:9, col:5,
   melt:"1572°C", boil:"4000°C", eneg:"1.5", radius:"163 pm",
   config:"[Rn] 5f² 6d¹ 7s²", state:"Solid", year:"1913", group:"—", period:"7"},
  {z:92, sym:"U", name:"Uranium", mass:238.029, cat:"actinide", row:9, col:6,
   melt:"1135°C", boil:"4131°C", eneg:"1.38", radius:"156 pm",
   config:"[Rn] 5f³ 6d¹ 7s²", state:"Solid", year:"1789", group:"—", period:"7"},
  {z:93, sym:"Np", name:"Neptunium", mass:237, cat:"actinide", row:9, col:7,
   melt:"644°C", boil:"4000°C", eneg:"1.36", radius:"155 pm",
   config:"[Rn] 5f⁴ 6d¹ 7s²", state:"Solid", year:"1940", group:"—", period:"7"},
  {z:94, sym:"Pu", name:"Plutonium", mass:244, cat:"actinide", row:9, col:8,
   melt:"639.4°C", boil:"3228°C", eneg:"1.28", radius:"159 pm",
   config:"[Rn] 5f⁶ 7s²", state:"Solid", year:"1940", group:"—", period:"7"},
  {z:95, sym:"Am", name:"Americium", mass:243, cat:"actinide", row:9, col:9,
   melt:"1176°C", boil:"2607°C", eneg:"1.3", radius:"173 pm",
   config:"[Rn] 5f⁷ 7s²", state:"Solid", year:"1944", group:"—", period:"7"},
  {z:96, sym:"Cm", name:"Curium", mass:247, cat:"actinide", row:9, col:10,
   melt:"1345°C", boil:"3110°C", eneg:"1.3", radius:"174 pm",
   config:"[Rn] 5f⁷ 6d¹ 7s²", state:"Solid", year:"1944", group:"—", period:"7"},
  {z:97, sym:"Bk", name:"Berkelium", mass:247, cat:"actinide", row:9, col:11,
   melt:"1050°C", boil:"—", eneg:"1.3", radius:"170 pm",
   config:"[Rn] 5f⁹ 7s²", state:"Solid", year:"1949", group:"—", period:"7"},
  {z:98, sym:"Cf", name:"Californium", mass:251, cat:"actinide", row:9, col:12,
   melt:"900°C", boil:"—", eneg:"1.3", radius:"168 pm",
   config:"[Rn] 5f¹⁰ 7s²", state:"Solid", year:"1950", group:"—", period:"7"},
  {z:99, sym:"Es", name:"Einsteinium", mass:252, cat:"actinide", row:9, col:13,
   melt:"860°C", boil:"—", eneg:"1.3", radius:"165 pm",
   config:"[Rn] 5f¹¹ 7s²", state:"Solid", year:"1952", group:"—", period:"7"},
  {z:100, sym:"Fm", name:"Fermium", mass:257, cat:"actinide", row:9, col:14,
   melt:"1527°C", boil:"—", eneg:"1.3", radius:"—",
   config:"[Rn] 5f¹² 7s²", state:"Solid", year:"1952", group:"—", period:"7"},
  {z:101, sym:"Md", name:"Mendelevium", mass:258, cat:"actinide", row:9, col:15,
   melt:"827°C", boil:"—", eneg:"1.3", radius:"—",
   config:"[Rn] 5f¹³ 7s²", state:"Solid", year:"1955", group:"—", period:"7"},
  {z:102, sym:"No", name:"Nobelium", mass:259, cat:"actinide", row:9, col:16,
   melt:"827°C", boil:"—", eneg:"1.3", radius:"—",
   config:"[Rn] 5f¹⁴ 7s²", state:"Solid", year:"1958", group:"—", period:"7"},
  {z:103, sym:"Lr", name:"Lawrencium", mass:262, cat:"actinide", row:9, col:17,
   melt:"1627°C", boil:"—", eneg:"1.3", radius:"—",
   config:"[Rn] 5f¹⁴ 7s² 7p¹", state:"Solid", year:"1961", group:"3", period:"7"},
  {z:104, sym:"Rf", name:"Rutherfordium", mass:267, cat:"transition", row:7, col:4,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d² 7s²", state:"Solid", year:"1969", group:"4", period:"7"},
  {z:105, sym:"Db", name:"Dubnium", mass:268, cat:"transition", row:7, col:5,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d³ 7s²", state:"Solid", year:"1970", group:"5", period:"7"},
  {z:106, sym:"Sg", name:"Seaborgium", mass:271, cat:"transition", row:7, col:6,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d⁴ 7s²", state:"Solid", year:"1974", group:"6", period:"7"},
  {z:107, sym:"Bh", name:"Bohrium", mass:272, cat:"transition", row:7, col:7,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d⁵ 7s²", state:"Solid", year:"1981", group:"7", period:"7"},
  {z:108, sym:"Hs", name:"Hassium", mass:270, cat:"transition", row:7, col:8,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d⁶ 7s²", state:"Solid", year:"1984", group:"8", period:"7"},
  {z:109, sym:"Mt", name:"Meitnerium", mass:276, cat:"transition", row:7, col:9,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d⁷ 7s²", state:"Solid", year:"1982", group:"9", period:"7"},
  {z:110, sym:"Ds", name:"Darmstadtium", mass:281, cat:"transition", row:7, col:10,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d⁸ 7s²", state:"Solid", year:"1994", group:"10", period:"7"},
  {z:111, sym:"Rg", name:"Roentgenium", mass:282, cat:"transition", row:7, col:11,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d⁹ 7s²", state:"Solid", year:"1994", group:"11", period:"7"},
  {z:112, sym:"Cn", name:"Copernicium", mass:285, cat:"transition", row:7, col:12,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s²", state:"Gas", year:"1996", group:"12", period:"7"},
  {z:113, sym:"Nh", name:"Nihonium", mass:286, cat:"post-trans", row:7, col:13,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", state:"Solid", year:"2004", group:"13", period:"7"},
  {z:114, sym:"Fl", name:"Flerovium", mass:289, cat:"post-trans", row:7, col:14,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", state:"Solid", year:"1999", group:"14", period:"7"},
  {z:115, sym:"Mc", name:"Moscovium", mass:290, cat:"post-trans", row:7, col:15,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", state:"Solid", year:"2003", group:"15", period:"7"},
  {z:116, sym:"Lv", name:"Livermorium", mass:293, cat:"post-trans", row:7, col:16,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", state:"Solid", year:"2000", group:"16", period:"7"},
  {z:117, sym:"Ts", name:"Tennessine", mass:294, cat:"halogen", row:7, col:17,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", state:"Solid", year:"2010", group:"17", period:"7"},
  {z:118, sym:"Og", name:"Oganesson", mass:294, cat:"noble-gas", row:7, col:18,
   melt:"—", boil:"—", eneg:"—", radius:"—",
   config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", state:"Solid", year:"2002", group:"18", period:"7"},
];

const CAT_COLORS = {
  "alkali":       "var(--c-alkali)",
  "alkali-earth": "var(--c-alkali-earth)",
  "transition":   "var(--c-transition)",
  "post-trans":   "var(--c-post)",
  "metalloid":    "var(--c-metalloid)",
  "nonmetal":     "var(--c-nonmetal)",
  "halogen":      "var(--c-halogen)",
  "noble-gas":    "var(--c-noble)",
  "lanthanide":   "var(--c-lanthanide)",
  "actinide":     "var(--c-actinide)",
};

const CAT_LABELS = {
  "alkali":       "Alkali Metal",
  "alkali-earth": "Alkaline Earth Metal",
  "transition":   "Transition Metal",
  "post-trans":   "Post-Transition Metal",
  "metalloid":    "Metalloid",
  "nonmetal":     "Nonmetal",
  "halogen":      "Halogen",
  "noble-gas":    "Noble Gas",
  "lanthanide":   "Lanthanide",
  "actinide":     "Actinide",
};

// ─── BUILD GRID ───────────────────────────────────────────────────
function buildGrid() {
  const grid = document.getElementById("ptGrid");

  // Create a 9-row (rows 1-7 + gap + 8-9) x 18-col map
  // We'll use CSS grid-row and grid-column placement

  // Map elements by their position
  // Rows 1-7 = main table rows
  // Row 8 = lanthanide series
  // Row 9 = actinide series

  // Place elements
  ELEMENTS.forEach(el => {
    const cell = document.createElement("div");
    cell.className = `el ${el.cat}`;

    // Determine actual grid row
    let gridRow = el.row;
    // f-block elements displayed below (rows 8 and 9 in data)
    // We'll add spacer rows between row 7 and row 8

    cell.style.gridRow = gridRow;
    cell.style.gridColumn = el.col;

    cell.innerHTML = `
      <div class="atomic-num">${el.z}</div>
      <div class="symbol">${el.sym}</div>
      <div class="mass">${el.mass}</div>
    `;

    cell.addEventListener("click", () => openModal(el));
    grid.appendChild(cell);
  });

  // Add the Lanthanide/Actinide gap blocks in rows 6 and 7, cols 4-17
  // These are placeholders showing * and **
  const lanGap = document.createElement("div");
  lanGap.style.gridRow = 6;
  lanGap.style.gridColumn = "4 / 18";
  lanGap.className = "gap-block";
  lanGap.textContent = "* Lanthanides (57–71) — see below";
  grid.appendChild(lanGap);

  const actGap = document.createElement("div");
  actGap.style.gridRow = 7;
  actGap.style.gridColumn = "4 / 18";
  actGap.className = "gap-block";
  actGap.textContent = "** Actinides (89–103) — see below";
  grid.appendChild(actGap);

  // Add section gap spacer before f-block
  const sectionGap = document.createElement("div");
  sectionGap.style.gridRow = "8";
  sectionGap.style.gridColumn = "1 / -1";
  sectionGap.style.height = "12px";
  sectionGap.style.gridRow = 8;
  grid.appendChild(sectionGap);

  // Series labels
  const lanLabel = document.createElement("div");
  lanLabel.style.gridRow = 8;
  lanLabel.style.gridColumn = "1 / 4";
  lanLabel.className = "series-label";
  lanLabel.innerHTML = `<span style="color:var(--c-lanthanide);font-weight:800">* Lanthanides</span>`;
  grid.appendChild(lanLabel);

  const actLabel = document.createElement("div");
  actLabel.style.gridRow = 9;
  actLabel.style.gridColumn = "1 / 4";
  actLabel.className = "series-label";
  actLabel.innerHTML = `<span style="color:var(--c-actinide);font-weight:800">** Actinides</span>`;
  grid.appendChild(actLabel);

  // Center info block (H to He gap, row 1)
  const centerInfo = document.createElement("div");
  centerInfo.style.gridRow = "1 / 4";
  centerInfo.style.gridColumn = "2 / 13";
  centerInfo.className = "center-info";
  centerInfo.innerHTML = `
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

  document.getElementById("mMelt").innerHTML = `${el.melt} <span class="prop-unit"></span>`;
  document.getElementById("mBoil").innerHTML = `${el.boil} <span class="prop-unit"></span>`;

  document.getElementById("mElectroneg").textContent =
    el.eneg === "—" ? "Not applicable" : `${el.eneg} (Pauling)`;

  document.getElementById("mRadius").textContent =
    el.radius === "—" ? "Unknown" : el.radius;

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
  if (e.target === e.currentTarget) closeModal();
});

// ─── THEME ────────────────────────────────────────────────────────
let isDark = true;
document.getElementById("themeToggle").addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("light", !isDark);
  document.getElementById("themeToggle").textContent =
    isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
});

// ─── CLOSE WINDOW ────────────────────────────────────────────────
document.getElementById("closeBtn").addEventListener("click", () => {
  window.close();
});

// ─── INIT ────────────────────────────────────────────────────────
buildGrid();
