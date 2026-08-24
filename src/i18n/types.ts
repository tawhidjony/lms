import type { messages } from "./messages";
import type { routing } from "./routing";

export type Locale = (typeof routing.locales)[number];

export type Messages = typeof messages;
