declare module "curcode" {
    export interface CurrencyCodeRecord {
        code: string;
        number: string;
        digits: number;
        currency: string;
        symbol: string;
        countries: string[];
    }

    export function symbol(symbol: string): CurrencyCodeRecord | undefined;

    export function code(code: string): CurrencyCodeRecord | undefined;

    export function country(country: string): CurrencyCodeRecord[];

    export function number(number: string): CurrencyCodeRecord | undefined;

    export function codes(): string[];

    export function codes(): string[];

    export function symbols(): number[];

    export function countries(): string[];

    export const publishDate: string;

    export const data: CurrencyCodeRecord[];
}
