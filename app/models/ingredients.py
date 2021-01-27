from .db import db


class Ingredients(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    measurement = db.Column(db.Integer, nullable=False)
    product = db.Column(db.String(100), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False, unique=True)

    recipes = db.relationship("Recipes", back_populates="ingredients",)

    def __init__(self, measurement, product, recipeId):
        self.measurement = measurement,
        self.product = product,
        self.recipeId = recipeId

    def to_dict(self):
        return {
            "id": self.id,
            "measurement": self.measurement,
            "product": self.product,
            "recipeId": self.recipeId
        }
