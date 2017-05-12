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
	data['num_comments'] = comments.objects.filter(ref=article_id).count()
	data['ours'] = ours.objects.all()
	return render(request, "blog/post.html", data)


def comment(request):
	if request.method == 'POST':
		name = request.POST['name']
		comment = request.POST['comment']
		refid = request.POST['refid']

		comments.objects.create(
			by = name,
			comment= comment,
			ref = refid,
			)
		new_comments = comments.objects.filter(ref = refid).count()
		articles.objects.filter(pk = refid).update(comments_count = new_comments)
	return HttpResponseRedirect(refid+'#comli')

def like(request):
	if request.method == 'POST':
		article = request.POST['articleId']
		current_likes = articles.objects.get(pk=article).likes
		new_likes = current_likes + 1
		articles.objects.filter(pk=article).update(likes = new_likes)

	return HttpResponseRedirect(article+'#comli')