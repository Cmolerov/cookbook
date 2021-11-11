from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SelectField
from wtforms.validators import DataRequired


class IngredientForm(FlaskForm):
    measurement = IntegerField('measurement', validators=[DataRequired()])
    measurement_type = SelectField(
        "Type", validators=[DataRequired()], choices=[("Cup", "Cup"), ("Oz", "Oz"), ("Tsp", "Tsp"), ("Lb", "Lb"), ("g", "g"), ("Tbsp", "Tbsp"), ("Other", "Other")])

    product = StringField('product', validators=[DataRequired()])
    recipeId = IntegerField('recipeId', validators=[DataRequired()])
