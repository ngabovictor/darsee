from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect
from django.http import HttpResponse, HttpResponseRedirect
from datetime import datetime
from django.utils import timezone
from django.core.mail import send_mail
from django.conf import settings
from home.models import ours, carousel, panels, quotes, videos
from blog.models import articles

# Create your views here.


def index(request):
	data = {}
	data['carousel'] = carousel.objects.all()
	data['ours'] = ours.objects.all()
	data['panels'] = panels.objects.all()
	data['quo'] = quotes.objects.all()
	data['articles'] = articles.objects.all().order_by('-date')
	#data['video'] = videos.objects.get(active = True)
	return render(request, 'home/home.html', data)