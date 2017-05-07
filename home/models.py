from django.db import models

# Create your models here.

class ours(models.Model):
	name = models.CharField(max_length=100)
	caption = models.CharField(max_length=150)
	image = models.FileField(upload_to='ours_media', default='Please, use images of the same sizes (dimensions)')
	more = models.TextField()

	def __str__(self):
		return self.name
	

class carousel(models.Model):
	name = models.CharField(max_length=100)
	caption = models.CharField(max_length=500)
	image = models.FileField(upload_to='carouse_media', default='Please, use images of the same sizes (dimensions)')
	fadeInUp = 'fadeInUp'

	fadeInDown = 'fadeInDown'
	fadeInRight = 'fadeInRight'
	fadeInLeft = 'fadeInLeft'

	animations = {
	(fadeInLeft, 'fadeInLeft'),
	(fadeInRight, 'fadeInRight'),
	(fadeInDown, 'fadeInDown'),
	(fadeInUp, 'fadeInUp'),
	}

	animation = models.CharField(max_length=100, choices=animations, default='fadeInUp')

	def __str__(self):
		return self.name	


class panels(models.Model):
	name = models.CharField(max_length=100)
	more = models.TextField()

	def __str__(self):
		return self.name

class quotes(models.Model):
	quote_by = models.CharField(max_length=100)
	quote = models.TextField()

	def __str__(self):
		return self.quote_by

class videos(models.Model):
	title = models.CharField(max_length=100)
	link = models.TextField()
	active = models.BooleanField(default=False)

	def __str__(self):
		return self.title