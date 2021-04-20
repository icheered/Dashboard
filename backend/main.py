import asyncio

from dashboard.utils.log_handling import Logging
from dashboard.utils.parameters import Parameters

from dashboard.api.server import Server

async def main(loop):
    parameters = Parameters()
    config = parameters.get_dict()
    logging = Logging(config)
    logger = logging.get_logger()

    server = Server(
        config=config, 
        logger=logger, 
        loop=loop, 
        )

    logger.info("Starting server...")
    server.start()


if __name__=="__main__":
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    task = asyncio.Task(main(loop))
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        print("Shutting down")
    except Exception as e:
        print(e)
    finally:
        loop.close()