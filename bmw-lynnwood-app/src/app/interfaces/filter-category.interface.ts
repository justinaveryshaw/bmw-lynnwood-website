import { TrimFilterOption, FilterOption } from "./index";

export interface FilterCategory {
    name: String,
    selectionType: String,
    isExpanded: boolean,
    // options: [TrimFilterOption | FilterOption ]
    options: [TrimFilterOption ]
}