import { FC } from 'react';

import { Document } from '../components/Document';

export interface DocumentSearchPageProps {}

export const DocumentSearchPage: FC<DocumentSearchPageProps> = () => {
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
      <div className="column">
        <Document
          name="Название документа"
          id="123"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi quo vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque dicta."
          date="21.01.2020"
        />
        <Document
          name="Название документа"
          id="123"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi quo vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque dicta."
          date="21.01.2020"
        />
        <Document
          name="Название документа"
          id="123"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi quo vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque dicta."
          date="21.01.2020"
        />
        <Document
          name="Название документа"
          id="123"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi quo vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque dicta."
          date="21.01.2020"
        />
      </div>
    </div>
  );
};
