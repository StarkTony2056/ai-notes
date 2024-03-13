import {Configuration, OpenAIApi} from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export async function generateImagePrompt(name: string) {
    // prompt : math
    // --> thumbnail that has a bunch of colourful numbers and circles
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a creative and helpful AI assistant capable of generating interesting and accurate thumbnail descriptions for my notes. Your output will be fed into the DALL-E api to generate a thumbnail. The description should be minimalistic, diagrammatic and flat styled.'
                },
                {
                    role: 'user',
                    content: `Please create a thumbnail description for my notebook titled ${name}`
                },
            ],
        });
        const data = await response.json();
        const image_description = data.choices[0].message.content;
        return image_description as string;
    } catch (error) {
        throw error;
    }
}

export async function generateImage() {
    
}