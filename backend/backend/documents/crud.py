from typing import List, Optional
from datetime import datetime

from sqlalchemy.orm import Session

from . import models, schemas


def get_document(db: Session, document_id: int) -> Optional[models.Document]:
    return db.query(models.Document).filter(models.Document.id == document_id).first()


def get_documents(db: Session, offset: int = 0, limit: int = 100,
                  date_start: datetime = None, date_end: datetime = None) -> List[models.Document]:
    return db.query(models.Document).filter(models.Document.created_at.between(date_start, date_end))\
        .offset(offset).limit(limit).all()


def create_document(db: Session, document: schemas.DocumentCreate) -> models.Document:
    db_document = models.Document(**document.dict())
    db.add(db_document)
    db.commit()
    db.refresh(db_document)
    return db_document
