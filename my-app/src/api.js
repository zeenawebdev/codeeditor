
import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";


const API = axios.create({
    baseURL:'https://emkc.org/api/v2/piston'
})
export const executeCode =async (language , SourceCode)=>{
const response = await API.post('/execute', 
    {
        "language": language,
        "version": LANGUAGE_VERSIONS[language],
        "files": [
          {
          content: SourceCode
          }
        ]}  
)
return response.data
}