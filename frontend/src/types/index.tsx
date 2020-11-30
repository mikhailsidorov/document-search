export interface IDocument {
  id: string;
  name: string;
  createdAt: string;
  description?: string;
}


export type SortBy = 'id' | 'createdAt' | 'name';
export type OrderBy = 'desc' | 'asc';
export interface IDocumentsGetListParams {
  dateStart?: string | null;
  dateEnd?: string | null;
  name?: string;
  sortBy?: SortBy;
  orderBy?: OrderBy;
  offset?: number;
  limit?: number;
}

export interface IDocumentCreateParams {
  name: string;
  description?: string;
}

export interface IDocumentGetParams {
  id: string;
}


