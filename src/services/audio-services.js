import {ai} from "../config/ai.js"

export const audioService = async({prompts, audio, mimeType})=>{
    const response = await ai.models.generateContent({
        model:process.env.GEMINI_MODEL,
        contents:[
            {text:prompts,type:"text"},
            {inlineData:{data:audio,mimeType:mimeType}}
        ]
        
    })
    return response
}

