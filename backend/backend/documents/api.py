from datetime import datetime
from typing import List, Literal, Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from humps import decamelize

from . import schemas, crud, models
from ..database import get_db


SORTING_FIELDS = ['id', 'created_at', 'name']
ORDERING_TYPES = ['asc', 'desc']

documents_router = APIRouter()


@documents_router.post('/', response_model=schemas.Document)
def create_document(document: schemas.DocumentCreate, db: Session = Depends(get_db)) -> models.Document:
    return crud.create_document(db=db, document=document)


@documents_router.get('/', response_model=List[schemas.Document])
def read_documents(
        name: Optional[str] = Query(None),
        order_by: Literal['asc', 'desc'] = Query('desc', alias='orderBy'),
        sort_by: Literal['id', 'createdAt', 'name'] = Query('createAt', alias='sortBy'),
        offset: int = Query(0),
        limit: int = Query(100),
        date_start: Optional[datetime] = Query(None, alias='dateStart'),
        date_end: Optional[datetime] = Query(None, alias='dateEnd'),
        db: Session = Depends(get_db)) -> List[models.Document]:

    decamelized_sort_by: Literal['id', 'created_at', 'name'] = decamelize(sort_by)
    if decamelized_sort_by not in SORTING_FIELDS:
        decamelized_sort_by = 'created_at'

    documents = crud.get_documents(db=db, name=name, order_by=order_by,
                                   sort_by=decamelized_sort_by, offset=offset,
                                   limit=limit, date_start=date_start, date_end=date_end)
    return documents


@documents_router.get(path='/{document_id}', response_model=schemas.Document)
def read_document(document_id: int, db: Session = Depends(get_db)) -> models.Document:
    db_document = crud.get_document(db, document_id=document_id)
    if db_document is None:
        raise HTTPException(status_code=404, detail='Document not found')
    return db_document
