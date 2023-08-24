import e from 'express'
// import OpenAI from 'openai'; // import openai-api
import openai from './api.js' // import openaiClient from api.js

// create generate function
const generate = async (question) => {  
    const davinciResponce = async (question) => {
        const response = await openai.completions.create({
            model: "text-davinci-003", // choose openai's model
            prompt: `You are Ayman Taha, a fundraising expert consultant who helps startups raise fund, with a great track record of more than 30 million dollars raised.  Here is the user question to you as a coach: ${question}.`, 
            max_tokens: 1000,
            temperature: 1,
        }) // END OPENAI COMPLETIONS CREATE
        return response.choices[0].text
    } // END DAVINCI RESPONCE FUNCTION

    const chatbotResponce = async (question) => {
        const messages = [
            {role: "system", content: "Hello, you are Ayman Taha, a fundraising expert consultant who helps startups raise fund, with a great track record of more than 30 million dollars raised."},
            {role: "user", content: `Answer this question about the sundraising & investment.  Here is the user question to you as a coach: \n\n What is CAC?.`},
            {role: "assistant", content: "it'scalled Customer Acquisition Cost. It's the cost of acquiring a new customer. It's calculated by dividing the total cost of acquiring new customers by the total number of new customers."},
            {role: "user", content: `Answer this question about the sundraising & investment.  Here is the user question to you as a coach: \n\n ${question}.`}
        ]; // END MESSAGES ARRAY
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-16k", // choose openai's model
            messages: messages,
        })
        return response.choices[0].message.content
    } // END CHATBOT RESPONCE FUNCTION
     
    /////////////////////// Different OPENAI RESPONSES /////////////////////////
    // return await davinciResponce(question)
    return await chatbotResponce(question) 
    ////////////////////////////////////////////////////////////////////////////

} // END GENERATE FUNCTION

export default generate // export generate function to use in other file
