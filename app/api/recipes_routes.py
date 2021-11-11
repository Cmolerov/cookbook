from flask import Blueprint, jsonify, request
from flask_login import current_user
from ..models.db import db
from ..models.recipes import Recipes
from ..forms.recipe_form import RecipeForm
from ..models.user import User
recipe_routes = Blueprint("recipes", __name__)


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


@recipe_routes.route("/")
def get_recipes():
    recipes = Recipes.query.all()
    return jsonify([recipe.to_dict() for recipe in recipes])


@recipe_routes.route("/<int:id>")
def get_recipe(id):
    recipe = Recipes.query.get(id)
    if recipe:
        return jsonify(recipe.to_dict())
    else:
        return ({"error": "error"})


@recipe_routes.route("/", methods=["POST"])
def create_recipe():
    form = RecipeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        recipe = Recipes(userId=form.data["userId"], title=form.data['title'],
                         description=form.data['description'], cookTime=form.data['cookTime'], image=form.data['image'],)
        db.session.add(recipe)
        db.session.commit()
        return jsonify(recipe.to_dict())
    else:
        return jsonify({'error': validation_errors_to_error_messages(form.errors)}), 401
          
@recipe_routes.route("/<int:id>", methods=['DELETE'])
def delete_recipe(id):
    recipe = Recipes.query.get(id)
    if recipe:
        db.session.delete(recipe)
        db.session.commit()
        return jsonify({"success": "success"})
    else:
        return jsonify({"error": "error"})
