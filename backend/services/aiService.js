import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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'
});

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
    store: true,
});

console.log(completion.choices[0].message);