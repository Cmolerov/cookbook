from app.models import db, Recipes


def seed_recipes():
    seed_recipe1 = Recipes(userId=1, title="Mac n Cheese",
                           description="Creamy 4 cheese Penne pasta", cookTime="35 min", image=null,)

    db.session.add(seed_recipe1)
    db.session.commit()


def undo_boats():
    db.session.execute('TRUNCATE recipes')
    db.session.commit()
