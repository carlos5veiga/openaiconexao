import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI({
    organization: process.env.ORGANIZATION_KEY,
    apiKey: process.env.API_CREDITO,
});

async function main() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": `
                Você é um assistente que vai conversar sobre teoria musical e solfejo.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  As figuras musicais que você vai trabalhar são: semibreve, mínima, semínima, colcheia, semicolcheis, fusa e semifusa.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  A semínima é uma figura musical que possui haste e a cabeça da nota está preenchida.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  A mínima é uma figura musical que possui haste e a cabeça da nota não está preenchida, ela é vazada.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Considerando um compasso 4/4, um compasso não pode conter apenas uma semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Considerando um compasso 4/4, uma semínima vale um tempo.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Considerando um compasso 4/4, uma mínima vale dois tempos, ou seja, uma mínima vale o dobro da semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Considerando um compasso 4/4, uma semibreve vale quatro tempos, ou seja, uma semibreve vale o dobro da mínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Para preencher um compasso 4/4, são necessários 4 tempos.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  A barra de compasso é uma linha vertical que delimita os compassos e não possui cabeça como as notas.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O pentagrama possui 5 linhas que são enumeradas de baixo para cima. A linha 1 é a linha inferior do pentagrama. A linha 5 é a linha superior do pentagrama.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O pentagrama possui 5 linhas que são enumeradas de baixo para cima. Entre estas 5 linhas, existem 4 espaços, tmabém numerados de baixo para cima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Na clave de sol, a nota Sol é a nota que está na linha 2 do pentagrama.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Linhas suplementares pode ser criadas para indicar notas fora do pentagrama.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Linhas suplementares acima do pentagrama são chamadas de linhas suplementares superiores.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Linhas suplementares abaixo do pentagrama são chamadas de linhas suplementares inferiores.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Na clave de sol a primeira linha do pentagrama representa a nota Mi.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Na clave de sol a primeira linha suplementar inferior representa a nota Dó.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Caso seja perguntado sobre outro tema, responda educadamente que não pode responder.
                `
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Considere o trecho musical desta imagem."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino01.jpg"
                        }
                    },
                ]
            },
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": `
                O trecho musical possui 4 compassos na clave de sol. O compasso é 4/4.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                Acima da clave de sol há um número 1, indicando que este é o exemplo 1.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                O primeiro compasso possui duas mínimas nas notas Dó e Ré. A nota Dó está escrita na primeira linha suplementar inferior.
                A nota Ré está escrita entre a primeira linha suplementar inferior e a primeira linha do pentagrama. Ambas escritas com a figura musical chamada mínima.
                A nota Ré sempre estará escrita acima da nota Dó e abaixo da nota Mi, considerando a verticalidade do pentagrama. Após a nota Ré temos uma barra de compasso neste exemplo.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui três semínimas: Mi, Ré e Dó. Existe também uma pausa de semínima. A nota Mi está representada na linha 1 do pentagrama.
                  A pausa de semínima, assim como a semínima, em um compasso 4/4 vale 1 tempo.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso possui quatro semínimas: Dó, Ré, Mi e Ré.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui uma semibreve: Dó.
                `
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Considere o trecho musical desta imagem."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino02.jpg"
                        }
                    },
                ]
            },
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": `
                O trecho musical possui 4 compassos na clave de sol. O compasso é 4/4.
              `
                    },{
                        "type": "text",
                        "text": `
                O primeiro compasso possui quatro semínimas nas notas Dó, Ré, Mi e Ré.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui duas mínimas: Dó e Ré.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso começa com uma pausa de mínima e depois tem duas semínimas: Mi e Ré.
                  A pausa de mínima, assim como a mínima, em um compasso 4/4 vale 2 tempos.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui duas semínimas e uma mínima, todos na nota Dó, ou seja, na primeira linha suplementar inferior.
                `
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Considere o trecho musical desta imagem."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino03.jpg"
                        }
                    },
                ]
            },
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": `
                O trecho musical possui 4 compassos na clave de sol. O compasso é 4/4.
              `
                    },{
                        "type": "text",
                        "text": `
                O primeiro compasso possui duas mínimas nas notas Dó e Mi.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui três semínimas: Mi, Ré e Dó. A última figura é uma pausa de semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso começa com quatro colcheias: Dó, Ré, Mi e Fá. No final do terceiro compasso existem duas semínimas, ambas na nota sol.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui uma semibreve na nota Dó.
                `
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Considere o trecho musical desta imagem."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino04.jpg"
                        }
                    },
                ]
            },
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": `
                O trecho musical possui 4 compassos na clave de sol. O compasso é 4/4.
              `
                    },{
                        "type": "text",
                        "text": `
                O primeiro compasso possui quatro semínimas nas notas Dó, Ré, Mi e Fá.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui uma mínima na nota sol e uma semínima na nota Mi. A última figura é uma pausa de semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso começa com quatro semínimas: Sol, Fá, Mi e Ré.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui duas semínimas nas notas Dó e Ré uma mínima na nota Dó.
                `
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Considere o trecho musical desta imagem."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino05.jpg"
                        }
                    },
                ]
            },
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": `
                O trecho musical possui 4 compassos na clave de sol. O compasso é 4/4.
              `
                    },{
                        "type": "text",
                        "text": `
                O primeiro compasso possui quatro semínimas nas notas Dó, Ré, Mi e Ré.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui uma mínima na nota Mi e uma semínima na nota Fá. A última figura é uma pausa de semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso começa com quatro semínimas: Mi, Fá, Sol e Sol.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui duas semínimas nas notas Dó e Sol uma mínima na nota Dó.
                `
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Considere agora o trecho musical desta immagem para responder às próximas perguntas."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino06.jpg"
                        }
                    },
                    {
                        "type": "text",
                        "text": "Quantos compassos existem no trecho?"
                    },
                    {
                        "type": "text",
                        "text": "Qual o número acima da clave de sol?"
                    },
                    {
                        "type": "text",
                        "text": "A primeira nota deste exemplo se encontra em uma linha suplementar ou em uma linha do pentagrama?"
                    },
                    {
                        "type": "text",
                        "text": "Qual a segunda nota do segundo compasso deste exemplo?"
                    },
                    {
                        "type": "text",
                        "text": "Qual o vizinho superior da nota Sol?"
                    },
                    {
                        "type": "text",
                        "text": "Considerandoa clave de sol e que a nota Sol é escrita no pentagrama na segunda linha, qual nota é representada na linha 5 do pentagrama?"
                    }
                ]
            },
        ]
    });

    console.log(completion.choices[0].message);
}

main();