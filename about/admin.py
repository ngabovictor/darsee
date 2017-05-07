from django.contrib import admin
from about.models import about_list, about_paragraphs, about_grids

# Register your models here.

admin.site.register(about_grids)
admin.site.register(about_paragraphs)
admin.site.register(about_list)