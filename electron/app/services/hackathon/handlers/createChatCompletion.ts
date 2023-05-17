import {Configuration, OpenAIApi} from 'openai';

import {CreateChatCompletionParams} from '@shared/ipc/hackathon';

const openAiConfiguration = new Configuration({
  apiKey: '',
});
const openai = new OpenAIApi(openAiConfiguration);

export async function createChatCompletion({message}: CreateChatCompletionParams): Promise<string | undefined> {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{role: 'user', content: message}],
  });

  const content = completion.data.choices[0].message?.content;
  return content;
}
