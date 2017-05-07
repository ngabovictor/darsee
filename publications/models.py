from django.db import models
from datetime import datetime
from django.utils import timezone

# Create your models here.

class posts(models.Model):

	title = models.CharField(max_length = 200)
	image = models.FileField(upload_to = 'publications_media', default = 'Please, use images of the same sizes (dimensions)')
	date = models.DateField(default = datetime.now())
	body = models.TextField(default='')

	def __str__(self):
		return self.title