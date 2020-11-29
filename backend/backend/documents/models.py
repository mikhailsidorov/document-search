from datetime import datetime

from sqlalchemy import Integer, DateTime, String, Column

from ..database import Base


class Document(Base):
    __tablename__ = 'documents'

    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    name = Column(String)
    description = Column(String)
