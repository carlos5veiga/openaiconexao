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
                  Você vai identificar as notas no pentagrama considerando a sua verticalidade.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Inicialmente usaremos a clave de sol.
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
                  As notas musicais no pentagrama só podem ser escritas nas linhas ou nos espaços. Uma nota é considerada escrita na linha quando
                  a linha corta o meio da cabeça da nota. Uma nota é considerada escrita no espaço quando a linha apenas encosta na cabeça da nota.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Na clave de sol, a nota Sol é a nota que está na linha 2 do pentagrama, ou seja, a linha 2 corta a cabeça da nota Sol.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  A nota Lá, vizinha superior da nota Sol, é a nota que está no espaço 2 do pentagrama, ou seja, a linha 2 toca a parte inferior da nota Lá.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  A nota Fá, vizinha inferior da nota Sol, é a nota que está no espaço 1 do pentagrama, ou seja, a linha 2 toca a parte superior da nota Fá.
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
                  Quando a primeira linha suplementar inferior toca a parte superior da nota, esta nota é Si, ou seja, é a vizinha inferior da nota Dó.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  Na escrita musical, as informações são lidas da esquerda para a direita.
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
                O primeiro compasso possui as notas Dó e Ré. A nota Dó está escrita na primeira linha suplementar inferior.
                A nota Ré está escrita entre a primeira linha suplementar inferior e a primeira linha do pentagrama.
                A nota Ré sempre estará escrita acima da nota Dó, pois é a sua vizinha superior, e abaixo da nota Mi, por ser a sua vizinha inferior, considerando a verticalidade do pentagrama. Após a nota Ré temos uma barra de compasso neste exemplo.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui três notas: Mi, Ré e Dó. Existe também uma pausa de semínima. A nota Mi está representada na linha 1 do pentagrama.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso possui quatro notas: Dó, Ré, Mi e Ré.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui uma nota apenas: Dó.
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
                O primeiro compasso possui quatro notas: Dó, Ré, Mi e Ré.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui duas notas: Dó e Ré.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso começa com uma pausa de mínima e depois tem duas notas: Mi e Ré.
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
                O primeiro compasso possui duas notas: Dó e Mi.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui três notas: Mi, Ré e Dó. A última figura é uma pausa de semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso começa com quatro notas: Dó, Ré, Mi e Fá. No final do terceiro compasso existem duas notas, ambas na nota sol.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui uma nota Dó.
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
                O primeiro compasso possui quatro notas: Dó, Ré, Mi e Fá.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui uma nota sol e uma nota Mi. A última figura é uma pausa de semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso possui quatro notas: Sol, Fá, Mi e Ré.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui três notas: Dó, Ré e Dó.
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
                O primeiro compasso possui quatro notas: Dó, Ré, Mi e Ré.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui duas notas: Mi e Fá. A última figura é uma pausa de semínima.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O terceiro compasso possui com quatro notas: Mi, Fá, Sol e Sol.
                `
                    },
                    {
                        "type": "text",
                        "text": `
                  O quarto compasso possui três notas: Dó, Sol e Dó.
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
                        "text": "Qual a primeira nota deste exemplo?"
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
                        "text": "A última nota deste exemplo está na linha ou no espaço?"
                    },
                    {
                        "type": "text",
                        "text": "Em qual linha do pentagrama está escrita a primeira nora do terceiro compasso?"
                    }
                ]
            },
        ]
    });

    console.log(completion.choices[0].message);
}

main();