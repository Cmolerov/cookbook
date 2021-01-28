from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired


class InstructionForm(FlaskForm):
    list_order = IntegerField('list_order', validators=[DataRequired()])
    instruction_text = StringField('instruction_text', validators=[DataRequired()])
    recipeId = IntegerField("recipeId", validators=[DataRequired()])