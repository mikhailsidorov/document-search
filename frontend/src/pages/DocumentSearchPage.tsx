import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
        <div className="block">
          <div className="card is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">Название документа</p>
              <a href="/" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                <p>ID: 23123</p>
                <p>
                  Дата: <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi rerum quo
                  laboriosam vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque
                  dicta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="card is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">Название документа</p>
              <a href="/" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
                </span>
              </a>
            </header>
            <div className="card-content is-hidden">
              <div className="content">
                <p>ID: 23123</p>
                <p>
                  Дата: <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi rerum quo
                  laboriosam vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque
                  dicta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="card is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">Название документа</p>
              <a href="/" className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
                </span>
              </a>
            </header>
            <div className="card-content is-hidden">
              <div className="content">
                <p>ID: 23123</p>
                <p>
                  Дата: <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione hic repellendus modi rerum quo
                  laboriosam vel nihil! Amet nobis iure doloribus cum ab velit molestias quibusdam consequatur cumque
                  dicta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
