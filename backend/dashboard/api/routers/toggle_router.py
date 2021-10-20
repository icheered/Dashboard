import asyncio
import os

from fastapi import APIRouter

Toggle_Router = APIRouter()


@Toggle_Router.get("/on")
async def turn_on():
    os.popen("sh ../screenOn.sh")
    return {"message": "Turning on"}


@Toggle_Router.get("/off")
async def turn_off():
    os.popen("sh ../screenOff.sh")
    return {"message": "Turning off"}
