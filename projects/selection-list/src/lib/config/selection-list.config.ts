export interface SelectionListConfig {
    innerHtml: (v) => string;
    selectedPredicate: (element: any, currentSelection: any) => boolean;
}
