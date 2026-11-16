window.bioModules = [
  {
    "id": 1,
    "title": "Bioquímica e biomoléculas",
    "status": "available",
    "description": "Biomoléculas, água, sais minerais e relações quantitativas."
  },
  {
    "id": 2,
    "title": "Enzimas e metabolismo",
    "status": "locked",
    "description": "Velocidade enzimática, energia e metabolismo celular."
  },
  {
    "id": 3,
    "title": "Citologia e membranas",
    "status": "locked",
    "description": "Escalas celulares, osmose e transporte através da membrana."
  },
  {
    "id": 4,
    "title": "Fotossíntese e quimiossíntese",
    "status": "locked",
    "description": "Equações gerais e fatores dos processos autotróficos."
  },
  {
    "id": 5,
    "title": "Respiração celular e fermentação",
    "status": "locked",
    "description": "Equações de respiração aeróbia e fermentações."
  },
  {
    "id": 6,
    "title": "Genética molecular",
    "status": "locked",
    "description": "DNA, RNA, síntese proteica e relações de pareamento."
  },
  {
    "id": 7,
    "title": "Genética mendeliana",
    "status": "locked",
    "description": "Probabilidades, proporções genotípicas e fenotípicas."
  },
  {
    "id": 8,
    "title": "Genética de populações",
    "status": "locked",
    "description": "Frequências alélicas e equilíbrio de Hardy-Weinberg."
  },
  {
    "id": 9,
    "title": "Ecologia: populações",
    "status": "locked",
    "description": "Densidade, crescimento e dinâmica populacional."
  },
  {
    "id": 10,
    "title": "Ecologia: energia e matéria",
    "status": "locked",
    "description": "Produtividade, transferência de energia e ciclos."
  },
  {
    "id": 11,
    "title": "Fisiologia humana quantitativa",
    "status": "locked",
    "description": "Frequência, débito cardíaco, ventilação e outras relações fisiológicas."
  },
  {
    "id": 12,
    "title": "Microscopia, evolução e índices",
    "status": "locked",
    "description": "Aumento, escalas, seleção e indicadores ecológicos."
  }
];
const bioRawLessons = [
  {
    "moduleId": 1,
    "title": "Concentração comum",
    "formula": "C = m / V",
    "variables": "C é concentração comum (g/L); m é massa do soluto (g); V é volume da solução (L).",
    "desc": "Memorizar a relação entre massa do soluto e volume da solução.",
    "wrong": [
      "C = V / m",
      "C = m × V",
      "C = n / V"
    ],
    "variableAnswer": "A concentração comum indica a massa de soluto por volume de solução.",
    "scenario": "Qual expressão representa a concentração em gramas por litro?"
  },
  {
    "moduleId": 1,
    "title": "Concentração molar",
    "formula": "M = n / V",
    "variables": "M é concentração molar (mol/L); n é quantidade de matéria (mol); V é volume da solução (L).",
    "desc": "Reconhecer a molaridade como quantidade de matéria por volume.",
    "wrong": [
      "M = V / n",
      "M = m / V",
      "M = n × V"
    ],
    "variableAnswer": "Molaridade: mols de soluto divididos pelo volume da solução em litros.",
    "scenario": "Para expressar mols de soluto por litro de solução, qual relação é usada?"
  },
  {
    "moduleId": 1,
    "title": "Quantidade de matéria",
    "formula": "n = m / MM",
    "variables": "n é quantidade de matéria (mol); m é massa (g); MM é massa molar (g/mol).",
    "desc": "Relacionar massa da amostra e massa molar.",
    "wrong": [
      "n = MM / m",
      "n = m × MM",
      "n = m / V"
    ],
    "variableAnswer": "A quantidade de matéria é a massa dividida pela massa molar.",
    "scenario": "Qual expressão converte a massa de uma amostra em quantidade de matéria?"
  },
  {
    "moduleId": 1,
    "title": "Número de partículas",
    "formula": "N = n × Nₐ",
    "variables": "N é número de entidades; n é quantidade de matéria; Nₐ é a constante de Avogadro.",
    "desc": "Memorizar a conversão entre mol e número de entidades.",
    "wrong": [
      "N = n / Nₐ",
      "N = Nₐ / n",
      "N = m × Nₐ"
    ],
    "variableAnswer": "Multiplica-se a quantidade de matéria pela constante de Avogadro.",
    "scenario": "Qual relação permite obter o número de partículas a partir dos mols?"
  },
  {
    "moduleId": 1,
    "title": "Densidade",
    "formula": "d = m / V",
    "variables": "d é densidade; m é massa; V é volume.",
    "desc": "Reconhecer a relação entre massa e volume.",
    "wrong": [
      "d = V / m",
      "d = m × V",
      "d = m + V"
    ],
    "variableAnswer": "Densidade é massa dividida pelo volume.",
    "scenario": "Qual fórmula expressa a massa por unidade de volume?"
  },
  {
    "moduleId": 2,
    "title": "Velocidade da reação",
    "formula": "v = Δ[ P ] / Δt",
    "variables": "v é velocidade média; Δ[P] é variação da concentração do produto; Δt é intervalo de tempo.",
    "desc": "Memorizar a variação de concentração por intervalo de tempo.",
    "wrong": [
      "v = Δt / Δ[P]",
      "v = [P] × Δt",
      "v = Δ[P] × Δt"
    ],
    "variableAnswer": "Velocidade média pode ser expressa pela variação da concentração do produto dividida pelo tempo.",
    "scenario": "Qual relação representa a velocidade média de formação de um produto?"
  },
  {
    "moduleId": 2,
    "title": "Energia livre de Gibbs",
    "formula": "ΔG = ΔH − TΔS",
    "variables": "ΔG é variação da energia livre; ΔH é variação de entalpia; T é temperatura absoluta; ΔS é variação de entropia.",
    "desc": "Reconhecer a relação termodinâmica entre entalpia, temperatura e entropia.",
    "wrong": [
      "ΔG = ΔH + TΔS",
      "ΔG = TΔS − ΔH",
      "ΔG = ΔH / TΔS"
    ],
    "variableAnswer": "A energia livre de Gibbs é a entalpia menos temperatura vezes variação de entropia.",
    "scenario": "Qual expressão relaciona espontaneidade, entalpia e entropia?"
  },
  {
    "moduleId": 2,
    "title": "Energia de ativação e catalisador",
    "formula": "Eₐ(cat) < Eₐ(sem cat)",
    "variables": "Eₐ é energia de ativação; cat indica reação catalisada.",
    "desc": "Memorizar o efeito do catalisador sobre a energia de ativação.",
    "wrong": [
      "Eₐ(cat) > Eₐ(sem cat)",
      "Eₐ(cat) = 0 sempre",
      "Eₐ(cat) não se altera"
    ],
    "variableAnswer": "Catalisadores diminuem a energia de ativação sem serem consumidos no balanço global.",
    "scenario": "Qual comparação representa a ação de uma enzima catalisadora?"
  },
  {
    "moduleId": 2,
    "title": "Equação de Michaelis-Menten",
    "formula": "v = (Vmax × [S]) / (Km + [S])",
    "variables": "v é velocidade; Vmax é velocidade máxima; [S] é concentração de substrato; Km é constante de Michaelis.",
    "desc": "Reconhecer a relação clássica entre velocidade enzimática e substrato.",
    "wrong": [
      "v = Vmax × (Km + [S])",
      "v = Km / [S]",
      "v = [S] / Vmax"
    ],
    "variableAnswer": "A velocidade depende da concentração de substrato e se aproxima de Vmax.",
    "scenario": "Qual equação descreve a cinética enzimática simples?"
  },
  {
    "moduleId": 2,
    "title": "Quociente respiratório",
    "formula": "QR = CO₂ produzido / O₂ consumido",
    "variables": "QR é quociente respiratório; CO₂ é volume produzido; O₂ é volume consumido.",
    "desc": "Memorizar a razão entre gás carbônico produzido e oxigênio consumido.",
    "wrong": [
      "QR = O₂ / CO₂",
      "QR = CO₂ × O₂",
      "QR = CO₂ + O₂"
    ],
    "variableAnswer": "O quociente respiratório compara o CO₂ liberado ao O₂ consumido.",
    "scenario": "Qual relação é usada para caracterizar o substrato energético predominante?"
  },
  {
    "moduleId": 3,
    "title": "Aumento microscópico",
    "formula": "A = imagem / objeto",
    "variables": "A é aumento; imagem é tamanho da imagem; objeto é tamanho real.",
    "desc": "Reconhecer a relação entre tamanho observado e tamanho real.",
    "wrong": [
      "A = objeto / imagem",
      "A = imagem × objeto",
      "A = imagem + objeto"
    ],
    "variableAnswer": "O aumento é o tamanho da imagem dividido pelo tamanho real do objeto.",
    "scenario": "Qual fórmula calcula o aumento de uma imagem microscópica?"
  },
  {
    "moduleId": 3,
    "title": "Osmolaridade simplificada",
    "formula": "Osm = i × C",
    "variables": "Osm é concentração osmótica; i é fator de dissociação; C é concentração molar.",
    "desc": "Memorizar a relação simplificada entre concentração e número de partículas em solução.",
    "wrong": [
      "Osm = C / i",
      "Osm = i + C",
      "Osm = i × C²"
    ],
    "variableAnswer": "A osmolaridade considera a concentração e quantas partículas a substância gera em solução.",
    "scenario": "Qual expressão estima a concentração total de partículas osmoticamente ativas?"
  },
  {
    "moduleId": 3,
    "title": "Potencial hídrico",
    "formula": "Ψw = Ψs + Ψp",
    "variables": "Ψw é potencial hídrico; Ψs é potencial de soluto; Ψp é potencial de pressão.",
    "desc": "Reconhecer os componentes do potencial hídrico.",
    "wrong": [
      "Ψw = Ψs − Ψp",
      "Ψw = Ψs × Ψp",
      "Ψw = Ψp / Ψs"
    ],
    "variableAnswer": "O potencial hídrico resulta da soma dos potenciais de soluto e de pressão.",
    "scenario": "Qual relação reúne os componentes básicos do potencial hídrico vegetal?"
  },
  {
    "moduleId": 3,
    "title": "Difusão: primeira lei de Fick",
    "formula": "J = −D × (ΔC / Δx)",
    "variables": "J é fluxo; D é coeficiente de difusão; ΔC/Δx é gradiente de concentração.",
    "desc": "Memorizar a relação entre fluxo difusivo e gradiente de concentração.",
    "wrong": [
      "J = D × (Δx / ΔC)",
      "J = D × ΔC × Δx",
      "J = ΔC / D"
    ],
    "variableAnswer": "O fluxo de difusão é proporcional ao gradiente e ocorre no sentido de menor concentração.",
    "scenario": "Qual relação descreve o fluxo difusivo através de uma membrana?"
  },
  {
    "moduleId": 3,
    "title": "Relação superfície-volume",
    "formula": "R = área superficial / volume",
    "variables": "R é razão superfície-volume; área superficial e volume são medidas da célula.",
    "desc": "Reconhecer a razão que ajuda a explicar limites do tamanho celular.",
    "wrong": [
      "R = volume / área superficial",
      "R = área × volume",
      "R = área + volume"
    ],
    "variableAnswer": "A razão superfície-volume compara a área disponível para trocas com o volume que demanda recursos.",
    "scenario": "Qual índice ajuda a explicar por que células pequenas realizam trocas proporcionalmente mais eficientes?"
  },
  {
    "moduleId": 4,
    "title": "Equação geral da fotossíntese",
    "formula": "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂",
    "variables": "CO₂ é gás carbônico; H₂O é água; C₆H₁₂O₆ é glicose; O₂ é oxigênio.",
    "desc": "Memorizar a equação global simplificada da fotossíntese oxigênica.",
    "wrong": [
      "6 O₂ + C₆H₁₂O₆ → 6 CO₂ + 6 H₂O",
      "CO₂ + O₂ → glicose + H₂O",
      "6 CO₂ + 6 O₂ → glicose + 6 H₂O"
    ],
    "variableAnswer": "A fotossíntese utiliza gás carbônico, água e energia luminosa para formar matéria orgânica e liberar oxigênio.",
    "scenario": "Qual equação global representa a fotossíntese?"
  },
  {
    "moduleId": 4,
    "title": "Fator limitante da fotossíntese",
    "formula": "Taxa = f(luz, CO₂, temperatura)",
    "variables": "A taxa fotossintética depende da intensidade luminosa, disponibilidade de CO₂ e temperatura.",
    "desc": "Memorizar os principais fatores que limitam a taxa fotossintética.",
    "wrong": [
      "Taxa = f(apenas luz)",
      "Taxa = f(apenas água)",
      "Taxa = f(oxigênio e glicose)"
    ],
    "variableAnswer": "Luz, CO₂ e temperatura são fatores clássicos que influenciam a taxa fotossintética.",
    "scenario": "Qual conjunto reúne fatores ambientais importantes para a taxa fotossintética?"
  },
  {
    "moduleId": 4,
    "title": "Produtividade primária bruta",
    "formula": "PPB = PPL + R",
    "variables": "PPB é produtividade primária bruta; PPL é produtividade primária líquida; R é respiração dos produtores.",
    "desc": "Reconhecer a relação entre produtividade bruta, líquida e respiração.",
    "wrong": [
      "PPB = PPL − R",
      "PPL = PPB + R",
      "PPB = PPL × R"
    ],
    "variableAnswer": "A produção bruta corresponde à produção líquida somada à energia consumida na respiração.",
    "scenario": "Qual relação conecta a produtividade bruta à líquida?"
  },
  {
    "moduleId": 4,
    "title": "Produtividade primária líquida",
    "formula": "PPL = PPB − R",
    "variables": "PPL é produtividade primária líquida; PPB é produtividade bruta; R é respiração.",
    "desc": "Memorizar a produtividade disponível após descontar a respiração.",
    "wrong": [
      "PPL = PPB + R",
      "PPL = R − PPB",
      "PPL = PPB / R"
    ],
    "variableAnswer": "A produtividade líquida é a bruta menos a energia usada na respiração.",
    "scenario": "Qual fórmula expressa a matéria orgânica acumulada pelos produtores após a respiração?"
  },
  {
    "moduleId": 4,
    "title": "Eficiência fotossintética",
    "formula": "Eficiência = energia armazenada / energia incidente × 100%",
    "variables": "Compara energia química armazenada com energia luminosa incidente.",
    "desc": "Reconhecer a razão percentual de conversão de energia luminosa.",
    "wrong": [
      "Eficiência = energia incidente / armazenada × 100%",
      "Eficiência = energia armazenada × energia incidente",
      "Eficiência = energia armazenada − incidente"
    ],
    "variableAnswer": "A eficiência percentual é a energia armazenada dividida pela energia incidente, vezes 100%.",
    "scenario": "Qual relação calcula a porcentagem da energia luminosa convertida em energia química?"
  },
  {
    "moduleId": 5,
    "title": "Respiração aeróbia",
    "formula": "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energia",
    "variables": "Glicose e oxigênio são reagentes; gás carbônico, água e energia são produtos.",
    "desc": "Memorizar a equação global simplificada da respiração aeróbia.",
    "wrong": [
      "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂",
      "C₆H₁₂O₆ → etanol + CO₂",
      "glicose + CO₂ → O₂ + água"
    ],
    "variableAnswer": "A respiração aeróbia oxida glicose com oxigênio, liberando CO₂, água e energia.",
    "scenario": "Qual equação representa a respiração celular aeróbia?"
  },
  {
    "moduleId": 5,
    "title": "Fermentação lática",
    "formula": "C₆H₁₂O₆ → 2 C₃H₆O₃ + energia",
    "variables": "Glicose é convertida em ácido lático (lactato) com rendimento energético baixo.",
    "desc": "Reconhecer a equação simplificada da fermentação lática.",
    "wrong": [
      "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂",
      "2 C₃H₆O₃ → C₆H₁₂O₆",
      "glicose + O₂ → CO₂ + água"
    ],
    "variableAnswer": "Na fermentação lática, a glicose origina lactato sem liberação de CO₂ na equação simplificada.",
    "scenario": "Qual equação corresponde à fermentação lática?"
  },
  {
    "moduleId": 5,
    "title": "Fermentação alcoólica",
    "formula": "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + energia",
    "variables": "Glicose origina etanol, gás carbônico e pequena quantidade de energia.",
    "desc": "Memorizar os produtos da fermentação alcoólica.",
    "wrong": [
      "C₆H₁₂O₆ → 2 C₃H₆O₃ + energia",
      "etanol + O₂ → CO₂ + água",
      "CO₂ + água → glicose + O₂"
    ],
    "variableAnswer": "A fermentação alcoólica produz etanol e dióxido de carbono a partir da glicose.",
    "scenario": "Qual equação representa a fermentação realizada por leveduras?"
  },
  {
    "moduleId": 5,
    "title": "Rendimento energético relativo",
    "formula": "ATP aeróbio > ATP fermentação",
    "variables": "A respiração aeróbia gera muito mais ATP por glicose que a fermentação.",
    "desc": "Memorizar a comparação geral de rendimento energético.",
    "wrong": [
      "ATP aeróbio < ATP fermentação",
      "ATP aeróbio = ATP fermentação",
      "fermentação produz sempre mais ATP"
    ],
    "variableAnswer": "A respiração aeróbia tem rendimento de ATP muito maior que a fermentação.",
    "scenario": "Qual comparação representa o rendimento energético por molécula de glicose?"
  },
  {
    "moduleId": 5,
    "title": "Saldo da glicólise",
    "formula": "1 glicose → 2 piruvatos + 2 ATP líquidos + 2 NADH",
    "variables": "A glicólise quebra glicose em dois piruvatos, com saldo de dois ATP e dois NADH.",
    "desc": "Memorizar os produtos líquidos da glicólise.",
    "wrong": [
      "1 glicose → 1 piruvato + 4 ATP líquidos",
      "1 glicose → 6 CO₂ + 6 H₂O",
      "1 glicose → 2 lactatos + 36 ATP"
    ],
    "variableAnswer": "O saldo clássico da glicólise é de dois piruvatos, dois ATP líquidos e dois NADH por glicose.",
    "scenario": "Qual relação resume os produtos líquidos da glicólise?"
  },
  {
    "moduleId": 6,
    "title": "Pareamento de bases no DNA",
    "formula": "A = T; C ≡ G",
    "variables": "Adenina pareia com timina; citosina pareia com guanina.",
    "desc": "Memorizar a complementaridade das bases nitrogenadas do DNA.",
    "wrong": [
      "A = C; T = G",
      "A ≡ G; C = T",
      "A = U; C = G"
    ],
    "variableAnswer": "No DNA, adenina pareia com timina e citosina com guanina.",
    "scenario": "Qual regra representa o pareamento complementar do DNA?"
  },
  {
    "moduleId": 6,
    "title": "Regra de Chargaff",
    "formula": "%A = %T; %C = %G",
    "variables": "As porcentagens de adenina e timina são iguais; o mesmo ocorre com citosina e guanina.",
    "desc": "Reconhecer a igualdade percentual das bases complementares.",
    "wrong": [
      "%A = %C; %T = %G",
      "%A + %T = 100% sempre",
      "%A = %G; %C = %T"
    ],
    "variableAnswer": "Em DNA de fita dupla, a proporção de A iguala T e a de C iguala G.",
    "scenario": "Qual relação permite inferir a porcentagem de bases em DNA de fita dupla?"
  },
  {
    "moduleId": 6,
    "title": "Transcrição",
    "formula": "DNA → RNA",
    "variables": "A informação de um segmento de DNA é copiada em uma molécula de RNA.",
    "desc": "Memorizar o sentido do fluxo de informação na transcrição.",
    "wrong": [
      "RNA → DNA",
      "RNA → proteína",
      "proteína → DNA"
    ],
    "variableAnswer": "Transcrição é a síntese de RNA usando DNA como molde.",
    "scenario": "Qual seta representa a transcrição?"
  },
  {
    "moduleId": 6,
    "title": "Tradução",
    "formula": "RNA mensageiro → proteína",
    "variables": "Ribossomos leem códons do RNA mensageiro e organizam aminoácidos.",
    "desc": "Memorizar o processo que converte a sequência de códons em proteína.",
    "wrong": [
      "DNA → RNA mensageiro",
      "proteína → RNA",
      "DNA → DNA"
    ],
    "variableAnswer": "Tradução é a síntese proteica orientada pela sequência do RNA mensageiro.",
    "scenario": "Qual seta representa a tradução?"
  },
  {
    "moduleId": 6,
    "title": "Relação códons-aminoácidos",
    "formula": "3 nucleotídeos = 1 códon",
    "variables": "Um códon é uma sequência de três nucleotídeos no RNA mensageiro.",
    "desc": "Memorizar o tamanho de um códon.",
    "wrong": [
      "2 nucleotídeos = 1 códon",
      "4 nucleotídeos = 1 códon",
      "1 nucleotídeo = 1 códon"
    ],
    "variableAnswer": "Cada códon é formado por três nucleotídeos e pode especificar um aminoácido ou sinal de parada.",
    "scenario": "Quantos nucleotídeos formam um códon?"
  },
  {
    "moduleId": 7,
    "title": "Probabilidade de um evento",
    "formula": "P(A) = casos favoráveis / casos possíveis",
    "variables": "P(A) é probabilidade do evento A, em situações equiprováveis.",
    "desc": "Reconhecer a relação clássica de probabilidade.",
    "wrong": [
      "P(A) = casos possíveis / favoráveis",
      "P(A) = favoráveis × possíveis",
      "P(A) = favoráveis + possíveis"
    ],
    "variableAnswer": "Em resultados equiprováveis, probabilidade é casos favoráveis sobre casos possíveis.",
    "scenario": "Qual fórmula representa a probabilidade de um evento simples?"
  },
  {
    "moduleId": 7,
    "title": "Cruzamento monohíbrido Aa × Aa",
    "formula": "1 AA : 2 Aa : 1 aa",
    "variables": "Representa a proporção genotípica esperada em um cruzamento entre heterozigotos, com segregação mendeliana.",
    "desc": "Memorizar a proporção genotípica clássica do cruzamento monohíbrido.",
    "wrong": [
      "3 AA : 1 aa",
      "1 Aa : 1 aa",
      "9 : 3 : 3 : 1"
    ],
    "variableAnswer": "O cruzamento Aa × Aa gera proporção genotípica 1:2:1.",
    "scenario": "Qual proporção genotípica é esperada em Aa × Aa?"
  },
  {
    "moduleId": 7,
    "title": "Proporção fenotípica dominante",
    "formula": "3 dominantes : 1 recessivo",
    "variables": "Em dominância completa, Aa × Aa tende a produzir três fenótipos dominantes para um recessivo.",
    "desc": "Reconhecer a proporção fenotípica mendeliana clássica.",
    "wrong": [
      "1 dominante : 3 recessivos",
      "1 : 2 : 1 fenotípica",
      "9 : 3 : 3 : 1 em monohibridismo"
    ],
    "variableAnswer": "Na dominância completa, o cruzamento Aa × Aa gera proporção fenotípica 3:1.",
    "scenario": "Qual proporção fenotípica é típica de um cruzamento monohíbrido com dominância completa?"
  },
  {
    "moduleId": 7,
    "title": "Cruzamento-teste",
    "formula": "Aa × aa → 1 Aa : 1 aa",
    "variables": "O cruzamento de um indivíduo heterozigoto com homozigoto recessivo gera proporção esperada 1:1.",
    "desc": "Memorizar o resultado de um cruzamento-teste para heterozigoto.",
    "wrong": [
      "Aa × Aa → 1:1",
      "AA × aa → 1:1",
      "Aa × aa → 3:1"
    ],
    "variableAnswer": "Um heterozigoto cruzado com recessivo produz metade heterozigotos e metade recessivos.",
    "scenario": "Qual proporção genotípica se espera de Aa × aa?"
  },
  {
    "moduleId": 7,
    "title": "Segunda lei de Mendel",
    "formula": "9 : 3 : 3 : 1",
    "variables": "Proporção fenotípica típica de dihibridismo com segregação independente e dominância completa.",
    "desc": "Reconhecer a proporção fenotípica clássica do cruzamento dihíbrido.",
    "wrong": [
      "3 : 1",
      "1 : 2 : 1",
      "1 : 1"
    ],
    "variableAnswer": "O cruzamento AaBb × AaBb pode produzir proporção 9:3:3:1 sob as condições clássicas.",
    "scenario": "Qual proporção fenotípica caracteriza o dihibridismo clássico?"
  },
  {
    "moduleId": 8,
    "title": "Frequência alélica",
    "formula": "p + q = 1",
    "variables": "p e q representam frequências de dois alelos em uma população diploide para um lócus.",
    "desc": "Memorizar a soma das frequências alélicas.",
    "wrong": [
      "p × q = 1",
      "p − q = 1",
      "p + q = 2"
    ],
    "variableAnswer": "As frequências dos dois alelos somam 1 (ou 100%).",
    "scenario": "Qual equação expressa a soma das frequências alélicas?"
  },
  {
    "moduleId": 8,
    "title": "Hardy-Weinberg: genótipos",
    "formula": "p² + 2pq + q² = 1",
    "variables": "p² é frequência AA; 2pq é frequência Aa; q² é frequência aa.",
    "desc": "Reconhecer a equação de equilíbrio de Hardy-Weinberg.",
    "wrong": [
      "p + q = 1²",
      "p² + q² = 2pq",
      "p² − 2pq + q² = 1"
    ],
    "variableAnswer": "A soma das frequências dos genótipos AA, Aa e aa é p² + 2pq + q² = 1.",
    "scenario": "Qual equação descreve as frequências genotípicas no equilíbrio de Hardy-Weinberg?"
  },
  {
    "moduleId": 8,
    "title": "Frequência de heterozigotos",
    "formula": "f(Aa) = 2pq",
    "variables": "A frequência de heterozigotos no equilíbrio é duas vezes o produto das frequências alélicas.",
    "desc": "Memorizar a expressão da frequência de heterozigotos.",
    "wrong": [
      "f(Aa) = p²",
      "f(Aa) = q²",
      "f(Aa) = p + q"
    ],
    "variableAnswer": "A frequência de heterozigotos é 2pq.",
    "scenario": "Qual expressão representa a frequência de indivíduos heterozigotos?"
  },
  {
    "moduleId": 8,
    "title": "Frequência do alelo recessivo",
    "formula": "q = √(q²)",
    "variables": "q² representa a frequência do fenótipo/genótipo recessivo em dominância completa; q é a frequência do alelo recessivo.",
    "desc": "Reconhecer como obter a frequência alélica recessiva a partir de q².",
    "wrong": [
      "q = q²",
      "q = 1 − q²",
      "q = √p"
    ],
    "variableAnswer": "A raiz quadrada da frequência de homozigotos recessivos fornece q sob as condições do modelo.",
    "scenario": "Se q² é conhecido, qual relação permite obter q?"
  },
  {
    "moduleId": 8,
    "title": "Frequência do alelo dominante",
    "formula": "p = 1 − q",
    "variables": "p e q são frequências dos dois alelos de um lócus.",
    "desc": "Memorizar a relação complementar entre as frequências alélicas.",
    "wrong": [
      "p = 1 + q",
      "p = q − 1",
      "p = 1 / q"
    ],
    "variableAnswer": "Como p + q = 1, a frequência dominante é 1 menos q.",
    "scenario": "Qual fórmula permite encontrar p quando q é conhecido?"
  },
  {
    "moduleId": 9,
    "title": "Densidade populacional",
    "formula": "D = N / A",
    "variables": "D é densidade; N é número de indivíduos; A é área ou volume ocupado.",
    "desc": "Memorizar indivíduos por unidade de área ou volume.",
    "wrong": [
      "D = A / N",
      "D = N × A",
      "D = N + A"
    ],
    "variableAnswer": "Densidade populacional é número de indivíduos dividido pela área ou volume.",
    "scenario": "Qual relação expressa indivíduos por quilômetro quadrado?"
  },
  {
    "moduleId": 9,
    "title": "Variação populacional",
    "formula": "ΔN = (nascimentos + imigração) − (mortes + emigração)",
    "variables": "ΔN é variação do tamanho populacional no intervalo.",
    "desc": "Reconhecer os fatores que aumentam e diminuem uma população.",
    "wrong": [
      "ΔN = (mortes + imigração) − (nascimentos + emigração)",
      "ΔN = nascimentos − imigração",
      "ΔN = nascimentos + mortes"
    ],
    "variableAnswer": "Nascimentos e imigração aumentam a população; mortes e emigração reduzem.",
    "scenario": "Qual relação resume os componentes da variação populacional?"
  },
  {
    "moduleId": 9,
    "title": "Crescimento exponencial",
    "formula": "dN/dt = rN",
    "variables": "N é tamanho populacional; r é taxa intrínseca de crescimento; t é tempo.",
    "desc": "Memorizar o modelo de crescimento exponencial.",
    "wrong": [
      "dN/dt = r/N",
      "dN/dt = N/r",
      "dN/dt = r + N"
    ],
    "variableAnswer": "No modelo exponencial, a taxa de crescimento é proporcional ao tamanho populacional.",
    "scenario": "Qual equação representa crescimento exponencial sem limitação de recursos?"
  },
  {
    "moduleId": 9,
    "title": "Crescimento logístico",
    "formula": "dN/dt = rN(1 − N/K)",
    "variables": "K é capacidade de suporte; r é taxa intrínseca; N é população.",
    "desc": "Reconhecer o modelo logístico com capacidade de suporte.",
    "wrong": [
      "dN/dt = rN(1 + N/K)",
      "dN/dt = rK/N",
      "dN/dt = rN²"
    ],
    "variableAnswer": "O fator (1 − N/K) reduz o crescimento à medida que N se aproxima de K.",
    "scenario": "Qual equação representa o crescimento populacional limitado pela capacidade de suporte?"
  },
  {
    "moduleId": 9,
    "title": "Tempo de duplicação aproximado",
    "formula": "t₂ ≈ 0,693 / r",
    "variables": "t₂ é tempo de duplicação; r é taxa contínua de crescimento.",
    "desc": "Memorizar a relação aproximada de duplicação no crescimento exponencial.",
    "wrong": [
      "t₂ ≈ r / 0,693",
      "t₂ ≈ 2r",
      "t₂ ≈ 1 / (2r)"
    ],
    "variableAnswer": "No crescimento exponencial contínuo, o tempo de duplicação é ln(2)/r, aproximadamente 0,693/r.",
    "scenario": "Qual relação estima o tempo para uma população duplicar no modelo exponencial?"
  },
  {
    "moduleId": 10,
    "title": "Eficiência ecológica",
    "formula": "E = (energia nível seguinte / energia nível anterior) × 100%",
    "variables": "E é eficiência de transferência entre níveis tróficos.",
    "desc": "Memorizar a porcentagem de energia transferida entre níveis tróficos.",
    "wrong": [
      "E = energia anterior / seguinte × 100%",
      "E = energia seguinte × anterior",
      "E = energia anterior − seguinte"
    ],
    "variableAnswer": "A eficiência é a energia incorporada pelo nível seguinte dividida pela energia disponível no nível anterior.",
    "scenario": "Qual fórmula calcula a eficiência de transferência de energia entre níveis tróficos?"
  },
  {
    "moduleId": 10,
    "title": "Regra aproximada dos 10%",
    "formula": "Eseguinte ≈ 0,1 × Eanterior",
    "variables": "Apenas uma fração da energia de um nível trófico fica disponível ao próximo; 10% é uma aproximação didática.",
    "desc": "Memorizar a aproximação clássica de transferência de energia.",
    "wrong": [
      "Eseguinte ≈ 10 × Eanterior",
      "Eseguinte ≈ Eanterior",
      "Eseguinte ≈ 0,9 × Eanterior"
    ],
    "variableAnswer": "A regra didática aproximada indica cerca de 10% de transferência entre níveis.",
    "scenario": "Qual relação representa a regra aproximada dos 10%?"
  },
  {
    "moduleId": 10,
    "title": "Produtividade secundária líquida",
    "formula": "PSL = assimilação − respiração",
    "variables": "PSL é produtividade secundária líquida; assimilação é energia assimilada pelo consumidor.",
    "desc": "Reconhecer a energia incorporada em biomassa pelos consumidores.",
    "wrong": [
      "PSL = assimilação + respiração",
      "PSL = respiração − assimilação",
      "PSL = assimilação × respiração"
    ],
    "variableAnswer": "A produtividade líquida do consumidor é a energia assimilada menos a gasta na respiração.",
    "scenario": "Qual relação expressa a produtividade secundária líquida?"
  },
  {
    "moduleId": 10,
    "title": "Balanço hídrico vegetal",
    "formula": "Balanço = absorção − transpiração",
    "variables": "Compara água absorvida pelas raízes com água perdida por transpiração.",
    "desc": "Memorizar o balanço simplificado entre entrada e perda de água na planta.",
    "wrong": [
      "Balanço = absorção + transpiração",
      "Balanço = transpiração − absorção",
      "Balanço = absorção × transpiração"
    ],
    "variableAnswer": "O balanço hídrico simplificado é a água absorvida menos a perdida.",
    "scenario": "Qual relação compara entrada e perda de água em uma planta?"
  },
  {
    "moduleId": 10,
    "title": "Índice de área foliar",
    "formula": "IAF = área foliar / área do solo",
    "variables": "IAF compara a área total de folhas com a área de solo ocupada pela vegetação.",
    "desc": "Reconhecer o índice de área foliar.",
    "wrong": [
      "IAF = área do solo / área foliar",
      "IAF = área foliar × área do solo",
      "IAF = área foliar + área do solo"
    ],
    "variableAnswer": "O índice de área foliar é a área de folhas por área de solo.",
    "scenario": "Qual índice relaciona superfície de folhas e superfície de solo?"
  },
  {
    "moduleId": 11,
    "title": "Débito cardíaco",
    "formula": "DC = FC × VS",
    "variables": "DC é débito cardíaco; FC é frequência cardíaca; VS é volume sistólico.",
    "desc": "Memorizar a relação entre frequência e volume bombeado por batimento.",
    "wrong": [
      "DC = FC / VS",
      "DC = FC + VS",
      "DC = VS / FC"
    ],
    "variableAnswer": "Débito cardíaco é frequência cardíaca multiplicada pelo volume sistólico.",
    "scenario": "Qual fórmula estima o volume de sangue bombeado pelo coração por minuto?"
  },
  {
    "moduleId": 11,
    "title": "Ventilação-minuto",
    "formula": "VE = VC × FR",
    "variables": "VE é ventilação-minuto; VC é volume corrente; FR é frequência respiratória.",
    "desc": "Reconhecer a relação entre volume por ciclo e ciclos por minuto.",
    "wrong": [
      "VE = VC / FR",
      "VE = VC + FR",
      "VE = FR / VC"
    ],
    "variableAnswer": "Ventilação-minuto é volume corrente multiplicado pela frequência respiratória.",
    "scenario": "Qual fórmula estima o volume de ar ventilado por minuto?"
  },
  {
    "moduleId": 11,
    "title": "Índice de massa corporal como relação fisiológica",
    "formula": "IMC = massa / altura²",
    "variables": "Massa é expressa em kg e altura em metros; é um indicador populacional limitado, não diagnóstico individual.",
    "desc": "Memorizar a expressão matemática do IMC e suas unidades.",
    "wrong": [
      "IMC = massa × altura²",
      "IMC = altura² / massa",
      "IMC = massa / altura"
    ],
    "variableAnswer": "O IMC é calculado pela massa em quilogramas dividida pelo quadrado da altura em metros.",
    "scenario": "Qual expressão define o índice de massa corporal?"
  },
  {
    "moduleId": 11,
    "title": "Frequência cardíaca",
    "formula": "FC = batimentos / tempo",
    "variables": "FC é número de batimentos dividido pelo intervalo de tempo, usualmente em minutos.",
    "desc": "Memorizar a definição quantitativa de frequência cardíaca.",
    "wrong": [
      "FC = tempo / batimentos",
      "FC = batimentos × tempo",
      "FC = batimentos + tempo"
    ],
    "variableAnswer": "Frequência é número de eventos por unidade de tempo.",
    "scenario": "Qual relação define batimentos por minuto?"
  },
  {
    "moduleId": 11,
    "title": "Fração de ejeção",
    "formula": "FE = (VS / VDF) × 100%",
    "variables": "FE é fração de ejeção; VS é volume sistólico; VDF é volume diastólico final.",
    "desc": "Reconhecer a relação entre volume ejetado e volume ventricular ao final da diástole.",
    "wrong": [
      "FE = (VDF / VS) × 100%",
      "FE = VS × VDF",
      "FE = VDF − VS"
    ],
    "variableAnswer": "A fração de ejeção é a porcentagem do volume diastólico final ejetada a cada batimento.",
    "scenario": "Qual fórmula expressa a fração do volume ventricular ejetada em um batimento?"
  },
  {
    "moduleId": 12,
    "title": "Aumento total do microscópio",
    "formula": "Atotal = Aocular × Aobjetiva",
    "variables": "Aocular é aumento da lente ocular; Aobjetiva é aumento da objetiva.",
    "desc": "Memorizar o cálculo do aumento total do microscópio óptico.",
    "wrong": [
      "Atotal = Aocular + Aobjetiva",
      "Atotal = Aocular / Aobjetiva",
      "Atotal = Aocular − Aobjetiva"
    ],
    "variableAnswer": "O aumento total é o produto dos aumentos da ocular e da objetiva.",
    "scenario": "Qual relação calcula o aumento total indicado pelo microscópio?"
  },
  {
    "moduleId": 12,
    "title": "Escala de uma imagem",
    "formula": "Escala = medida da imagem / medida real",
    "variables": "As duas medidas devem estar na mesma unidade.",
    "desc": "Reconhecer a relação entre representação e dimensão real.",
    "wrong": [
      "Escala = medida real / imagem",
      "Escala = imagem × real",
      "Escala = imagem + real"
    ],
    "variableAnswer": "A escala compara o tamanho representado com o tamanho real.",
    "scenario": "Qual relação permite interpretar a escala de uma micrografia?"
  },
  {
    "moduleId": 12,
    "title": "Taxa de mutação",
    "formula": "μ = mutações / cópias por geração",
    "variables": "μ representa taxa de mutação por cópia e por geração, em uma definição simplificada.",
    "desc": "Memorizar a ideia de taxa de mutação por unidade de replicação e geração.",
    "wrong": [
      "μ = cópias / mutações",
      "μ = mutações × gerações",
      "μ = mutações + cópias"
    ],
    "variableAnswer": "A taxa é expressa como número de mutações por cópia considerada em cada geração.",
    "scenario": "Qual relação representa a taxa de mutação em uma formulação simplificada?"
  },
  {
    "moduleId": 12,
    "title": "Equação de seleção: aptidão relativa",
    "formula": "w = sucesso reprodutivo relativo",
    "variables": "w representa aptidão biológica relativa, expressa pela contribuição reprodutiva de um genótipo em relação à referência da população.",
    "desc": "Reconhecer os componentes gerais da aptidão biológica.",
    "wrong": [
      "w = contribuição reprodutiva / referência",
      "w = número de descendentes viáveis / referência",
      "w = frequência alélica + mutação"
    ],
    "variableAnswer": "A aptidão biológica é medida pela contribuição reprodutiva relativa; compara o sucesso reprodutivo de um genótipo com a referência adotada.",
    "scenario": "Qual relação conceitual reúne sobrevivência e sucesso reprodutivo?"
  },
  {
    "moduleId": 12,
    "title": "Índice de diversidade de Simpson",
    "formula": "D = 1 − Σ(pi²)",
    "variables": "pi é a proporção de indivíduos pertencentes à espécie i; a forma 1−Σpi² é uma das convenções do índice.",
    "desc": "Memorizar uma forma comum do índice de diversidade de Simpson.",
    "wrong": [
      "D = Σpi",
      "D = 1 + Σ(pi²)",
      "D = Σ(1/pi)"
    ],
    "variableAnswer": "Uma forma do índice de Simpson é um menos a soma dos quadrados das proporções das espécies.",
    "scenario": "Qual expressão representa uma forma comum do índice de diversidade de Simpson?"
  },
  {
    "moduleId": 1,
    "title": "Percentual em massa",
    "formula": "% (m/m) = (massa do soluto / massa da solução) × 100",
    "variables": "As massas do soluto e da solução devem estar na mesma unidade.",
    "desc": "Memorizar a expressão do título percentual massa por massa.",
    "wrong": [
      "% (m/m) = (massa solução / massa soluto) × 100",
      "% (m/m) = massa soluto × massa solução",
      "% (m/m) = massa soluto / volume × 100"
    ],
    "variableAnswer": "O percentual m/m é a massa do soluto dividida pela massa total da solução, vezes 100.",
    "scenario": "Qual relação representa a concentração percentual massa/massa?"
  },
  {
    "moduleId": 1,
    "title": "Diluição de soluções",
    "formula": "C₁V₁ = C₂V₂",
    "variables": "C₁ e V₁ são concentração e volume iniciais; C₂ e V₂ são finais.",
    "desc": "Reconhecer a relação de diluição, útil em preparo de soluções biológicas.",
    "wrong": [
      "C₁/V₁ = C₂/V₂",
      "C₁V₂ = C₂V₁",
      "C₁ + V₁ = C₂ + V₂"
    ],
    "variableAnswer": "Na diluição, a quantidade de soluto se conserva: concentração inicial vezes volume inicial igual à final vezes volume final.",
    "scenario": "Qual fórmula relaciona concentração e volume antes e depois de uma diluição?"
  },
  {
    "moduleId": 2,
    "title": "pH",
    "formula": "pH = −log[H⁺]",
    "variables": "[H⁺] é concentração de íons hidrogênio em mol/L.",
    "desc": "Memorizar a definição de pH, relevante para enzimas e sistemas biológicos.",
    "wrong": [
      "pH = log[H⁺]",
      "pH = −[H⁺]",
      "pH = 1/[H⁺]"
    ],
    "variableAnswer": "O pH é o logaritmo decimal negativo da concentração de íons hidrogênio.",
    "scenario": "Qual expressão define o pH?"
  },
  {
    "moduleId": 3,
    "title": "Pressão osmótica",
    "formula": "π = iCRT",
    "variables": "π é pressão osmótica; i fator de van’t Hoff; C concentração molar; R constante dos gases; T temperatura absoluta.",
    "desc": "Reconhecer a relação da pressão osmótica de soluções diluídas.",
    "wrong": [
      "π = iC/RT",
      "π = CRT/i",
      "π = i + C + R + T"
    ],
    "variableAnswer": "A pressão osmótica é proporcional ao fator de dissociação, concentração e temperatura absoluta.",
    "scenario": "Qual relação estima a pressão osmótica de uma solução diluída?"
  },
  {
    "moduleId": 4,
    "title": "Equação geral da quimiossíntese",
    "formula": "CO₂ + substâncias inorgânicas reduzidas → matéria orgânica",
    "variables": "Bactérias quimiossintetizantes usam energia de reações químicas inorgânicas para fixar carbono.",
    "desc": "Memorizar a relação geral da quimiossíntese, sem uma equação única universal.",
    "wrong": [
      "matéria orgânica + luz → CO₂",
      "CO₂ + O₂ → glicose sem energia",
      "água + luz → ATP apenas"
    ],
    "variableAnswer": "A quimiossíntese usa energia química da oxidação de compostos inorgânicos para produzir matéria orgânica a partir de CO₂.",
    "scenario": "Qual relação geral representa a quimiossíntese?"
  },
  {
    "moduleId": 5,
    "title": "Fermentação e ATP",
    "formula": "Saldo ≈ 2 ATP / glicose",
    "variables": "A fermentação obtém ATP pela glicólise, com saldo líquido de aproximadamente dois ATP por glicose.",
    "desc": "Memorizar o rendimento energético líquido típico da fermentação.",
    "wrong": [
      "Saldo ≈ 36 ATP / glicose",
      "Saldo ≈ 0 ATP / glicose",
      "Saldo ≈ 12 ATP / glicose"
    ],
    "variableAnswer": "O rendimento líquido da fermentação é de cerca de dois ATP por glicose.",
    "scenario": "Qual é o saldo energético clássico da fermentação por glicose?"
  },
  {
    "moduleId": 6,
    "title": "Replicação semiconservativa",
    "formula": "DNA antigo + DNA novo → 2 moléculas semiconservativas",
    "variables": "Cada molécula-filha conserva uma fita parental e contém uma fita recém-sintetizada.",
    "desc": "Memorizar o princípio semiconservativo da replicação.",
    "wrong": [
      "DNA antigo → 2 moléculas totalmente novas",
      "DNA antigo + RNA → uma molécula",
      "DNA é copiado sem fita molde"
    ],
    "variableAnswer": "Cada DNA formado possui uma fita original e uma fita nova.",
    "scenario": "Qual descrição representa a replicação semiconservativa?"
  },
  {
    "moduleId": 7,
    "title": "Probabilidade de eventos independentes",
    "formula": "P(A ∩ B) = P(A) × P(B)",
    "variables": "A e B são eventos independentes.",
    "desc": "Reconhecer a regra do produto para eventos independentes em genética.",
    "wrong": [
      "P(A ∩ B) = P(A) + P(B)",
      "P(A ∩ B) = P(A) / P(B)",
      "P(A ∩ B) = P(A) − P(B)"
    ],
    "variableAnswer": "Para eventos independentes, a probabilidade conjunta é o produto das probabilidades.",
    "scenario": "Qual relação é usada para combinar probabilidades de eventos independentes?"
  },
  {
    "moduleId": 8,
    "title": "Frequência genotípica",
    "formula": "f(genótipo) = indivíduos com genótipo / total de indivíduos",
    "variables": "A frequência genotípica é uma proporção da população amostrada.",
    "desc": "Memorizar como calcular frequência de um genótipo observado.",
    "wrong": [
      "f = total / indivíduos com genótipo",
      "f = indivíduos × total",
      "f = indivíduos + total"
    ],
    "variableAnswer": "A frequência é o número de indivíduos com o genótipo dividido pelo total amostrado.",
    "scenario": "Qual relação calcula a frequência observada de um genótipo?"
  },
  {
    "moduleId": 9,
    "title": "Taxa de crescimento populacional",
    "formula": "r = (Nfinal − Ninicial) / Ninicial",
    "variables": "r é variação relativa no intervalo considerado; pode ser expressa em porcentagem multiplicando por 100.",
    "desc": "Memorizar uma forma simples de taxa relativa de crescimento.",
    "wrong": [
      "r = Ninicial / Nfinal",
      "r = Nfinal × Ninicial",
      "r = Nfinal + Ninicial"
    ],
    "variableAnswer": "A taxa relativa compara a variação do tamanho populacional com o tamanho inicial.",
    "scenario": "Qual expressão calcula a variação relativa de uma população?"
  },
  {
    "moduleId": 10,
    "title": "Cadeia alimentar e energia",
    "formula": "Energia disponível diminui a cada nível trófico",
    "variables": "A transferência é ineficiente; parte da energia é dissipada como calor e usada no metabolismo.",
    "desc": "Memorizar o sentido geral do fluxo de energia nos níveis tróficos.",
    "wrong": [
      "Energia aumenta a cada nível",
      "Energia é reciclada integralmente",
      "Energia flui dos decompositores aos produtores apenas"
    ],
    "variableAnswer": "A energia disponível tende a diminuir nos níveis tróficos sucessivos.",
    "scenario": "Qual relação qualitativa descreve a energia ao longo de uma cadeia alimentar?"
  },
  {
    "moduleId": 11,
    "title": "Frequência respiratória",
    "formula": "FR = ciclos respiratórios / minuto",
    "variables": "FR é número de ciclos respiratórios por minuto.",
    "desc": "Memorizar a definição quantitativa de frequência respiratória.",
    "wrong": [
      "FR = minuto / ciclos",
      "FR = ciclos × minuto",
      "FR = ciclos + minuto"
    ],
    "variableAnswer": "Frequência respiratória é o número de ciclos respiratórios por minuto.",
    "scenario": "Qual relação define a frequência respiratória?"
  },
  {
    "moduleId": 12,
    "title": "Taxa de crescimento específico",
    "formula": "k = (ln N₂ − ln N₁) / Δt",
    "variables": "k é taxa específica; N₁ e N₂ são tamanhos populacionais nos tempos inicial e final.",
    "desc": "Reconhecer a taxa específica de crescimento em intervalo de tempo.",
    "wrong": [
      "k = (N₂ − N₁) × Δt",
      "k = Δt / (ln N₂ − ln N₁)",
      "k = ln(N₁ + N₂)"
    ],
    "variableAnswer": "A taxa específica é a variação do logaritmo natural do tamanho populacional dividida pelo tempo.",
    "scenario": "Qual relação expressa a taxa específica de crescimento entre duas medições?"
  }
];
const bioShuffle = a => a;
window.bioLessons = bioRawLessons.map((l) => {
  const wrong = l.wrong;
  const formulaOptions = [l.formula, ...wrong.slice(0,3)];
  const meaningOptions = [l.variableAnswer, `A relação inversa entre as grandezas indicadas.`, `A soma direta das variáveis, sem considerar proporções.`, `O produto das variáveis, sem considerar suas unidades.`];
  return {...l, questions:[
    {type:'recognize', prompt:`Qual expressão corresponde a: ${l.desc}`, options:formulaOptions, answer:l.formula, explain:`A relação correta é ${l.formula}. ${l.variables}`},
    {type:'fill', prompt:`Complete a relação: ${l.title}. Escreva a expressão completa.`, answer:l.formula, explain:`A fórmula que você deve memorizar é ${l.formula}. ${l.variables}`},
    {type:'match', prompt:`Associe a fórmula ${l.formula} ao seu significado.`, options:meaningOptions, answer:l.variableAnswer, explain:l.variableAnswer},
    {type:'identify', prompt:`Identifique a expressão correta para: ${l.desc}`, options:[...formulaOptions].reverse(), answer:l.formula, explain:`A expressão correta é ${l.formula}. ${l.variables}`},
    {type:'apply', prompt:l.scenario, options:[l.formula,...wrong.slice(0,3)], answer:l.formula, explain:`A situação descreve ${l.title.toLowerCase()}. A relação correspondente é ${l.formula}. ${l.variables}`}
  ]};
});
