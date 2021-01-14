from .db import db

class Tags(db.model):
     __tablename__='tags'

    
    id = db.Column(db.Integer, primary_key = True)
    tag = db.Column(db.String(50), nullable = True)