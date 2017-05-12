from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_protect
from home.models import ours
from django.core.mail import send_mail

# Create your views here.

def contact(request):
	data = {}
	data['ours'] = ours.objects.all()
	return render(request, 'contact/contact.html', data)

def send(request):
	if request.method == 'POST':
		name = request.POST['name']
		email = request.POST['email']
		message = request.POST['message']

		send_mail(
	    'Message from web by %s'%email,
	    message,
	    'coredev2017@gmail.com',
	    ['nvichack@gmail.com'],
	    fail_silently=False,
	)
	return HttpResponse(' ')