import { pinoLogger } from "./pinoLogger";

export type LogLevel = "INFO" | "WARNING" | "ERROR";

export interface LogOptions {
  level: LogLevel;
  message: string;
  customer_id?: number | null;
  destination?: string | null;
  destination_path?: string | null;
  datetime_start?: string;
  datetime_end?: string;
  client_ip?: string | null;
  origin?: string | null;
  origin_path?: string | null;
}

export function logEvent({
  level,
  message,
  customer_id = null,
  destination = null,
  destination_path = null,
  datetime_start,
  datetime_end,
  client_ip = null,
  origin = null,
  origin_path = null,
}: LogOptions) {
  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${month}/${day}/${year}T${hours}:${minutes}:${seconds}`;
  };

  const now = new Date().toISOString();

  const logData = {
    client_ip,
    datetime_start: datetime_start
      ? formatDateTime(datetime_start)
      : formatDateTime(now),
    datetime_end: datetime_end
      ? formatDateTime(datetime_end)
      : formatDateTime(now),
    origin:
      origin || (typeof window !== "undefined" ? window.location.href : null),
    origin_path:
      origin_path ||
      (typeof window !== "undefined" ? window.location.pathname : null),
    destination,
    destination_path,
    message,
    service: process.env.NEXT_PUBLIC_SERVICE_NAME || "CreditViewMobile",
    customer_id,
  };

  switch (level) {
    case "INFO":
      pinoLogger.info(logData);
      break;
    case "WARNING":
      pinoLogger.warn(logData);
      break;
    case "ERROR":
      pinoLogger.error(logData);
      break;
    default:
      pinoLogger.info(logData);
  }
}
