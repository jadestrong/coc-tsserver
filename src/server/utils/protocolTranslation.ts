import { SymbolDisplayPart } from "../protocol";

export function asPlainText(parts: string | SymbolDisplayPart[]): string {
    if (typeof parts === 'string') {
        return parts;
    }
    return parts.map(part => part.text).join('');
}
