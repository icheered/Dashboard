import ast
import asyncio
import json
from datetime import datetime

import uvicorn
from uvicorn import Config

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from starlette.routing import Mount, Route

from dashboard.api.uvicorn import UvicornServer


class Server:
    def __init__(self, config, logger, loop):
        self.config = config
        self.logger = logger
        self.loop = loop

        self.wscounter = 0

        app = FastAPI(redoc_url=None, docs_url="/docs", log_level="trace")
        app.mount("/web/static", StaticFiles(directory="web/static"), name="static")

        #Create a custom 404 handler (in VueJS)
        @app.exception_handler(404)
        async def custom_handler(request, ex):
            return FileResponse("web/index.html", media_type="text/html")
    
        deps = {}
        deps["config"] = config
        deps["logger"] = logger

        self.app = app
        self.app.state.dependencies = deps

        origins = ["*"]
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=origins,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

        uvi_conf = uvicorn.Config(
            app=self.app,
            loop="asyncio",
            host=self.config["API_ADDRESS"],
            port=self.config["API_PORT"],
            reload=True,
            debug=True
        )

        self.server = UvicornServer(uvi_conf)

    def start(self):
        """
        Start the server
        """
        self.loop.create_task(self.server.serve())