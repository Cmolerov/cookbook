from .db import db

class Tags(db.model):
     __tablename__='tags'

    
    id = db.Column(db.Integer, primary_key = True)
    tag = db.Column(db.String(50), nullable = True)

    recipes = relationship("Recipes", back_populates="recipes")

    def __init__(self, tag):
        self.userId = userId
        self.tag = tag

    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.userId,
        "tag": self.tag
        }