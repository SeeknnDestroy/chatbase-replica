from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import time

app = FastAPI(title="Chatbase Alternative API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple in-memory storage for demo purposes
# In production, use MongoDB as specified in PRD
chat_history = []

class Message(BaseModel):
    role: str  # 'user' or 'assistant'
    content: str
    timestamp: Optional[float] = None

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str
    timestamp: float

@app.get("/")
def read_root():
    return {"message": "Welcome to Chatbase Alternative API"}

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Process a chat message and return a response
    """
    # Store user message
    user_message = Message(
        role="user",
        content=request.message,
        timestamp=time.time()
    )
    chat_history.append(user_message.dict())
    
    # In a real implementation, this would call an AI model
    # For now, we'll return a simple response
    response_text = f"Echo: {request.message}"
    
    # Store assistant response
    assistant_message = Message(
        role="assistant",
        content=response_text,
        timestamp=time.time()
    )
    chat_history.append(assistant_message.dict())
    
    return ChatResponse(
        response=response_text,
        timestamp=assistant_message.timestamp
    )

@app.get("/api/chat/history", response_model=List[Message])
async def get_chat_history():
    """
    Get the chat history
    """
    return chat_history

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 