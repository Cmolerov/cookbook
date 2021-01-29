from flask import Blueprint, jsonify, request
from flask_login import current_user
from ..models.db import db
from ..models.ingredients import Ingredients
from ..forms.ingredient_form import IngredientForm
from ..models.user import User
ingredient_routes = Blueprint("ingredients", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a HashMap
    """
    errorMessages = {"fields": [], "messages": []}
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages["fields"].append(field)
            errorMessages["messages"].append(error)
    return errorMessages


@ingredient_routes.route("/", methods=["POST"])
def create_ingredients():
    form = IngredientForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        ingredient = Ingredients(
            measurement=form.data["measurement"],
            product=form.data["product"],
            measurementType=form.data["measurement_type"],
            recipeId=form.data["recipeId"])
        db.session.add(ingredient)
        db.session.commit()
        return jsonify(ingredient.to_dict())
    else:
        return jsonify({'error': validation_errors_to_error_messages(form.errors)}), 401


@ingredient_routes.route("/<int:id>")
def get_instructions(id):
    ingredients = Ingredients.query.filter_by(id=recipeId).all()
    return jsonify(ingredients.to_dict())
