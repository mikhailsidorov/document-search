# document-search

## Requirements

* [Python 3.8 or later](https://www.python.org/downloads/)
* [Poetry](https://python-poetry.org/docs/#installation)


## Running

### Backend

`git clone git@github.com:mikhailsidorov/document-search.git`
`cd document-search`
`python3 -m venv venv`
`source venv/bin/activate`
`cd backend`
`poetry install --no-root`
`cd ..`
`uvicorn backend.main:app`

Server will be started on <http://127.0.0.1:8000>
