from fastapi import APIRouter, Request
import asyncio

import json
import random

Dashboard_Router = APIRouter()


@Dashboard_Router.get('/data')
async def get_data(request: Request, amount: int = 0):
    """
    Get temperature and humidity data
    """
    if amount == 0:
        amount = 50
    if amount > 50:
        amount = 50
    

    templist = []
    humdlist = []
    for i in range(amount):
        templist.append(random.randint(10,30))
        humdlist.append(random.randint(10,90))

    returndata = {
        "temperature": templist,
        "humidity": humdlist
    }

    return json.dumps(returndata)

