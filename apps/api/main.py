from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from dotenv import load_dotenv
from openai import OpenAI
import os
load_dotenv(dotenv_path=".env.local")
api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

app = FastAPI()

origins = [
    "http://localhost:3000", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Write a one-sentence bedtime story about a unicorn."}
        ]
    )
    
    return {f"message": f"Hello from FastAPI! and Chat {response.choices[0].message.content}"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "description": "A test item"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
    
