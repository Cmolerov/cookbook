from app.models import db, Recipes


def seed_recipes():
    seed_recipe1 = Recipes(userId=1, title="Mac n Cheese",
                           description="Creamy 4 cheese Penne pasta",
                           cookTime=35, image="", tagId=1,)

    db.session.add(seed_recipe1)
    db.session.commit()


def undo_recipes():
    db.session.execute('TRUNCATE recipes')
    db.session.commit()
