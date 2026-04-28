export interface CompareItem {
    id: string;
    full_name: string;
    price: string;
    date: string;
}

export interface CreateCompareDTO {
    full_name: string;
    price: string;
    date: string;
}
