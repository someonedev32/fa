"""Minimal FastAPI backend — portfolio is fully static, but supervisor expects this service."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Flamur Ahmeti — Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/")
async def root():
    return {"status": "ok", "service": "flamur-portfolio"}


@app.get("/api/health")
async def health():
    return {"ok": True}
