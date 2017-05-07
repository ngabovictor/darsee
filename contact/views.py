from django.shortcuts import render
from home.models import ours

# Create your views here.

def contact(request):
	data = {}
	data['ours'] = ours.objects.all()
	return render(request, 'contact/contact.html', data)