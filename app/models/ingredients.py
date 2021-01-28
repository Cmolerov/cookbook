from .db import db


class Ingredients(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    measurement_type = db.Column(db.String(50), nullable=False)
    measurement = db.Column(db.Integer, nullable=False)
    product = db.Column(db.String(100), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False)

    recipes = db.relationship("Recipes", back_populates="ingredients",)

    def __init__(self, measurement, product, recipeId, measurementType):
        self.measurement = measurement,
        self.product = product,
        self.recipeId = recipeId,
        self.measurement_type = measurementType

    def to_dict(self):
        return {
            "id": self.id,
            "measurement": self.measurement,
            "product": self.product,
            "recipeId": self.recipeId,
            "measurementType": self.measurement_type
        }
