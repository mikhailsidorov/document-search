export interface IDocument {
  id: string;
  name: string;
  createdAt: string;
  description?: string;
}

export interface IDocumentsGetListParams {
  id?: string;
  dateStart?: string;
  dateEnd?: string;
  name?: string;
  sortBy?: 'id' | 'created_at' | 'name';
  orderBy?: 'desc' | 'asc';
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
