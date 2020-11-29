from datetime import datetime
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from . import schemas, crud, models
from ..database import get_db


documents_router = APIRouter()


@documents_router.post('/', response_model=schemas.Document)
def create_document(document: schemas.DocumentCreate, db: Session = Depends(get_db)) -> models.Document:
    return crud.create_document(db=db, document=document)


@documents_router.get('/', response_model=List[schemas.Document])
def read_documents(offset: int = 0, limit: int = 100, date_start: datetime = None,
                   date_end: datetime = None, db: Session = Depends(get_db)) -> List[models.Document]:
    documents = crud.get_documents(db, offset=offset, limit=limit, date_start=date_start, date_end=date_end)
    return documents


@documents_router.get(path='/{document_id}', response_model=schemas.Document)
def read_document(document_id: int, db: Session = Depends(get_db)) -> models.Document:
    db_document = crud.get_document(db, document_id=document_id)
    if db_document is None:
        raise HTTPException(status_code=404, detail='Document not found')
    return db_document
