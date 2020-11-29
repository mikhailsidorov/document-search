from fastapi import APIRouter

from .documents.api import documents_router

router = APIRouter()

router.include_router(documents_router, prefix='/documents', tags=['documents'])
