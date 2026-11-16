window.mathLessons = [
  {
    "moduleId": 1,
    "title": "Propriedades da adição",
    "formula": "a + b = b + a",
    "variables": "a e b são parcelas; a ordem das parcelas não altera a soma.",
    "desc": "Reconhecer a propriedade comutativa da adição.",
    "wrong": [
      "a × b = b × a",
      "a − b = b − a",
      "a + b = a − b"
    ],
    "variableAnswer": "Comutativa: trocar a ordem das parcelas mantém a soma.",
    "scenario": "Uma expressão troca a ordem de duas parcelas sem mudar o resultado. Qual propriedade justifica isso?"
  },
  {
    "moduleId": 1,
    "title": "Propriedades da multiplicação",
    "formula": "a × b = b × a",
    "variables": "a e b são fatores; a ordem dos fatores não altera o produto.",
    "desc": "Reconhecer a propriedade comutativa da multiplicação.",
    "wrong": [
      "a + b = b + a",
      "a × (b + c) = a×b + a×c",
      "a × b = a + b"
    ],
    "variableAnswer": "Comutativa: trocar a ordem dos fatores mantém o produto.",
    "scenario": "Uma conta reorganiza fatores sem alterar o produto. Qual relação representa essa propriedade?"
  },
  {
    "moduleId": 1,
    "title": "Propriedade distributiva",
    "formula": "a(b + c) = ab + ac",
    "variables": "a é o fator distribuído; b e c são parcelas.",
    "desc": "Relacionar multiplicação e adição por meio da distributiva.",
    "wrong": [
      "a(b + c) = ab + c",
      "a + (b × c) = (a+b)(a+c)",
      "a(b + c) = a + b + c"
    ],
    "variableAnswer": "Distributiva: o fator a multiplica cada termo dentro dos parênteses.",
    "scenario": "Para desenvolver uma expressão com um fator fora dos parênteses e uma soma dentro, qual relação usar?"
  },
  {
    "moduleId": 1,
    "title": "Frações: partes e equivalência",
    "formula": "a/b = (a·k)/(b·k), b ≠ 0, k ≠ 0",
    "variables": "a é numerador; b é denominador; k é um mesmo fator não nulo.",
    "desc": "Reconhecer frações equivalentes sem alterar seu valor.",
    "wrong": [
      "a/b = (a+k)/(b+k)",
      "a/b = (a·k)/b",
      "a/b = a/(b·k)"
    ],
    "variableAnswer": "Multiplicar numerador e denominador pelo mesmo número não nulo conserva a fração.",
    "scenario": "Uma receita precisa representar a mesma proporção usando números maiores. Qual relação permite obter uma fração equivalente?"
  },
  {
    "moduleId": 1,
    "title": "Frações: soma com mesmo denominador",
    "formula": "a/c + b/c = (a+b)/c",
    "variables": "a e b são numeradores; c é o denominador comum, com c ≠ 0.",
    "desc": "Identificar a regra de soma de frações com denominadores iguais.",
    "wrong": [
      "a/c + b/c = (a+b)/(2c)",
      "a/c + b/c = (a+b)/(a+b)",
      "a/c + b/c = (a+b)/(c+c)"
    ],
    "variableAnswer": "Somam-se os numeradores e conserva-se o denominador comum.",
    "scenario": "Duas partes de um todo foram expressas em frações com o mesmo denominador. Qual relação representa a soma?"
  },
  {
    "moduleId": 2,
    "title": "Conjuntos numéricos",
    "formula": "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
    "variables": "ℕ naturais; ℤ inteiros; ℚ racionais; ℝ reais.",
    "desc": "Memorizar a inclusão dos conjuntos numéricos.",
    "wrong": [
      "ℝ ⊂ ℚ ⊂ ℤ ⊂ ℕ",
      "ℕ ⊂ ℚ ⊂ ℤ ⊂ ℝ",
      "ℤ ⊂ ℕ ⊂ ℚ ⊂ ℝ"
    ],
    "variableAnswer": "Os naturais estão contidos nos inteiros, que estão nos racionais, contidos nos reais.",
    "scenario": "Para classificar um número em conjuntos cada vez mais abrangentes, qual cadeia de inclusão usar?"
  },
  {
    "moduleId": 2,
    "title": "Números racionais",
    "formula": "x = a/b, a,b ∈ ℤ, b ≠ 0",
    "variables": "a e b são inteiros; b não pode ser zero.",
    "desc": "Reconhecer a definição de número racional.",
    "wrong": [
      "x = a + b",
      "x = √a, a ∈ ℤ",
      "x = a/b, b = 0"
    ],
    "variableAnswer": "Racional é todo número que pode ser escrito como quociente de dois inteiros, com denominador não nulo.",
    "scenario": "Para verificar se um número é racional, qual representação deve ser possível?"
  },
  {
    "moduleId": 2,
    "title": "Intervalos reais",
    "formula": "[a,b] = {x ∈ ℝ | a ≤ x ≤ b}",
    "variables": "a e b são extremos; colchetes indicam inclusão dos extremos.",
    "desc": "Interpretar a notação de intervalo fechado.",
    "wrong": [
      "(a,b) = {x | a ≤ x ≤ b}",
      "[a,b] = {x | a < x < b}",
      "[a,b] = {x | x < a ou x > b}"
    ],
    "variableAnswer": "No intervalo fechado, os dois extremos pertencem ao conjunto.",
    "scenario": "Uma condição inclui todos os reais entre a e b, inclusive os extremos. Qual notação representa isso?"
  },
  {
    "moduleId": 2,
    "title": "Módulo de um número",
    "formula": "|x| = x (x ≥ 0); |x| = −x (x < 0)",
    "variables": "x é um número real; módulo representa distância até zero.",
    "desc": "Reconhecer a definição por casos do valor absoluto.",
    "wrong": [
      "|x| = x para todo x",
      "|x| = −x para todo x",
      "|x| = x²"
    ],
    "variableAnswer": "O módulo é sempre não negativo e mede a distância de x até zero.",
    "scenario": "Para expressar a distância de um número real até zero, qual notação ou definição usar?"
  },
  {
    "moduleId": 3,
    "title": "Múltiplos e divisores",
    "formula": "a = b · k",
    "variables": "a é múltiplo de b quando k é inteiro; b é divisor de a.",
    "desc": "Reconhecer a relação que define divisibilidade.",
    "wrong": [
      "a = b + k",
      "a = b/k, k inteiro",
      "a · b = k"
    ],
    "variableAnswer": "A divisibilidade ocorre quando a é múltiplo inteiro de b.",
    "scenario": "Um número pode ser dividido por outro sem deixar resto. Qual relação expressa essa divisibilidade?"
  },
  {
    "moduleId": 3,
    "title": "MDC",
    "formula": "MDC(a,b) = maior d tal que d|a e d|b",
    "variables": "d é divisor comum; MDC é o maior deles.",
    "desc": "Identificar o máximo divisor comum.",
    "wrong": [
      "MMC(a,b) = menor múltiplo comum",
      "MDC(a,b) = a·b",
      "MDC(a,b) = a+b"
    ],
    "variableAnswer": "MDC seleciona o maior número que divide simultaneamente os valores.",
    "scenario": "Para repartir itens em grupos iguais do maior tamanho possível, qual conceito usar?"
  },
  {
    "moduleId": 3,
    "title": "MMC",
    "formula": "MMC(a,b) = menor m positivo tal que a|m e b|m",
    "variables": "m é múltiplo comum positivo de a e b.",
    "desc": "Identificar o mínimo múltiplo comum.",
    "wrong": [
      "MDC(a,b) = maior divisor comum",
      "MMC(a,b) = a+b",
      "MMC(a,b) = a·b sempre"
    ],
    "variableAnswer": "MMC é o menor múltiplo positivo compartilhado pelos números.",
    "scenario": "Para descobrir quando dois eventos periódicos voltarão a coincidir, qual conceito pode ser usado?"
  },
  {
    "moduleId": 3,
    "title": "Critérios de divisibilidade",
    "formula": "N = 10a + b",
    "variables": "a representa a parte anterior ao último algarismo e b o último algarismo; útil no critério de 2 e 5 em base 10.",
    "desc": "Lembrar a decomposição decimal usada em critérios de divisibilidade.",
    "wrong": [
      "N = a + 10b",
      "N = 100a + b",
      "N = a·b + 10"
    ],
    "variableAnswer": "a representa a parte inteira anterior ao último algarismo e b representa o algarismo das unidades.",
    "scenario": "A decomposição separa dezenas (ou a parte restante) e o último algarismo. Qual expressão representa essa escrita?"
  },
  {
    "moduleId": 4,
    "title": "Conversão de comprimento",
    "formula": "1 km = 1.000 m",
    "variables": "Quilômetro (km) e metro (m) são unidades de comprimento.",
    "desc": "Memorizar a equivalência entre quilômetro e metro.",
    "wrong": [
      "1 km = 100 m",
      "1 km = 10.000 m",
      "1 km = 100.000 m"
    ],
    "variableAnswer": "Um quilômetro corresponde a mil metros.",
    "scenario": "Para converter uma distância em quilômetros para metros, qual equivalência usar?"
  },
  {
    "moduleId": 4,
    "title": "Conversão de área",
    "formula": "1 m² = 10.000 cm²",
    "variables": "m² e cm² são unidades de área; a conversão é ao quadrado.",
    "desc": "Reconhecer a conversão entre metro quadrado e centímetro quadrado.",
    "wrong": [
      "1 m² = 100 cm²",
      "1 m² = 1.000 cm²",
      "1 m² = 10 cm²"
    ],
    "variableAnswer": "Como a unidade está ao quadrado, o fator linear 100 também fica ao quadrado.",
    "scenario": "Ao converter uma superfície em metros quadrados para centímetros quadrados, qual equivalência usar?"
  },
  {
    "moduleId": 4,
    "title": "Volume e capacidade",
    "formula": "1 m³ = 1.000 L",
    "variables": "m³ mede volume; litro (L) mede capacidade.",
    "desc": "Memorizar a equivalência entre metro cúbico e litro.",
    "wrong": [
      "1 m³ = 100 L",
      "1 m³ = 10 L",
      "1 m³ = 10.000 L"
    ],
    "variableAnswer": "Um metro cúbico equivale a mil litros.",
    "scenario": "Para relacionar o volume de um reservatório em metros cúbicos à capacidade em litros, qual equivalência usar?"
  },
  {
    "moduleId": 4,
    "title": "Velocidade média e conversão",
    "formula": "1 m/s = 3,6 km/h",
    "variables": "m/s e km/h são unidades de velocidade.",
    "desc": "Memorizar o fator de conversão entre unidades usuais de velocidade.",
    "wrong": [
      "1 m/s = 36 km/h",
      "1 m/s = 0,36 km/h",
      "1 m/s = 360 km/h"
    ],
    "variableAnswer": "Para passar de m/s para km/h, multiplica-se por 3,6.",
    "scenario": "Ao converter a velocidade indicada em metros por segundo para quilômetros por hora, qual fator aplicar?"
  },
  {
    "moduleId": 5,
    "title": "Razão",
    "formula": "a/b, b ≠ 0",
    "variables": "a é antecedente; b é consequente.",
    "desc": "Reconhecer a representação de uma razão.",
    "wrong": [
      "a+b",
      "a·b",
      "a−b"
    ],
    "variableAnswer": "Razão compara duas grandezas por meio de uma divisão.",
    "scenario": "Para comparar duas quantidades por quociente, qual representação usar?"
  },
  {
    "moduleId": 5,
    "title": "Proporção",
    "formula": "a/b = c/d",
    "variables": "a e d são extremos; b e c são meios; b,d ≠ 0.",
    "desc": "Memorizar a igualdade entre duas razões.",
    "wrong": [
      "a/b = c+d",
      "a·b = c·d",
      "a/b = d/c"
    ],
    "variableAnswer": "Proporção é uma igualdade entre duas razões.",
    "scenario": "Quando duas razões representam a mesma relação, qual forma matemática expressa isso?"
  },
  {
    "moduleId": 5,
    "title": "Propriedade fundamental",
    "formula": "a·d = b·c",
    "variables": "Produto dos extremos é igual ao produto dos meios.",
    "desc": "Reconhecer a propriedade fundamental das proporções.",
    "wrong": [
      "a+b = c+d",
      "a·b = c·d",
      "a·c = b·d"
    ],
    "variableAnswer": "Em uma proporção, o produto dos extremos iguala o produto dos meios.",
    "scenario": "Para resolver uma proporção por multiplicação cruzada, qual relação utilizar?"
  },
  {
    "moduleId": 5,
    "title": "Escala",
    "formula": "E = medida no desenho / medida real",
    "variables": "As duas medidas devem estar na mesma unidade.",
    "desc": "Memorizar a fórmula de escala cartográfica ou gráfica.",
    "wrong": [
      "E = medida real / medida no desenho",
      "E = desenho + real",
      "E = desenho · real"
    ],
    "variableAnswer": "Escala compara a medida representada com a medida correspondente no mundo real.",
    "scenario": "Em um mapa, para relacionar distância no papel e distância real, qual fórmula usar?"
  },
  {
    "moduleId": 6,
    "title": "Definição de porcentagem",
    "formula": "p% = p/100",
    "variables": "p é a taxa percentual.",
    "desc": "Reconhecer a equivalência entre porcentagem e fração de denominador 100.",
    "wrong": [
      "p% = p/10",
      "p% = 100p",
      "p% = 1/p"
    ],
    "variableAnswer": "Porcentagem significa uma razão por cem.",
    "scenario": "Para transformar uma taxa percentual em fração, qual relação usar?"
  },
  {
    "moduleId": 6,
    "title": "Parte percentual",
    "formula": "Parte = (p/100) · Total",
    "variables": "p é a taxa percentual; Total é a quantidade de referência.",
    "desc": "Memorizar o cálculo de uma parte percentual sem executar a conta.",
    "wrong": [
      "Parte = Total/(p/100)",
      "Parte = p + Total",
      "Parte = (100/p) · Total"
    ],
    "variableAnswer": "A parte corresponde à taxa, escrita em forma decimal ou fracionária, multiplicada pelo total.",
    "scenario": "Para representar 18% de uma quantidade, qual estrutura de fórmula usar?"
  },
  {
    "moduleId": 6,
    "title": "Aumento percentual",
    "formula": "Valor final = Valor inicial · (1 + p/100)",
    "variables": "p é a taxa de aumento percentual.",
    "desc": "Reconhecer a fórmula de aumento percentual.",
    "wrong": [
      "VF = VI · (1 − p/100)",
      "VF = VI + p",
      "VF = VI · p/100"
    ],
    "variableAnswer": "Aumento percentual usa o fator multiplicativo 1 mais a taxa.",
    "scenario": "Um preço sofre aumento de p%. Qual fórmula representa o novo preço?"
  },
  {
    "moduleId": 6,
    "title": "Desconto percentual",
    "formula": "Valor final = Valor inicial · (1 − p/100)",
    "variables": "p é a taxa de desconto percentual.",
    "desc": "Reconhecer a fórmula de desconto percentual.",
    "wrong": [
      "VF = VI · (1 + p/100)",
      "VF = VI − p",
      "VF = VI · p/100"
    ],
    "variableAnswer": "Desconto percentual usa o fator multiplicativo 1 menos a taxa.",
    "scenario": "Um produto recebe desconto de p%. Qual fórmula representa o preço final?"
  },
  {
    "moduleId": 7,
    "title": "Produto de potências de mesma base",
    "formula": "a^m · a^n = a^(m+n)",
    "variables": "a é a base; m e n são expoentes.",
    "desc": "Memorizar a propriedade do produto de potências de mesma base.",
    "wrong": [
      "a^m · a^n = a^(m·n)",
      "a^m · a^n = a^(m−n)",
      "a^m · a^n = a^(m/n)"
    ],
    "variableAnswer": "No produto de potências de mesma base, somam-se os expoentes.",
    "scenario": "Para simplificar uma multiplicação de potências com a mesma base, qual propriedade aplicar?"
  },
  {
    "moduleId": 7,
    "title": "Quociente de potências de mesma base",
    "formula": "a^m / a^n = a^(m−n), a ≠ 0",
    "variables": "a é a base; m e n são expoentes.",
    "desc": "Memorizar a propriedade do quociente de potências de mesma base.",
    "wrong": [
      "a^m/a^n = a^(m+n)",
      "a^m/a^n = a^(m·n)",
      "a^m/a^n = a^(n−m)"
    ],
    "variableAnswer": "No quociente de potências de mesma base, subtraem-se os expoentes.",
    "scenario": "Para simplificar uma divisão de potências com a mesma base, qual propriedade usar?"
  },
  {
    "moduleId": 7,
    "title": "Potência de potência",
    "formula": "(a^m)^n = a^(m·n)",
    "variables": "a é a base; m e n são expoentes.",
    "desc": "Memorizar a potência de uma potência.",
    "wrong": [
      "(a^m)^n = a^(m+n)",
      "(a^m)^n = a^(m−n)",
      "(a^m)^n = a^(m/n)"
    ],
    "variableAnswer": "Na potência de potência, multiplicam-se os expoentes.",
    "scenario": "Ao elevar uma potência a outro expoente, qual propriedade aplicar?"
  },
  {
    "moduleId": 7,
    "title": "Expoente fracionário",
    "formula": "a^(m/n) = ⁿ√(a^m)",
    "variables": "a é a base; m é o numerador do expoente; n é o índice da raiz.",
    "desc": "Relacionar expoentes fracionários e radicais.",
    "wrong": [
      "a^(m/n) = ⁿ√(a^n)",
      "a^(m/n) = m√(a^n)",
      "a^(m/n) = a^(m+n)"
    ],
    "variableAnswer": "O denominador do expoente indica o índice da raiz; o numerador indica a potência.",
    "scenario": "Para reescrever uma potência com expoente racional em forma de radical, qual relação usar?"
  },
  {
    "moduleId": 8,
    "title": "Quadrado da soma",
    "formula": "(a + b)² = a² + 2ab + b²",
    "variables": "a e b são termos algébricos.",
    "desc": "Memorizar o produto notável quadrado da soma.",
    "wrong": [
      "(a+b)² = a²+b²",
      "(a+b)² = a²−2ab+b²",
      "(a+b)² = a²+ab+b²"
    ],
    "variableAnswer": "Quadrado da soma: quadrado do primeiro, mais o dobro do produto, mais quadrado do segundo.",
    "scenario": "Para desenvolver o quadrado de um binômio com sinal de adição, qual identidade usar?"
  },
  {
    "moduleId": 8,
    "title": "Quadrado da diferença",
    "formula": "(a − b)² = a² − 2ab + b²",
    "variables": "a e b são termos algébricos.",
    "desc": "Memorizar o produto notável quadrado da diferença.",
    "wrong": [
      "(a−b)² = a²−b²",
      "(a−b)² = a²+2ab+b²",
      "(a−b)² = a²−ab+b²"
    ],
    "variableAnswer": "Quadrado da diferença tem termo central negativo: menos duas vezes o produto.",
    "scenario": "Para desenvolver o quadrado de um binômio com subtração, qual identidade usar?"
  },
  {
    "moduleId": 8,
    "title": "Produto da soma pela diferença",
    "formula": "(a + b)(a − b) = a² − b²",
    "variables": "a e b são termos algébricos.",
    "desc": "Reconhecer a diferença de dois quadrados.",
    "wrong": [
      "(a+b)(a−b)=a²+b²",
      "(a+b)(a−b)=a²−2ab+b²",
      "(a+b)(a−b)=a²−b"
    ],
    "variableAnswer": "O produto da soma pela diferença resulta na diferença dos quadrados.",
    "scenario": "Para fatorar ou desenvolver um produto de binômios conjugados, qual identidade usar?"
  },
  {
    "moduleId": 8,
    "title": "Fator comum em evidência",
    "formula": "ab + ac = a(b + c)",
    "variables": "a é o fator comum; b e c são os outros fatores.",
    "desc": "Reconhecer a fatoração por fator comum.",
    "wrong": [
      "ab+ac = b(a+c)",
      "ab+ac = a(b+c)²",
      "ab+ac = (a+b)(a+c)"
    ],
    "variableAnswer": "Coloca-se em evidência o fator que aparece em todos os termos.",
    "scenario": "Para fatorar uma expressão em que os termos compartilham um fator, qual propriedade usar?"
  },
  {
    "moduleId": 9,
    "title": "Equação do primeiro grau",
    "formula": "ax + b = 0  ⇒  x = −b/a, a ≠ 0",
    "variables": "a é coeficiente de x; b é termo independente; x é incógnita.",
    "desc": "Memorizar a forma geral e a solução de uma equação linear.",
    "wrong": [
      "x = b/a",
      "x = −a/b",
      "x = a−b"
    ],
    "variableAnswer": "A solução geral isola x dividindo o oposto do termo independente pelo coeficiente.",
    "scenario": "Para encontrar a incógnita em uma equação linear ax+b=0, qual relação usar?"
  },
  {
    "moduleId": 9,
    "title": "Discriminante",
    "formula": "Δ = b² − 4ac",
    "variables": "a, b e c são coeficientes da equação ax²+bx+c=0.",
    "desc": "Memorizar o discriminante da equação do segundo grau.",
    "wrong": [
      "Δ = b² + 4ac",
      "Δ = 4ac − b²",
      "Δ = b − 4ac"
    ],
    "variableAnswer": "O discriminante compara o quadrado do coeficiente b com quatro vezes o produto de a e c.",
    "scenario": "Antes de aplicar a fórmula resolutiva de uma equação quadrática, qual expressão calcula o discriminante?"
  },
  {
    "moduleId": 9,
    "title": "Fórmula de Bhaskara",
    "formula": "x = (−b ± √Δ)/(2a)",
    "variables": "a, b e c são coeficientes; Δ é o discriminante.",
    "desc": "Memorizar a fórmula resolutiva da equação do segundo grau.",
    "wrong": [
      "x = (b ± √Δ)/(2a)",
      "x = (−b ± Δ)/(2a)",
      "x = (−b ± √Δ)/a"
    ],
    "variableAnswer": "A fórmula usa o oposto de b, mais ou menos a raiz do discriminante, dividido por 2a.",
    "scenario": "Para determinar as raízes de ax²+bx+c=0, qual fórmula aplicar?"
  },
  {
    "moduleId": 9,
    "title": "Soma e produto das raízes",
    "formula": "x₁ + x₂ = −b/a  ;  x₁·x₂ = c/a",
    "variables": "x₁ e x₂ são raízes; a, b e c são coeficientes.",
    "desc": "Relacionar coeficientes e raízes de uma equação quadrática.",
    "wrong": [
      "x₁+x₂ = b/a ; x₁x₂ = −c/a",
      "x₁+x₂ = c/a ; x₁x₂ = −b/a",
      "x₁+x₂ = −c/a ; x₁x₂ = b/a"
    ],
    "variableAnswer": "A soma das raízes é −b/a e o produto é c/a.",
    "scenario": "Quando a questão pede soma ou produto das raízes sem resolver a equação, qual relação usar?"
  },
  {
    "moduleId": 9,
    "title": "Inequação linear",
    "formula": "ax + b > 0",
    "variables": "a e b são coeficientes; x é a incógnita; o sentido depende do sinal de a ao isolar x.",
    "desc": "Reconhecer a forma geral de uma inequação do primeiro grau.",
    "wrong": [
      "ax²+bx+c=0",
      "ax+b=0",
      "a/x+b=0"
    ],
    "variableAnswer": "Inequações usam sinais de desigualdade; ao multiplicar ou dividir por número negativo, inverte-se o sinal.",
    "scenario": "Para representar uma condição linear com maior que, menor que ou igual, qual forma geral usar?"
  },
  {
    "moduleId": 10,
    "title": "Notação de função",
    "formula": "y = f(x)",
    "variables": "x é a variável independente; y é a variável dependente.",
    "desc": "Memorizar a notação usual de função.",
    "wrong": [
      "x = f(y)",
      "f = x + y",
      "y = x/f"
    ],
    "variableAnswer": "A função associa a cada entrada x uma saída y.",
    "scenario": "Para representar y como imagem de x por uma função, qual notação usar?"
  },
  {
    "moduleId": 10,
    "title": "Função afim",
    "formula": "f(x) = ax + b",
    "variables": "a é coeficiente angular; b é coeficiente linear.",
    "desc": "Memorizar a lei de formação da função afim.",
    "wrong": [
      "f(x)=ax²+b",
      "f(x)=a/x+b",
      "f(x)=a+b²x"
    ],
    "variableAnswer": "A função afim é de primeiro grau e tem gráfico em reta.",
    "scenario": "Para modelar uma relação com taxa de variação constante e valor inicial, qual fórmula usar?"
  },
  {
    "moduleId": 10,
    "title": "Zero da função afim",
    "formula": "x₀ = −b/a, a ≠ 0",
    "variables": "x₀ é a raiz; a e b são coeficientes da função afim.",
    "desc": "Reconhecer a fórmula da raiz de uma função afim.",
    "wrong": [
      "x₀ = b/a",
      "x₀ = −a/b",
      "x₀ = a+b"
    ],
    "variableAnswer": "O zero ocorre quando f(x)=0.",
    "scenario": "Para localizar onde a reta cruza o eixo x, qual relação usar?"
  },
  {
    "moduleId": 10,
    "title": "Coeficiente angular",
    "formula": "a = (y₂ − y₁)/(x₂ − x₁)",
    "variables": "(x₁,y₁) e (x₂,y₂) são dois pontos distintos da reta.",
    "desc": "Memorizar a taxa de variação de uma reta a partir de dois pontos.",
    "wrong": [
      "a=(x₂−x₁)/(y₂−y₁)",
      "a=(y₁+y₂)/(x₁+x₂)",
      "a=y₂−y₁"
    ],
    "variableAnswer": "O coeficiente angular é a razão entre variação vertical e variação horizontal.",
    "scenario": "Para calcular a inclinação de uma reta conhecendo dois pontos, qual fórmula usar?"
  },
  {
    "moduleId": 11,
    "title": "Função quadrática",
    "formula": "f(x) = ax² + bx + c, a ≠ 0",
    "variables": "a, b e c são coeficientes; x é a variável.",
    "desc": "Memorizar a forma geral da função quadrática.",
    "wrong": [
      "f(x)=ax+b",
      "f(x)=a^x",
      "f(x)=ax³+bx²+c"
    ],
    "variableAnswer": "A função quadrática possui termo de maior grau x².",
    "scenario": "Para modelar uma parábola por uma função polinomial de segundo grau, qual forma usar?"
  },
  {
    "moduleId": 11,
    "title": "Coordenada x do vértice",
    "formula": "xᵥ = −b/(2a)",
    "variables": "a e b são coeficientes da função quadrática.",
    "desc": "Memorizar a coordenada horizontal do vértice da parábola.",
    "wrong": [
      "xᵥ = b/(2a)",
      "xᵥ = −c/(2a)",
      "xᵥ = −b/a"
    ],
    "variableAnswer": "A abscissa do vértice é o oposto de b dividido por 2a.",
    "scenario": "Para localizar o eixo de simetria da parábola, qual fórmula usar?"
  },
  {
    "moduleId": 11,
    "title": "Função exponencial",
    "formula": "f(x) = aˣ, a > 0 e a ≠ 1",
    "variables": "a é a base positiva; x é o expoente/variável.",
    "desc": "Reconhecer a forma de uma função exponencial.",
    "wrong": [
      "f(x)=ax",
      "f(x)=logₐx",
      "f(x)=xᵃ"
    ],
    "variableAnswer": "Na função exponencial, a variável aparece no expoente.",
    "scenario": "Para modelar crescimento ou decaimento com fator multiplicativo constante por período, qual forma de função usar?"
  },
  {
    "moduleId": 11,
    "title": "Definição de logaritmo",
    "formula": "logₐ b = x ⇔ aˣ = b",
    "variables": "a é a base (a>0, a≠1); b é o logaritmando (b>0); x é o logaritmo.",
    "desc": "Memorizar a equivalência entre forma logarítmica e exponencial.",
    "wrong": [
      "logₐb=x ⇔ xᵃ=b",
      "logₐb=x ⇔ bˣ=a",
      "logₐb=x ⇔ aᵇ=x"
    ],
    "variableAnswer": "Logaritmo responde a qual expoente elevar a base para obter o logaritmando.",
    "scenario": "Para converter uma expressão logarítmica em uma igualdade exponencial, qual equivalência usar?"
  },
  {
    "moduleId": 12,
    "title": "Termo geral da PA",
    "formula": "aₙ = a₁ + (n − 1)r",
    "variables": "aₙ é o termo n; a₁ é o primeiro termo; r é a razão.",
    "desc": "Memorizar o termo geral da progressão aritmética.",
    "wrong": [
      "aₙ=a₁·rⁿ⁻¹",
      "aₙ=a₁+(n+1)r",
      "aₙ=a₁+n/r"
    ],
    "variableAnswer": "Na PA, soma-se ao primeiro termo a razão multiplicada por n−1.",
    "scenario": "Para encontrar diretamente um termo de uma sequência com diferença constante, qual fórmula usar?"
  },
  {
    "moduleId": 12,
    "title": "Soma da PA",
    "formula": "Sₙ = n(a₁ + aₙ)/2",
    "variables": "n é o número de termos; a₁ e aₙ são primeiro e último termos.",
    "desc": "Memorizar a soma dos n primeiros termos de uma PA finita.",
    "wrong": [
      "Sₙ=n(a₁·aₙ)/2",
      "Sₙ=(a₁+aₙ)/n",
      "Sₙ=n(a₁−aₙ)/2"
    ],
    "variableAnswer": "A soma da PA é o número de termos vezes a média entre primeiro e último.",
    "scenario": "Para somar todos os termos de uma PA finita conhecendo primeiro e último, qual fórmula usar?"
  },
  {
    "moduleId": 12,
    "title": "Termo geral da PG",
    "formula": "aₙ = a₁ · qⁿ⁻¹",
    "variables": "aₙ é o termo n; a₁ é o primeiro termo; q é a razão.",
    "desc": "Memorizar o termo geral da progressão geométrica.",
    "wrong": [
      "aₙ=a₁+(n−1)q",
      "aₙ=a₁·qⁿ",
      "aₙ=a₁/qⁿ⁻¹"
    ],
    "variableAnswer": "Na PG, multiplica-se o primeiro termo pela razão elevada a n−1.",
    "scenario": "Para encontrar um termo de sequência com razão multiplicativa constante, qual fórmula usar?"
  },
  {
    "moduleId": 12,
    "title": "Soma da PG finita",
    "formula": "Sₙ = a₁(qⁿ − 1)/(q − 1), q ≠ 1",
    "variables": "a₁ é o primeiro termo; q é a razão; n é o número de termos.",
    "desc": "Memorizar a soma dos termos de uma PG finita.",
    "wrong": [
      "Sₙ=n(a₁+aₙ)/2",
      "Sₙ=a₁(q−1)/(qⁿ−1)",
      "Sₙ=a₁qⁿ"
    ],
    "variableAnswer": "A soma finita da PG depende do primeiro termo, da razão e da quantidade de termos.",
    "scenario": "Para somar os n primeiros termos de uma PG com razão diferente de 1, qual fórmula usar?"
  },
  {
    "moduleId": 13,
    "title": "Juros simples",
    "formula": "J = C · i · t",
    "variables": "J é juro; C é capital; i é taxa por período; t é tempo compatível com a taxa.",
    "desc": "Memorizar o cálculo de juros simples.",
    "wrong": [
      "J=C(1+i)ᵗ",
      "J=C·i/t",
      "J=C+i+t"
    ],
    "variableAnswer": "Nos juros simples, o juro é calculado sempre sobre o capital inicial.",
    "scenario": "Para representar juros calculados apenas sobre o capital inicial, qual fórmula usar?"
  },
  {
    "moduleId": 13,
    "title": "Montante em juros simples",
    "formula": "M = C(1 + i·t)",
    "variables": "M é montante; C é capital; i é taxa; t é tempo.",
    "desc": "Memorizar o montante no regime de juros simples.",
    "wrong": [
      "M=C(1+i)ᵗ",
      "M=C·i·t",
      "M=C/(1+i·t)"
    ],
    "variableAnswer": "O montante é capital inicial somado aos juros simples.",
    "scenario": "Para representar o valor total acumulado em juros simples, qual fórmula usar?"
  },
  {
    "moduleId": 13,
    "title": "Juros compostos",
    "formula": "M = C(1 + i)ᵗ",
    "variables": "M é montante; C é capital; i é taxa por período; t é número de períodos.",
    "desc": "Memorizar o montante no regime de juros compostos.",
    "wrong": [
      "M=C(1+i·t)",
      "M=C+i+t",
      "M=C·i·t"
    ],
    "variableAnswer": "Nos juros compostos, os juros incidem sobre o montante acumulado.",
    "scenario": "Para representar crescimento de capital com juros sobre juros, qual fórmula usar?"
  },
  {
    "moduleId": 13,
    "title": "Juro em regime composto",
    "formula": "J = M − C",
    "variables": "J é juro total; M é montante; C é capital inicial.",
    "desc": "Relacionar juros totais e montante.",
    "wrong": [
      "J=M+C",
      "J=C−M",
      "J=M/C"
    ],
    "variableAnswer": "O juro total é a diferença entre montante final e capital inicial.",
    "scenario": "Para obter apenas o rendimento total a partir do montante e do capital, qual relação usar?"
  },
  {
    "moduleId": 14,
    "title": "Área do retângulo",
    "formula": "A = b · h",
    "variables": "b é a base; h é a altura.",
    "desc": "Memorizar a área do retângulo.",
    "wrong": [
      "A=2(b+h)",
      "A=b+h",
      "A=b²+h²"
    ],
    "variableAnswer": "A área do retângulo é produto da base pela altura.",
    "scenario": "Para calcular a superfície de uma região retangular, qual fórmula usar?"
  },
  {
    "moduleId": 14,
    "title": "Área do triângulo",
    "formula": "A = (b · h)/2",
    "variables": "b é a base; h é a altura perpendicular à base.",
    "desc": "Memorizar a área do triângulo.",
    "wrong": [
      "A=b·h",
      "A=2(b+h)",
      "A=(b+h)/2"
    ],
    "variableAnswer": "A área do triângulo é metade do produto da base pela altura.",
    "scenario": "Para representar a área de uma região triangular, qual fórmula usar?"
  },
  {
    "moduleId": 14,
    "title": "Área do círculo",
    "formula": "A = πr²",
    "variables": "r é o raio; π é aproximadamente 3,14.",
    "desc": "Memorizar a área do círculo.",
    "wrong": [
      "A=2πr",
      "A=πd",
      "A=πr"
    ],
    "variableAnswer": "A área depende do quadrado do raio.",
    "scenario": "Para calcular a superfície delimitada por uma circunferência, qual fórmula usar?"
  },
  {
    "moduleId": 14,
    "title": "Comprimento da circunferência",
    "formula": "C = 2πr = πd",
    "variables": "r é o raio; d é o diâmetro.",
    "desc": "Memorizar o comprimento da circunferência.",
    "wrong": [
      "C=πr²",
      "C=πr",
      "C=2πr²"
    ],
    "variableAnswer": "O comprimento pode ser expresso por duas vezes pi vezes o raio ou pi vezes o diâmetro.",
    "scenario": "Para medir o contorno de uma região circular, qual fórmula usar?"
  },
  {
    "moduleId": 15,
    "title": "Teorema de Pitágoras",
    "formula": "a² = b² + c²",
    "variables": "a é a hipotenusa; b e c são catetos, em triângulo retângulo.",
    "desc": "Memorizar a relação entre os lados de um triângulo retângulo.",
    "wrong": [
      "a=b+c",
      "a²=b²−c²",
      "a=b²+c²"
    ],
    "variableAnswer": "O quadrado da hipotenusa é a soma dos quadrados dos catetos.",
    "scenario": "Para relacionar os três lados de um triângulo retângulo, qual teorema usar?"
  },
  {
    "moduleId": 15,
    "title": "Seno no triângulo retângulo",
    "formula": "sen θ = cateto oposto / hipotenusa",
    "variables": "θ é o ângulo agudo considerado.",
    "desc": "Memorizar a razão trigonométrica seno.",
    "wrong": [
      "sen θ=cateto adjacente/hipotenusa",
      "sen θ=cateto oposto/cateto adjacente",
      "sen θ=hipotenusa/cateto oposto"
    ],
    "variableAnswer": "Seno relaciona cateto oposto e hipotenusa.",
    "scenario": "Para relacionar cateto oposto e hipotenusa em um triângulo retângulo, qual razão usar?"
  },
  {
    "moduleId": 15,
    "title": "Cosseno no triângulo retângulo",
    "formula": "cos θ = cateto adjacente / hipotenusa",
    "variables": "θ é o ângulo agudo considerado.",
    "desc": "Memorizar a razão trigonométrica cosseno.",
    "wrong": [
      "cos θ=cateto oposto/hipotenusa",
      "cos θ=cateto oposto/cateto adjacente",
      "cos θ=hipotenusa/cateto adjacente"
    ],
    "variableAnswer": "Cosseno relaciona cateto adjacente e hipotenusa.",
    "scenario": "Para relacionar cateto adjacente e hipotenusa, qual razão trigonométrica usar?"
  },
  {
    "moduleId": 15,
    "title": "Tangente no triângulo retângulo",
    "formula": "tg θ = cateto oposto / cateto adjacente",
    "variables": "θ é o ângulo agudo considerado.",
    "desc": "Memorizar a razão trigonométrica tangente.",
    "wrong": [
      "tg θ=cateto adjacente/hipotenusa",
      "tg θ=cateto oposto/hipotenusa",
      "tg θ=hipotenusa/cateto oposto"
    ],
    "variableAnswer": "Tangente relaciona cateto oposto e cateto adjacente.",
    "scenario": "Para relacionar os dois catetos em relação a um ângulo, qual razão usar?"
  },
  {
    "moduleId": 15,
    "title": "Lei dos senos",
    "formula": "a/sen A = b/sen B = c/sen C",
    "variables": "a,b,c são lados opostos aos ângulos A,B,C.",
    "desc": "Memorizar a lei dos senos para triângulos quaisquer.",
    "wrong": [
      "a/cos A = b/cos B = c/cos C",
      "a/sen B = b/sen C = c/sen A",
      "a²=b²+c²"
    ],
    "variableAnswer": "Cada lado é proporcional ao seno do ângulo oposto.",
    "scenario": "Em um triângulo não necessariamente retângulo, para relacionar lados e ângulos opostos, qual lei usar?"
  },
  {
    "moduleId": 16,
    "title": "Volume do prisma",
    "formula": "V = Aᵦ · h",
    "variables": "Aᵦ é a área da base; h é a altura.",
    "desc": "Memorizar o volume de um prisma.",
    "wrong": [
      "V=Aᵦ·h/3",
      "V=2Aᵦ+h",
      "V=Aᵦ+h"
    ],
    "variableAnswer": "O volume do prisma é área da base vezes altura.",
    "scenario": "Para calcular o espaço ocupado por um prisma, qual fórmula usar?"
  },
  {
    "moduleId": 16,
    "title": "Volume da pirâmide",
    "formula": "V = (Aᵦ · h)/3",
    "variables": "Aᵦ é a área da base; h é a altura.",
    "desc": "Memorizar o volume da pirâmide.",
    "wrong": [
      "V=Aᵦ·h",
      "V=2Aᵦ·h",
      "V=(Aᵦ+h)/3"
    ],
    "variableAnswer": "O volume da pirâmide é um terço do produto da área da base pela altura.",
    "scenario": "Para calcular o volume de uma pirâmide, qual fórmula usar?"
  },
  {
    "moduleId": 16,
    "title": "Volume do cilindro",
    "formula": "V = πr²h",
    "variables": "r é o raio da base; h é a altura.",
    "desc": "Memorizar o volume do cilindro.",
    "wrong": [
      "V=2πrh",
      "V=πrh",
      "V=(πr²h)/3"
    ],
    "variableAnswer": "O volume do cilindro é a área circular da base multiplicada pela altura.",
    "scenario": "Para calcular o volume de um cilindro, qual fórmula usar?"
  },
  {
    "moduleId": 16,
    "title": "Volume do cone",
    "formula": "V = (πr²h)/3",
    "variables": "r é o raio da base; h é a altura.",
    "desc": "Memorizar o volume do cone.",
    "wrong": [
      "V=πr²h",
      "V=2πrh",
      "V=4πr³/3"
    ],
    "variableAnswer": "O cone tem um terço do volume de um cilindro de mesma base e altura.",
    "scenario": "Para calcular o volume de um cone, qual fórmula usar?"
  },
  {
    "moduleId": 16,
    "title": "Volume da esfera",
    "formula": "V = 4πr³/3",
    "variables": "r é o raio da esfera.",
    "desc": "Memorizar o volume da esfera.",
    "wrong": [
      "V=4πr²",
      "V=πr³/3",
      "V=2πr³"
    ],
    "variableAnswer": "O volume da esfera é quatro terços de pi vezes o raio ao cubo.",
    "scenario": "Para calcular o volume de uma esfera, qual fórmula usar?"
  },
  {
    "moduleId": 17,
    "title": "Distância entre dois pontos",
    "formula": "d = √[(x₂−x₁)² + (y₂−y₁)²]",
    "variables": "(x₁,y₁) e (x₂,y₂) são coordenadas dos pontos.",
    "desc": "Memorizar a distância euclidiana no plano cartesiano.",
    "wrong": [
      "d=(x₂−x₁)+(y₂−y₁)",
      "d=√[(x₂+x₁)²+(y₂+y₁)²]",
      "d=(x₂−x₁)²+(y₂−y₁)²"
    ],
    "variableAnswer": "A distância usa a raiz da soma dos quadrados das diferenças das coordenadas.",
    "scenario": "Para calcular a distância reta entre dois pontos no plano, qual fórmula usar?"
  },
  {
    "moduleId": 17,
    "title": "Ponto médio",
    "formula": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
    "variables": "As coordenadas dos extremos são (x₁,y₁) e (x₂,y₂).",
    "desc": "Memorizar as coordenadas do ponto médio de um segmento.",
    "wrong": [
      "M=(x₂−x₁,y₂−y₁)",
      "M=(x₁+x₂,y₁+y₂)",
      "M=((x₁−x₂)/2,(y₁−y₂)/2)"
    ],
    "variableAnswer": "O ponto médio é a média aritmética das coordenadas correspondentes.",
    "scenario": "Para encontrar o ponto que divide um segmento em duas partes iguais, qual fórmula usar?"
  },
  {
    "moduleId": 17,
    "title": "Equação reduzida da reta",
    "formula": "y = mx + n",
    "variables": "m é coeficiente angular; n é coeficiente linear.",
    "desc": "Reconhecer a forma reduzida da equação da reta.",
    "wrong": [
      "y=mx²+n",
      "x=my+n",
      "y=m/x+n"
    ],
    "variableAnswer": "A reta pode ser escrita como y igual ao coeficiente angular vezes x mais o linear.",
    "scenario": "Para representar uma reta usando inclinação e intercepto vertical, qual forma usar?"
  },
  {
    "moduleId": 17,
    "title": "Equação da circunferência",
    "formula": "(x−a)² + (y−b)² = r²",
    "variables": "(a,b) é o centro; r é o raio.",
    "desc": "Memorizar a equação reduzida da circunferência.",
    "wrong": [
      "(x+a)²+(y+b)²=r",
      "(x−a)+(y−b)=r²",
      "(x−a)²−(y−b)²=r²"
    ],
    "variableAnswer": "A soma dos quadrados das diferenças até o centro é igual ao raio ao quadrado.",
    "scenario": "Para representar uma circunferência de centro conhecido e raio r, qual equação usar?"
  },
  {
    "moduleId": 18,
    "title": "Elemento de matriz",
    "formula": "A = [aᵢⱼ]",
    "variables": "aᵢⱼ é o elemento da linha i e coluna j.",
    "desc": "Memorizar a notação de elemento de uma matriz.",
    "wrong": [
      "aᵢⱼ é coluna i e linha j",
      "A=[aᵢ+j]",
      "A=[aᵢ·aⱼ]"
    ],
    "variableAnswer": "O primeiro índice indica a linha e o segundo indica a coluna.",
    "scenario": "Para indicar o elemento localizado na linha i e coluna j, qual notação usar?"
  },
  {
    "moduleId": 18,
    "title": "Produto de matrizes",
    "formula": "(AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ",
    "variables": "O elemento é obtido pelo produto escalar da linha i de A pela coluna j de B.",
    "desc": "Reconhecer a regra do produto de matrizes.",
    "wrong": [
      "(AB)ᵢⱼ=aᵢⱼbᵢⱼ",
      "(AB)ᵢⱼ=Σₖaₖᵢbₖⱼ",
      "(AB)ᵢⱼ=aᵢⱼ+bᵢⱼ"
    ],
    "variableAnswer": "Multiplica-se linha por coluna e somam-se os produtos correspondentes.",
    "scenario": "Para identificar a regra de formação de cada elemento do produto AB, qual relação usar?"
  },
  {
    "moduleId": 18,
    "title": "Determinante 2×2",
    "formula": "det([[a,b],[c,d]]) = ad − bc",
    "variables": "a,b,c,d são elementos da matriz quadrada de ordem 2.",
    "desc": "Memorizar o determinante de uma matriz 2 por 2.",
    "wrong": [
      "ad+bc",
      "ab−cd",
      "ac−bd"
    ],
    "variableAnswer": "No determinante 2×2, produto da diagonal principal menos produto da secundária.",
    "scenario": "Para calcular o determinante de uma matriz quadrada de ordem 2, qual fórmula usar?"
  },
  {
    "moduleId": 18,
    "title": "Matriz identidade",
    "formula": "AI = IA = A",
    "variables": "I é a matriz identidade de ordem compatível; A é matriz quadrada compatível.",
    "desc": "Reconhecer o elemento neutro da multiplicação de matrizes.",
    "wrong": [
      "A+I=A",
      "AI=I",
      "A·0=A"
    ],
    "variableAnswer": "A matriz identidade não altera a matriz na multiplicação.",
    "scenario": "Qual relação expressa o papel da matriz identidade no produto matricial?"
  },
  {
    "moduleId": 19,
    "title": "Princípio fundamental da contagem",
    "formula": "N = n₁ · n₂ · ... · nₖ",
    "variables": "n₁,...,nₖ são quantidades de escolhas em etapas sucessivas.",
    "desc": "Memorizar a regra do produto para contagem.",
    "wrong": [
      "N=n₁+n₂+...+nₖ",
      "N=n₁−n₂−...−nₖ",
      "N=n₁/n₂/.../nₖ"
    ],
    "variableAnswer": "Multiplicam-se as possibilidades de cada etapa independente e sucessiva.",
    "scenario": "Para contar resultados formados por escolhas sucessivas, qual princípio usar?"
  },
  {
    "moduleId": 19,
    "title": "Fatorial",
    "formula": "n! = n(n−1)(n−2)...1",
    "variables": "n é inteiro não negativo; por definição 0! = 1.",
    "desc": "Memorizar a definição de fatorial.",
    "wrong": [
      "n!=n+n−1+...+1",
      "n!=n·1",
      "n!=n²"
    ],
    "variableAnswer": "Fatorial é o produto dos inteiros positivos até n.",
    "scenario": "Para representar o produto de todos os inteiros positivos até n, qual notação usar?"
  },
  {
    "moduleId": 19,
    "title": "Permutação simples",
    "formula": "Pₙ = n!",
    "variables": "n é o número de elementos distintos; todos são ordenados.",
    "desc": "Memorizar a contagem de ordenações de n elementos distintos.",
    "wrong": [
      "Pₙ=n",
      "Pₙ=n²",
      "Pₙ=n!/(n−1)!"
    ],
    "variableAnswer": "Permutação simples conta todas as ordenações dos n elementos.",
    "scenario": "Para contar maneiras de ordenar todos os elementos distintos, qual fórmula usar?"
  },
  {
    "moduleId": 19,
    "title": "Combinação simples",
    "formula": "C(n,p) = n!/[p!(n−p)!]",
    "variables": "n é o total; p é a quantidade escolhida; a ordem não importa.",
    "desc": "Memorizar a fórmula de combinação simples.",
    "wrong": [
      "A(n,p)=n!/(n−p)!",
      "C(n,p)=n!/p!",
      "C(n,p)=n!/(n−p)!"
    ],
    "variableAnswer": "Combinação seleciona p elementos dentre n sem considerar a ordem.",
    "scenario": "Para contar grupos em que a ordem dos escolhidos não importa, qual fórmula usar?"
  },
  {
    "moduleId": 19,
    "title": "Arranjo simples",
    "formula": "A(n,p) = n!/(n−p)!",
    "variables": "n é o total; p é a quantidade escolhida; a ordem importa.",
    "desc": "Memorizar a fórmula de arranjo simples.",
    "wrong": [
      "C(n,p)=n!/[p!(n−p)!]",
      "A(n,p)=n!/p!",
      "A(n,p)=p!/(n−p)!"
    ],
    "variableAnswer": "Arranjo seleciona e ordena p elementos dentre n.",
    "scenario": "Para contar escolhas de p elementos em que posições ou ordem importam, qual fórmula usar?"
  },
  {
    "moduleId": 20,
    "title": "Probabilidade clássica",
    "formula": "P(A) = n(A)/n(Ω)",
    "variables": "n(A) é o número de casos favoráveis; n(Ω) é o total de casos possíveis equiprováveis.",
    "desc": "Memorizar a razão entre casos favoráveis e possíveis.",
    "wrong": [
      "P(A)=n(Ω)/n(A)",
      "P(A)=n(A)+n(Ω)",
      "P(A)=n(A)·n(Ω)"
    ],
    "variableAnswer": "Em espaço amostral equiprovável, probabilidade é favoráveis dividido por possíveis.",
    "scenario": "Para calcular a chance de um evento em resultados equiprováveis, qual fórmula usar?"
  },
  {
    "moduleId": 20,
    "title": "Evento complementar",
    "formula": "P(Aᶜ) = 1 − P(A)",
    "variables": "Aᶜ é o evento complementar de A.",
    "desc": "Memorizar a relação entre evento e complementar.",
    "wrong": [
      "P(Aᶜ)=1+P(A)",
      "P(Aᶜ)=P(A)",
      "P(Aᶜ)=1/P(A)"
    ],
    "variableAnswer": "A probabilidade de não ocorrer A é um menos a probabilidade de A.",
    "scenario": "Para obter a chance de um evento não acontecer, qual relação usar?"
  },
  {
    "moduleId": 20,
    "title": "União de eventos",
    "formula": "P(A ∪ B)=P(A)+P(B)−P(A ∩ B)",
    "variables": "A∪B é A ou B; A∩B é a interseção.",
    "desc": "Memorizar a fórmula da união de dois eventos.",
    "wrong": [
      "P(A∪B)=P(A)+P(B)",
      "P(A∪B)=P(A)·P(B)",
      "P(A∪B)=P(A∩B)−P(A)"
    ],
    "variableAnswer": "Subtrai-se a interseção para não contar os resultados comuns duas vezes.",
    "scenario": "Para calcular a chance de A ou B ocorrer, incluindo possível sobreposição, qual fórmula usar?"
  },
  {
    "moduleId": 20,
    "title": "Probabilidade condicional",
    "formula": "P(A|B)=P(A∩B)/P(B), P(B)>0",
    "variables": "P(A|B) é a chance de A dado que B ocorreu.",
    "desc": "Memorizar a definição de probabilidade condicional.",
    "wrong": [
      "P(A|B)=P(A)+P(B)",
      "P(A|B)=P(A)/P(A∩B)",
      "P(A|B)=P(A∩B)/P(A)"
    ],
    "variableAnswer": "A probabilidade condicional restringe o espaço ao evento B.",
    "scenario": "Quando a questão informa que B já ocorreu e pergunta a chance de A, qual fórmula usar?"
  },
  {
    "moduleId": 21,
    "title": "Média aritmética",
    "formula": "x̄ = (x₁+x₂+...+xₙ)/n",
    "variables": "xᵢ são os valores observados; n é a quantidade de valores.",
    "desc": "Memorizar a média aritmética simples.",
    "wrong": [
      "x̄=n/(x₁+...+xₙ)",
      "x̄=(x₁·...·xₙ)/n",
      "x̄=x₁+x₂+...+xₙ"
    ],
    "variableAnswer": "A média simples é a soma dos valores dividida pela quantidade.",
    "scenario": "Para representar o valor médio de um conjunto sem pesos diferentes, qual fórmula usar?"
  },
  {
    "moduleId": 21,
    "title": "Média ponderada",
    "formula": "x̄ = (x₁p₁+...+xₙpₙ)/(p₁+...+pₙ)",
    "variables": "xᵢ são valores; pᵢ são pesos correspondentes.",
    "desc": "Memorizar a média ponderada.",
    "wrong": [
      "x̄=(x₁+...+xₙ)/n",
      "x̄=(p₁+...+pₙ)/(x₁p₁+...+xₙpₙ)",
      "x̄=Σxᵢpᵢ·Σpᵢ"
    ],
    "variableAnswer": "Cada valor é multiplicado por seu peso e a soma é dividida pela soma dos pesos.",
    "scenario": "Para calcular uma média em que alguns valores têm maior peso, qual fórmula usar?"
  },
  {
    "moduleId": 21,
    "title": "Variância populacional",
    "formula": "σ² = Σ(xᵢ − μ)²/N",
    "variables": "xᵢ são dados; μ é a média populacional; N é o total da população.",
    "desc": "Memorizar a variância populacional.",
    "wrong": [
      "σ²=Σ(xᵢ−μ)/N",
      "σ²=Σ(xᵢ−μ)²/(N−1)",
      "σ²=Σxᵢ/N"
    ],
    "variableAnswer": "A variância é a média dos quadrados dos desvios em relação à média.",
    "scenario": "Para medir a dispersão populacional usando os desvios quadráticos, qual fórmula usar?"
  },
  {
    "moduleId": 21,
    "title": "Desvio padrão",
    "formula": "σ = √σ²",
    "variables": "σ² é a variância; σ é o desvio padrão.",
    "desc": "Memorizar a relação entre desvio padrão e variância.",
    "wrong": [
      "σ=σ²",
      "σ=1/σ²",
      "σ=√N·σ²"
    ],
    "variableAnswer": "O desvio padrão é a raiz quadrada da variância.",
    "scenario": "Para expressar a dispersão na mesma unidade dos dados, qual relação usar?"
  },
  {
    "moduleId": 22,
    "title": "Unidade imaginária",
    "formula": "i² = −1",
    "variables": "i é a unidade imaginária.",
    "desc": "Memorizar a propriedade fundamental da unidade imaginária.",
    "wrong": [
      "i²=1",
      "i²=0",
      "i=−1"
    ],
    "variableAnswer": "A unidade imaginária é definida como a raiz quadrada de −1.",
    "scenario": "Para simplificar potências pares da unidade imaginária, qual propriedade fundamental usar?"
  },
  {
    "moduleId": 22,
    "title": "Forma algébrica complexa",
    "formula": "z = a + bi",
    "variables": "a é a parte real; b é o coeficiente da parte imaginária; i²=−1.",
    "desc": "Reconhecer a forma algébrica de um número complexo.",
    "wrong": [
      "z=ab+i",
      "z=a+b/i",
      "z=a²+bi²"
    ],
    "variableAnswer": "Um complexo é escrito como parte real mais coeficiente real vezes i.",
    "scenario": "Para representar um número complexo na forma algébrica, qual expressão usar?"
  },
  {
    "moduleId": 22,
    "title": "Conjugado complexo",
    "formula": "z̄ = a − bi, se z = a + bi",
    "variables": "O conjugado mantém a parte real e troca o sinal da parte imaginária.",
    "desc": "Memorizar a operação de conjugação complexa.",
    "wrong": [
      "z̄=−a+bi",
      "z̄=a+bi",
      "z̄=−a−bi"
    ],
    "variableAnswer": "O conjugado troca apenas o sinal do termo imaginário.",
    "scenario": "Para obter o conjugado de a+bi, qual transformação fazer?"
  },
  {
    "moduleId": 22,
    "title": "Teorema do resto",
    "formula": "P(a) = r",
    "variables": "Se P(x) é dividido por (x−a), o resto é P(a).",
    "desc": "Memorizar o teorema do resto para polinômios.",
    "wrong": [
      "P(a)=0 sempre",
      "P(a)=quociente",
      "P(a)=a·r"
    ],
    "variableAnswer": "O resto da divisão por x−a é o valor do polinômio em a.",
    "scenario": "Para descobrir o resto de uma divisão polinomial por x−a sem efetuar a divisão, qual teorema usar?"
  },
  {
    "moduleId": 22,
    "title": "Binômio de Newton",
    "formula": "(a+b)ⁿ = Σₖ₌₀ⁿ C(n,k)aⁿ⁻ᵏbᵏ",
    "variables": "C(n,k) são coeficientes binomiais; n é inteiro não negativo.",
    "desc": "Reconhecer a expansão geral de uma potência de binômio.",
    "wrong": [
      "(a+b)ⁿ=aⁿ+bⁿ",
      "(a+b)ⁿ=ΣC(n,k)aᵏbᵏ",
      "(a+b)ⁿ=Σ(a+b)k"
    ],
    "variableAnswer": "A expansão combina coeficientes binomiais com potências complementares de a e b.",
    "scenario": "Para desenvolver uma potência natural de um binômio, qual fórmula geral usar?"
  }
];
// Cada cartão de fórmula gera cinco exercícios voltados à memorização e à escolha da relação correta.
window.mathLessons.forEach((lesson) => {
  const wrong = lesson.wrong;
  lesson.questions = [
    { type: 'recognize', prompt: `Qual é a fórmula correta para: ${lesson.title.toLowerCase()}?`, options: [lesson.formula, ...wrong].sort(() => Math.random() - 0.5), answer: lesson.formula, explain: lesson.desc },
    { type: 'fill', prompt: `Complete a fórmula de ${lesson.title.toLowerCase()}: ${lesson.formula.slice(0, Math.max(0, lesson.formula.lastIndexOf(' = ')))} = ____`, parts: [], answer: lesson.formula.includes(' = ')?lesson.formula.slice(lesson.formula.lastIndexOf(' = ')+3):lesson.formula, explain: `A relação completa é: ${lesson.formula}. ${lesson.desc}` },
    { type: 'match', prompt: `O que os símbolos e as variáveis representam em: ${lesson.formula}?`, options: [lesson.variables, ...[...wrong].slice(0,3).map((_,i)=>['As letras representam apenas valores fixos, sem significado específico.','Os símbolos indicam uma operação diferente da apresentada.','A fórmula não possui variáveis nem condições de uso.'][i])], answer: lesson.variables, explain: lesson.variables },
    { type: 'identify', prompt: `Qual alternativa representa ${lesson.title.toLowerCase()}?`, options: [lesson.formula, ...wrong].sort(() => Math.random() - 0.5), answer: lesson.formula, explain: lesson.desc },
    { type: 'apply', prompt: lesson.scenario, options: [lesson.formula, ...wrong].sort(() => Math.random() - 0.5), answer: lesson.formula, explain: `${lesson.desc} Fórmula: ${lesson.formula}` }
  ];
});
