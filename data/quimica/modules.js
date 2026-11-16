window.chemModules = [
  {
    "id": 1,
    "title": "Estrutura atômica",
    "status": "available",
    "description": "Número atômico, número de massa, partículas e íons."
  },
  {
    "id": 2,
    "title": "Tabela periódica e propriedades",
    "status": "locked",
    "description": "Famílias, períodos, raio, eletronegatividade e energia de ionização."
  },
  {
    "id": 3,
    "title": "Ligações químicas e geometria",
    "status": "locked",
    "description": "Ligações iônica, covalente e metálica; polaridade e geometria."
  },
  {
    "id": 4,
    "title": "Funções inorgânicas",
    "status": "locked",
    "description": "Ácidos, bases, sais e óxidos: fórmulas e identificação."
  },
  {
    "id": 5,
    "title": "Reações químicas e balanceamento",
    "status": "locked",
    "description": "Representação, conservação de átomos e tipos de reação."
  },
  {
    "id": 6,
    "title": "Grandezas químicas e estequiometria",
    "status": "locked",
    "description": "Mol, massa molar, constante de Avogadro e proporções."
  },
  {
    "id": 7,
    "title": "Soluções e concentração",
    "status": "locked",
    "description": "Concentrações, diluição, mistura e título."
  },
  {
    "id": 8,
    "title": "Gases",
    "status": "locked",
    "description": "Leis dos gases, equação geral e gás ideal."
  },
  {
    "id": 9,
    "title": "Termoquímica",
    "status": "locked",
    "description": "Entalpia, calor, lei de Hess e energia de ligação."
  },
  {
    "id": 10,
    "title": "Cinética química",
    "status": "locked",
    "description": "Velocidade média, lei de velocidade e meia-vida."
  },
  {
    "id": 11,
    "title": "Equilíbrio químico",
    "status": "locked",
    "description": "Constantes Kc/Kp, quociente e deslocamento."
  },
  {
    "id": 12,
    "title": "Ácidos, bases e pH",
    "status": "locked",
    "description": "pH, pOH, Kw e constantes de ionização."
  },
  {
    "id": 13,
    "title": "Eletroquímica",
    "status": "locked",
    "description": "Oxidação, redução, pilhas, eletrólise e Faraday."
  },
  {
    "id": 14,
    "title": "Química orgânica: funções",
    "status": "locked",
    "description": "Reconhecimento visual das funções orgânicas e grupos funcionais."
  },
  {
    "id": 15,
    "title": "Química orgânica: nomenclatura e reações",
    "status": "locked",
    "description": "Cadeias, isomeria, combustão, esterificação e polímeros."
  }
];

const chemRawLessons = [
  {
    "moduleId": 1,
    "title": "Número atômico",
    "formula": "Z = p",
    "variables": "Z é número atômico; p é número de prótons.",
    "desc": "Número atômico corresponde à quantidade de prótons no núcleo.",
    "wrong": [
      "Z = n",
      "Z = p + n",
      "Z = e + n"
    ],
    "variableAnswer": "O número atômico é igual ao número de prótons do átomo.",
    "scenario": "Qual relação identifica o número atômico de um elemento?"
  },
  {
    "moduleId": 1,
    "title": "Número de massa",
    "formula": "A = Z + n",
    "variables": "A é número de massa; Z é número atômico; n é número de nêutrons.",
    "desc": "Número de massa é a soma de prótons e nêutrons.",
    "wrong": [
      "A = Z − n",
      "A = Z × n",
      "A = p − n"
    ],
    "variableAnswer": "O número de massa soma as partículas do núcleo: prótons e nêutrons.",
    "scenario": "Qual expressão relaciona número de massa, número atômico e nêutrons?"
  },
  {
    "moduleId": 1,
    "title": "Nêutrons",
    "formula": "n = A − Z",
    "variables": "n é número de nêutrons; A é número de massa; Z é número atômico.",
    "desc": "A quantidade de nêutrons é a diferença entre A e Z.",
    "wrong": [
      "n = A + Z",
      "n = Z − A",
      "n = A/Z"
    ],
    "variableAnswer": "Nêutrons são obtidos subtraindo o número atômico do número de massa.",
    "scenario": "Qual expressão permite identificar o número de nêutrons?"
  },
  {
    "moduleId": 1,
    "title": "Carga de um íon",
    "formula": "q = p − e",
    "variables": "q é carga em unidades elementares; p é prótons; e é elétrons.",
    "desc": "A carga do íon depende da diferença entre prótons e elétrons.",
    "wrong": [
      "q = e − p",
      "q = p + e",
      "q = p/e"
    ],
    "variableAnswer": "A carga resulta do saldo entre prótons positivos e elétrons negativos.",
    "scenario": "Qual relação representa a carga elétrica de um íon em unidades elementares?"
  },
  {
    "moduleId": 1,
    "title": "Átomo neutro",
    "formula": "p = e",
    "variables": "Em um átomo neutro, prótons e elétrons têm a mesma quantidade.",
    "desc": "Neutralidade elétrica exige igualdade entre prótons e elétrons.",
    "wrong": [
      "p > e",
      "p < e",
      "p = n"
    ],
    "variableAnswer": "Em um átomo neutro, cargas positivas e negativas se compensam.",
    "scenario": "Qual igualdade caracteriza um átomo eletricamente neutro?"
  },
  {
    "moduleId": 2,
    "title": "Carga nuclear efetiva (ideia)",
    "formula": "Zₑff ≈ Z − S",
    "variables": "Zeff é carga nuclear efetiva; Z é número atômico; S representa blindagem.",
    "desc": "A carga nuclear efetiva considera a atração nuclear reduzida pela blindagem.",
    "wrong": [
      "Zeff = Z + S",
      "Zeff = S − Z",
      "Zeff = Z·S"
    ],
    "variableAnswer": "A blindagem eletrônica reduz a atração nuclear efetiva sentida pelo elétron.",
    "scenario": "Qual relação simplificada representa a carga nuclear efetiva?"
  },
  {
    "moduleId": 2,
    "title": "Variação do raio atômico",
    "formula": "Raio ↑ para baixo e para a esquerda",
    "variables": "O raio atômico aumenta ao descer um grupo e ao seguir para a esquerda em um período.",
    "desc": "Memorizar a tendência periódica do raio atômico.",
    "wrong": [
      "Raio ↑ para cima e para a direita",
      "Raio é constante na tabela",
      "Raio ↑ apenas para a direita"
    ],
    "variableAnswer": "O raio cresce com camadas eletrônicas e tende a diminuir com maior carga nuclear efetiva no período.",
    "scenario": "Em quais direções gerais o raio atômico aumenta na tabela periódica?"
  },
  {
    "moduleId": 2,
    "title": "Eletronegatividade",
    "formula": "Eletronegatividade ↑ para cima e para a direita",
    "variables": "Tendência geral; flúor é o elemento mais eletronegativo.",
    "desc": "Memorizar a tendência periódica da eletronegatividade.",
    "wrong": [
      "↑ para baixo e para a esquerda",
      "↑ apenas para baixo",
      "É igual em todos os elementos"
    ],
    "variableAnswer": "A eletronegatividade tende a aumentar em direção ao flúor.",
    "scenario": "Em quais direções gerais a eletronegatividade aumenta?"
  },
  {
    "moduleId": 2,
    "title": "Energia de ionização",
    "formula": "EI ↑ para cima e para a direita",
    "variables": "Energia de ionização é a energia necessária para retirar um elétron de um átomo gasoso.",
    "desc": "Memorizar a tendência periódica da primeira energia de ionização.",
    "wrong": [
      "EI ↑ para baixo e para a esquerda",
      "EI é sempre constante",
      "EI ↑ apenas para baixo"
    ],
    "variableAnswer": "A energia de ionização geralmente cresce em direção ao canto superior direito.",
    "scenario": "Qual tendência periódica descreve a energia de ionização?"
  },
  {
    "moduleId": 2,
    "title": "Família dos gases nobres",
    "formula": "Grupo 18",
    "variables": "Elementos do grupo 18; camada de valência geralmente completa.",
    "desc": "Identificar a família dos gases nobres na tabela periódica.",
    "wrong": [
      "Grupo 1",
      "Grupo 17",
      "Grupo 2"
    ],
    "variableAnswer": "Os gases nobres ocupam o grupo 18 da tabela periódica.",
    "scenario": "Em qual grupo estão os gases nobres?"
  },
  {
    "moduleId": 3,
    "title": "Ligação iônica",
    "formula": "metal + ametal → íons",
    "variables": "Ocorre por transferência de elétrons, formando cátions e ânions.",
    "desc": "Reconhecer o modelo típico de ligação iônica.",
    "wrong": [
      "ametal + ametal → compartilhamento",
      "metal + metal → moléculas",
      "gás nobre + gás nobre"
    ],
    "variableAnswer": "A ligação iônica envolve atração eletrostática entre íons de cargas opostas.",
    "scenario": "Qual combinação costuma formar ligação iônica?"
  },
  {
    "moduleId": 3,
    "title": "Ligação covalente",
    "formula": "compartilhamento de elétrons",
    "variables": "Ocorre tipicamente entre ametais e/ou hidrogênio.",
    "desc": "Reconhecer a ligação covalente pelo compartilhamento de pares eletrônicos.",
    "wrong": [
      "transferência completa de prótons",
      "mar de elétrons metálicos",
      "atração entre cátions e ânions"
    ],
    "variableAnswer": "Na ligação covalente, átomos compartilham pares de elétrons.",
    "scenario": "Qual modelo descreve uma ligação covalente?"
  },
  {
    "moduleId": 3,
    "title": "Ligação metálica",
    "formula": "cátions metálicos + elétrons deslocalizados",
    "variables": "Modelo de rede de cátions envolvida por elétrons deslocalizados.",
    "desc": "Reconhecer o modelo de ligação metálica.",
    "wrong": [
      "moléculas discretas",
      "transferência de elétrons a ametais",
      "pontes de hidrogênio"
    ],
    "variableAnswer": "A ligação metálica é descrita por elétrons deslocalizados na estrutura metálica.",
    "scenario": "Qual modelo representa a ligação metálica?"
  },
  {
    "moduleId": 3,
    "title": "Polaridade da ligação",
    "formula": "ΔEN = |EN₁ − EN₂|",
    "variables": "ΔEN é diferença de eletronegatividade entre os átomos.",
    "desc": "A diferença de eletronegatividade ajuda a avaliar a polaridade da ligação.",
    "wrong": [
      "ΔEN = EN₁ + EN₂",
      "ΔEN = EN₁·EN₂",
      "ΔEN = EN₁/EN₂"
    ],
    "variableAnswer": "A polaridade da ligação depende da diferença entre eletronegatividades.",
    "scenario": "Qual relação calcula a diferença de eletronegatividade?"
  },
  {
    "moduleId": 3,
    "title": "Geometria linear",
    "formula": "180°",
    "variables": "Ângulo ideal de referência para moléculas lineares.",
    "desc": "Memorizar o ângulo característico da geometria linear.",
    "wrong": [
      "109,5°",
      "120°",
      "90°"
    ],
    "variableAnswer": "A geometria linear apresenta ângulo de 180 graus.",
    "scenario": "Qual ângulo caracteriza uma geometria molecular linear?"
  },
  {
    "moduleId": 4,
    "title": "Ácido de Arrhenius",
    "formula": "HA → H⁺ + A⁻",
    "variables": "Em água, ácido aumenta a concentração de H⁺ (mais precisamente H₃O⁺).",
    "desc": "Reconhecer a representação geral de um ácido de Arrhenius.",
    "wrong": [
      "BOH → B⁺ + OH⁻",
      "MₓOᵧ → M⁺ + O²⁻",
      "sal → metal + oxigênio"
    ],
    "variableAnswer": "Ácidos de Arrhenius ionizam em água liberando H⁺.",
    "scenario": "Qual representação geral corresponde a um ácido de Arrhenius?"
  },
  {
    "moduleId": 4,
    "title": "Base de Arrhenius",
    "formula": "BOH → B⁺ + OH⁻",
    "variables": "Em água, base libera íons OH⁻; B representa cátion.",
    "desc": "Reconhecer a dissociação de uma base de Arrhenius.",
    "wrong": [
      "HA → H⁺ + A⁻",
      "CO₂ + H₂O",
      "H₂O → H₂ + O₂"
    ],
    "variableAnswer": "Bases de Arrhenius liberam hidróxido em solução aquosa.",
    "scenario": "Qual representação geral corresponde a uma base de Arrhenius?"
  },
  {
    "moduleId": 4,
    "title": "Neutralização",
    "formula": "ácido + base → sal + água",
    "variables": "Reação entre ácido e base; forma sal e água em neutralização típica.",
    "desc": "Memorizar o esquema geral da neutralização.",
    "wrong": [
      "ácido + sal → metal + água",
      "base + água → ácido",
      "sal + água → oxigênio"
    ],
    "variableAnswer": "A neutralização típica produz sal e água.",
    "scenario": "Qual esquema representa uma reação de neutralização?"
  },
  {
    "moduleId": 4,
    "title": "Óxido",
    "formula": "EₓOᵧ",
    "variables": "Composto binário em que o oxigênio é o elemento mais eletronegativo, em geral.",
    "desc": "Reconhecer a representação geral de óxidos.",
    "wrong": [
      "EₓHᵧ",
      "EₓClᵧ",
      "EₓNᵧ"
    ],
    "variableAnswer": "Óxidos são compostos binários com oxigênio ligado a outro elemento.",
    "scenario": "Qual padrão de fórmula representa genericamente um óxido?"
  },
  {
    "moduleId": 4,
    "title": "Sal",
    "formula": "cátion + ânion",
    "variables": "Composto iônico formado por cátions e ânions; muitos resultam de neutralização.",
    "desc": "Reconhecer a constituição geral de um sal.",
    "wrong": [
      "somente H⁺",
      "somente OH⁻",
      "somente moléculas de O₂"
    ],
    "variableAnswer": "Sais são compostos iônicos constituídos por cátions e ânions.",
    "scenario": "Como se representa a constituição geral de um sal?"
  },
  {
    "moduleId": 5,
    "title": "Conservação da massa",
    "formula": "m(reagentes) = m(produtos)",
    "variables": "Em sistema fechado, massa total se conserva na reação química.",
    "desc": "Memorizar a lei de conservação da massa.",
    "wrong": [
      "m(reagentes) > m(produtos)",
      "m(reagentes) = 0",
      "m(produtos) = 2m(reagentes)"
    ],
    "variableAnswer": "A massa total dos reagentes é igual à massa total dos produtos em sistema fechado.",
    "scenario": "Qual igualdade expressa a conservação da massa?"
  },
  {
    "moduleId": 5,
    "title": "Conservação dos átomos",
    "formula": "átomos de cada elemento: reagentes = produtos",
    "variables": "O número de átomos de cada elemento deve ser igual nos dois lados.",
    "desc": "Reconhecer o princípio usado no balanceamento.",
    "wrong": [
      "átomos podem desaparecer",
      "só a massa do oxigênio conserva",
      "número de moléculas sempre igual"
    ],
    "variableAnswer": "Balancear é ajustar coeficientes para conservar os átomos de cada elemento.",
    "scenario": "Qual condição deve ser satisfeita em uma equação balanceada?"
  },
  {
    "moduleId": 5,
    "title": "Síntese",
    "formula": "A + B → AB",
    "variables": "Duas ou mais substâncias formam um produto principal.",
    "desc": "Identificar o padrão de reação de síntese.",
    "wrong": [
      "AB → A + B",
      "AB + CD → AD + CB",
      "A + BC → AC + B"
    ],
    "variableAnswer": "Na síntese, reagentes se combinam para formar um composto.",
    "scenario": "Qual esquema representa uma reação de síntese?"
  },
  {
    "moduleId": 5,
    "title": "Decomposição",
    "formula": "AB → A + B",
    "variables": "Uma substância se divide em substâncias mais simples.",
    "desc": "Identificar o padrão de reação de decomposição.",
    "wrong": [
      "A + B → AB",
      "AB + CD → AD + CB",
      "A + BC → AC + B"
    ],
    "variableAnswer": "Na decomposição, um reagente origina dois ou mais produtos.",
    "scenario": "Qual esquema representa uma reação de decomposição?"
  },
  {
    "moduleId": 5,
    "title": "Combustão completa de hidrocarboneto",
    "formula": "CₓHᵧ + O₂ → CO₂ + H₂O",
    "variables": "Na combustão completa, carbono forma CO₂ e hidrogênio forma H₂O.",
    "desc": "Memorizar os produtos da combustão completa de hidrocarbonetos.",
    "wrong": [
      "CₓHᵧ + O₂ → CO + H₂",
      "CₓHᵧ → C + H₂",
      "CₓHᵧ + H₂O → O₂"
    ],
    "variableAnswer": "A combustão completa produz dióxido de carbono e água.",
    "scenario": "Quais produtos caracterizam a combustão completa de um hidrocarboneto?"
  },
  {
    "moduleId": 6,
    "title": "Quantidade de matéria",
    "formula": "n = m / Mₘ",
    "variables": "n em mol; m é massa em gramas; Mm é massa molar em g/mol.",
    "desc": "Relacionar massa, quantidade de matéria e massa molar.",
    "wrong": [
      "n = m·Mm",
      "n = Mm/m",
      "n = m + Mm"
    ],
    "variableAnswer": "A quantidade de matéria é a massa dividida pela massa molar.",
    "scenario": "Qual fórmula converte massa em quantidade de matéria?"
  },
  {
    "moduleId": 6,
    "title": "Massa molar",
    "formula": "Mₘ = m / n",
    "variables": "Mm é massa molar; m é massa; n é quantidade de matéria.",
    "desc": "Reconhecer a definição de massa molar.",
    "wrong": [
      "Mm = n/m",
      "Mm = m·n",
      "Mm = m + n"
    ],
    "variableAnswer": "Massa molar é a massa correspondente a um mol da substância.",
    "scenario": "Qual relação define a massa molar?"
  },
  {
    "moduleId": 6,
    "title": "Número de partículas",
    "formula": "N = n · Nₐ",
    "variables": "N é número de entidades; n é quantidade em mol; NA é constante de Avogadro.",
    "desc": "Relacionar mol e número de partículas.",
    "wrong": [
      "N = n/NA",
      "N = NA/n",
      "N = n + NA"
    ],
    "variableAnswer": "O número de entidades é a quantidade em mol multiplicada pela constante de Avogadro.",
    "scenario": "Qual fórmula relaciona quantidade de matéria e número de partículas?"
  },
  {
    "moduleId": 6,
    "title": "Constante de Avogadro",
    "formula": "Nₐ ≈ 6,02 × 10²³ mol⁻¹",
    "variables": "Número de entidades em um mol.",
    "desc": "Memorizar o valor aproximado da constante de Avogadro.",
    "wrong": [
      "6,02 × 10²²",
      "3,00 × 10⁸",
      "9,8 × 10²"
    ],
    "variableAnswer": "Um mol contém aproximadamente 6,02 × 10²³ entidades.",
    "scenario": "Qual é o valor aproximado da constante de Avogadro?"
  },
  {
    "moduleId": 6,
    "title": "Proporção estequiométrica",
    "formula": "n₁/coef₁ = n₂/coef₂",
    "variables": "As quantidades em mol se relacionam pelos coeficientes da equação balanceada.",
    "desc": "Memorizar a proporção molar de uma equação balanceada.",
    "wrong": [
      "n₁·coef₁ = n₂·coef₂",
      "n₁ + coef₁ = n₂",
      "n₁/n₂ = coef₂/coef₁"
    ],
    "variableAnswer": "A razão entre quantidade em mol e coeficiente estequiométrico é igual para as espécies.",
    "scenario": "Qual relação expressa a proporção molar entre duas espécies?"
  },
  {
    "moduleId": 7,
    "title": "Concentração comum",
    "formula": "C = m / V",
    "variables": "C em g/L; m massa do soluto em g; V volume da solução em L.",
    "desc": "Memorizar concentração comum como massa por volume.",
    "wrong": [
      "C = V/m",
      "C = m·V",
      "C = n/V"
    ],
    "variableAnswer": "Concentração comum é massa de soluto dividida pelo volume da solução.",
    "scenario": "Qual fórmula representa concentração comum?"
  },
  {
    "moduleId": 7,
    "title": "Concentração molar",
    "formula": "Cₘ = n / V",
    "variables": "Cm em mol/L; n em mol; V em litros.",
    "desc": "Reconhecer a concentração em quantidade de matéria por volume.",
    "wrong": [
      "Cm = V/n",
      "Cm = n·V",
      "Cm = m/V"
    ],
    "variableAnswer": "Concentração molar é a quantidade de matéria dividida pelo volume.",
    "scenario": "Qual relação define a concentração molar?"
  },
  {
    "moduleId": 7,
    "title": "Título em massa",
    "formula": "τ = m(soluto) / m(solução)",
    "variables": "Título é a razão entre massa de soluto e massa total da solução.",
    "desc": "Memorizar o título em massa.",
    "wrong": [
      "τ = m(solução)/m(soluto)",
      "τ = m(soluto)·m(solução)",
      "τ = V(soluto)/V(solução)"
    ],
    "variableAnswer": "O título em massa compara massa do soluto com massa da solução.",
    "scenario": "Qual expressão representa o título em massa?"
  },
  {
    "moduleId": 7,
    "title": "Diluição",
    "formula": "C₁V₁ = C₂V₂",
    "variables": "C1 e C2 são concentrações inicial/final; V1 e V2 volumes correspondentes.",
    "desc": "Reconhecer a relação de diluição sem perda de soluto.",
    "wrong": [
      "C₁/V₁ = C₂/V₂",
      "C₁V₂ = C₂V₁",
      "C₁ + V₁ = C₂ + V₂"
    ],
    "variableAnswer": "Na diluição, a quantidade de soluto permanece constante.",
    "scenario": "Qual fórmula relaciona concentração e volume antes e depois de uma diluição?"
  },
  {
    "moduleId": 7,
    "title": "Densidade",
    "formula": "d = m / V",
    "variables": "d é densidade; m é massa; V é volume.",
    "desc": "Memorizar a relação entre massa e volume.",
    "wrong": [
      "d = V/m",
      "d = m·V",
      "d = m + V"
    ],
    "variableAnswer": "Densidade é massa por unidade de volume.",
    "scenario": "Qual fórmula representa a densidade?"
  },
  {
    "moduleId": 8,
    "title": "Lei de Boyle",
    "formula": "P₁V₁ = P₂V₂",
    "variables": "Temperatura e quantidade de gás constantes.",
    "desc": "Memorizar a relação pressão-volume em transformação isotérmica.",
    "wrong": [
      "P₁/V₁ = P₂/V₂",
      "P₁T₁ = P₂T₂",
      "V₁T₁ = V₂T₂"
    ],
    "variableAnswer": "Em temperatura constante, pressão e volume são inversamente proporcionais.",
    "scenario": "Qual expressão representa a lei de Boyle?"
  },
  {
    "moduleId": 8,
    "title": "Lei de Charles",
    "formula": "V₁/T₁ = V₂/T₂",
    "variables": "Pressão constante; temperatura absoluta em kelvin.",
    "desc": "Memorizar a relação volume-temperatura em transformação isobárica.",
    "wrong": [
      "V₁T₁ = V₂T₂",
      "P₁V₁ = P₂V₂",
      "P₁/T₁ = P₂/T₂"
    ],
    "variableAnswer": "Em pressão constante, volume é proporcional à temperatura absoluta.",
    "scenario": "Qual expressão representa a lei de Charles?"
  },
  {
    "moduleId": 8,
    "title": "Lei de Gay-Lussac",
    "formula": "P₁/T₁ = P₂/T₂",
    "variables": "Volume constante; temperatura absoluta em kelvin.",
    "desc": "Memorizar a relação pressão-temperatura em transformação isovolumétrica.",
    "wrong": [
      "P₁T₁ = P₂T₂",
      "V₁/T₁ = V₂/T₂",
      "P₁V₁ = P₂V₂"
    ],
    "variableAnswer": "Em volume constante, pressão é proporcional à temperatura absoluta.",
    "scenario": "Qual expressão representa a lei de Gay-Lussac?"
  },
  {
    "moduleId": 8,
    "title": "Equação geral dos gases",
    "formula": "P₁V₁/T₁ = P₂V₂/T₂",
    "variables": "Para quantidade fixa de gás; temperatura em kelvin.",
    "desc": "Reconhecer a equação geral dos gases para dois estados.",
    "wrong": [
      "P₁T₁/V₁ = P₂T₂/V₂",
      "P₁V₁T₁ = P₂V₂T₂",
      "P₁/V₁T₁ = P₂/V₂T₂"
    ],
    "variableAnswer": "A relação geral mantém PV/T constante para uma quantidade fixa de gás.",
    "scenario": "Qual expressão conecta dois estados de uma mesma amostra gasosa?"
  },
  {
    "moduleId": 8,
    "title": "Equação de Clapeyron",
    "formula": "PV = nRT",
    "variables": "P pressão; V volume; n mol; R constante dos gases; T kelvin.",
    "desc": "Memorizar a equação de estado do gás ideal.",
    "wrong": [
      "PV = RT/n",
      "P = nRVT",
      "PV = nR/T"
    ],
    "variableAnswer": "A equação dos gases ideais relaciona pressão, volume, mols e temperatura.",
    "scenario": "Qual fórmula representa o comportamento de um gás ideal?"
  },
  {
    "moduleId": 9,
    "title": "Calor sensível",
    "formula": "Q = m·c·ΔT",
    "variables": "Q calor; m massa; c calor específico; ΔT variação de temperatura.",
    "desc": "Memorizar a expressão do calor sensível.",
    "wrong": [
      "Q = m·c/ΔT",
      "Q = m·ΔT/c",
      "Q = c·ΔT/m"
    ],
    "variableAnswer": "Calor sensível altera a temperatura sem mudança de estado físico.",
    "scenario": "Qual fórmula calcula o calor sensível?"
  },
  {
    "moduleId": 9,
    "title": "Calor latente",
    "formula": "Q = m·L",
    "variables": "Q calor; m massa; L calor latente específico.",
    "desc": "Memorizar a expressão do calor latente.",
    "wrong": [
      "Q = m/L",
      "Q = L/m",
      "Q = m + L"
    ],
    "variableAnswer": "Calor latente está associado à mudança de estado físico.",
    "scenario": "Qual fórmula representa o calor latente?"
  },
  {
    "moduleId": 9,
    "title": "Variação de entalpia",
    "formula": "ΔH = Hprodutos − Hreagentes",
    "variables": "ΔH é variação de entalpia.",
    "desc": "Reconhecer a definição de variação de entalpia de reação.",
    "wrong": [
      "ΔH = Hreagentes − Hprodutos",
      "ΔH = Hprodutos + Hreagentes",
      "ΔH = Hprodutos/Hreagentes"
    ],
    "variableAnswer": "A variação de entalpia é entalpia final menos inicial.",
    "scenario": "Qual expressão define a variação de entalpia?"
  },
  {
    "moduleId": 9,
    "title": "Lei de Hess",
    "formula": "ΔHtotal = ΣΔHetapas",
    "variables": "A variação de entalpia global é a soma das etapas.",
    "desc": "Memorizar a lei de Hess.",
    "wrong": [
      "ΔHtotal = ΔH₁·ΔH₂",
      "ΔHtotal = ΔH₁/ΔH₂",
      "ΔHtotal = 0 sempre"
    ],
    "variableAnswer": "A entalpia é função de estado; somam-se as variações das etapas.",
    "scenario": "Qual relação representa a lei de Hess?"
  },
  {
    "moduleId": 9,
    "title": "Energia de ligação",
    "formula": "ΔH ≈ ΣE rompidas − ΣE formadas",
    "variables": "Estimativa pela energia para romper ligações menos energia liberada ao formar ligações.",
    "desc": "Memorizar a estimativa de entalpia por energias de ligação.",
    "wrong": [
      "ΔH = ΣE formadas − ΣE rompidas",
      "ΔH = ΣE rompidas + ΣE formadas",
      "ΔH = ΣE rompidas/ΣE formadas"
    ],
    "variableAnswer": "Rompimento absorve energia; formação libera energia.",
    "scenario": "Qual expressão estima a variação de entalpia usando energias de ligação?"
  },
  {
    "moduleId": 10,
    "title": "Velocidade média de reação",
    "formula": "v = Δ[produto]/Δt",
    "variables": "Variação de concentração do produto por intervalo de tempo; para reagentes usa-se sinal negativo.",
    "desc": "Memorizar a definição de velocidade média de reação.",
    "wrong": [
      "v = Δt/Δ[produto]",
      "v = Δ[produto]·Δt",
      "v = Δ[reagente]/Δt sem sinal"
    ],
    "variableAnswer": "A velocidade acompanha a variação de concentração por tempo.",
    "scenario": "Qual relação representa a velocidade média de formação de produto?"
  },
  {
    "moduleId": 10,
    "title": "Lei de velocidade",
    "formula": "v = k[A]ᵐ[B]ⁿ",
    "variables": "k constante; concentrações entre colchetes; expoentes determinados experimentalmente.",
    "desc": "Reconhecer a forma geral da lei de velocidade.",
    "wrong": [
      "v = [A]+[B]",
      "v = k/[A]ᵐ[B]ⁿ",
      "v = k[A+B]"
    ],
    "variableAnswer": "A lei de velocidade relaciona velocidade às concentrações elevadas a ordens experimentais.",
    "scenario": "Qual expressão representa uma lei de velocidade geral?"
  },
  {
    "moduleId": 10,
    "title": "Ordem global",
    "formula": "ordem = m + n",
    "variables": "Soma dos expoentes na lei de velocidade.",
    "desc": "Memorizar como obter a ordem global da reação.",
    "wrong": [
      "ordem = m·n",
      "ordem = m − n",
      "ordem = m/n"
    ],
    "variableAnswer": "A ordem global é a soma dos expoentes da lei de velocidade.",
    "scenario": "Como se determina a ordem global na lei v = k[A]ᵐ[B]ⁿ?"
  },
  {
    "moduleId": 10,
    "title": "Meia-vida de primeira ordem",
    "formula": "t₁/₂ = 0,693/k",
    "variables": "k é constante de velocidade de primeira ordem.",
    "desc": "Memorizar a meia-vida de uma reação de primeira ordem.",
    "wrong": [
      "t₁/₂ = k/0,693",
      "t₁/₂ = 1/k²",
      "t₁/₂ = 0,693·k"
    ],
    "variableAnswer": "Para cinética de primeira ordem, a meia-vida depende apenas de k.",
    "scenario": "Qual expressão representa a meia-vida de primeira ordem?"
  },
  {
    "moduleId": 11,
    "title": "Constante Kc",
    "formula": "Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)",
    "variables": "Para aA + bB ⇌ cC + dD; concentrações de equilíbrio, omitindo sólidos e líquidos puros.",
    "desc": "Memorizar a expressão da constante de equilíbrio em concentração.",
    "wrong": [
      "Kc = [A]ᵃ[B]ᵇ/[C]ᶜ[D]ᵈ",
      "Kc = [A]+[B]+[C]+[D]",
      "Kc = [C]ᶜ[D]ᵈ·[A]ᵃ[B]ᵇ"
    ],
    "variableAnswer": "Produtos ficam no numerador e reagentes no denominador, com expoentes estequiométricos.",
    "scenario": "Qual estrutura representa Kc para uma reação genérica?"
  },
  {
    "moduleId": 11,
    "title": "Quociente de reação",
    "formula": "Qc = produtos/reagentes (potências estequiométricas)",
    "variables": "Tem a mesma forma de Kc, mas usa concentrações do instante considerado.",
    "desc": "Distinguir quociente de reação da constante de equilíbrio.",
    "wrong": [
      "Qc usa apenas produtos somados",
      "Qc = Kc sempre",
      "Qc = reagentes/produtos"
    ],
    "variableAnswer": "Qc compara a composição atual com a condição de equilíbrio.",
    "scenario": "Qual grandeza tem a mesma forma de Kc, mas pode ser calculada fora do equilíbrio?"
  },
  {
    "moduleId": 11,
    "title": "Constante Kp",
    "formula": "Kp = (P_C)ᶜ(P_D)ᵈ / ((P_A)ᵃ(P_B)ᵇ)",
    "variables": "Para equilíbrios gasosos, usando pressões parciais.",
    "desc": "Memorizar a expressão da constante de equilíbrio em pressão.",
    "wrong": [
      "Kp = pressões reagentes/produtos",
      "Kp = soma de pressões",
      "Kp = Kc·T sempre"
    ],
    "variableAnswer": "Kp usa pressões parciais dos produtos sobre reagentes.",
    "scenario": "Qual expressão representa a constante de equilíbrio em pressão?"
  },
  {
    "moduleId": 11,
    "title": "Relação Kp e Kc",
    "formula": "Kp = Kc(RT)ᐟⁿ",
    "variables": "Δn é mols gasosos dos produtos menos mols gasosos dos reagentes.",
    "desc": "Reconhecer a relação entre constantes Kp e Kc.",
    "wrong": [
      "Kp = Kc/(RT)ᐟⁿ",
      "Kp = Kc + RT",
      "Kp = Kc·Δn"
    ],
    "variableAnswer": "A relação depende de RT elevado à variação de mols gasosos.",
    "scenario": "Qual relação conecta Kp e Kc?"
  },
  {
    "moduleId": 11,
    "title": "Princípio de Le Chatelier",
    "formula": "perturbação → deslocamento que a contraria",
    "variables": "Mudanças de concentração, pressão ou temperatura podem deslocar o equilíbrio.",
    "desc": "Memorizar a ideia central do princípio de Le Chatelier.",
    "wrong": [
      "perturbação não altera equilíbrio",
      "equilíbrio sempre vai aos reagentes",
      "catalisador muda K"
    ],
    "variableAnswer": "O sistema tende a minimizar o efeito da perturbação aplicada.",
    "scenario": "Qual enunciado resume o princípio de Le Chatelier?"
  },
  {
    "moduleId": 12,
    "title": "Definição de pH",
    "formula": "pH = −log[H⁺]",
    "variables": "[H+] é concentração molar de íons hidrogênio/oxônio.",
    "desc": "Memorizar a definição de pH.",
    "wrong": [
      "pH = log[H⁺]",
      "pH = 1/[H⁺]",
      "pH = −[H⁺]"
    ],
    "variableAnswer": "O pH é o logaritmo decimal negativo da concentração de H+.",
    "scenario": "Qual expressão define o pH?"
  },
  {
    "moduleId": 12,
    "title": "Definição de pOH",
    "formula": "pOH = −log[OH⁻]",
    "variables": "[OH−] é concentração molar de hidróxido.",
    "desc": "Memorizar a definição de pOH.",
    "wrong": [
      "pOH = log[OH⁻]",
      "pOH = −[H⁺]",
      "pOH = 1/[OH⁻]"
    ],
    "variableAnswer": "O pOH é o logaritmo decimal negativo da concentração de OH−.",
    "scenario": "Qual expressão define o pOH?"
  },
  {
    "moduleId": 12,
    "title": "Relação pH e pOH",
    "formula": "pH + pOH = 14",
    "variables": "A 25 °C, para solução aquosa diluída.",
    "desc": "Memorizar a relação entre pH e pOH a 25 °C.",
    "wrong": [
      "pH − pOH = 14",
      "pH·pOH = 14",
      "pH + pOH = 7"
    ],
    "variableAnswer": "A 25 °C, pH e pOH somam 14.",
    "scenario": "Qual relação vale para pH e pOH a 25 °C?"
  },
  {
    "moduleId": 12,
    "title": "Produto iônico da água",
    "formula": "Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴",
    "variables": "A 25 °C; valor depende da temperatura.",
    "desc": "Memorizar o produto iônico da água a 25 °C.",
    "wrong": [
      "Kw = [H⁺]+[OH⁻]",
      "Kw = [H⁺]/[OH⁻]",
      "Kw = 1,0×10⁻⁷"
    ],
    "variableAnswer": "O produto das concentrações de H+ e OH− vale 10−14 a 25 °C.",
    "scenario": "Qual expressão representa Kw a 25 °C?"
  },
  {
    "moduleId": 12,
    "title": "Constante de acidez",
    "formula": "Ka = [H⁺][A⁻]/[HA]",
    "variables": "Para HA ⇌ H⁺ + A⁻, em equilíbrio.",
    "desc": "Reconhecer a expressão da constante de ionização ácida.",
    "wrong": [
      "Ka = [HA]/([H⁺][A⁻])",
      "Ka = [H⁺]+[A⁻]+[HA]",
      "Ka = [HA]·[H⁺]·[A⁻]"
    ],
    "variableAnswer": "Ka coloca produtos iônicos no numerador e ácido não ionizado no denominador.",
    "scenario": "Qual expressão representa Ka para um ácido HA?"
  },
  {
    "moduleId": 13,
    "title": "Número de oxidação (NOX)",
    "formula": "ΣNOX = carga total",
    "variables": "A soma dos NOX de todos os átomos corresponde à carga da espécie.",
    "desc": "Memorizar a regra geral de soma dos números de oxidação.",
    "wrong": [
      "ΣNOX = 0 sempre",
      "ΣNOX = número de átomos",
      "ΣNOX = massa molar"
    ],
    "variableAnswer": "A soma dos NOX é zero em espécie neutra e igual à carga em íon.",
    "scenario": "Qual regra geral relaciona NOX e carga da espécie?"
  },
  {
    "moduleId": 13,
    "title": "Potencial da pilha",
    "formula": "E°pilha = E°cátodo − E°ânodo",
    "variables": "Potenciais padrão de redução; cátodo é redução e ânodo oxidação.",
    "desc": "Memorizar o cálculo do potencial padrão de uma pilha.",
    "wrong": [
      "E°pilha = E°ânodo − E°cátodo",
      "E°pilha = E°cátodo + E°ânodo",
      "E°pilha = E°cátodo/E°ânodo"
    ],
    "variableAnswer": "O potencial da pilha é potencial de redução do cátodo menos o do ânodo.",
    "scenario": "Qual fórmula representa o potencial padrão de uma pilha?"
  },
  {
    "moduleId": 13,
    "title": "Carga elétrica na eletrólise",
    "formula": "Q = i·t",
    "variables": "Q carga em coulombs; i corrente em ampères; t tempo em segundos.",
    "desc": "Memorizar a relação entre carga, corrente e tempo.",
    "wrong": [
      "Q = i/t",
      "Q = t/i",
      "Q = i+t"
    ],
    "variableAnswer": "A carga transportada é corrente multiplicada pelo tempo.",
    "scenario": "Qual fórmula relaciona carga elétrica, corrente e tempo?"
  },
  {
    "moduleId": 13,
    "title": "Lei de Faraday",
    "formula": "m = (M·i·t)/(z·F)",
    "variables": "m massa depositada; M massa molar; z elétrons; F constante de Faraday.",
    "desc": "Reconhecer a relação de Faraday para massa depositada na eletrólise.",
    "wrong": [
      "m = (z·F)/(M·i·t)",
      "m = M·z·F·i·t",
      "m = (M·z)/(F·i·t)"
    ],
    "variableAnswer": "A massa depositada é proporcional à carga e à massa molar, e inversa a zF.",
    "scenario": "Qual fórmula relaciona massa depositada e carga na eletrólise?"
  },
  {
    "moduleId": 13,
    "title": "Constante de Faraday",
    "formula": "F ≈ 9,65 × 10⁴ C/mol",
    "variables": "Carga elétrica por mol de elétrons.",
    "desc": "Memorizar o valor aproximado da constante de Faraday.",
    "wrong": [
      "F ≈ 6,02×10²³",
      "F ≈ 3,00×10⁸",
      "F ≈ 9,8"
    ],
    "variableAnswer": "A constante de Faraday vale aproximadamente 96 500 coulombs por mol de elétrons.",
    "scenario": "Qual é o valor aproximado da constante de Faraday?"
  },
  {
    "moduleId": 14,
    "title": "Álcool: hidroxila em carbono saturado",
    "formula": "R–CH₂–OH",
    "variables": "R representa o restante da cadeia; o grupo –OH está ligado a carbono saturado.",
    "desc": "Reconhecer álcool: hidroxila ligada a carbono saturado da cadeia; pode estar na ponta, como em R–CH₂–OH.",
    "wrong": [
      "Ar–OH (fenol)",
      "R–O–R′ (éter)",
      "R–COOH (ácido carboxílico)"
    ],
    "variableAnswer": "Álcool tem grupo –OH ligado a carbono saturado. Se o –OH está no carbono terminal da cadeia, continua sendo álcool.",
    "scenario": "Uma estrutura mostra –OH ligado ao carbono da ponta de uma cadeia saturada. Qual função orgânica é?"
  },
  {
    "moduleId": 14,
    "title": "Fenol: hidroxila no anel aromático",
    "formula": "Ar–OH",
    "variables": "Ar representa um anel aromático; o –OH liga-se diretamente a um carbono do anel.",
    "desc": "Distinguir fenol: a hidroxila está diretamente ligada ao anel aromático.",
    "wrong": [
      "Ar–CH₂–OH (álcool)",
      "Ar–O–R (éter)",
      "Ar–CHO (aldeído)"
    ],
    "variableAnswer": "Fenol exige ligação direta entre o oxigênio da hidroxila e um carbono aromático.",
    "scenario": "O grupo –OH está ligado diretamente ao anel benzênico. Qual função é?"
  },
  {
    "moduleId": 14,
    "title": "Éter: oxigênio entre carbonos",
    "formula": "R–O–R′",
    "variables": "O oxigênio fica entre dois grupos carbônicos.",
    "desc": "Reconhecer éter pela sequência C–O–C.",
    "wrong": [
      "R–CH₂–OH (álcool)",
      "R–CHO (aldeído)",
      "R–COOH (ácido)"
    ],
    "variableAnswer": "Éter apresenta um oxigênio ligado a dois grupos carbônicos.",
    "scenario": "Qual função apresenta um oxigênio entre dois radicais orgânicos?"
  },
  {
    "moduleId": 14,
    "title": "Aldeído: carbonila terminal",
    "formula": "R–CHO",
    "variables": "Grupo carbonila C=O na extremidade da cadeia, ligado a H.",
    "desc": "Reconhecer aldeído pela carbonila terminal –CHO.",
    "wrong": [
      "R–CO–R′ (cetona)",
      "R–COOH (ácido)",
      "R–COO–R′ (éster)"
    ],
    "variableAnswer": "Aldeído possui carbonila na ponta, formando o grupo –CHO.",
    "scenario": "Uma estrutura apresenta C=O na ponta, ligado a H. Qual função é?"
  },
  {
    "moduleId": 14,
    "title": "Cetona: carbonila interna",
    "formula": "R–CO–R′",
    "variables": "Carbonila C=O ligada a dois carbonos.",
    "desc": "Reconhecer cetona pela carbonila no interior da cadeia.",
    "wrong": [
      "R–CHO (aldeído)",
      "R–COOH (ácido)",
      "R–CH₂–OH (álcool)"
    ],
    "variableAnswer": "Cetona tem carbonila entre dois carbonos.",
    "scenario": "Qual função apresenta C=O entre dois grupos carbônicos?"
  },
  {
    "moduleId": 14,
    "title": "Ácido carboxílico: carboxila",
    "formula": "R–COOH",
    "variables": "Grupo carboxila reúne carbonila C=O e hidroxila –OH no mesmo carbono.",
    "desc": "Reconhecer ácido carboxílico pelo grupo –COOH.",
    "wrong": [
      "R–OH (álcool)",
      "R–COO–R′ (éster)",
      "R–CHO (aldeído)"
    ],
    "variableAnswer": "A carboxila –COOH caracteriza os ácidos carboxílicos.",
    "scenario": "Qual função orgânica contém o grupo carboxila –COOH?"
  },
  {
    "moduleId": 14,
    "title": "Éster: grupo –COO–",
    "formula": "R–COO–R′",
    "variables": "Carbonila ligada a oxigênio que se liga a outro carbono.",
    "desc": "Reconhecer éster pelo padrão –COO– entre cadeias carbônicas.",
    "wrong": [
      "R–COOH (ácido)",
      "R–O–R′ (éter)",
      "R–CO–R′ (cetona)"
    ],
    "variableAnswer": "Éster apresenta o arranjo R–C(=O)–O–R′.",
    "scenario": "Qual função apresenta o grupo característico –COO– entre radicais?"
  },
  {
    "moduleId": 14,
    "title": "Amina: nitrogênio na cadeia",
    "formula": "R–NH₂ / R₂NH / R₃N",
    "variables": "Aminas possuem nitrogênio ligado a grupos orgânicos.",
    "desc": "Reconhecer aminas pelas formas primária, secundária e terciária.",
    "wrong": [
      "R–OH",
      "R–COOH",
      "R–O–R′"
    ],
    "variableAnswer": "Aminas são derivadas da amônia com substituição de H por grupos orgânicos.",
    "scenario": "Qual função orgânica apresenta nitrogênio ligado a grupos carbônicos?"
  },
  {
    "moduleId": 14,
    "title": "Amida: carbonila ligada a N",
    "formula": "R–CONH₂",
    "variables": "Grupo amida apresenta carbonila ligada diretamente ao nitrogênio.",
    "desc": "Reconhecer amida pelo grupo –CONH₂ (ou derivados).",
    "wrong": [
      "R–NH₂ (amina)",
      "R–COOH (ácido)",
      "R–CHO (aldeído)"
    ],
    "variableAnswer": "Amida possui carbonila ligada diretamente ao nitrogênio.",
    "scenario": "Qual função apresenta o grupo –CONH₂?"
  },
  {
    "moduleId": 14,
    "title": "Haleto orgânico",
    "formula": "R–X",
    "variables": "X representa F, Cl, Br ou I ligado a carbono.",
    "desc": "Reconhecer haleto orgânico pela presença de halogênio na cadeia.",
    "wrong": [
      "R–OH",
      "R–NH₂",
      "R–COOH"
    ],
    "variableAnswer": "Haleto orgânico apresenta halogênio ligado a carbono.",
    "scenario": "Qual representação indica um haleto orgânico?"
  },
  {
    "moduleId": 14,
    "title": "Nitrila",
    "formula": "R–C≡N",
    "variables": "Grupo ciano com ligação tripla carbono-nitrogênio.",
    "desc": "Reconhecer nitrila pelo grupo –C≡N.",
    "wrong": [
      "R–N=C=O",
      "R–C=O",
      "R–C–OH"
    ],
    "variableAnswer": "Nitrilas apresentam o grupo funcional C≡N.",
    "scenario": "Qual grupo caracteriza uma nitrila?"
  },
  {
    "moduleId": 15,
    "title": "Prefixo met-",
    "formula": "1 carbono",
    "variables": "Prefixo met- indica cadeia principal com um carbono.",
    "desc": "Memorizar o prefixo de cadeia com um carbono.",
    "wrong": [
      "2 carbonos",
      "3 carbonos",
      "4 carbonos"
    ],
    "variableAnswer": "Met- indica um carbono na cadeia principal.",
    "scenario": "Qual quantidade de carbonos corresponde ao prefixo met-?"
  },
  {
    "moduleId": 15,
    "title": "Prefixo et-",
    "formula": "2 carbonos",
    "variables": "Prefixo et- indica cadeia principal com dois carbonos.",
    "desc": "Memorizar o prefixo de cadeia com dois carbonos.",
    "wrong": [
      "1 carbono",
      "3 carbonos",
      "5 carbonos"
    ],
    "variableAnswer": "Et- indica dois carbonos na cadeia principal.",
    "scenario": "Qual quantidade de carbonos corresponde ao prefixo et-?"
  },
  {
    "moduleId": 15,
    "title": "Prefixo prop-",
    "formula": "3 carbonos",
    "variables": "Prefixo prop- indica cadeia principal com três carbonos.",
    "desc": "Memorizar o prefixo de cadeia com três carbonos.",
    "wrong": [
      "2 carbonos",
      "4 carbonos",
      "6 carbonos"
    ],
    "variableAnswer": "Prop- indica três carbonos na cadeia principal.",
    "scenario": "Qual quantidade de carbonos corresponde ao prefixo prop-?"
  },
  {
    "moduleId": 15,
    "title": "Prefixo but-",
    "formula": "4 carbonos",
    "variables": "Prefixo but- indica cadeia principal com quatro carbonos.",
    "desc": "Memorizar o prefixo de cadeia com quatro carbonos.",
    "wrong": [
      "3 carbonos",
      "5 carbonos",
      "7 carbonos"
    ],
    "variableAnswer": "But- indica quatro carbonos na cadeia principal.",
    "scenario": "Qual quantidade de carbonos corresponde ao prefixo but-?"
  },
  {
    "moduleId": 15,
    "title": "Alcano acíclico",
    "formula": "CₙH₂ₙ₊₂",
    "variables": "Hidrocarboneto saturado de cadeia aberta.",
    "desc": "Memorizar a fórmula geral dos alcanos acíclicos.",
    "wrong": [
      "CₙH₂ₙ",
      "CₙH₂ₙ₋₂",
      "CₙHₙ"
    ],
    "variableAnswer": "Alcanos de cadeia aberta apresentam fórmula geral CnH2n+2.",
    "scenario": "Qual fórmula geral representa alcanos acíclicos?"
  },
  {
    "moduleId": 15,
    "title": "Alceno acíclico com uma dupla",
    "formula": "CₙH₂ₙ",
    "variables": "Hidrocarboneto com uma ligação dupla e cadeia aberta.",
    "desc": "Memorizar a fórmula geral dos alcenos acíclicos com uma dupla.",
    "wrong": [
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ₋₂",
      "CₙHₙ"
    ],
    "variableAnswer": "Alcenos acíclicos com uma dupla têm fórmula geral CnH2n.",
    "scenario": "Qual fórmula geral representa um alceno acíclico com uma dupla?"
  },
  {
    "moduleId": 15,
    "title": "Alcino acíclico com uma tripla",
    "formula": "CₙH₂ₙ₋₂",
    "variables": "Hidrocarboneto com uma ligação tripla e cadeia aberta.",
    "desc": "Memorizar a fórmula geral dos alcinos acíclicos com uma tripla.",
    "wrong": [
      "CₙH₂ₙ₊₂",
      "CₙH₂ₙ",
      "CₙHₙ"
    ],
    "variableAnswer": "Alcinos acíclicos com uma tripla têm fórmula geral CnH2n−2.",
    "scenario": "Qual fórmula geral representa um alcino acíclico com uma tripla?"
  },
  {
    "moduleId": 15,
    "title": "Combustão completa de álcool",
    "formula": "álcool + O₂ → CO₂ + H₂O",
    "variables": "Produtos da combustão completa de compostos orgânicos com C e H.",
    "desc": "Memorizar os produtos da combustão completa de um álcool.",
    "wrong": [
      "álcool + O₂ → CO + H₂",
      "álcool → C + H₂",
      "álcool + H₂O → O₂"
    ],
    "variableAnswer": "Na combustão completa, o carbono e o hidrogênio formam CO2 e H2O.",
    "scenario": "Quais produtos aparecem na combustão completa de um álcool?"
  },
  {
    "moduleId": 15,
    "title": "Esterificação",
    "formula": "ácido carboxílico + álcool ⇌ éster + água",
    "variables": "Reação reversível típica catalisada por ácido.",
    "desc": "Memorizar a reação de esterificação.",
    "wrong": [
      "éster + água → ácido + álcool apenas irreversível",
      "álcool + aldeído → amina",
      "ácido + base → hidrocarboneto"
    ],
    "variableAnswer": "Esterificação combina ácido carboxílico e álcool, formando éster e água.",
    "scenario": "Qual reação forma um éster a partir de ácido carboxílico e álcool?"
  },
  {
    "moduleId": 15,
    "title": "Hidrólise de éster",
    "formula": "éster + água ⇌ ácido carboxílico + álcool",
    "variables": "Reação inversa da esterificação, em condições apropriadas.",
    "desc": "Reconhecer a hidrólise de éster.",
    "wrong": [
      "éster + O₂ → CO₂",
      "álcool + água → alcano",
      "ácido + base → alceno"
    ],
    "variableAnswer": "Na hidrólise, éster reage com água e origina ácido e álcool.",
    "scenario": "Qual reação corresponde à quebra de um éster pela água?"
  },
  {
    "moduleId": 15,
    "title": "Polimerização por adição",
    "formula": "n monômeros → polímero",
    "variables": "Monômeros insaturados se unem sem liberação de molécula pequena na adição.",
    "desc": "Reconhecer a polimerização por adição.",
    "wrong": [
      "monômeros → polímero + sempre água",
      "polímero → metal + gás",
      "n monômeros → sal + água"
    ],
    "variableAnswer": "Na adição, unidades monoméricas se unem formando cadeia polimérica.",
    "scenario": "Qual processo une monômeros insaturados sem liberar subproduto pequeno?"
  },
  {
    "moduleId": 15,
    "title": "Índice de insaturação (DBE)",
    "formula": "DBE = (2C + 2 + N − H − X)/2",
    "variables": "C carbonos; H hidrogênios; N nitrogênios; X halogênios; oxigênio não entra.",
    "desc": "Reconhecer a fórmula do grau de insaturação para fórmulas usuais.",
    "wrong": [
      "DBE = (C + H + X)/2",
      "DBE = (2C + H − N)/2",
      "DBE = (C + 2 − H)/2"
    ],
    "variableAnswer": "O índice de insaturação contabiliza anéis e ligações π; halogênios contam como H.",
    "scenario": "Qual expressão calcula o índice de insaturação de uma fórmula molecular?"
  },
  {
    "moduleId": 15,
    "title": "Isomeria plana: cadeia",
    "formula": "mesma fórmula molecular; cadeias diferentes",
    "variables": "Isômeros de cadeia diferem no esqueleto carbônico.",
    "desc": "Reconhecer isomeria de cadeia.",
    "wrong": [
      "fórmulas moleculares diferentes",
      "mesma cadeia e funções diferentes",
      "mesma estrutura espacial apenas"
    ],
    "variableAnswer": "Isômeros de cadeia têm mesma fórmula molecular e esqueletos carbônicos diferentes.",
    "scenario": "Qual tipo de isomeria ocorre quando muda o esqueleto carbônico?"
  },
  {
    "moduleId": 15,
    "title": "Isomeria plana: posição",
    "formula": "mesma função; posição diferente",
    "variables": "Muda a posição de insaturação, substituinte ou grupo funcional.",
    "desc": "Reconhecer isomeria de posição.",
    "wrong": [
      "funções diferentes sempre",
      "fórmula molecular diferente",
      "somente rotação livre"
    ],
    "variableAnswer": "Isômeros de posição mantêm função e cadeia-base, mas mudam a posição de um grupo ou ligação.",
    "scenario": "Qual isomeria muda a posição de grupo funcional ou insaturação?"
  },
  {
    "moduleId": 15,
    "title": "Isomeria de função",
    "formula": "mesma fórmula molecular; funções diferentes",
    "variables": "Exemplo clássico: álcool e éter com mesma fórmula molecular.",
    "desc": "Reconhecer isomeria de função.",
    "wrong": [
      "mesma função e cadeia diferente",
      "fórmulas moleculares diferentes",
      "apenas conformações"
    ],
    "variableAnswer": "Isômeros de função pertencem a funções orgânicas diferentes, mantendo a fórmula molecular.",
    "scenario": "Qual isomeria ocorre entre substâncias de funções orgânicas diferentes e mesma fórmula?"
  }
];
window.chemLessons = chemRawLessons.map((l) => {
  const wrong = l.wrong;
  const formulaOptions = [l.formula, ...wrong.slice(0,3)];
  const meaningOptions = [l.variableAnswer, `Uma relação inversa que não corresponde às grandezas descritas.`, `Uma soma direta sem considerar a estrutura ou as unidades.`, `Uma relação que pertence a outro conceito químico.`];
  return {...l, questions:[
    {type:'recognize', prompt:`Qual expressão ou estrutura corresponde a: ${l.desc}`, options:formulaOptions, answer:l.formula, explain:`A relação correta é ${l.formula}. ${l.variables}`},
    {type:'fill', prompt:`Complete a relação ou estrutura: ${l.title}. Escreva a expressão completa.`, answer:l.formula, explain:`A relação que você deve memorizar é ${l.formula}. ${l.variables}`},
    {type:'match', prompt:`Associe ${l.formula} ao seu significado.`, options:meaningOptions, answer:l.variableAnswer, explain:l.variableAnswer},
    {type:'identify', prompt:`Identifique a expressão ou estrutura correta para: ${l.desc}`, options:[...formulaOptions].reverse(), answer:l.formula, explain:`A expressão ou estrutura correta é ${l.formula}. ${l.variables}`},
    {type:'apply', prompt:l.scenario, options:[l.formula,...wrong.slice(0,3)], answer:l.formula, explain:`A situação descreve ${l.title.toLowerCase()}. A relação correspondente é ${l.formula}. ${l.variables}`}
  ]};
});
