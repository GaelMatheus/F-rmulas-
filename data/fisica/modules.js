window.physicsModules = [
  {
    "id": 1,
    "title": "Grandezas, unidades e vetores",
    "status": "available",
    "description": "SI, conversões, notação científica e decomposição vetorial."
  },
  {
    "id": 2,
    "title": "Cinemática: movimento uniforme",
    "status": "locked",
    "description": "Posição, deslocamento, velocidade média e movimento uniforme."
  },
  {
    "id": 3,
    "title": "Cinemática: movimento variado",
    "status": "locked",
    "description": "Aceleração, MUV, equação de Torricelli e gráficos."
  },
  {
    "id": 4,
    "title": "Lançamentos e movimento circular",
    "status": "locked",
    "description": "Queda livre, lançamentos horizontal/oblíquo e MCU."
  },
  {
    "id": 5,
    "title": "Dinâmica e leis de Newton",
    "status": "locked",
    "description": "Força resultante, peso, atrito, mola e planos inclinados."
  },
  {
    "id": 6,
    "title": "Trabalho, energia e potência",
    "status": "locked",
    "description": "Trabalho, energias cinética e potencial, conservação e potência."
  },
  {
    "id": 7,
    "title": "Quantidade de movimento e colisões",
    "status": "locked",
    "description": "Momento linear, impulso e conservação nas colisões."
  },
  {
    "id": 8,
    "title": "Gravitação e movimentos orbitais",
    "status": "locked",
    "description": "Gravitação universal, campo gravitacional e órbitas."
  },
  {
    "id": 9,
    "title": "Estática e hidrostática",
    "status": "locked",
    "description": "Equilíbrio, pressão, densidade, empuxo e vasos comunicantes."
  },
  {
    "id": 10,
    "title": "Termologia e calorimetria",
    "status": "locked",
    "description": "Temperatura, dilatação, calor sensível/latente e trocas térmicas."
  },
  {
    "id": 11,
    "title": "Termodinâmica e gases",
    "status": "locked",
    "description": "Gás ideal, transformações, trabalho e primeira lei."
  },
  {
    "id": 12,
    "title": "Ondulatória e acústica",
    "status": "locked",
    "description": "Ondas, frequência, período, velocidade, som e efeito Doppler."
  },
  {
    "id": 13,
    "title": "Óptica geométrica",
    "status": "locked",
    "description": "Reflexão, refração, espelhos, lentes e aumento."
  },
  {
    "id": 14,
    "title": "Eletrostática e campo elétrico",
    "status": "locked",
    "description": "Carga, força elétrica, campo, potencial e energia."
  },
  {
    "id": 15,
    "title": "Eletrodinâmica e circuitos",
    "status": "locked",
    "description": "Corrente, tensão, resistência, potência e associações."
  },
  {
    "id": 16,
    "title": "Magnetismo e indução",
    "status": "locked",
    "description": "Força magnética, fluxo, indução e transformadores."
  },
  {
    "id": 17,
    "title": "Física moderna",
    "status": "locked",
    "description": "Fótons, efeito fotoelétrico, relatividade e radioatividade."
  }
];

const physicsRawLessons = [
  {
    "moduleId": 1,
    "title": "Velocidade média escalar",
    "formula": "vₘ = Δs / Δt",
    "variables": "vₘ é velocidade média; Δs é deslocamento escalar; Δt é intervalo de tempo.",
    "desc": "Reconhecer velocidade média como deslocamento dividido pelo tempo.",
    "wrong": [
      "vₘ = Δt / Δs",
      "vₘ = Δs × Δt",
      "vₘ = Δs + Δt"
    ],
    "variableAnswer": "Velocidade média é a razão entre deslocamento e intervalo de tempo.",
    "scenario": "Qual relação representa a velocidade média em um trajeto?"
  },
  {
    "moduleId": 1,
    "title": "Aceleração média",
    "formula": "aₘ = Δv / Δt",
    "variables": "aₘ é aceleração média; Δv é variação da velocidade; Δt é intervalo de tempo.",
    "desc": "Reconhecer aceleração média como variação da velocidade por tempo.",
    "wrong": [
      "aₘ = Δt / Δv",
      "aₘ = Δv × Δt",
      "aₘ = Δv + Δt"
    ],
    "variableAnswer": "Aceleração média mede quanto a velocidade varia por unidade de tempo.",
    "scenario": "Qual expressão relaciona a variação da velocidade ao tempo?"
  },
  {
    "moduleId": 1,
    "title": "Conversão de km/h para m/s",
    "formula": "v(m/s) = v(km/h) / 3,6",
    "variables": "Divide-se o valor em km/h por 3,6 para obter m/s.",
    "desc": "Memorizar o fator de conversão de velocidade de km/h para m/s.",
    "wrong": [
      "v(m/s) = v(km/h) × 3,6",
      "v(m/s) = v(km/h) / 36",
      "v(m/s) = v(km/h) + 3,6"
    ],
    "variableAnswer": "Para converter km/h em m/s, divide-se por 3,6.",
    "scenario": "Qual regra converte uma velocidade expressa em km/h para m/s?"
  },
  {
    "moduleId": 1,
    "title": "Conversão de m/s para km/h",
    "formula": "v(km/h) = v(m/s) × 3,6",
    "variables": "Multiplica-se o valor em m/s por 3,6 para obter km/h.",
    "desc": "Memorizar o fator de conversão de m/s para km/h.",
    "wrong": [
      "v(km/h) = v(m/s) / 3,6",
      "v(km/h) = v(m/s) × 60",
      "v(km/h) = v(m/s) + 3,6"
    ],
    "variableAnswer": "Para converter m/s em km/h, multiplica-se por 3,6.",
    "scenario": "Qual regra converte uma velocidade expressa em m/s para km/h?"
  },
  {
    "moduleId": 1,
    "title": "Componente de vetor",
    "formula": "Aₓ = A · cos θ; Aᵧ = A · sen θ",
    "variables": "A é o módulo do vetor; θ é o ângulo com o eixo x; Aₓ e Aᵧ são componentes.",
    "desc": "Reconhecer a decomposição de um vetor em componentes cartesianas.",
    "wrong": [
      "Aₓ = A · sen θ; Aᵧ = A · cos θ",
      "Aₓ = A + cos θ; Aᵧ = A + sen θ",
      "Aₓ = A / cos θ; Aᵧ = A / sen θ"
    ],
    "variableAnswer": "As componentes são projeções do vetor: cosseno no eixo adjacente e seno no eixo oposto.",
    "scenario": "Qual par de relações decompõe um vetor de módulo A em x e y?"
  },
  {
    "moduleId": 2,
    "title": "Função horária do MU",
    "formula": "s = s₀ + v · t",
    "variables": "s é posição final; s₀ posição inicial; v velocidade constante; t tempo.",
    "desc": "Memorizar a função horária da posição no movimento uniforme.",
    "wrong": [
      "s = s₀ + a · t²",
      "s = v₀ + t / v",
      "s = s₀ · v · t"
    ],
    "variableAnswer": "No MU, a posição varia linearmente com o tempo, com velocidade constante.",
    "scenario": "Qual equação descreve a posição de um móvel com velocidade constante?"
  },
  {
    "moduleId": 2,
    "title": "Deslocamento escalar",
    "formula": "Δs = s − s₀",
    "variables": "Δs é deslocamento; s é posição final; s₀ é posição inicial.",
    "desc": "Reconhecer deslocamento como diferença entre posição final e inicial.",
    "wrong": [
      "Δs = s + s₀",
      "Δs = s · s₀",
      "Δs = s₀ − s"
    ],
    "variableAnswer": "Deslocamento escalar é a posição final menos a posição inicial.",
    "scenario": "Qual relação determina a variação de posição de um móvel?"
  },
  {
    "moduleId": 2,
    "title": "Velocidade no MU",
    "formula": "v = Δs / Δt = constante",
    "variables": "v é velocidade; Δs é deslocamento; Δt é intervalo de tempo.",
    "desc": "Identificar a constância da velocidade no movimento uniforme.",
    "wrong": [
      "v = Δt / Δs",
      "v = Δs · Δt",
      "v = Δs / Δt²"
    ],
    "variableAnswer": "No movimento uniforme, a velocidade permanece constante durante o intervalo.",
    "scenario": "Qual característica matemática define a velocidade no MU?"
  },
  {
    "moduleId": 3,
    "title": "Aceleração no MUV",
    "formula": "a = Δv / Δt",
    "variables": "a é aceleração constante; Δv é variação da velocidade; Δt é intervalo.",
    "desc": "Reconhecer a aceleração constante do movimento uniformemente variado.",
    "wrong": [
      "a = Δt / Δv",
      "a = Δv · Δt",
      "a = Δv / Δt²"
    ],
    "variableAnswer": "No MUV, a aceleração é constante e corresponde à variação da velocidade por tempo.",
    "scenario": "Qual relação define a aceleração de um MUV?"
  },
  {
    "moduleId": 3,
    "title": "Velocidade no MUV",
    "formula": "v = v₀ + a · t",
    "variables": "v é velocidade final; v₀ inicial; a aceleração; t tempo.",
    "desc": "Memorizar a função horária da velocidade no MUV.",
    "wrong": [
      "v = v₀ + a · t²",
      "v = v₀ · a · t",
      "v = v₀ + t / a"
    ],
    "variableAnswer": "A velocidade no MUV é a velocidade inicial somada à aceleração vezes o tempo.",
    "scenario": "Qual equação fornece a velocidade após certo tempo em aceleração constante?"
  },
  {
    "moduleId": 3,
    "title": "Posição no MUV",
    "formula": "s = s₀ + v₀t + (a · t²)/2",
    "variables": "s é posição; s₀ posição inicial; v₀ velocidade inicial; a aceleração; t tempo.",
    "desc": "Memorizar a função horária da posição no MUV.",
    "wrong": [
      "s = s₀ + v₀t + a·t",
      "s = s₀ + v₀t² + a/2",
      "s = s₀ + (a·t)/2"
    ],
    "variableAnswer": "A posição no MUV inclui posição inicial, termo da velocidade inicial e termo quadrático da aceleração.",
    "scenario": "Qual expressão descreve a posição em um movimento com aceleração constante?"
  },
  {
    "moduleId": 3,
    "title": "Equação de Torricelli",
    "formula": "v² = v₀² + 2a · Δs",
    "variables": "v é velocidade final; v₀ inicial; a aceleração; Δs deslocamento.",
    "desc": "Reconhecer a equação de Torricelli, que não utiliza o tempo.",
    "wrong": [
      "v² = v₀² + a·Δs",
      "v = v₀² + 2a·Δs",
      "v² = v₀² + 2a/Δs"
    ],
    "variableAnswer": "Torricelli relaciona velocidades, aceleração e deslocamento sem envolver o tempo.",
    "scenario": "Qual equação usar quando se relacionam velocidades e deslocamento sem conhecer o tempo?"
  },
  {
    "moduleId": 3,
    "title": "Deslocamento no MUV pela velocidade média",
    "formula": "Δs = ((v₀ + v)/2) · t",
    "variables": "v₀ e v são velocidades inicial e final; t é tempo; Δs é deslocamento.",
    "desc": "Memorizar o deslocamento como velocidade média vezes tempo no MUV.",
    "wrong": [
      "Δs = (v₀ + v) · t",
      "Δs = ((v₀ − v)/2) · t",
      "Δs = (v₀ · v)/2 · t"
    ],
    "variableAnswer": "No MUV, a velocidade média é a média aritmética entre as velocidades inicial e final.",
    "scenario": "Qual relação permite obter o deslocamento a partir das velocidades inicial e final e do tempo?"
  },
  {
    "moduleId": 4,
    "title": "Queda livre: velocidade",
    "formula": "v = g · t",
    "variables": "v é velocidade após tempo t; g é aceleração da gravidade; t é tempo, partindo do repouso.",
    "desc": "Reconhecer a velocidade na queda livre a partir do repouso.",
    "wrong": [
      "v = g / t",
      "v = g · t²",
      "v = t / g"
    ],
    "variableAnswer": "Na queda livre a partir do repouso, a velocidade cresce proporcionalmente ao tempo.",
    "scenario": "Qual expressão representa a velocidade de um corpo em queda livre partindo do repouso?"
  },
  {
    "moduleId": 4,
    "title": "Queda livre: altura percorrida",
    "formula": "h = (g · t²)/2",
    "variables": "h é distância vertical percorrida; g gravidade; t tempo, partindo do repouso.",
    "desc": "Memorizar a distância de queda livre a partir do repouso.",
    "wrong": [
      "h = g · t",
      "h = 2g · t²",
      "h = g / (2t²)"
    ],
    "variableAnswer": "A distância de queda livre a partir do repouso é metade de g vezes o tempo ao quadrado.",
    "scenario": "Qual expressão relaciona altura de queda e tempo para um corpo solto do repouso?"
  },
  {
    "moduleId": 4,
    "title": "Alcance horizontal",
    "formula": "A = vₓ · t",
    "variables": "A é alcance horizontal; vₓ é velocidade horizontal constante; t é tempo de voo.",
    "desc": "Reconhecer o alcance horizontal como velocidade horizontal vezes tempo.",
    "wrong": [
      "A = vₓ / t",
      "A = vₓ · t²",
      "A = vₓ + t"
    ],
    "variableAnswer": "No lançamento horizontal, a componente horizontal da velocidade é constante.",
    "scenario": "Qual relação fornece o alcance horizontal de um lançamento?"
  },
  {
    "moduleId": 4,
    "title": "Velocidade angular",
    "formula": "ω = Δθ / Δt",
    "variables": "ω é velocidade angular; Δθ é deslocamento angular; Δt é intervalo de tempo.",
    "desc": "Memorizar a definição de velocidade angular.",
    "wrong": [
      "ω = Δt / Δθ",
      "ω = Δθ · Δt",
      "ω = Δθ / Δt²"
    ],
    "variableAnswer": "Velocidade angular é deslocamento angular por intervalo de tempo.",
    "scenario": "Qual expressão define a velocidade angular?"
  },
  {
    "moduleId": 4,
    "title": "Relação entre velocidade linear e angular",
    "formula": "v = ω · R",
    "variables": "v é velocidade linear; ω velocidade angular; R raio da trajetória.",
    "desc": "Reconhecer a relação entre velocidade linear e angular no MCU.",
    "wrong": [
      "v = ω / R",
      "v = ω · R²",
      "v = R / ω"
    ],
    "variableAnswer": "A velocidade linear tangencial é o produto da velocidade angular pelo raio.",
    "scenario": "Qual relação conecta velocidade tangencial, velocidade angular e raio?"
  },
  {
    "moduleId": 4,
    "title": "Período e frequência",
    "formula": "f = 1 / T",
    "variables": "f é frequência; T é período.",
    "desc": "Memorizar a relação inversa entre frequência e período.",
    "wrong": [
      "f = T",
      "f = 2T",
      "f = 1 / T²"
    ],
    "variableAnswer": "Frequência é o inverso do período.",
    "scenario": "Qual relação conecta o número de ciclos por segundo ao período de um ciclo?"
  },
  {
    "moduleId": 4,
    "title": "Aceleração centrípeta",
    "formula": "a꜀ = v² / R = ω²R",
    "variables": "a꜀ é aceleração centrípeta; v velocidade tangencial; R raio; ω velocidade angular.",
    "desc": "Reconhecer as formas equivalentes da aceleração centrípeta.",
    "wrong": [
      "a꜀ = vR²",
      "a꜀ = v / R²",
      "a꜀ = ωR"
    ],
    "variableAnswer": "A aceleração centrípeta aponta para o centro e tem módulo v²/R ou ω²R.",
    "scenario": "Qual relação representa a aceleração dirigida ao centro em uma trajetória circular?"
  },
  {
    "moduleId": 5,
    "title": "Segunda lei de Newton",
    "formula": "Fᵣ = m · a",
    "variables": "Fᵣ é força resultante; m massa; a aceleração.",
    "desc": "Memorizar a relação fundamental da dinâmica.",
    "wrong": [
      "Fᵣ = m / a",
      "Fᵣ = a / m",
      "Fᵣ = m + a"
    ],
    "variableAnswer": "A força resultante é o produto da massa pela aceleração.",
    "scenario": "Qual lei relaciona força resultante, massa e aceleração?"
  },
  {
    "moduleId": 5,
    "title": "Peso",
    "formula": "P = m · g",
    "variables": "P é peso; m massa; g aceleração gravitacional local.",
    "desc": "Distinguir peso de massa pela relação peso igual a massa vezes gravidade.",
    "wrong": [
      "P = m / g",
      "P = g / m",
      "P = m + g"
    ],
    "variableAnswer": "Peso é a força gravitacional sobre um corpo.",
    "scenario": "Qual expressão calcula a intensidade da força peso?"
  },
  {
    "moduleId": 5,
    "title": "Força de atrito cinético",
    "formula": "Fₐₜ = μ · N",
    "variables": "Fₐₜ é atrito cinético; μ coeficiente de atrito; N força normal.",
    "desc": "Reconhecer a relação do atrito cinético em superfícies secas no modelo usual.",
    "wrong": [
      "Fₐₜ = μ / N",
      "Fₐₜ = μ + N",
      "Fₐₜ = N / μ"
    ],
    "variableAnswer": "O módulo do atrito cinético é o coeficiente de atrito vezes a normal.",
    "scenario": "Qual relação representa o atrito cinético no modelo escolar?"
  },
  {
    "moduleId": 5,
    "title": "Força elástica",
    "formula": "Fₑₗ = −k · x",
    "variables": "k é constante elástica; x deformação; sinal negativo indica sentido restaurador.",
    "desc": "Memorizar a lei de Hooke para a força elástica.",
    "wrong": [
      "Fₑₗ = k / x",
      "Fₑₗ = k · x²",
      "Fₑₗ = −x / k"
    ],
    "variableAnswer": "A força elástica é proporcional à deformação e oposta a ela.",
    "scenario": "Qual expressão representa a força restauradora de uma mola ideal?"
  },
  {
    "moduleId": 5,
    "title": "Força centrípeta",
    "formula": "F꜀ = m · v² / R",
    "variables": "m é massa; v velocidade tangencial; R raio da trajetória.",
    "desc": "Reconhecer a força resultante centrípeta no movimento circular.",
    "wrong": [
      "F꜀ = m · v / R",
      "F꜀ = m · R / v²",
      "F꜀ = m · v² · R"
    ],
    "variableAnswer": "A resultante centrípeta tem módulo m vezes velocidade ao quadrado dividido pelo raio.",
    "scenario": "Qual expressão relaciona massa, velocidade e raio para o movimento circular?"
  },
  {
    "moduleId": 6,
    "title": "Trabalho de força constante",
    "formula": "τ = F · d · cos θ",
    "variables": "τ é trabalho; F força; d deslocamento; θ ângulo entre força e deslocamento.",
    "desc": "Memorizar o trabalho de uma força constante.",
    "wrong": [
      "τ = F · d · sen θ",
      "τ = F / d · cos θ",
      "τ = F · d · θ"
    ],
    "variableAnswer": "O trabalho é o produto escalar entre força e deslocamento.",
    "scenario": "Qual fórmula considera o ângulo entre força e deslocamento?"
  },
  {
    "moduleId": 6,
    "title": "Energia cinética",
    "formula": "E꜀ = (m · v²)/2",
    "variables": "m é massa; v é velocidade.",
    "desc": "Reconhecer a energia associada ao movimento.",
    "wrong": [
      "E꜀ = m · v",
      "E꜀ = m · v²",
      "E꜀ = (m · v)/2"
    ],
    "variableAnswer": "Energia cinética é metade do produto da massa pelo quadrado da velocidade.",
    "scenario": "Qual expressão representa a energia de movimento de um corpo?"
  },
  {
    "moduleId": 6,
    "title": "Energia potencial gravitacional",
    "formula": "Eₚ = m · g · h",
    "variables": "m é massa; g gravidade; h altura em relação ao nível de referência.",
    "desc": "Memorizar a energia potencial gravitacional próxima à superfície terrestre.",
    "wrong": [
      "Eₚ = m · g / h",
      "Eₚ = m · h / g",
      "Eₚ = m · g · h²"
    ],
    "variableAnswer": "A energia potencial gravitacional depende da massa, gravidade e altura.",
    "scenario": "Qual relação representa a energia associada à altura de um corpo?"
  },
  {
    "moduleId": 6,
    "title": "Energia potencial elástica",
    "formula": "Eₑₗ = (k · x²)/2",
    "variables": "k é constante elástica; x deformação da mola.",
    "desc": "Reconhecer a energia armazenada em uma mola deformada.",
    "wrong": [
      "Eₑₗ = k · x",
      "Eₑₗ = k / (2x²)",
      "Eₑₗ = (k · x)/2"
    ],
    "variableAnswer": "A energia elástica é metade da constante elástica vezes o quadrado da deformação.",
    "scenario": "Qual expressão representa a energia armazenada em uma mola ideal?"
  },
  {
    "moduleId": 6,
    "title": "Potência média",
    "formula": "Pot = τ / Δt",
    "variables": "Pot é potência média; τ trabalho; Δt intervalo de tempo.",
    "desc": "Memorizar potência como trabalho realizado por unidade de tempo.",
    "wrong": [
      "Pot = τ · Δt",
      "Pot = Δt / τ",
      "Pot = τ / Δt²"
    ],
    "variableAnswer": "Potência mede a rapidez com que o trabalho é realizado.",
    "scenario": "Qual relação define potência média?"
  },
  {
    "moduleId": 6,
    "title": "Potência mecânica instantânea",
    "formula": "Pot = F · v · cos θ",
    "variables": "F é força; v velocidade; θ ângulo entre força e velocidade.",
    "desc": "Reconhecer a potência instantânea de uma força.",
    "wrong": [
      "Pot = F · v · sen θ",
      "Pot = F / v",
      "Pot = F · v²"
    ],
    "variableAnswer": "A potência instantânea é o produto escalar entre força e velocidade.",
    "scenario": "Qual expressão relaciona força e velocidade para potência instantânea?"
  },
  {
    "moduleId": 6,
    "title": "Rendimento",
    "formula": "η = (E útil / E total) · 100%",
    "variables": "η é rendimento percentual; E útil energia aproveitada; E total energia fornecida.",
    "desc": "Memorizar o rendimento como razão entre saída útil e entrada total.",
    "wrong": [
      "η = (E total / E útil) · 100%",
      "η = E útil · E total",
      "η = E total − E útil"
    ],
    "variableAnswer": "Rendimento é a fração da energia fornecida convertida em resultado útil.",
    "scenario": "Qual relação expressa o percentual de aproveitamento de uma máquina?"
  },
  {
    "moduleId": 7,
    "title": "Quantidade de movimento",
    "formula": "Q = m · v",
    "variables": "Q é quantidade de movimento; m massa; v velocidade vetorial.",
    "desc": "Reconhecer o momento linear como massa vezes velocidade.",
    "wrong": [
      "Q = m / v",
      "Q = m · v²",
      "Q = v / m"
    ],
    "variableAnswer": "Quantidade de movimento é o produto da massa pela velocidade.",
    "scenario": "Qual relação define a quantidade de movimento de um corpo?"
  },
  {
    "moduleId": 7,
    "title": "Impulso de força constante",
    "formula": "I = F · Δt",
    "variables": "I é impulso; F força resultante constante; Δt intervalo de atuação.",
    "desc": "Memorizar impulso como força vezes intervalo de tempo.",
    "wrong": [
      "I = F / Δt",
      "I = F · Δt²",
      "I = F + Δt"
    ],
    "variableAnswer": "O impulso de uma força constante é o produto da força pelo tempo de atuação.",
    "scenario": "Qual expressão representa o impulso de uma força constante?"
  },
  {
    "moduleId": 7,
    "title": "Teorema do impulso",
    "formula": "I = ΔQ",
    "variables": "I é impulso resultante; ΔQ é variação da quantidade de movimento.",
    "desc": "Reconhecer o teorema do impulso e da variação do momento linear.",
    "wrong": [
      "I = Q inicial + Q final",
      "I = ΔQ / Δt",
      "I = Q · Δt"
    ],
    "variableAnswer": "O impulso resultante é igual à variação da quantidade de movimento.",
    "scenario": "Qual relação conecta impulso e variação do momento linear?"
  },
  {
    "moduleId": 7,
    "title": "Conservação da quantidade de movimento",
    "formula": "Q antes = Q depois",
    "variables": "Em sistema isolado, a quantidade de movimento total se conserva.",
    "desc": "Memorizar a conservação do momento linear em sistema isolado.",
    "wrong": [
      "Q antes = 0 sempre",
      "Q antes = 2 · Q depois",
      "Q antes = −Q depois sempre"
    ],
    "variableAnswer": "Sem impulso externo resultante, o momento linear total permanece constante.",
    "scenario": "Qual princípio se aplica a colisões em um sistema isolado?"
  },
  {
    "moduleId": 8,
    "title": "Lei da gravitação universal",
    "formula": "F = G · (m₁m₂ / r²)",
    "variables": "G é constante gravitacional; m₁ e m₂ massas; r distância entre centros.",
    "desc": "Memorizar a força gravitacional entre duas massas.",
    "wrong": [
      "F = G · m₁m₂ · r²",
      "F = G · (m₁ + m₂)/r",
      "F = G · r²/(m₁m₂)"
    ],
    "variableAnswer": "A atração gravitacional é proporcional ao produto das massas e inversamente proporcional ao quadrado da distância.",
    "scenario": "Qual lei calcula a atração entre dois corpos massivos?"
  },
  {
    "moduleId": 8,
    "title": "Campo gravitacional",
    "formula": "g = G · M / r²",
    "variables": "M é massa geradora do campo; r distância ao centro; G constante gravitacional.",
    "desc": "Reconhecer a intensidade do campo gravitacional de uma massa esférica.",
    "wrong": [
      "g = G · M · r²",
      "g = G · r²/M",
      "g = M/(G · r)"
    ],
    "variableAnswer": "O campo gravitacional diminui com o quadrado da distância à massa geradora.",
    "scenario": "Qual expressão representa o campo gravitacional a uma distância r de uma massa M?"
  },
  {
    "moduleId": 8,
    "title": "Velocidade orbital circular",
    "formula": "v = √(G · M / r)",
    "variables": "G é constante gravitacional; M massa central; r raio orbital.",
    "desc": "Memorizar a velocidade de uma órbita circular gravitacional.",
    "wrong": [
      "v = √(G · M · r)",
      "v = G · M / r²",
      "v = √(r / G · M)"
    ],
    "variableAnswer": "A velocidade orbital circular depende da massa central e do raio da órbita.",
    "scenario": "Qual expressão fornece a velocidade de um satélite em órbita circular?"
  },
  {
    "moduleId": 8,
    "title": "Período orbital: terceira lei de Kepler",
    "formula": "T² / r³ = constante",
    "variables": "T é período orbital; r raio médio da órbita para corpos que orbitam o mesmo centro.",
    "desc": "Reconhecer a terceira lei de Kepler.",
    "wrong": [
      "T³ / r² = constante",
      "T² · r³ = constante",
      "T / r = constante"
    ],
    "variableAnswer": "Para corpos que orbitam o mesmo astro, o quadrado do período é proporcional ao cubo do raio orbital médio.",
    "scenario": "Qual relação expressa a terceira lei de Kepler?"
  },
  {
    "moduleId": 9,
    "title": "Densidade",
    "formula": "ρ = m / V",
    "variables": "ρ é densidade; m massa; V volume.",
    "desc": "Memorizar densidade como massa por volume.",
    "wrong": [
      "ρ = V / m",
      "ρ = m · V",
      "ρ = m + V"
    ],
    "variableAnswer": "Densidade é a razão entre massa e volume.",
    "scenario": "Qual expressão define a densidade de um material?"
  },
  {
    "moduleId": 9,
    "title": "Pressão",
    "formula": "p = F / A",
    "variables": "p é pressão; F força perpendicular; A área.",
    "desc": "Reconhecer pressão como força distribuída por área.",
    "wrong": [
      "p = F · A",
      "p = A / F",
      "p = F / A²"
    ],
    "variableAnswer": "Pressão é força normal por unidade de área.",
    "scenario": "Qual relação define pressão mecânica?"
  },
  {
    "moduleId": 9,
    "title": "Pressão hidrostática",
    "formula": "p = ρ · g · h",
    "variables": "ρ é densidade do fluido; g gravidade; h profundidade.",
    "desc": "Memorizar a pressão exercida por uma coluna de fluido.",
    "wrong": [
      "p = ρ · g / h",
      "p = ρ · h / g",
      "p = ρ · g · h²"
    ],
    "variableAnswer": "A pressão hidrostática aumenta com densidade, gravidade e profundidade.",
    "scenario": "Qual fórmula relaciona pressão e profundidade em um líquido em repouso?"
  },
  {
    "moduleId": 9,
    "title": "Princípio de Pascal",
    "formula": "F₁/A₁ = F₂/A₂",
    "variables": "F₁ e F₂ forças; A₁ e A₂ áreas dos êmbolos.",
    "desc": "Reconhecer a transmissão de pressão em fluido confinado.",
    "wrong": [
      "F₁·A₁ = F₂·A₂",
      "F₁/A₂ = F₂/A₁",
      "F₁+ A₁ = F₂ + A₂"
    ],
    "variableAnswer": "Em equilíbrio, a pressão aplicada é transmitida igualmente pelo fluido confinado.",
    "scenario": "Qual relação explica o funcionamento de uma prensa hidráulica ideal?"
  },
  {
    "moduleId": 9,
    "title": "Empuxo: princípio de Arquimedes",
    "formula": "E = ρfluido · g · Vdeslocado",
    "variables": "E é empuxo; ρfluido densidade do fluido; Vdeslocado volume submerso/deslocado.",
    "desc": "Memorizar o empuxo como peso do fluido deslocado.",
    "wrong": [
      "E = ρcorpo · g / V",
      "E = ρfluido · V / g",
      "E = ρfluido · g · V²"
    ],
    "variableAnswer": "O empuxo tem módulo igual ao peso do fluido deslocado.",
    "scenario": "Qual expressão determina o empuxo sobre um corpo imerso?"
  },
  {
    "moduleId": 10,
    "title": "Conversão Celsius–Kelvin",
    "formula": "T(K) = θ(°C) + 273,15",
    "variables": "T é temperatura absoluta em kelvin; θ é temperatura em graus Celsius.",
    "desc": "Memorizar a conversão de Celsius para kelvin.",
    "wrong": [
      "T(K) = θ(°C) − 273,15",
      "T(K) = θ(°C) × 273,15",
      "T(K) = 273,15 / θ(°C)"
    ],
    "variableAnswer": "Para converter Celsius em kelvin, soma-se 273,15.",
    "scenario": "Qual relação converte uma temperatura Celsius para kelvin?"
  },
  {
    "moduleId": 10,
    "title": "Variação de temperatura",
    "formula": "ΔT = Tfinal − Tinicial",
    "variables": "ΔT é variação de temperatura; Tfinal e Tinicial são temperaturas final e inicial.",
    "desc": "Reconhecer a variação de temperatura como diferença entre final e inicial.",
    "wrong": [
      "ΔT = Tfinal + Tinicial",
      "ΔT = Tinicial − Tfinal sempre",
      "ΔT = Tfinal · Tinicial"
    ],
    "variableAnswer": "A variação térmica é a temperatura final menos a inicial.",
    "scenario": "Qual expressão representa a variação de temperatura?"
  },
  {
    "moduleId": 10,
    "title": "Dilatação linear",
    "formula": "ΔL = L₀ · α · ΔT",
    "variables": "ΔL variação de comprimento; L₀ comprimento inicial; α coeficiente linear; ΔT variação térmica.",
    "desc": "Memorizar a dilatação linear de sólidos.",
    "wrong": [
      "ΔL = L₀ · α / ΔT",
      "ΔL = L₀ + α · ΔT",
      "ΔL = L₀ · α · ΔT²"
    ],
    "variableAnswer": "A variação do comprimento é proporcional ao comprimento inicial, ao coeficiente e à variação térmica.",
    "scenario": "Qual relação descreve a dilatação do comprimento de uma barra?"
  },
  {
    "moduleId": 10,
    "title": "Dilatação superficial",
    "formula": "ΔA = A₀ · β · ΔT",
    "variables": "ΔA variação de área; A₀ área inicial; β coeficiente superficial; ΔT variação térmica.",
    "desc": "Reconhecer a dilatação de área.",
    "wrong": [
      "ΔA = A₀ · β / ΔT",
      "ΔA = A₀ + β · ΔT",
      "ΔA = A₀ · β · ΔT²"
    ],
    "variableAnswer": "A variação da área é proporcional à área inicial, ao coeficiente e à variação térmica.",
    "scenario": "Qual fórmula representa a dilatação superficial?"
  },
  {
    "moduleId": 10,
    "title": "Dilatação volumétrica",
    "formula": "ΔV = V₀ · γ · ΔT",
    "variables": "ΔV variação de volume; V₀ volume inicial; γ coeficiente volumétrico; ΔT variação térmica.",
    "desc": "Memorizar a dilatação volumétrica.",
    "wrong": [
      "ΔV = V₀ · γ / ΔT",
      "ΔV = V₀ + γ · ΔT",
      "ΔV = V₀ · γ · ΔT²"
    ],
    "variableAnswer": "A variação do volume é proporcional ao volume inicial e à variação de temperatura.",
    "scenario": "Qual relação representa a dilatação volumétrica?"
  },
  {
    "moduleId": 10,
    "title": "Calor sensível",
    "formula": "Q = m · c · ΔT",
    "variables": "Q calor; m massa; c calor específico; ΔT variação de temperatura.",
    "desc": "Reconhecer a equação fundamental da calorimetria para mudança de temperatura sem mudança de fase.",
    "wrong": [
      "Q = m · c / ΔT",
      "Q = m · ΔT / c",
      "Q = m · c · ΔT²"
    ],
    "variableAnswer": "Calor sensível altera a temperatura e depende da massa, calor específico e variação térmica.",
    "scenario": "Qual fórmula calcula o calor envolvido sem mudança de estado físico?"
  },
  {
    "moduleId": 10,
    "title": "Calor latente",
    "formula": "Q = m · L",
    "variables": "Q calor; m massa; L calor latente específico.",
    "desc": "Memorizar o calor associado à mudança de estado físico.",
    "wrong": [
      "Q = m / L",
      "Q = m · L²",
      "Q = L / m"
    ],
    "variableAnswer": "Durante a mudança de fase, o calor é massa vezes calor latente.",
    "scenario": "Qual relação calcula a energia necessária para uma mudança de estado?"
  },
  {
    "moduleId": 10,
    "title": "Equilíbrio térmico",
    "formula": "ΣQ = 0",
    "variables": "A soma algébrica dos calores trocados em um sistema isolado é zero.",
    "desc": "Reconhecer o balanço de calor em trocas térmicas sem perdas.",
    "wrong": [
      "ΣQ = 1",
      "ΣQ = massa total",
      "ΣQ = ΔT"
    ],
    "variableAnswer": "Em sistema termicamente isolado, o calor cedido é igual ao calor recebido.",
    "scenario": "Qual condição expressa o equilíbrio térmico em um calorímetro ideal?"
  },
  {
    "moduleId": 11,
    "title": "Equação geral dos gases",
    "formula": "p₁V₁/T₁ = p₂V₂/T₂",
    "variables": "p é pressão; V volume; T temperatura absoluta; índices 1 e 2 indicam estados.",
    "desc": "Memorizar a lei geral dos gases para quantidade fixa de gás ideal.",
    "wrong": [
      "p₁V₁T₁ = p₂V₂T₂",
      "p₁/T₁V₁ = p₂/T₂V₂",
      "p₁V₁/T₂ = p₂V₂/T₁"
    ],
    "variableAnswer": "Para uma quantidade fixa de gás ideal, pV/T permanece constante.",
    "scenario": "Qual relação conecta dois estados de uma mesma massa de gás ideal?"
  },
  {
    "moduleId": 11,
    "title": "Equação de Clapeyron",
    "formula": "p · V = n · R · T",
    "variables": "p pressão; V volume; n mols; R constante universal dos gases; T kelvin.",
    "desc": "Reconhecer a equação de estado do gás ideal.",
    "wrong": [
      "p · V = n · R / T",
      "p + V = n · R · T",
      "p · T = n · R · V"
    ],
    "variableAnswer": "A equação de Clapeyron relaciona pressão, volume, quantidade de matéria e temperatura absoluta.",
    "scenario": "Qual expressão representa a equação de estado de um gás ideal?"
  },
  {
    "moduleId": 11,
    "title": "Transformação isotérmica",
    "formula": "p₁ · V₁ = p₂ · V₂",
    "variables": "Em temperatura constante, p é pressão e V é volume.",
    "desc": "Memorizar a lei de Boyle para transformação isotérmica.",
    "wrong": [
      "p₁/V₁ = p₂/V₂",
      "p₁ · T₁ = p₂ · T₂",
      "p₁ · V₂ = p₂ · V₁ sempre"
    ],
    "variableAnswer": "Em temperatura constante, pressão e volume são inversamente proporcionais.",
    "scenario": "Qual relação descreve uma transformação gasosa isotérmica?"
  },
  {
    "moduleId": 11,
    "title": "Transformação isobárica",
    "formula": "V₁/T₁ = V₂/T₂",
    "variables": "Em pressão constante, V é volume e T temperatura absoluta.",
    "desc": "Memorizar a lei de Charles para transformação isobárica.",
    "wrong": [
      "V₁ · T₁ = V₂ · T₂",
      "p₁/V₁ = p₂/V₂",
      "V₁/T₂ = V₂/T₁"
    ],
    "variableAnswer": "Em pressão constante, volume é proporcional à temperatura absoluta.",
    "scenario": "Qual relação descreve uma transformação isobárica?"
  },
  {
    "moduleId": 11,
    "title": "Transformação isovolumétrica",
    "formula": "p₁/T₁ = p₂/T₂",
    "variables": "Em volume constante, p é pressão e T temperatura absoluta.",
    "desc": "Memorizar a lei de Gay-Lussac para transformação isovolumétrica.",
    "wrong": [
      "p₁ · T₁ = p₂ · T₂",
      "V₁/T₁ = V₂/T₂",
      "p₁/T₂ = p₂/T₁"
    ],
    "variableAnswer": "Em volume constante, pressão é proporcional à temperatura absoluta.",
    "scenario": "Qual relação descreve uma transformação isovolumétrica?"
  },
  {
    "moduleId": 11,
    "title": "Primeira lei da Termodinâmica",
    "formula": "ΔU = Q − W",
    "variables": "ΔU variação da energia interna; Q calor recebido; W trabalho realizado pelo gás.",
    "desc": "Reconhecer a primeira lei da Termodinâmica na convenção em que W é trabalho feito pelo sistema.",
    "wrong": [
      "ΔU = Q + W",
      "ΔU = W − Q",
      "ΔU = Q · W"
    ],
    "variableAnswer": "A variação da energia interna é o calor recebido menos o trabalho realizado pelo sistema.",
    "scenario": "Qual expressão representa a conservação de energia em um processo termodinâmico?"
  },
  {
    "moduleId": 11,
    "title": "Trabalho em transformação isobárica",
    "formula": "W = p · ΔV",
    "variables": "W trabalho realizado pelo gás; p pressão constante; ΔV variação de volume.",
    "desc": "Memorizar o trabalho de um gás em transformação isobárica.",
    "wrong": [
      "W = p / ΔV",
      "W = ΔV / p",
      "W = p · ΔV²"
    ],
    "variableAnswer": "Em pressão constante, o trabalho é pressão vezes variação de volume.",
    "scenario": "Qual expressão calcula o trabalho de um gás sob pressão constante?"
  },
  {
    "moduleId": 12,
    "title": "Equação fundamental da onda",
    "formula": "v = λ · f",
    "variables": "v velocidade de propagação; λ comprimento de onda; f frequência.",
    "desc": "Memorizar a relação entre velocidade, comprimento de onda e frequência.",
    "wrong": [
      "v = λ / f",
      "v = f / λ",
      "v = λ · f²"
    ],
    "variableAnswer": "A velocidade de uma onda é o produto do comprimento de onda pela frequência.",
    "scenario": "Qual equação conecta velocidade de propagação, frequência e comprimento de onda?"
  },
  {
    "moduleId": 12,
    "title": "Período e frequência da onda",
    "formula": "T = 1 / f",
    "variables": "T é período; f frequência.",
    "desc": "Reconhecer a relação inversa entre período e frequência.",
    "wrong": [
      "T = f",
      "T = 2f",
      "T = f²"
    ],
    "variableAnswer": "O período é o inverso da frequência.",
    "scenario": "Qual relação conecta o tempo de um ciclo à frequência da onda?"
  },
  {
    "moduleId": 12,
    "title": "Velocidade de onda em corda",
    "formula": "v = √(F / μ)",
    "variables": "F é tensão na corda; μ densidade linear de massa.",
    "desc": "Memorizar a velocidade de onda transversal em corda ideal.",
    "wrong": [
      "v = √(μ/F)",
      "v = F/μ",
      "v = √(F · μ)"
    ],
    "variableAnswer": "A velocidade aumenta com a raiz da tensão e diminui com a raiz da densidade linear.",
    "scenario": "Qual expressão determina a velocidade de uma onda em uma corda tensionada?"
  },
  {
    "moduleId": 12,
    "title": "Intensidade de onda",
    "formula": "I = P / A",
    "variables": "I intensidade; P potência transportada; A área atravessada.",
    "desc": "Reconhecer intensidade como potência por área.",
    "wrong": [
      "I = P · A",
      "I = A / P",
      "I = P / A²"
    ],
    "variableAnswer": "Intensidade é a potência distribuída por unidade de área.",
    "scenario": "Qual relação define a intensidade média de uma onda?"
  },
  {
    "moduleId": 12,
    "title": "Nível sonoro",
    "formula": "β = 10 · log₁₀(I/I₀)",
    "variables": "β nível sonoro em decibéis; I intensidade; I₀ intensidade de referência.",
    "desc": "Memorizar a expressão do nível de intensidade sonora.",
    "wrong": [
      "β = log₁₀(I₀/I)",
      "β = 10 · I/I₀",
      "β = I₀ · log₁₀(I)"
    ],
    "variableAnswer": "O nível sonoro é expresso em decibéis por uma razão logarítmica entre intensidades.",
    "scenario": "Qual expressão relaciona intensidade sonora e nível em decibéis?"
  },
  {
    "moduleId": 12,
    "title": "Efeito Doppler: fonte e observador",
    "formula": "f′ = f · (v ± vₒ)/(v ∓ v𝒇)",
    "variables": "f′ frequência percebida; f emitida; v velocidade do som; vₒ observador; v𝒇 fonte. Sinais dependem do sentido relativo.",
    "desc": "Reconhecer a estrutura da equação do efeito Doppler para fonte e observador em movimento.",
    "wrong": [
      "f′ = f · (v ∓ vₒ)/(v ± v𝒇)",
      "f′ = f · v/(v + vₒ + v𝒇)",
      "f′ = f · (vₒ − v𝒇)/v"
    ],
    "variableAnswer": "A frequência percebida depende das velocidades relativas do observador e da fonte em relação ao meio.",
    "scenario": "Qual relação descreve a mudança de frequência percebida quando fonte e observador se movem?"
  },
  {
    "moduleId": 13,
    "title": "Lei da reflexão",
    "formula": "i = r",
    "variables": "i é ângulo de incidência; r é ângulo de reflexão, ambos medidos em relação à normal.",
    "desc": "Memorizar a igualdade entre ângulo de incidência e reflexão.",
    "wrong": [
      "i = 2r",
      "i + r = 90°",
      "i = r/2"
    ],
    "variableAnswer": "Na reflexão especular, o ângulo de incidência é igual ao de reflexão.",
    "scenario": "Qual lei relaciona os ângulos de incidência e reflexão?"
  },
  {
    "moduleId": 13,
    "title": "Índice de refração",
    "formula": "n = c / v",
    "variables": "n índice de refração; c velocidade da luz no vácuo; v velocidade no meio.",
    "desc": "Reconhecer o índice de refração absoluto.",
    "wrong": [
      "n = v / c",
      "n = c · v",
      "n = c − v"
    ],
    "variableAnswer": "O índice de refração é a razão entre a velocidade da luz no vácuo e no meio.",
    "scenario": "Qual expressão define o índice de refração de um meio?"
  },
  {
    "moduleId": 13,
    "title": "Lei de Snell-Descartes",
    "formula": "n₁ · sen θ₁ = n₂ · sen θ₂",
    "variables": "n₁ e n₂ índices de refração; θ₁ incidência; θ₂ refração.",
    "desc": "Memorizar a lei da refração da luz.",
    "wrong": [
      "n₁ · cos θ₁ = n₂ · cos θ₂",
      "n₁ · sen θ₂ = n₂ · sen θ₁",
      "n₁/n₂ = θ₁/θ₂"
    ],
    "variableAnswer": "A refração relaciona índices de refração e senos dos ângulos medidos com a normal.",
    "scenario": "Qual equação descreve a mudança de direção da luz ao atravessar meios?"
  },
  {
    "moduleId": 13,
    "title": "Equação dos pontos conjugados",
    "formula": "1/f = 1/p + 1/p′",
    "variables": "f distância focal; p distância do objeto; p′ distância da imagem.",
    "desc": "Reconhecer a equação de Gauss para espelhos esféricos e lentes delgadas.",
    "wrong": [
      "1/f = p + p′",
      "f = 1/p + 1/p′",
      "1/f = 1/p − 1/p′ sempre"
    ],
    "variableAnswer": "A equação de Gauss relaciona distância focal, objeto e imagem.",
    "scenario": "Qual fórmula relaciona foco, posição do objeto e posição da imagem?"
  },
  {
    "moduleId": 13,
    "title": "Aumento linear transversal",
    "formula": "A = i/o = −p′/p",
    "variables": "A aumento linear; i altura da imagem; o altura do objeto; p′ imagem; p objeto.",
    "desc": "Memorizar o aumento linear transversal.",
    "wrong": [
      "A = o/i = −p/p′",
      "A = i·o = p·p′",
      "A = p′/p + i/o"
    ],
    "variableAnswer": "O aumento é a razão entre altura da imagem e objeto, também relacionada às distâncias.",
    "scenario": "Qual relação determina o aumento linear em óptica geométrica?"
  },
  {
    "moduleId": 13,
    "title": "Espelho plano: distância imagem",
    "formula": "p′ = p",
    "variables": "p é distância do objeto ao espelho; p′ distância da imagem virtual ao espelho.",
    "desc": "Reconhecer a simetria objeto-imagem em espelho plano.",
    "wrong": [
      "p′ = 2p",
      "p′ = p/2",
      "p′ = −p²"
    ],
    "variableAnswer": "No espelho plano, a imagem fica à mesma distância atrás do espelho que o objeto à frente.",
    "scenario": "Qual relação vale para as distâncias do objeto e da imagem em espelho plano?"
  },
  {
    "moduleId": 14,
    "title": "Lei de Coulomb",
    "formula": "F = k · |q₁q₂| / r²",
    "variables": "F força elétrica; k constante eletrostática; q₁ e q₂ cargas; r distância.",
    "desc": "Memorizar a intensidade da força elétrica entre cargas puntiformes.",
    "wrong": [
      "F = k · |q₁q₂| · r²",
      "F = k · (q₁+q₂)/r",
      "F = k · r²/|q₁q₂|"
    ],
    "variableAnswer": "A força elétrica é proporcional ao produto dos módulos das cargas e inversamente proporcional ao quadrado da distância.",
    "scenario": "Qual expressão representa a intensidade da força entre duas cargas puntiformes?"
  },
  {
    "moduleId": 14,
    "title": "Campo elétrico",
    "formula": "E = F / q",
    "variables": "E campo elétrico; F força elétrica sobre carga de prova q.",
    "desc": "Reconhecer campo elétrico como força por unidade de carga.",
    "wrong": [
      "E = F · q",
      "E = q / F",
      "E = F / q²"
    ],
    "variableAnswer": "Campo elétrico é a força elétrica por unidade de carga de prova positiva.",
    "scenario": "Qual relação define o campo elétrico?"
  },
  {
    "moduleId": 14,
    "title": "Campo de carga puntiforme",
    "formula": "E = k · |Q| / r²",
    "variables": "Q carga geradora; r distância; k constante eletrostática.",
    "desc": "Memorizar o campo elétrico produzido por uma carga puntiforme.",
    "wrong": [
      "E = k · |Q| · r²",
      "E = k · r²/|Q|",
      "E = k · |Q|/r"
    ],
    "variableAnswer": "O módulo do campo de uma carga puntiforme varia com o inverso do quadrado da distância.",
    "scenario": "Qual fórmula determina o campo elétrico a uma distância r de uma carga Q?"
  },
  {
    "moduleId": 14,
    "title": "Potencial elétrico de carga puntiforme",
    "formula": "V = k · Q / r",
    "variables": "V potencial elétrico; Q carga geradora; r distância; k constante.",
    "desc": "Reconhecer o potencial elétrico de uma carga puntiforme.",
    "wrong": [
      "V = k · Q · r",
      "V = k · r/Q",
      "V = k · Q/r²"
    ],
    "variableAnswer": "O potencial de uma carga puntiforme é proporcional à carga e inversamente proporcional à distância.",
    "scenario": "Qual expressão representa o potencial elétrico gerado por uma carga puntiforme?"
  },
  {
    "moduleId": 14,
    "title": "Energia potencial elétrica",
    "formula": "Eₚ = q · V",
    "variables": "Eₚ energia potencial elétrica; q carga; V potencial elétrico.",
    "desc": "Memorizar a energia potencial elétrica de uma carga em um potencial.",
    "wrong": [
      "Eₚ = q/V",
      "Eₚ = V/q",
      "Eₚ = q · V²"
    ],
    "variableAnswer": "Energia potencial elétrica é carga vezes potencial elétrico.",
    "scenario": "Qual relação conecta a energia potencial elétrica, a carga e o potencial?"
  },
  {
    "moduleId": 14,
    "title": "Diferença de potencial e campo uniforme",
    "formula": "U = E · d",
    "variables": "U diferença de potencial em módulo; E campo uniforme; d deslocamento na direção do campo.",
    "desc": "Reconhecer a relação entre campo elétrico uniforme e diferença de potencial.",
    "wrong": [
      "U = E/d",
      "U = d/E",
      "U = E · d²"
    ],
    "variableAnswer": "Em campo uniforme, o módulo da diferença de potencial é campo vezes distância na direção do campo.",
    "scenario": "Qual expressão relaciona campo elétrico uniforme e distância entre placas?"
  },
  {
    "moduleId": 15,
    "title": "Corrente elétrica média",
    "formula": "i = ΔQ / Δt",
    "variables": "i corrente elétrica; ΔQ carga que atravessa a seção; Δt intervalo.",
    "desc": "Memorizar corrente como carga por intervalo de tempo.",
    "wrong": [
      "i = Δt / ΔQ",
      "i = ΔQ · Δt",
      "i = ΔQ / Δt²"
    ],
    "variableAnswer": "Corrente elétrica é a quantidade de carga que atravessa uma seção por unidade de tempo.",
    "scenario": "Qual relação define a intensidade média da corrente elétrica?"
  },
  {
    "moduleId": 15,
    "title": "Primeira lei de Ohm",
    "formula": "U = R · i",
    "variables": "U tensão; R resistência; i corrente elétrica.",
    "desc": "Reconhecer a relação entre tensão, resistência e corrente em resistor ôhmico.",
    "wrong": [
      "U = R/i",
      "U = i/R",
      "U = R · i²"
    ],
    "variableAnswer": "A tensão em resistor ôhmico é o produto da resistência pela corrente.",
    "scenario": "Qual fórmula representa a primeira lei de Ohm?"
  },
  {
    "moduleId": 15,
    "title": "Resistência de um fio",
    "formula": "R = ρ · L / A",
    "variables": "R resistência; ρ resistividade; L comprimento; A área da seção transversal.",
    "desc": "Memorizar os fatores geométricos e materiais da resistência elétrica.",
    "wrong": [
      "R = ρ · A/L",
      "R = ρ · L · A",
      "R = L/(ρ · A)"
    ],
    "variableAnswer": "A resistência cresce com o comprimento e resistividade e diminui com a área.",
    "scenario": "Qual expressão calcula a resistência de um fio uniforme?"
  },
  {
    "moduleId": 15,
    "title": "Potência elétrica",
    "formula": "P = U · i",
    "variables": "P potência elétrica; U tensão; i corrente.",
    "desc": "Reconhecer a potência elétrica como produto da tensão pela corrente.",
    "wrong": [
      "P = U/i",
      "P = i/U",
      "P = U · i²"
    ],
    "variableAnswer": "Potência elétrica é o produto entre tensão e corrente.",
    "scenario": "Qual relação define a potência elétrica de um aparelho?"
  },
  {
    "moduleId": 15,
    "title": "Potência em resistor",
    "formula": "P = R · i² = U²/R",
    "variables": "P potência; R resistência; i corrente; U tensão.",
    "desc": "Memorizar as formas da potência dissipada em resistor.",
    "wrong": [
      "P = R/i² = U²·R",
      "P = R²·i = U/R²",
      "P = U·R = i²/R"
    ],
    "variableAnswer": "Usando a lei de Ohm, a potência pode ser escrita como R i² ou U²/R.",
    "scenario": "Qual expressão relaciona potência, resistência e corrente ou tensão?"
  },
  {
    "moduleId": 15,
    "title": "Energia elétrica consumida",
    "formula": "E = P · Δt",
    "variables": "E energia; P potência; Δt tempo de funcionamento.",
    "desc": "Reconhecer o consumo de energia elétrica como potência vezes tempo.",
    "wrong": [
      "E = P/Δt",
      "E = Δt/P",
      "E = P · Δt²"
    ],
    "variableAnswer": "Energia consumida é potência multiplicada pelo tempo de uso.",
    "scenario": "Qual relação é usada para calcular o consumo de energia de um aparelho?"
  },
  {
    "moduleId": 15,
    "title": "Resistores em série",
    "formula": "Rₑq = R₁ + R₂ + ...",
    "variables": "Rₑq é resistência equivalente; resistências são somadas em série.",
    "desc": "Memorizar a associação de resistores em série.",
    "wrong": [
      "1/Rₑq = 1/R₁ + 1/R₂",
      "Rₑq = R₁ · R₂",
      "Rₑq = R₁ − R₂"
    ],
    "variableAnswer": "Em série, a resistência equivalente é a soma das resistências.",
    "scenario": "Qual regra determina a resistência equivalente de resistores em série?"
  },
  {
    "moduleId": 15,
    "title": "Resistores em paralelo",
    "formula": "1/Rₑq = 1/R₁ + 1/R₂ + ...",
    "variables": "Rₑq é resistência equivalente; R₁, R₂ são resistências em paralelo.",
    "desc": "Memorizar a associação de resistores em paralelo.",
    "wrong": [
      "Rₑq = R₁ + R₂",
      "1/Rₑq = R₁ + R₂",
      "Rₑq = R₁ · R₂"
    ],
    "variableAnswer": "Em paralelo, somam-se os inversos das resistências.",
    "scenario": "Qual relação determina a resistência equivalente em paralelo?"
  },
  {
    "moduleId": 15,
    "title": "Resistência equivalente de dois em paralelo",
    "formula": "Rₑq = (R₁ · R₂)/(R₁ + R₂)",
    "variables": "R₁ e R₂ são duas resistências em paralelo.",
    "desc": "Reconhecer a forma simplificada da associação em paralelo de dois resistores.",
    "wrong": [
      "Rₑq = (R₁+R₂)/(R₁·R₂)",
      "Rₑq = R₁ + R₂",
      "Rₑq = |R₁−R₂|"
    ],
    "variableAnswer": "Para dois resistores em paralelo, o produto dividido pela soma fornece a equivalente.",
    "scenario": "Qual expressão simplificada vale para dois resistores em paralelo?"
  },
  {
    "moduleId": 16,
    "title": "Força magnética sobre carga",
    "formula": "F = |q| · v · B · sen θ",
    "variables": "q carga; v velocidade; B campo magnético; θ ângulo entre v e B.",
    "desc": "Memorizar a força magnética sobre carga em movimento.",
    "wrong": [
      "F = |q|·v·B·cos θ",
      "F = |q|·B/(v·sen θ)",
      "F = |q|·v²·B"
    ],
    "variableAnswer": "A força magnética depende do módulo da carga, velocidade, campo e seno do ângulo.",
    "scenario": "Qual expressão determina a força magnética sobre uma carga em movimento?"
  },
  {
    "moduleId": 16,
    "title": "Força magnética em fio",
    "formula": "F = B · i · L · sen θ",
    "variables": "B campo magnético; i corrente; L comprimento imerso; θ ângulo entre fio e campo.",
    "desc": "Reconhecer a força magnética sobre um fio percorrido por corrente.",
    "wrong": [
      "F = B·i·L·cos θ",
      "F = B·L/(i·sen θ)",
      "F = B·i²·L"
    ],
    "variableAnswer": "A força sobre o fio depende do campo, corrente, comprimento e orientação.",
    "scenario": "Qual relação representa a força magnética sobre um fio retilíneo?"
  },
  {
    "moduleId": 16,
    "title": "Fluxo magnético",
    "formula": "Φ = B · A · cos θ",
    "variables": "Φ fluxo magnético; B campo; A área; θ ângulo entre campo e normal à superfície.",
    "desc": "Memorizar o fluxo magnético através de uma superfície plana.",
    "wrong": [
      "Φ = B·A·sen θ",
      "Φ = B/A·cos θ",
      "Φ = B·A·θ"
    ],
    "variableAnswer": "O fluxo é o produto escalar entre campo magnético e vetor área.",
    "scenario": "Qual expressão determina o fluxo magnético em uma superfície plana?"
  },
  {
    "moduleId": 16,
    "title": "Lei de Faraday",
    "formula": "ε = −N · ΔΦ/Δt",
    "variables": "ε força eletromotriz induzida; N número de espiras; ΔΦ variação do fluxo; Δt intervalo.",
    "desc": "Reconhecer a lei da indução eletromagnética de Faraday-Lenz.",
    "wrong": [
      "ε = N·ΔΦ·Δt",
      "ε = −N·Δt/ΔΦ",
      "ε = N·Φ"
    ],
    "variableAnswer": "A fem induzida é proporcional à taxa de variação do fluxo e o sinal expressa a lei de Lenz.",
    "scenario": "Qual relação descreve a fem induzida por variação do fluxo magnético?"
  },
  {
    "moduleId": 16,
    "title": "Relação de transformador ideal",
    "formula": "V₁/V₂ = N₁/N₂",
    "variables": "V tensões; N número de espiras; índices 1 e 2 indicam primário e secundário.",
    "desc": "Memorizar a relação entre tensão e número de espiras em transformador ideal.",
    "wrong": [
      "V₁/V₂ = N₂/N₁",
      "V₁·N₁ = V₂·N₂",
      "V₁/N₁ = V₂·N₂"
    ],
    "variableAnswer": "Em transformador ideal, a razão entre tensões é igual à razão entre espiras.",
    "scenario": "Qual expressão relaciona tensão e número de espiras em um transformador ideal?"
  },
  {
    "moduleId": 17,
    "title": "Energia do fóton",
    "formula": "E = h · f",
    "variables": "E energia do fóton; h constante de Planck; f frequência.",
    "desc": "Memorizar a quantização da energia luminosa.",
    "wrong": [
      "E = h/f",
      "E = h·f²",
      "E = f/h"
    ],
    "variableAnswer": "A energia de um fóton é proporcional à frequência pela constante de Planck.",
    "scenario": "Qual expressão fornece a energia de um fóton?"
  },
  {
    "moduleId": 17,
    "title": "Comprimento de onda e frequência da luz",
    "formula": "c = λ · f",
    "variables": "c velocidade da luz no vácuo; λ comprimento de onda; f frequência.",
    "desc": "Reconhecer a relação ondulatória da luz no vácuo.",
    "wrong": [
      "c = λ/f",
      "c = f/λ",
      "c = λ·f²"
    ],
    "variableAnswer": "No vácuo, a velocidade da luz é o produto do comprimento de onda pela frequência.",
    "scenario": "Qual relação conecta frequência e comprimento de onda da luz no vácuo?"
  },
  {
    "moduleId": 17,
    "title": "Equação fotoelétrica de Einstein",
    "formula": "Eₘáx = h · f − φ",
    "variables": "Eₘáx energia cinética máxima do fotoelétron; h constante de Planck; f frequência; φ função trabalho.",
    "desc": "Memorizar a equação do efeito fotoelétrico.",
    "wrong": [
      "Eₘáx = h·f + φ",
      "Eₘáx = φ − h·f",
      "Eₘáx = h·φ/f"
    ],
    "variableAnswer": "A energia excedente do fóton após superar a função trabalho vira energia cinética máxima.",
    "scenario": "Qual equação relaciona energia do fóton e função trabalho no efeito fotoelétrico?"
  },
  {
    "moduleId": 17,
    "title": "Equivalência massa-energia",
    "formula": "E = m · c²",
    "variables": "E energia; m massa; c velocidade da luz no vácuo.",
    "desc": "Reconhecer a equivalência entre massa e energia.",
    "wrong": [
      "E = m·c",
      "E = m/c²",
      "E = m²·c"
    ],
    "variableAnswer": "A energia equivalente a uma massa é o produto da massa pelo quadrado da velocidade da luz.",
    "scenario": "Qual relação expressa a equivalência massa-energia?"
  },
  {
    "moduleId": 17,
    "title": "Meia-vida radioativa",
    "formula": "N = N₀ · (1/2)^(t/T₁/₂)",
    "variables": "N quantidade restante; N₀ quantidade inicial; t tempo; T₁/₂ meia-vida.",
    "desc": "Memorizar a lei de decaimento em função da meia-vida.",
    "wrong": [
      "N = N₀·(1/2)^(T₁/₂/t)",
      "N = N₀·2^(t/T₁/₂)",
      "N = N₀ − t/T₁/₂"
    ],
    "variableAnswer": "A cada intervalo de meia-vida, a quantidade de núcleos não desintegrados cai pela metade.",
    "scenario": "Qual expressão descreve a quantidade de material radioativo restante após certo tempo?"
  },
  {
    "moduleId": 17,
    "title": "Atividade radioativa",
    "formula": "A = λ · N",
    "variables": "A atividade; λ constante de decaimento; N número de núcleos não desintegrados.",
    "desc": "Reconhecer a atividade radioativa como taxa de desintegração.",
    "wrong": [
      "A = N/λ",
      "A = λ/N",
      "A = λ·N²"
    ],
    "variableAnswer": "A atividade é proporcional ao número de núcleos radioativos presentes.",
    "scenario": "Qual relação define a atividade de uma amostra radioativa?"
  },
  {
    "moduleId": 5,
    "title": "Decomposição do peso no plano inclinado",
    "formula": "Pₓ = m·g·sen θ; Pᵧ = m·g·cos θ",
    "variables": "m é massa; g gravidade; θ inclinação do plano; componentes paralela e perpendicular ao plano.",
    "desc": "Reconhecer as componentes do peso em um plano inclinado.",
    "wrong": [
      "Pₓ = m·g·cos θ; Pᵧ = m·g·sen θ",
      "Pₓ = m·g·tan θ; Pᵧ = m·g",
      "Pₓ = m·g; Pᵧ = m·g"
    ],
    "variableAnswer": "No plano inclinado, a componente paralela usa seno e a perpendicular usa cosseno do ângulo do plano.",
    "scenario": "Qual par de expressões decompõe o peso em um plano inclinado?"
  },
  {
    "moduleId": 5,
    "title": "Condição de equilíbrio translacional",
    "formula": "ΣF = 0",
    "variables": "A soma vetorial das forças sobre o corpo é nula.",
    "desc": "Memorizar a condição de equilíbrio translacional.",
    "wrong": [
      "ΣF = m·a²",
      "ΣF = 1",
      "ΣF = v/t"
    ],
    "variableAnswer": "Em equilíbrio translacional, a força resultante é zero e a aceleração é nula.",
    "scenario": "Qual condição deve ser satisfeita para um corpo permanecer em equilíbrio translacional?"
  },
  {
    "moduleId": 5,
    "title": "Torque ou momento de uma força",
    "formula": "τ = F·d·sen θ",
    "variables": "τ é torque; F força; d distância ao eixo; θ ângulo entre força e braço.",
    "desc": "Reconhecer o momento de uma força em relação a um eixo.",
    "wrong": [
      "τ = F·d·cos θ",
      "τ = F/d·sen θ",
      "τ = F·d²"
    ],
    "variableAnswer": "O torque mede a tendência de rotação e depende da componente perpendicular da força.",
    "scenario": "Qual expressão representa o torque de uma força aplicada a uma distância do eixo?"
  },
  {
    "moduleId": 5,
    "title": "Equilíbrio rotacional",
    "formula": "Στ = 0",
    "variables": "A soma algébrica dos torques em relação a um eixo é nula.",
    "desc": "Memorizar a condição de equilíbrio rotacional.",
    "wrong": [
      "Στ = 1",
      "Στ = ΣF",
      "Στ = m·a"
    ],
    "variableAnswer": "Em equilíbrio rotacional, os torques horários e anti-horários se compensam.",
    "scenario": "Qual condição impede a aceleração angular de um corpo rígido?"
  },
  {
    "moduleId": 6,
    "title": "Teorema trabalho–energia cinética",
    "formula": "τresultante = ΔE꜀",
    "variables": "τresultante é trabalho da força resultante; ΔE꜀ variação da energia cinética.",
    "desc": "Reconhecer o teorema trabalho–energia.",
    "wrong": [
      "τresultante = E꜀ inicial + E꜀ final",
      "τresultante = ΔEₚ",
      "τresultante = E꜀/Δt"
    ],
    "variableAnswer": "O trabalho da força resultante é igual à variação da energia cinética.",
    "scenario": "Qual relação conecta o trabalho resultante à mudança da energia de movimento?"
  },
  {
    "moduleId": 6,
    "title": "Conservação da energia mecânica",
    "formula": "Eₘᵢ = Eₘf",
    "variables": "Eₘ é soma das energias cinética e potencial; válida sem forças dissipativas.",
    "desc": "Memorizar a conservação da energia mecânica em sistema conservativo.",
    "wrong": [
      "Eₘᵢ = 0 sempre",
      "Eₘᵢ = 2·Eₘf",
      "Eₘᵢ = −Eₘf"
    ],
    "variableAnswer": "Na ausência de forças dissipativas, a energia mecânica total permanece constante.",
    "scenario": "Qual relação vale quando só atuam forças conservativas?"
  },
  {
    "moduleId": 8,
    "title": "Energia potencial gravitacional universal",
    "formula": "Eₚ = −G·M·m/r",
    "variables": "M e m são massas; r distância entre centros; G constante gravitacional.",
    "desc": "Reconhecer a energia potencial gravitacional para distâncias astronômicas.",
    "wrong": [
      "Eₚ = G·M·m·r",
      "Eₚ = −G·(M+m)/r²",
      "Eₚ = G·M·m/r²"
    ],
    "variableAnswer": "Tomando energia nula no infinito, a energia potencial gravitacional é negativa e varia com 1/r.",
    "scenario": "Qual expressão representa a energia potencial gravitacional entre duas massas separadas por r?"
  },
  {
    "moduleId": 9,
    "title": "Pressão absoluta em fluido",
    "formula": "pabs = patm + ρ·g·h",
    "variables": "pabs pressão absoluta; patm pressão atmosférica; ρ densidade; g gravidade; h profundidade.",
    "desc": "Reconhecer a soma da pressão atmosférica com a pressão hidrostática.",
    "wrong": [
      "pabs = patm − ρ·g·h",
      "pabs = patm·ρ·g·h",
      "pabs = ρ·g/h"
    ],
    "variableAnswer": "A pressão absoluta em um líquido aberto é a pressão atmosférica mais a pressão hidrostática.",
    "scenario": "Qual expressão fornece a pressão absoluta a uma profundidade h em recipiente aberto?"
  },
  {
    "moduleId": 10,
    "title": "Capacidade térmica",
    "formula": "C = Q/ΔT",
    "variables": "C capacidade térmica; Q calor trocado; ΔT variação de temperatura.",
    "desc": "Memorizar capacidade térmica como calor por variação de temperatura.",
    "wrong": [
      "C = Q·ΔT",
      "C = ΔT/Q",
      "C = Q/ΔT²"
    ],
    "variableAnswer": "Capacidade térmica indica o calor necessário para variar a temperatura do corpo em uma unidade.",
    "scenario": "Qual relação define a capacidade térmica de um corpo?"
  },
  {
    "moduleId": 10,
    "title": "Calor específico e capacidade térmica",
    "formula": "C = m·c",
    "variables": "C capacidade térmica; m massa; c calor específico.",
    "desc": "Reconhecer a relação entre capacidade térmica e calor específico.",
    "wrong": [
      "C = c/m",
      "C = m/c",
      "C = m·c²"
    ],
    "variableAnswer": "A capacidade térmica é a massa multiplicada pelo calor específico.",
    "scenario": "Qual relação conecta capacidade térmica, massa e calor específico?"
  },
  {
    "moduleId": 11,
    "title": "Rendimento máximo de Carnot",
    "formula": "η = 1 − (Tfria/Tquente)",
    "variables": "η rendimento máximo; temperaturas absolutas da fonte fria e quente em kelvin.",
    "desc": "Memorizar o rendimento da máquina térmica ideal de Carnot.",
    "wrong": [
      "η = 1 − (Tquente/Tfria)",
      "η = Tfria/Tquente",
      "η = Tquente − Tfria"
    ],
    "variableAnswer": "O rendimento de Carnot depende apenas das temperaturas absolutas dos reservatórios.",
    "scenario": "Qual expressão fornece o rendimento máximo de uma máquina térmica entre duas fontes?"
  },
  {
    "moduleId": 12,
    "title": "Relação entre frequência e velocidade angular",
    "formula": "ω = 2π·f",
    "variables": "ω velocidade angular; f frequência; π constante pi.",
    "desc": "Reconhecer a relação entre frequência e velocidade angular.",
    "wrong": [
      "ω = π·f",
      "ω = f/(2π)",
      "ω = 2π/f"
    ],
    "variableAnswer": "Um ciclo completo corresponde a 2π radianos; por isso ω é 2π vezes a frequência.",
    "scenario": "Qual relação conecta frequência de oscilação e frequência angular?"
  },
  {
    "moduleId": 12,
    "title": "Período do pêndulo simples",
    "formula": "T = 2π·√(L/g)",
    "variables": "T período; L comprimento do fio; g gravidade local; pequenas oscilações.",
    "desc": "Memorizar o período de um pêndulo simples para pequenas amplitudes.",
    "wrong": [
      "T = 2π·√(g/L)",
      "T = √(L/g)",
      "T = 2π·L/g"
    ],
    "variableAnswer": "Para pequenas oscilações, o período depende da raiz do comprimento dividido pela gravidade.",
    "scenario": "Qual expressão representa o período de um pêndulo simples em pequenas oscilações?"
  },
  {
    "moduleId": 12,
    "title": "Período do sistema massa-mola",
    "formula": "T = 2π·√(m/k)",
    "variables": "T período; m massa; k constante elástica da mola ideal.",
    "desc": "Reconhecer o período de oscilação de um sistema massa-mola ideal.",
    "wrong": [
      "T = 2π·√(k/m)",
      "T = √(m/k)",
      "T = 2π·m/k"
    ],
    "variableAnswer": "O período cresce com a raiz da massa e diminui com a raiz da constante elástica.",
    "scenario": "Qual fórmula fornece o período de um oscilador massa-mola ideal?"
  },
  {
    "moduleId": 13,
    "title": "Vergência de lente",
    "formula": "V = 1/f",
    "variables": "V vergência em dioptrias; f distância focal em metros.",
    "desc": "Memorizar a vergência de uma lente delgada.",
    "wrong": [
      "V = f",
      "V = f²",
      "V = 1/f²"
    ],
    "variableAnswer": "A vergência é o inverso da distância focal medida em metros.",
    "scenario": "Qual relação define o grau de convergência ou divergência de uma lente?"
  },
  {
    "moduleId": 15,
    "title": "Lei dos nós de Kirchhoff",
    "formula": "Σi entra = Σi sai",
    "variables": "As correntes que chegam a um nó somam o mesmo que as correntes que saem.",
    "desc": "Reconhecer a conservação de carga elétrica em um nó de circuito.",
    "wrong": [
      "Σi entra = 0 sempre",
      "Σi entra = 2·Σi sai",
      "ΣU = Σi"
    ],
    "variableAnswer": "A soma das correntes que entram em um nó é igual à soma das que saem.",
    "scenario": "Qual regra permite relacionar correntes em uma junção de circuito?"
  },
  {
    "moduleId": 15,
    "title": "Lei das malhas de Kirchhoff",
    "formula": "ΣΔV = 0",
    "variables": "A soma algébrica das diferenças de potencial em uma malha fechada é nula.",
    "desc": "Memorizar a lei das malhas para circuitos elétricos.",
    "wrong": [
      "ΣΔV = 1",
      "ΣΔV = R·i²",
      "ΣΔV = Σi"
    ],
    "variableAnswer": "Em uma volta completa por uma malha, as elevações e quedas de potencial se compensam.",
    "scenario": "Qual condição vale para a soma algébrica das tensões em uma malha fechada?"
  },
  {
    "moduleId": 15,
    "title": "Força eletromotriz e resistência interna",
    "formula": "U = ε − r·i",
    "variables": "U tensão nos terminais; ε força eletromotriz; r resistência interna; i corrente.",
    "desc": "Reconhecer a tensão terminal de um gerador real fornecendo corrente.",
    "wrong": [
      "U = ε + r·i",
      "U = ε/(r·i)",
      "U = r·i − ε"
    ],
    "variableAnswer": "Quando fornece corrente, a tensão nos terminais é a fem menos a queda na resistência interna.",
    "scenario": "Qual expressão relaciona tensão terminal, fem e resistência interna de um gerador?"
  }
];

window.physicsLessons = physicsRawLessons.map((l) => {
  const wrong = l.wrong;
  const formulaOptions = [l.formula, ...wrong.slice(0,3)];
  const meaningOptions = [l.variableAnswer, `Uma relação inversa que não corresponde às grandezas descritas.`, `A soma direta das variáveis, sem considerar as unidades.`, `O produto das variáveis sem considerar suas proporções.`];
  return {...l, questions:[
    {type:'recognize', prompt:`Qual expressão corresponde a: ${l.desc}`, options:formulaOptions, answer:l.formula, explain:`A relação correta é ${l.formula}. ${l.variables}`},
    {type:'fill', prompt:`Complete a relação: ${l.title}. Escreva a expressão completa.`, answer:l.formula, explain:`A fórmula que você deve memorizar é ${l.formula}. ${l.variables}`},
    {type:'match', prompt:`Associe a fórmula ${l.formula} ao seu significado.`, options:meaningOptions, answer:l.variableAnswer, explain:l.variableAnswer},
    {type:'identify', prompt:`Identifique a expressão correta para: ${l.desc}`, options:[...formulaOptions].reverse(), answer:l.formula, explain:`A expressão correta é ${l.formula}. ${l.variables}`},
    {type:'apply', prompt:l.scenario, options:[l.formula,...wrong.slice(0,3)], answer:l.formula, explain:`A situação descreve ${l.title.toLowerCase()}. A relação correspondente é ${l.formula}. ${l.variables}`}
  ]};
});
