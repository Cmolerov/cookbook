from .db import db
from .user import User

class Recipes(db.Model):
    __tablename__='recipes'

    id = db.Column(db.Integer, primary_key= True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id") nullable = False, unique = True)
    title = db.Column(db.String(100), nullable = False)
    description = db.Column(db.String(250), nullable = False)
    cookTime = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(5000), nullable = True)
    tags = db.Column(db, db.ForeignKey("tags.id") nullable = True, unique = True)