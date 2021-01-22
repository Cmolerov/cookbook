from .db import db


class Instruction(db.Model):
    __tablename__ = 'instructions'

    id = db.Column(db.Integer, primary_key=True)
    list_order = db.Column(db.Integer, nullable=False)
    instruction_text = db.Column(db.String(150), nullable=False)
    recipeId = db.Column(db.Integer, db.ForeignKey(
        "recipes.id"), nullable=False, unique=True)

    recipes = db.relationship("Recipe", back_populates="instructions",)

    def __init__(self, list_order, instruction_text, recipeId):
        self.list_order = list_order,
        self.instruction_text = instruction_text,
        self.recipeId = recipeId

    def to_dict(self, list_order, instruction_text, recipeId):
        return {
            "id": self.id,
            "list_order": self.list_order,
            "instruction_text": self.instruction_text,
            "recipeId": self.recipeId
        }
