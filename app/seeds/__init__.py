from flask.cli import AppGroup
from .users import seed_users, undo_users
from .recipes import seed_recipes, undo_recipes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_recipes()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_recipes()
    # Add other undo functions here


@seed_commands.command('recipes')
def seed_recipes_cmd():
    seed_recipes()


@seed_commands.command('undo-recipes')
def seed_boats_cmd():
    undo_recipes()
