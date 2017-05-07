from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [

    url(r'^$', views.contact, name='contact'),
]

if settings.DEBUG:
	urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
	urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
