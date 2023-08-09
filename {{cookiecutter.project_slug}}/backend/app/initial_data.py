#!/usr/bin/env python3

from app.db.session import get_db
from app.db.crud import create_user
from app.db.schemas import UserCreate
from app.db.session import SessionLocal


def init() -> None:
    db = SessionLocal()

    create_user(
        db,
        UserCreate(
<<<<<<< HEAD
            email="admin@tracking-ui.com",
            password="thoumayest_1651",
=======
            email="{{cookiecutter.superuser_email}}",
            password="{{cookiecutter.superuser_password}}",
>>>>>>> main
            is_active=True,
            is_superuser=True,
        ),
    )


if __name__ == "__main__":
<<<<<<< HEAD
    print("Creating superuser admin@tracking-ui.com")
=======
    print("Creating superuser {{cookiecutter.superuser_email}}")
>>>>>>> main
    init()
    print("Superuser created")
