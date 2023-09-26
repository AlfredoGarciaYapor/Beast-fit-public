import OpenAI from "openai";
const API_KEY = "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";
// const API_KEY = "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";

const openai = new OpenAI({
  apiKey: API_KEY, // This is also the default, can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
