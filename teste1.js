import OpenAI from "openai";
import 'dotenv/config';
import fs from "fs";

const mediaPath = "./";

const openai = new OpenAI({
    organization: process.env.ORGANIZATION_KEY,
    apiKey: process.env.API_CREDITO,
});

const imagePart1 = fileToGenerativePart(
    `${mediaPath}/treino01.jpg`,
    "image/jpeg",
);

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function main() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
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
                        "text": "Considere o trecho musical abaixo."
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
                O trecho musical possui 4 compassos na clave de sol.
              `
                    },{
                        "type": "text",
                        "text": `
                O primeiro compasso possui duas mínimas nas notas Dó e Ré.
              `
                    },
                    {
                        "type": "text",
                        "text": `
                  O segundo compasso possui três semínimas: Mi, Ré e Dó. Existe também uma pausa de semínima.
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
                        "text": "Considere agora o trecho musical abaixo para responder às próximas perguntas."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://carlosveigafilho.com.br/treinosolf/images/treino04.jpg"
                        }
                    },
                    {
                        "type": "text",
                        "text": "Quantos compassos existem no trecho?"
                    },
                    {
                        "type": "text",
                        "text": "Liste as notas e figuras desta imagem."
                    }
                ]
            },
        ]
    });

    console.log(completion.choices[0].message);
}

main();