import { APP_INJECTION_TOKENS } from "../tokens/app-injection-tokens.config";

export const RANDOM_STRING_PROVIDER =  {
    provide: APP_INJECTION_TOKENS.RANDOM_STRING,
    useValue: () => 'cc'
  }