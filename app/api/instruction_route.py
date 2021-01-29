from flask import Blueprint, jsonify, request
from ..models.db import db
from ..models.instructions import Instructions
from ..forms.instruction_form import InstructionForm
from ..models.user import User

instruction_routes = Blueprint('instructions', __name__)


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


@instruction_routes.route("/", methods=["POST"])
def create_instruction():
    form = InstructionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        instruction = Instructions(
            list_order=form.data["list_order"],
            instruction_text=form.data["instruction_text"],
            recipeId=form.data["recipeId"],)
        db.session.add(instruction)
        db.session.commit()
        return jsonify(instruction.to_dict())
    else:
        return jsonify({'error': validation_errors_to_error_messages(form.errors)}), 401


@instruction_routes.route("/<int:id>")
def get_instructions(id):
    instructions = Instructions.query.filter_by(id=recipeId).all()
    return jsonify(instructions.to_dict())
