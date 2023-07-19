export interface Seller {
    id: string | number;
    name: string;
    address?: string;
    readonly nib: string;
    readonly npwp: string;
}