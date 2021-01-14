from .db import db
from .user import User

class Recipes(db.Model):
    __tablename__='recipes'

    id = db.Column(db.Integer, primary_key= True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id") nullable = False, unique = True)
    title = db.Column(db.String(100), nullable = False)
    description = db.Column(db.String(250), nullable = False)
    cookTime = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(5000), nullable = True)
    tags = db.Column(db, db.ForeignKey("tags.id") nullable = True, unique = True)

   user = relationship("User", back_populates="recipes")
   tags = relationship("Tags", back_populates="recipes")

   def __init__(self, userId, title, description, cookTime, image, tags ):
        self.userId = userId
        self.title = title
        self.description = description
        self.cookTime = cookTime
        self.image = image
        self.tags = tags

    def to_dict(self):
        return {
        "id": self.id,
        "userId": self.userId,
        "title" : self.title,
        "description" : self.description,
        "cookTime" : self.cookTime,
        "image" : self.image,
        "tags" : self.tags
        }