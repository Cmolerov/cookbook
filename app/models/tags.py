from .db import db


class Tags(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String(50), nullable=True)
    recipeId = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False, unique=True)

    recipes = db.relationship("Recipes", back_populates="tags",)

    def __init__(self, tag, recipeId):
        self.tag = tag,
        self.recipeId = recipeId

    def to_dict(self, tag, recipeId):
        return {
            "id": self.id,
            "tag": self.tag,
            "recipeId": self.recipeId
        }
