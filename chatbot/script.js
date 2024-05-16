const  chatInput  = document.querySelector(".chat-input  textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox")

let userMessage; 
const API_kEY = "sk-proj-fpTB5NzF9nZf5MDD4ngST3BlbkFJzamNXgTT7gFUBW2iSPgi";

const createChatli = (message,className)=>{
    const chatli =document.createElement("li");
    chatli.classList.add("chat",className);
    let chatContent = className === "Outgoing" ? `<p>${message}</p>`:`<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
   chatli.innerHTML =chatContent;
   return chatli;

}

const generateResponse = () =>{
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestoptions ={
        method:"POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${API_kEY}`

        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: "user" , content: userMessage }]
        })
    } 


    fetch (API_URL, requestoptions).then(res => res.json()).then(data => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });


}
const handleChat = () => {
 userMessage = chatInput.value.trim();
//  console.log(userMessage);
if (!userMessage) return;

chatbox.appendChild(createChatli(userMessage, "Outgoing"));

}
setTimeout(() => {
    chatbox.appendChild(createChatli("🤔 Thinking...","incoming"));
    generateResponse();
},500);


sendChatBtn.addEventListener("click", handleChat);
