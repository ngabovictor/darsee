from django.db import models
from datetime import datetime
from django.utils import timezone

# Create your models here.

class articles(models.Model):

	title = models.CharField(max_length = 200)
	image = models.FileField(upload_to = 'blog_media', default = 'Please, use images of the same sizes (dimensions)')
	likes = models.IntegerField(default = 0)
	views = models.IntegerField(default = 0)
	comments = models.IntegerField(default = 0)
	date = models.DateField(default = datetime.now())
	body = models.TextField(default='Add Content')

	def __str__(self):
		return self.title
		
class comments(models.Model):
	
	by = models.CharField(max_length = 200)
	comment = models.TextField()
	ref = models.IntegerField()

	def __str__(self):
		return self.ref