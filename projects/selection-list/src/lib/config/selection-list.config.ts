export interface SelectionListConfig {
    innerHtml: (v) => string;
    hoverColor: string;
    selectionColor: string;
    selectedPredicate: (element: any, currentSelection: any) => boolean;
}
