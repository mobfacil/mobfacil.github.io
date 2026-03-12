import pino from "pino";

const createLogger = () => {
  const baseConfig = {
    level: process.env.LOG_LEVEL || "info",
    formatters: {
      bindings: () => ({}),
      level: (label: any) => ({ level: label.toUpperCase() }),
      log: (object: any) => {
        return object;
      },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    base: null,
    serializers: {
      ...pino.stdSerializers,
    },
  };

  const isDevelopment = process.env.NODE_ENV === "development";
  const isInContainer =
    process.env.IN_DOCKER === "true" ||
    process.env.DOCKER_CONTAINER === "true" ||
    require("fs").existsSync("/.dockerenv");

  if (isDevelopment && !isInContainer) {
    try {
      return pino({
        ...baseConfig,
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: true,
            ignore: "pid,hostname",
          },
        },
      });
    } catch (error) {
      console.warn(
        "pino-pretty not available, using default formatter. Logs will go to stdout.",
      );
      return pino(baseConfig, process.stdout);
    }
  }

  console.log(
    "Logger configured for production/Docker environment - logs will go to stdout",
  );
  return pino(baseConfig, process.stdout);
};

export const pinoLogger = createLogger();
