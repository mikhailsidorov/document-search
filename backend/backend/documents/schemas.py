from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field
from humps import camelize


def to_camel_case(string: str) -> str:
    return camelize(string)


class CamelModel(BaseModel):
    class Config:
        alias_generator = to_camel_case
        allow_population_by_field_name = True


class DocumentBase(CamelModel):
    name: str = Field()
    description: Optional[str] = None

    class Config():
        alias_generator = to_camel_case
        allow_population_by_field_name = True


class DocumentCreate(DocumentBase):
    pass


class Document(DocumentBase):
    id: int
    created_at: datetime

    class Config():
        orm_mode = True
