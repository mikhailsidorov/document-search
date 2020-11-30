import { FC, useState, MouseEvent, KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import { IDocument } from '../../types';

import styles from './Document.module.scss';



export const Document: FC<IDocument> = ({ id, name, createdAt, description }) => {
  const [opened, setOpened] = useState(false);

  const handleOpenButtonClick = (event: MouseEvent) => {
    setOpened(!opened);
  };

  const handleOpenButtonKeyDown = (event: KeyboardEvent) => {
    const keyCodes = [13, 32];
    if (keyCodes.includes(event.keyCode)) {
      setOpened(!opened);
    }
  };

  const documentClassNames = cx(['block', styles.document]);

  const cardContentClassNames = cx({
    'card-content': true,
    'is-hidden': !opened,
  });

  const iconClassNames = cx({
    icon: true,
    rotated: opened,
    [styles.openButtonIcon]: true,
  });

  return (
    <div className={documentClassNames}>
      <div className="card is-fullwidth">
        <header
          className="card-header"
          role="button"
          tabIndex={0}
          onKeyDown={handleOpenButtonKeyDown}
          onClick={handleOpenButtonClick}
        >
          <p className="card-header-title">{name}</p>
          <div className="card-header-icon" aria-label="more options">
            <span className={iconClassNames}>
              <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
            </span>
          </div>
        </header>
        <div className={cardContentClassNames}>
          <div className="content">
            <p>ID: {id}</p>
            <p>Дата: {createdAt}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
