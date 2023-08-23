import { Configurations, OpenAIApi } from "openai"; // import openai-api
import dotenv from "dotenv"; //  import dotenv to access .env file
dotenv.config(); // load .env file

// get OPENAI_API_KEY from .env file
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; 

// check if OPENAI_API_KEY is not found
if (!OPENAI_API_KEY) { 
  console.error("OPENAI_API_KEY not found!");
  process.exit(1); // exit the process with error code 1 
}

// used to configure the API
const configuration = new Configurations({ 
    apikey: OPENAI_API_KEY,
});

// used to access the API and make requests in the app
const openai = new OpenAIApi(configuration); 

export default openai; // export openai to use in other files