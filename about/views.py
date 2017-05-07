from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from about.models import about_list, about_paragraphs, about_grids
from home.models import ours

# Create your views here.

def about(request):
	data = {}
	data['about_grids'] = about_grids.objects.all()
	data['about_paragraphs'] = about_paragraphs.objects.all()
	data['about_list'] = about_list.objects.all()
	data['ours'] = ours.objects.all()

	return render(request, 'about/about.html', data)