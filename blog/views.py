from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.http import HttpResponse, HttpResponseRedirect
from datetime import datetime
from django.utils import timezone
from django.conf import settings
from blog.models import articles, comments
from home.models import ours

def blog(request):
	data = {}
	data['articles'] = articles.objects.all().order_by('-date')
	data['ours'] = ours.objects.all()
	return render(request, "blog/articles.html", data)

def post(request, article_id):
	current_views = articles.objects.get(pk=article_id).views
	new_views = current_views + 1
	articles.objects.filter(pk=article_id).update(views = new_views)
	data = {}
	data['article'] = articles.objects.get(pk=article_id)
	data['comments'] = comments.objects.filter(ref=article_id)
	data['ours'] = ours.objects.all()
	return render(request, "blog/post.html", data)