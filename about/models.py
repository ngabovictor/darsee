from django.db import models

# Create your models here.

class about_list(models.Model):
	item = models.CharField(max_length=100)

	def __str__(self):
		return self.item


class about_grids(models.Model):
	title = models.CharField(max_length=100)
	image = models.FileField(upload_to='about_media', default='Please, use images of the same sizes (dimensions)')
	description = models.TextField()

	def __str__(self):
		return self.title


class about_paragraphs(models.Model):
	title = models.CharField(max_length=100)
	paragraph = models.TextField()
	
	def __str__(self):
		return self.title