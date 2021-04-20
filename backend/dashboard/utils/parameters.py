import configargparse


class Parameters:
    def __init__(self):
        self.parser = configargparse.ArgParser(default_config_files=["config.ini"])

        self.init_general_parameters()
        self.init_api_parameters()

        parameters, unknown = self.parser.parse_known_args()
        self.dictionary = self.create_dict(parameters)

    @staticmethod
    def create_dict(parameters):
        ret = {}
        for option in vars(parameters):
            ret[option] = getattr(parameters, option)
        return ret

    def get_dict(self):
        return self.dictionary

    @staticmethod
    def str2bool(string: str) -> bool:
        """
        Converts a string to a boolean.
        :param string: string to convert to boolean
        :return: True or False
        """
        if string.lower() in ["false", "n", "no", "f"]:
            return False
        elif string.lower() in ["true", "y", "yes", "t"]:
            return True
        else:
            raise TypeError(f"{string} cannot be converted to boolean")

    def init_general_parameters(self):
        general_group = self.parser.add_argument_group("General")

        general_group.add_argument(
            "--LOG_LEVEL",
            type=str,
            help="Set level of logging to TRACE, DEBUG, INFO, WARNING, ERROR",
            default="TRACE",
        )

    def init_api_parameters(self):
        api_group = self.parser.add_argument_group("API")

        api_group.add_argument(
            "--API_ADDRESS",
            type=str,
            help="Address of the API",
            default="127.0.0.1",  # nosec
        )
        api_group.add_argument(
            "--API_PORT",
            type=int,
            help="Port of the API",
            default=8000,  # nosec
        )