import { FilterOption } from "./filter-option.interface";

export interface TrimFilterOption extends FilterOption {
    trims: Trim[]
}

interface Trim {
    name: String,
    isSelected: boolean;
}