from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.http import HttpResponse, HttpResponseRedirect
from datetime import datetime
from django.utils import timezone
from django.conf import settings
from publications.models import posts
from home.models import ours

def publications(request):
	data = {}
	data['posts'] = posts.objects.all().order_by('-date')
	data['ours'] = ours.objects.all()
	return render(request, "publications/publications.html", data)

def post(request, post_id):
	data = {}
	data['post'] = posts.objects.get(pk=post_id)
	data['ours'] = ours.objects.all()
	return render(request, "publications/post.html", data)