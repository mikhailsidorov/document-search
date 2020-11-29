from fastapi import FastAPI

from backend.backend.database import engine, Base

from backend.backend.routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)
