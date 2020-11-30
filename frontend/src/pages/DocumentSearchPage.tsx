import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchDocuments } from '../store/documents';
import { useAppDispatch } from '../store';
import { Document } from '../components/Document';
import { RootState } from '../store';
import { IDocument } from '../types';
import { Spinner } from '../components/UI/Spinner';

export interface DocumentSearchPageProps {}

export const DocumentSearchPage: FC<DocumentSearchPageProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(fetchDocuments({ sortBy: 'created_at', orderBy: 'desc' }));
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const { documents, loading } = useSelector((state: RootState) => state.documents);
  const docs = documents ? documents.map((document: IDocument) => (
        <Document
          key={document.id}
          name={document.name}
          id={document.id}
          description={document.description}
          createdAt={document.createdAt}
        />
      ))
    : null;

  return (
    <div className="columns">
      <form className="column is-3">
        <div className="field">
          <label className="label">ID документа</label>
          <div className="control">
            <input name="documentId" className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Создан</label>
          <div className="control">
            <div className="columns">
              <div className="column is-6">
                <input name="dateStart" className="input" type="date" />
              </div>
              <div className="column is-6">
                <input name="dateEnd" className="input" type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Название документа</label>
          <div className="control">
            <input name="documentId" className="input" type="text" />
          </div>
        </div>
        <div className="field">
          <label className="label">Сортировка</label>
          <div className="control">
            <div className="columns">
              <div className="column is-6 is-fullwidth">
                <div className="select">
                  <select>
                    <option>Создан</option>
                    <option>Название документа</option>
                  </select>
                </div>
              </div>
              <div className="column is-6">
                <div className="select is-fullwidth">
                  <select>
                    <option>По возрастанию</option>
                    <option>По убыванию</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="column">{loading ? <Spinner /> :  docs }</div>
    </div>
  );
};
