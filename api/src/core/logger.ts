import winston from "winston";
import { SeqTransport } from "@datalust/winston-seq";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    /* This is required to get errors to log with stack traces. See https://github.com/winstonjs/winston/issues/1498 */
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    application: "home-server-hub"
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new SeqTransport({
      serverUrl: process.env.SEQ_SERVER_URL,
      apiKey: process.env.SEQ_API_KEY,
      onError: (e) => {
        console.error(e);
      },
      handleExceptions: true,
      handleRejections: true
    })
  ]
});

export default logger;
