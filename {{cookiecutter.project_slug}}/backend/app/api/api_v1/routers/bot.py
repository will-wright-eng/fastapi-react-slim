import os

import openai
from fastapi import APIRouter
from pydantic import BaseModel

# from app.core.logger import get_logger
# logger = get_logger()

bot_router = r = APIRouter(
    prefix="/bot",
)

class Item(BaseModel):
    prompt: str
    model: str
    temperature: float
    top_p: float

@r.post("/chat")
async def get_single_completion(item: Item):
    messages = [
        {"role": "system", "content": "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly."},
    ]
    print(item)
    openai.api_key = os.environ.get("OPENAI_API_KEY")
    messages.append({"role": "user", "content": item.prompt})
    print(messages)
    response = openai.ChatCompletion.create(
        model=item.model,
        messages=messages,
        temperature=item.temperature,
        top_p=item.top_p,
    )
    resp = response.choices[0].message["content"]
    return {"message": resp}
