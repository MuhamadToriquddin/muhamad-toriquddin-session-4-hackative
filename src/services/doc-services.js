import {ai} from "../config/ai.js"

export const docService = async({prompts, doc, mimeType})=>{
    const response = await ai.models.generateContent({
        model:process.env.GEMINI_MODEL,
        contents:[
            {text:prompts,type:"text"},
            {inlineData:{data:doc,mimeType:mimeType}}
        ]
        
    })
    return response
}

