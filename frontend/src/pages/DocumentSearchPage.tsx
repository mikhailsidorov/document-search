import { FC, useEffect, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { fetchDocuments } from '../store/documents';
import { useAppDispatch } from '../store';
import { Document } from '../components/Document';
import { RootState } from '../store';
import { IDocument, SortBy, OrderBy, IDocumentGetParams, IDocumentsGetListParams } from '../types';
import { Spinner } from '../components/UI/Spinner';

export interface DocumentSearchPageProps {}

export const DocumentSearchPage: FC<DocumentSearchPageProps> = () => {
  const dispatch = useAppDispatch();

  const [id, setId] = useState('');
  const [dateStart, setDateStart] = useState<string>('');
  const [dateEnd, setDateEnd] = useState<string>('');
  const [name, setName] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('createdAt');
  const [orderBy, setOrderBy] = useState<OrderBy>('desc');

  useEffect(() => {
    let params: IDocumentGetParams | IDocumentsGetListParams | null = null;
    if (id) {
      params = { id };
    } else if (dateStart || dateEnd || name || sortBy || orderBy) {
      params = {};
      if (dateStart) {
        params.dateStart = dateStart;
      }
      if (dateEnd) {
        params.dateEnd = dateEnd;
      }
      if (name) {
        params.name = name;
      }
      if (sortBy) {
        params.sortBy = sortBy;
      }
      if (orderBy) {
        params.orderBy = orderBy;
      }
    }

    if (params) {
      const promise = dispatch(fetchDocuments(params));
      return () => {
        if (promise) {
          promise.abort();
        }
      };
    }
  }, [dispatch, id, dateStart, dateEnd, name, sortBy, orderBy]);

  const { documents, loading, error } = useSelector((state: RootState) => state.documents);

  const docs = documents
    ? documents.map((document: IDocument) => (
        <Document
          key={document.id}
          name={document.name}
          id={document.id}
          description={document.description}
          createdAt={new Date(new Date(document.createdAt)).toLocaleString()}
        />
      ))
    : null;

  const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleDateStartChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateStart(new Date(event.target.value).toISOString());
  };

  const handleDateEndChange = (event: ChangeEvent<HTMLInputElement>) => {
    let dateEnd = new Date(event.target.value);
    dateEnd.setHours(23, 59, 59, 9999);
    setDateEnd(dateEnd.toISOString());
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'id' || event.target.value === 'name' || event.target.value === 'createdAt') {
      setSortBy(event.target.value);
    }
  };

  const handleOrderByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === 'asc' || event.target.value === 'desc') {
      setOrderBy(event.target.value);
    }
  };

  const documentError = error &&  'detail' in error && error.detail.find(message => {
    return message.loc.includes('document_id');
  })

  const documentIdClasses = cx('input', {
    'is-danger': documentError,
  });

   

  return (
    <div className="columns">
      <form className="column is-3">
        
        <div className="field">
          <label className="label">ID документа</label>
          <div className="control">
            <input name="documentId" className={documentIdClasses} type="text" onChange={handleIdChange} />
          </div>
          {documentError ? <p className="help is-danger">{documentError.msg}</p> : null}
        </div>

        <div className="field">
          <label className="label">Создан</label>
          <div className="control">
            <div className="columns">
              <div className="column is-6">
                <input name="dateStart" className="input" type="date" onChange={handleDateStartChange} />
              </div>
              <div className="column is-6">
                <input name="dateEnd" className="input" type="date" onChange={handleDateEndChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Название документа</label>
          <div className="control">
            <input name="name" className="input" type="text" onChange={handleNameChange} />
          </div>
        </div>
        <div className="field">
          <label className="label">Сортировка</label>
          <div className="control">
            <div className="columns">
              <div className="column is-6 is-fullwidth">
                <div className="select">
                  <select onChange={handleSortByChange}>
                    <option value="createdAt">Создан</option>
                    <option value="name">Название документа</option>
                    <option value="id">ID</option>
                  </select>
                </div>
              </div>
              <div className="column is-6">
                <div className="select is-fullwidth">
                  <select onChange={handleOrderByChange}>
                    <option value="desc">По убыванию</option>
                    <option value="asc">По возрастанию</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="column">{loading ? <Spinner /> : docs}</div>
    </div>
  );
};
